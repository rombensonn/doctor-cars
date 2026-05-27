"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { leadFormSchema, type LeadFormValues } from "@/lib/lead-schema";
import { serviceTypes } from "@/lib/site-data";

type LeadFormProps = {
  variant: "hero" | "full";
  source: string;
};

const inputClass =
  "w-full border border-steel-light bg-white px-4 py-3 text-brand-graphite outline-none transition placeholder:text-slate-400 focus:border-signal focus:ring-4 focus:ring-signal/15";
const labelClass = "text-sm font-black text-brand-graphite";
const errorClass = "mt-1 text-sm text-red-600";
const isStaticSite = process.env.NEXT_PUBLIC_STATIC_SITE === "true";

export default function LeadForm({ variant, source }: LeadFormProps) {
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const isHero = variant === "hero";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      car: "",
      serviceType: isHero ? "другое" : undefined,
      preferredTime: "",
      message: "",
      consent: false,
      source,
      createdAt: "",
      honeypot: "",
    },
  });

  async function onSubmit(values: LeadFormValues) {
    setStatus("idle");
    setServerMessage(null);

    if (isStaticSite) {
      setStatus("error");
      setServerMessage(
        "На публичной preview-версии GitHub Pages серверная отправка заявок недоступна. Пожалуйста, позвоните по телефону."
      );
      return;
    }

    const response = await fetch("/api/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...values,
        source,
        createdAt: new Date().toISOString(),
      }),
    });

    const result = (await response.json().catch(() => null)) as
      | { success?: boolean; message?: string }
      | null;

    if (response.ok && result?.success) {
      setStatus("success");
      setServerMessage("Заявка отправлена. С вами свяжутся для уточнения деталей.");
      reset({
        name: "",
        phone: "",
        car: "",
        serviceType: isHero ? "другое" : undefined,
        preferredTime: "",
        message: "",
        consent: false,
        source,
        createdAt: "",
        honeypot: "",
      });
      return;
    }

    setStatus("error");
    setServerMessage(
      result?.message || "Не удалось отправить заявку. Попробуйте позвонить по телефону."
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={
        isHero
          ? "border border-white/12 bg-carbon-2/92 p-4 text-white shadow-2xl shadow-black/30 backdrop-blur-xl cut-corner md:p-5"
          : "border border-steel-light bg-white p-4 shadow-xl shadow-slate-900/8 cut-corner md:p-6"
      }
      noValidate
    >
      <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
        <label>
          Не заполняйте это поле
          <input tabIndex={-1} autoComplete="off" {...register("honeypot")} />
        </label>
      </div>

      <input type="hidden" {...register("source")} value={source} />
      <input type="hidden" {...register("createdAt")} />
      {isHero ? <input type="hidden" {...register("serviceType")} /> : null}

      <div className={isHero ? "grid gap-3" : "grid gap-4 md:grid-cols-2"}>
        <div>
          <label className={isHero ? "text-sm font-black text-slate-100" : labelClass} htmlFor={`${source}-name`}>
            Имя
          </label>
          <input
            id={`${source}-name`}
            className={isHero ? `${inputClass} border-white/12 bg-white/8 text-white placeholder:text-slate-500` : inputClass}
            placeholder="Как к вам обращаться"
            autoComplete="name"
            {...register("name")}
          />
          {errors.name ? <p className={errorClass}>{errors.name.message}</p> : null}
        </div>

        <div>
          <label className={isHero ? "text-sm font-black text-slate-100" : labelClass} htmlFor={`${source}-phone`}>
            Телефон *
          </label>
          <input
            id={`${source}-phone`}
            className={isHero ? `${inputClass} border-white/12 bg-white/8 text-white placeholder:text-slate-500` : inputClass}
            placeholder="+7 (___) ___-__-__"
            autoComplete="tel"
            inputMode="tel"
            {...register("phone")}
          />
          {errors.phone ? <p className={errorClass}>{errors.phone.message}</p> : null}
        </div>

        {!isHero ? (
          <>
            <div>
              <label className={labelClass} htmlFor={`${source}-car`}>
                Марка и модель
              </label>
              <input
                id={`${source}-car`}
                className={inputClass}
                placeholder="Например: Kia Rio, 2018"
                autoComplete="off"
                {...register("car")}
              />
              {errors.car ? <p className={errorClass}>{errors.car.message}</p> : null}
            </div>

            <div>
              <label className={labelClass} htmlFor={`${source}-service`}>
                Тип обращения *
              </label>
              <select
                id={`${source}-service`}
                className={inputClass}
                {...register("serviceType")}
              >
                <option value="">Выберите тип</option>
                {serviceTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.serviceType ? (
                <p className={errorClass}>{errors.serviceType.message}</p>
              ) : null}
            </div>

            <div className="md:col-span-2">
              <label className={labelClass} htmlFor={`${source}-time`}>
                Удобное время для связи
              </label>
              <input
                id={`${source}-time`}
                className={inputClass}
                placeholder="Например: сегодня после 16:00"
                autoComplete="off"
                {...register("preferredTime")}
              />
              {errors.preferredTime ? (
                <p className={errorClass}>{errors.preferredTime.message}</p>
              ) : null}
            </div>
          </>
        ) : null}

        <div className={!isHero ? "md:col-span-2" : undefined}>
          <label className={isHero ? "text-sm font-black text-slate-100" : labelClass} htmlFor={`${source}-message`}>
            {isHero ? "Что нужно сделать с автомобилем" : "Комментарий"}
          </label>
          <textarea
            id={`${source}-message`}
            className={`${isHero ? `${inputClass} border-white/12 bg-white/8 text-white placeholder:text-slate-500` : inputClass} min-h-28 resize-y`}
            placeholder={
              isHero
                ? "Например: ремонт бампера, диагностика, покраска крыла"
                : "Кратко опишите проблему, повреждение или нужные работы"
            }
            {...register("message")}
          />
          {errors.message ? <p className={errorClass}>{errors.message.message}</p> : null}
        </div>
      </div>

      <label className={`mt-4 flex gap-3 text-sm leading-6 ${isHero ? "text-slate-300" : "text-brand-muted"}`}>
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 border-steel-light text-signal focus:ring-signal"
          {...register("consent")}
        />
        <span>
          Согласен на обработку персональных данных.{" "}
          <Link href="/personal-data" className={isHero ? "font-black text-white underline decoration-signal underline-offset-4" : "font-black text-brand-blue"}>
            Подробнее
          </Link>
        </span>
      </label>
      {errors.consent ? <p className={errorClass}>{errors.consent.message}</p> : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 bg-signal px-5 py-3 text-base font-black text-white shadow-lg shadow-signal/20 transition hover:bg-signal-dark focus-industrial disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            Отправляем
          </>
        ) : (
          <>
            {isHero ? "Получить консультацию" : "Отправить заявку"}
            <Send className="h-5 w-5" aria-hidden="true" />
          </>
        )}
      </button>

      {serverMessage ? (
        <div
          className={`mt-4 flex gap-2 rounded-md border px-3 py-3 text-sm ${
            status === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-800"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
          role="status"
        >
          {status === "success" ? (
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          ) : (
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          )}
          <span>{serverMessage}</span>
        </div>
      ) : null}

      <p className={`mt-3 text-xs leading-5 ${isHero ? "text-slate-400" : "text-brand-muted"}`}>
        Можно также позвонить:{" "}
        <a href="tel:+74952333928" className={isHero ? "mono-tabular font-black text-white" : "mono-tabular font-black text-brand-blue"}>
          +7 (495) 233-39-28
        </a>
      </p>
    </form>
  );
}
