import Image from "next/image";
import { MessageSquareText, Phone } from "lucide-react";

import { assetPath } from "@/lib/asset-path";
import { site } from "@/lib/site-data";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-carbon py-16 text-white md:py-24">
      <Image
        src={assetPath("/images/final-cta-tools.png")}
        alt="Инструменты и кузовная деталь на рабочем столе автосервиса"
        fill
        sizes="100vw"
        className="object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#070b10_0%,rgba(7,11,16,.92)_48%,rgba(7,11,16,.52)_100%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-signal">
            Следующий шаг
          </p>
          <h2 className="mt-4 text-4xl font-black leading-[1.02] md:text-6xl">
            Не уверены, с чего начать ремонт?
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-200">
            Опишите проблему: повреждение, звук, ошибку, ТО или вопрос по
            запчастям. Мастер свяжется с вами, уточнит детали и подскажет, когда
            удобнее подъехать.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#lead"
              className="inline-flex items-center justify-center gap-2 bg-signal px-6 py-4 text-base font-black text-white transition hover:bg-signal-dark focus-industrial"
            >
              <MessageSquareText className="h-5 w-5" aria-hidden="true" />
              Оставить заявку
            </a>
            <a
              href={site.telLinks[0]}
              className="inline-flex items-center justify-center gap-2 border border-white/30 bg-white/8 px-6 py-4 text-base font-black text-white transition hover:border-signal hover:bg-white/12 focus-industrial"
            >
              <Phone className="h-5 w-5 text-signal" aria-hidden="true" />
              Позвонить
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
