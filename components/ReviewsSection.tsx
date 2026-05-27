import { ExternalLink, Star } from "lucide-react";

import { reviewSummaries, site } from "@/lib/site-data";
import Reveal from "./Reveal";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="bg-carbon py-16 text-white md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal className="border border-white/10 bg-white/5 p-6 cut-corner md:p-8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-signal">
              Доверие
            </p>
            <h2 className="mt-4 text-4xl font-black leading-[1.02] md:text-5xl">
              {site.rating} на Яндекс Картах
            </h2>
            <div className="mt-5 flex gap-1 text-signal" aria-label="Рейтинг 5 из 5">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-6 w-6 fill-current" aria-hidden="true" />
              ))}
            </div>
            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="border border-white/10 bg-white/5 p-4">
                <div className="mono-tabular text-4xl font-black text-white">
                  {site.ratingCount}
                </div>
                <p className="mt-1 text-sm text-slate-400">оценка</p>
              </div>
              <div className="border border-white/10 bg-white/5 p-4">
                <div className="mono-tabular text-4xl font-black text-white">
                  {site.reviewCount}
                </div>
                <p className="mt-1 text-sm text-slate-400">отзывов</p>
              </div>
            </div>
            <p className="mt-6 leading-7 text-slate-300">
              Ниже — короткий пересказ частых смыслов из отзывов. Полные тексты
              лучше смотреть в карточке сервиса на Яндекс Картах.
            </p>
            <a
              href={site.yandexMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 bg-signal px-5 py-3 font-black text-white transition hover:bg-signal-dark focus-industrial"
            >
              Смотреть отзывы
              <ExternalLink className="h-5 w-5" aria-hidden="true" />
            </a>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {reviewSummaries.map((review, index) => (
              <Reveal
                key={review.title}
                delay={index * 0.04}
                className="border border-white/10 bg-white/[0.04] p-5"
              >
                <div className="mono-tabular text-xs font-black uppercase tracking-[0.16em] text-signal">
                  0{index + 1}
                </div>
                <h3 className="mt-4 text-xl font-black text-white">{review.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{review.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
