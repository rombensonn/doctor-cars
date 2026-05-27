import type { StoredLeadInput } from "./sqlite";

type TelegramResult =
  | { ok: true }
  | {
      ok: false;
      error: string;
    };

function line(label: string, value?: string) {
  return `${label}: ${value && value.trim() ? value.trim() : "не указано"}`;
}

export async function sendTelegramLead(lead: StoredLeadInput): Promise<TelegramResult> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return {
      ok: false,
      error: "TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not configured",
    };
  }

  const text = [
    "Новая заявка с сайта «Доктор карс»",
    "",
    line("Имя", lead.name),
    line("Телефон", lead.phone),
    line("Автомобиль", lead.car),
    line("Тип обращения", lead.serviceType),
    line("Удобное время", lead.preferredTime),
    line("Комментарий", lead.message),
    line("Источник", lead.source || "сайт"),
    line("Дата", lead.createdAt),
  ].join("\n");

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          disable_web_page_preview: true,
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      return {
        ok: false,
        error: `Telegram API ${response.status}: ${errorText.slice(0, 500)}`,
      };
    }

    return { ok: true };
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Unknown Telegram error",
    };
  }
}
