import { Car, MessageSquareText, PackageCheck, SearchCheck, Wrench } from "lucide-react";

import Reveal from "./Reveal";

const items = [
  {
    title: "Быстро находят причину",
    text: "В отзывах отмечают диагностику и понятное выявление неисправности.",
    icon: SearchCheck,
  },
  {
    title: "Объясняют по машине",
    text: "Мастера рассказывают о плюсах и минусах авто и дают рекомендации.",
    icon: MessageSquareText,
  },
  {
    title: "Помогают с деталями",
    text: "Можно обсудить подбор, заказ и согласование вариантов до ремонта.",
    icon: PackageCheck,
  },
  {
    title: "Кузов и покраска",
    text: "Отзывы часто упоминают ДТП, замену деталей, покраску и подбор цвета.",
    icon: Wrench,
  },
  {
    title: "Разные автомобили",
    text: "Китайские, корейские, японские, отечественные, европейские и импортные.",
    icon: Car,
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-paper py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="border border-steel-light bg-white p-6 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-signal">
                Почему обращаются
              </p>
              <h2 className="mt-4 text-4xl font-black leading-[1.02] text-carbon md:text-5xl">
                Не “магия сервиса”, а понятные действия
              </h2>
              <p className="mt-5 text-base leading-8 text-brand-muted">
                По отзывам клиенты часто отмечают, что им объясняют работы и не
                навязывают лишнее. Поэтому визуально блок собран как набор
                проверяемых причин, а не как рекламные лозунги.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden bg-steel-light sm:grid-cols-2">
              {items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal
                    key={item.title}
                    delay={index * 0.04}
                    className="bg-paper p-5"
                  >
                    <Icon className="h-7 w-7 text-signal" aria-hidden="true" />
                    <h3 className="mt-4 text-xl font-black text-carbon">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-brand-muted">
                      {item.text}
                    </p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
