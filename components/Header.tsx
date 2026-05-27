import { MapPin, Phone } from "lucide-react";

import { navItems, site } from "@/lib/site-data";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 md:px-6">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 border border-white/10 bg-carbon/88 px-3 text-white shadow-2xl shadow-black/25 backdrop-blur-xl cut-corner md:px-5">
        <a href="#" className="flex min-w-0 items-center gap-3" aria-label="Доктор карс">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-signal text-lg font-black text-white">
            ДК
          </span>
          <span className="min-w-0">
            <span className="block text-base font-black">Доктор карс</span>
            <span className="hidden items-center gap-1 text-xs text-slate-300 sm:flex">
              <MapPin className="h-3.5 w-3.5 text-signal" aria-hidden="true" />
              Подольск, Ново-Сырово
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 text-sm font-bold text-slate-300 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 transition hover:bg-white/8 hover:text-white focus-industrial"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.telLinks[0]}
            className="hidden items-center gap-2 border border-white/15 bg-white/6 px-3 py-2 text-sm font-black text-white transition hover:border-signal hover:bg-signal/12 sm:inline-flex focus-industrial"
          >
            <Phone className="h-4 w-4 text-signal" aria-hidden="true" />
            <span className="mono-tabular">+7 (495) 233-39-28</span>
          </a>
          <a
            href="#lead"
            className="hidden bg-signal px-4 py-2 text-sm font-black text-white shadow-lg shadow-signal/20 transition hover:bg-signal-dark sm:inline-flex focus-industrial"
          >
            Записаться
          </a>
        </div>
      </div>
    </header>
  );
}
