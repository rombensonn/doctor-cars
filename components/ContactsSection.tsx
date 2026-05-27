import Image from "next/image";
import { CreditCard, ExternalLink, MapPin, Phone, Route } from "lucide-react";

import { assetPath } from "@/lib/asset-path";
import { site } from "@/lib/site-data";
import Reveal from "./Reveal";

export default function ContactsSection() {
  return (
    <section id="contacts" className="bg-background py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <Reveal className="relative min-h-[520px] overflow-hidden bg-carbon">
            <Image
              src={assetPath("/images/contact-workshop-front.png")}
              alt="Нейтральный вид современного автосервисного здания и парковки"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 border border-white/15 bg-carbon/80 p-5 text-white backdrop-blur cut-corner">
              <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-signal">
                <Route className="h-5 w-5" aria-hidden="true" />
                Яндекс Карты
              </div>
              <p className="mt-3 text-2xl font-black">ул. 8 Марта, 2</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                микрорайон Ново-Сырово, Подольск. В карточке сервиса указаны
                парковка и предварительная запись.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="border border-steel-light bg-white p-6 md:p-8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-signal">
              Контакты
            </p>
            <h2 className="mt-4 text-4xl font-black leading-[1.02] text-carbon md:text-5xl">
              Доктор карс
            </h2>

            <div className="mt-7 grid gap-3">
              <div className="border border-steel-light bg-paper p-4">
                <div className="flex gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-signal" />
                  <div>
                    <h3 className="font-black text-carbon">Адрес</h3>
                    <p className="mt-1 leading-7 text-brand-muted">{site.address}</p>
                  </div>
                </div>
              </div>

              <div className="border border-steel-light bg-paper p-4">
                <div className="flex gap-3">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-signal" />
                  <div>
                    <h3 className="font-black text-carbon">Телефоны</h3>
                    <div className="mt-2 grid gap-2">
                      {site.phones.map((phone, index) => (
                        <a
                          key={phone}
                          href={site.telLinks[index]}
                          className="mono-tabular font-black text-brand-blue transition hover:text-signal focus-industrial"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="border border-steel-light bg-paper p-4">
                  <h3 className="font-black text-carbon">График</h3>
                  <p className="mono-tabular mt-1 text-brand-muted">ежедневно 10:00-20:00</p>
                </div>
                <div className="border border-steel-light bg-paper p-4">
                  <div className="flex gap-3">
                    <CreditCard className="mt-1 h-5 w-5 shrink-0 text-signal" />
                    <div>
                      <h3 className="font-black text-carbon">Оплата</h3>
                      <p className="mt-1 text-sm leading-6 text-brand-muted">
                        наличные, карта, перевод, онлайн, QR, СБП.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <a
                href={site.yandexMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-carbon px-5 py-3 font-black text-white transition hover:bg-carbon-3 focus-industrial"
              >
                Построить маршрут
                <ExternalLink className="h-5 w-5 text-signal" aria-hidden="true" />
              </a>
              <a
                href={site.telLinks[0]}
                className="inline-flex items-center justify-center gap-2 border border-carbon px-5 py-3 font-black text-carbon transition hover:bg-carbon hover:text-white focus-industrial"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Позвонить
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
