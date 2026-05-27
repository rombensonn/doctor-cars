import Image from "next/image";
import { ArrowUpRight, Check, Gauge, PanelsTopLeft } from "lucide-react";

import { serviceCategories } from "@/lib/site-data";
import Reveal from "./Reveal";

const images = [
  "/images/paint-bay-detail.png",
  "/images/diagnostics-tablet.png",
  "/images/final-cta-tools.png",
  "/images/repair-process.png",
];

const labels = ["Кузов", "Слесарка", "ТО", "Детали"];

export default function ServicesSection() {
  const [primary, ...secondary] = serviceCategories;

  return (
    <section id="services" className="bg-paper py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-signal">
              Направления работ
            </p>
            <h2 className="mt-4 text-4xl font-black leading-[1.02] text-carbon md:text-6xl">
              Не каталог услуг, а понятная карта ремонта
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="max-w-2xl text-lg leading-8 text-brand-muted lg:ml-auto">
              Вынесли задачи в четыре рабочих направления: кузов, слесарные работы,
              обслуживание и запчасти. Так проще быстро понять, куда относится проблема
              и что обсудить с мастером до начала ремонта.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="group relative overflow-hidden bg-carbon text-white cut-corner lg:min-h-[560px]">
            <div className="relative h-72 overflow-hidden lg:absolute lg:inset-0 lg:h-auto">
              <Image
                src={images[0]}
                alt={`${primary.title}: подготовка кузовной детали к ремонту`}
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover opacity-95 transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/55 to-transparent" />
              <div className="absolute inset-x-0 top-0 flex items-center justify-between border-b border-white/15 bg-carbon/75 px-5 py-4 backdrop-blur">
                <span className="mono-tabular text-xs font-black uppercase tracking-[0.18em] text-signal">
                  Цех 01
                </span>
                <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-slate-300">
                  <PanelsTopLeft className="h-4 w-4 text-signal" aria-hidden="true" />
                  {labels[0]}
                </span>
              </div>
            </div>
            <div className="relative p-5 md:p-8 lg:absolute lg:bottom-0 lg:left-0 lg:right-0">
              <h3 className="max-w-xl text-3xl font-black leading-tight md:text-5xl">
                {primary.title}
              </h3>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200">
                {primary.description}
              </p>
              <div className="mt-7 grid gap-2 sm:grid-cols-2">
                {primary.works.slice(0, 6).map((work) => (
                  <div key={work} className="flex gap-2 text-sm leading-6 text-slate-100">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
                    <span>{work}</span>
                  </div>
                ))}
              </div>
              <a
                href="#lead"
                className="mt-8 inline-flex items-center gap-2 bg-signal px-5 py-3 font-black text-white shadow-xl shadow-signal/20 transition hover:bg-signal-dark focus-industrial"
              >
                Уточнить стоимость
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {secondary.map((category, index) => (
              <Reveal
                key={category.title}
                delay={(index + 1) * 0.05}
                className="group grid overflow-hidden border border-steel-light bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-slate-900/10 sm:grid-cols-[180px_1fr]"
              >
                <div className="relative min-h-[180px] bg-carbon">
                  <Image
                    src={images[index + 1]}
                    alt={`${category.title}: направление работ автосервиса`}
                    fill
                    sizes="(min-width: 640px) 180px, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon/55 to-transparent" />
                  <div className="absolute bottom-3 left-3 mono-tabular text-xs font-black uppercase tracking-[0.16em] text-signal">
                    0{index + 2}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-black uppercase tracking-[0.16em] text-signal">
                      {labels[index + 1]}
                    </span>
                    <Gauge className="h-4 w-4 text-signal" aria-hidden="true" />
                  </div>
                  <h3 className="mt-3 text-2xl font-black leading-tight text-carbon">
                    {category.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-brand-muted">
                    {category.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.works.slice(0, 4).map((work) => (
                      <span
                        key={work}
                        className="border border-steel-light bg-paper px-2.5 py-1 text-xs font-bold text-carbon"
                      >
                        {work}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#lead"
                    className="mt-5 inline-flex items-center gap-2 border-b-2 border-signal pb-1 text-sm font-black uppercase tracking-[0.08em] text-carbon transition hover:text-signal focus-industrial"
                  >
                    Уточнить стоимость
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
