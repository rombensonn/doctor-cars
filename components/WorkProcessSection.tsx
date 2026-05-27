import Image from "next/image";

import { assetPath } from "@/lib/asset-path";
import Reveal from "./Reveal";

const steps = [
  {
    title: "Заявка или звонок",
    text: "Клиент описывает проблему и оставляет контакты.",
  },
  {
    title: "Первичная консультация",
    text: "Мастер уточняет, что случилось с автомобилем, и подсказывает возможный порядок действий.",
  },
  {
    title: "Осмотр и диагностика",
    text: "Автомобиль смотрят на месте, оценивают объем работ.",
  },
  {
    title: "Согласование работ и деталей",
    text: "Клиенту объясняют варианты ремонта, детали и ориентировочную стоимость.",
  },
  {
    title: "Ремонт и выдача автомобиля",
    text: "После работ клиент забирает автомобиль и получает рекомендации по дальнейшему обслуживанию.",
  },
];

export default function WorkProcessSection() {
  return (
    <section id="process" className="bg-background py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-signal">
              Процесс
            </p>
            <h2 className="mt-4 text-4xl font-black leading-[1.02] text-carbon md:text-6xl">
              Пять контрольных точек до выдачи авто
            </h2>
          </div>
          <p className="text-lg leading-8 text-brand-muted">
            Этот блок нужен, чтобы снять главный страх: непонятные работы и
            неожиданная стоимость. Логика простая — сначала выяснить задачу,
            затем согласовать ремонт.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="relative min-h-[420px] overflow-hidden bg-carbon">
            <Image
              src={assetPath("/images/repair-process.png")}
              alt="Мастер и клиент обсуждают ремонт автомобиля у кузовного элемента"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 border border-white/15 bg-carbon/75 p-4 text-sm leading-6 text-slate-200 backdrop-blur cut-corner">
              Осмотр и согласование помогают заранее обсудить детали, подход и
              ориентировочную стоимость.
            </div>
          </Reveal>

          <div className="grid gap-3">
            {steps.map((step, index) => (
              <Reveal
                key={step.title}
                delay={index * 0.04}
                className="grid gap-4 border border-steel-light bg-white p-5 sm:grid-cols-[92px_1fr] sm:items-start"
              >
                <div className="mono-tabular text-4xl font-black leading-none text-signal">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-black text-carbon">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-brand-muted">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
