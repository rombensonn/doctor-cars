import { Info, ReceiptText } from "lucide-react";

import { prices } from "@/lib/site-data";
import Reveal from "./Reveal";

export default function PriceSection() {
  return (
    <section className="bg-carbon py-16 text-white md:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[0.62fr_1.38fr]">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-signal">
            Стоимость
          </p>
          <h2 className="mt-4 text-4xl font-black leading-[1.02] md:text-5xl">
            Ориентиры по работам без мелкого шрифта
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-300">
            Здесь только цены, указанные в карточке сервиса. Итоговая сумма зависит
            от состояния автомобиля, объема работ и выбранных деталей.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="overflow-hidden border border-white/10 bg-white/5 cut-corner">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-white/8 px-5 py-4">
            <span className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">
              Сервисное табло
            </span>
            <ReceiptText className="h-5 w-5 text-signal" aria-hidden="true" />
          </div>

          <div className="divide-y divide-white/10">
            {prices.map((row, index) => (
              <div key={row.service} className="grid gap-5 px-5 py-6 md:grid-cols-[72px_1fr_auto] md:items-center">
                <div className="mono-tabular text-sm font-black uppercase tracking-[0.16em] text-signal">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-black leading-tight text-white">
                    {row.service}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
                    {row.includes}
                  </p>
                </div>
                <div className="w-fit whitespace-nowrap border border-signal/45 bg-signal/12 px-4 py-3 text-right">
                  <span className="block text-xs font-black uppercase tracking-[0.14em] text-slate-300">
                    цена от
                  </span>
                  <span className="mono-tabular block text-2xl font-black leading-none text-signal md:text-3xl">
                    {row.price.replace("от ", "")}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 border-t border-white/10 bg-signal/10 px-5 py-4 text-sm leading-6 text-slate-100">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-signal" />
            <p>
              Перед ремонтом мастер объясняет варианты и согласовывает работы. Новые
              цены или обещания “по фото” здесь не добавлены.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
