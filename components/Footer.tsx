import Link from "next/link";

import { site } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-carbon py-8 text-sm text-slate-400">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <p className="text-base font-black text-white">Доктор карс</p>
          <p className="mt-1">{site.address}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/privacy" className="transition hover:text-white focus-industrial">
            Политика конфиденциальности
          </Link>
          <Link href="/personal-data" className="transition hover:text-white focus-industrial">
            Персональные данные
          </Link>
          <a
            href={site.yandexMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white focus-industrial"
          >
            Яндекс Карты
          </a>
        </div>
      </div>
    </footer>
  );
}
