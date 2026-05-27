import { CarFront, Gauge, Paintbrush, PhoneCall } from "lucide-react";

import Reveal from "./Reveal";

const scenarios = [
  {
    title: "После ДТП",
    text: "Понять объем кузовного ремонта, замену деталей и покраску.",
    icon: CarFront,
  },
  {
    title: "Неясная неисправность",
    text: "Начать с диагностики и спокойно разобрать варианты ремонта.",
    icon: Gauge,
  },
  {
    title: "Покраска детали",
    text: "Обсудить подготовку, подбор цвета и стоимость от 10000 ₽.",
    icon: Paintbrush,
  },
  {
    title: "Нужна консультация",
    text: "Сначала позвонить, описать задачу и выбрать удобное время.",
    icon: PhoneCall,
  },
];

export default function TrustBar() {
  return (
    <section className="bg-carbon text-white">
      <div className="mx-auto grid w-full max-w-7xl border-x border-white/10 md:grid-cols-[0.75fr_1.25fr]">
        <div className="border-b border-white/10 p-6 md:border-b-0 md:border-r md:p-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-signal">
            Что можно решить сейчас
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
            Быстрый вход в ремонт без длинного брифа
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {scenarios.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.title}
                delay={index * 0.04}
                className="border-b border-white/10 p-6 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0"
              >
                <Icon className="h-7 w-7 text-signal" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
