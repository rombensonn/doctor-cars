import Image from "next/image";
import { ArrowRight, CalendarClock, MapPin, Phone, Star, Wrench } from "lucide-react";

import { site } from "@/lib/site-data";
import LeadForm from "./LeadForm";
import Reveal from "./Reveal";

const stats = [
  { label: "рейтинг", value: "5,0", text: "на Яндекс Картах", icon: Star },
  { label: "оценок", value: "61", text: "и 36 отзывов", icon: Wrench },
  { label: "график", value: "10-20", text: "ежедневно", icon: CalendarClock },
];

export default function Hero() {
  return (
    <section className="relative min-h-[92svh] overflow-hidden bg-carbon pt-24 text-white">
      <Image
        src="/images/workshop-hero-industrial.png"
        alt="Индустриальный автосервис: мастер проверяет кузовной элемент автомобиля"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#070b10_0%,rgba(7,11,16,.94)_32%,rgba(7,11,16,.58)_67%,rgba(7,11,16,.72)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-carbon to-transparent" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-4 pb-28 pt-8 md:grid-cols-[1.08fr_0.92fr] md:px-6 md:pb-14 md:pt-14">
        <Reveal className="flex min-w-0 flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 border border-white/15 bg-white/8 px-3 py-2 text-sm font-black uppercase tracking-[0.14em] text-slate-100 backdrop-blur">
            <MapPin className="h-4 w-4 text-signal" aria-hidden="true" />
            Подольск / Ново-Сырово
          </div>

          <h1 className="mt-6 max-w-3xl break-words font-black text-white [overflow-wrap:anywhere]">
            <span className="block text-[2.35rem] leading-[1.03] sm:text-5xl md:text-6xl lg:text-[4rem]">
              Кузовной и слесарный ремонт
            </span>
            <span className="mt-3 block max-w-2xl text-[1.45rem] leading-[1.16] text-slate-200 sm:text-3xl md:text-[2.4rem] lg:text-[2.65rem]">
              в Подольске с понятным согласованием работ
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
            Автосервис в Подольске для ремонта после ДТП, диагностики,
            обслуживания и согласованной замены деталей. Сначала разбираемся в
            задаче, объясняем варианты, затем приступаем к работе.
          </p>

          <div className="mt-8 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
            {stats.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="border border-white/12 bg-white/8 p-3 backdrop-blur cut-corner sm:p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                      {item.label}
                    </span>
                    <Icon className="h-4 w-4 text-signal" aria-hidden="true" />
                  </div>
                  <div className="mono-tabular mt-2 text-2xl font-black text-white sm:text-3xl">
                    {item.value}
                  </div>
                  <div className="mt-1 text-sm text-slate-300">{item.text}</div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#lead"
              className="inline-flex items-center justify-center gap-2 bg-signal px-6 py-4 text-base font-black text-white shadow-xl shadow-signal/20 transition hover:bg-signal-dark focus-industrial"
            >
              Записаться на ремонт
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={site.telLinks[0]}
              className="inline-flex items-center justify-center gap-2 border border-white/25 bg-white/8 px-6 py-4 text-base font-black text-white backdrop-blur transition hover:border-signal hover:bg-white/12 focus-industrial"
            >
              <Phone className="h-5 w-5 text-signal" aria-hidden="true" />
              Позвонить
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="min-w-0 self-center">
          <div className="mb-3 flex flex-col items-start gap-2 text-sm font-black uppercase tracking-[0.14em] text-slate-300 sm:flex-row sm:items-center sm:justify-between">
            <span>Быстрая заявка</span>
            <span className="mono-tabular text-signal">10:00-20:00</span>
          </div>
          <LeadForm variant="hero" source="hero" />
        </Reveal>
      </div>
    </section>
  );
}
