import { NextRequest, NextResponse } from "next/server";

import { leadFormSchema } from "@/lib/lead-schema";
import { checkRateLimit } from "@/lib/rate-limit";
import { saveLead, updateLeadStatus } from "@/lib/sqlite";
import { sendTelegramLead } from "@/lib/telegram";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const fallbackMessage = "Не удалось отправить заявку. Попробуйте позвонить по телефону.";

function getClientIp(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  return forwarded?.split(",")[0]?.trim() || realIp || "unknown";
}

function fail(status = 400) {
  return NextResponse.json(
    {
      success: false,
      message: fallbackMessage,
    },
    { status }
  );
}

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json().catch(() => null);

    if (!payload || typeof payload !== "object") {
      return fail(400);
    }

    if (
      "honeypot" in payload &&
      typeof payload.honeypot === "string" &&
      payload.honeypot.trim().length > 0
    ) {
      return NextResponse.json({
        success: true,
        message: "Заявка отправлена",
      });
    }

    const ip = getClientIp(request);

    if (!checkRateLimit(ip)) {
      return fail(429);
    }

    const parsed = leadFormSchema.safeParse(payload);

    if (!parsed.success) {
      console.warn("Lead validation failed", parsed.error.flatten().fieldErrors);
      return fail(400);
    }

    const lead = {
      ...parsed.data,
      createdAt: new Date().toISOString(),
      source: parsed.data.source || "сайт",
      ip,
      userAgent: request.headers.get("user-agent") || undefined,
    };

    const id = saveLead(lead);
    const telegram = await sendTelegramLead(lead);

    if (!telegram.ok) {
      updateLeadStatus(id, "telegram_failed", telegram.error);
      console.error("Lead saved, but Telegram delivery failed", telegram.error);
      return fail(502);
    }

    updateLeadStatus(id, "telegram_sent");

    return NextResponse.json({
      success: true,
      message: "Заявка отправлена",
    });
  } catch (error) {
    console.error("Lead route failed", error);
    return fail(500);
  }
}
