import Image from "next/image";
import { ArrowRight, CheckCircle2, ClipboardCheck, Paintbrush, ShieldCheck } from "lucide-react";

import { assetPath } from "@/lib/asset-path";
import Reveal from "./Reveal";

const works = [
  "дефектовка повреждений после осмотра",
  "ремонт и замена бамперов",
  "рихтовка крыла, капота, двери и других элементов",
  "замена поврежденных деталей по согласованию",
  "подбор краски в цвет и покраска деталей",
  "сварочные работы и антикор",
];

const stages = [
  {
    title: "Осмотр",
    text: "Понимаем, какие элементы пострадали и что нужно уточнить перед расчетом.",
    icon: ClipboardCheck,
  },
  {
    title: "Согласование",
    text: "Обсуждаем ремонт, замену деталей, варианты запчастей и ориентир по стоимости.",
    icon: ShieldCheck,
  },
  {
    title: "Кузов и цвет",
    text: "Переходим к кузовным работам, подготовке и покраске согласованных деталей.",
    icon: Paintbrush,
  },
];

export default function AccidentRepairSection() {
  return (
    <section className="overflow-hidden bg-paper py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="relative bg-carbon text-white cut-corner">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal className="relative min-h-[420px] overflow-hidden lg:min-h-[720px]">
              <Image
                src={assetPath("/images/paint-bay-detail.png")}
                alt="Подготовка кузовной детали к ремонту и покраске"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon/80 via-carbon/15 to-transparent" />
              <div className="absolute left-5 top-5 border border-white/15 bg-carbon/75 px-3 py-2 backdrop-blur">
                <span className="mono-tabular text-xs font-black uppercase tracking-[0.16em] text-signal">
                  Body / Paint
                </span>
              </div>
              <div className="absolute bottom-5 left-5 right-5 border border-white/15 bg-carbon/80 p-5 backdrop-blur cut-corner">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-signal">
                  Сильное направление
                </p>
                <p className="mt-2 text-2xl font-black leading-tight">
                  Ремонт после ДТП, бамперы, крылья, капоты и подбор цвета.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="flex flex-col justify-center p-6 md:p-10 lg:p-12">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-signal">
                Ремонт после ДТП
              </p>
              <h2 className="mt-4 max-w-2xl text-4xl font-black leading-[1.02] md:text-6xl">
                Сначала понятный план, потом кузовные работы
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
                В сервисе выполняют кузовной ремонт, замену поврежденных элементов,
                ремонт бамперов, подготовку и покраску деталей. По отзывам клиенты
                отдельно отмечают подбор краски в цвет и выполнение работ в срок.
              </p>

              <div className="mt-8 grid gap-3 md:grid-cols-3">
                {stages.map((stage) => {
                  const Icon = stage.icon;
                  return (
                    <div key={stage.title} className="border border-white/12 bg-white/6 p-4">
                      <Icon className="h-5 w-5 text-signal" aria-hidden="true" />
                      <h3 className="mt-3 font-black text-white">{stage.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{stage.text}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {works.map((work) => (
                  <div key={work} className="flex gap-3 text-sm leading-6 text-slate-100">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-signal" aria-hidden="true" />
                    <span>{work}</span>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#lead"
                  className="inline-flex items-center justify-center gap-2 bg-signal px-5 py-3 font-black text-white shadow-xl shadow-signal/20 transition hover:bg-signal-dark focus-industrial"
                >
                  Описать повреждение
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="#process"
                  className="inline-flex items-center justify-center gap-2 border border-white/18 px-5 py-3 font-black text-white transition hover:border-signal hover:bg-white/8 focus-industrial"
                >
                  Как согласуются работы
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
