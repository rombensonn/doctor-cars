import { CalendarPlus, Phone } from "lucide-react";

import { site } from "@/lib/site-data";

export default function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-carbon/94 p-3 shadow-2xl shadow-black/30 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={site.telLinks[0]}
          className="inline-flex items-center justify-center gap-2 border border-white/18 bg-white/6 px-3 py-3 text-sm font-black text-white focus-industrial"
        >
          <Phone className="h-4 w-4 text-signal" aria-hidden="true" />
          Позвонить
        </a>
        <a
          href="#lead"
          className="inline-flex items-center justify-center gap-2 bg-signal px-3 py-3 text-sm font-black text-white focus-industrial"
        >
          <CalendarPlus className="h-4 w-4" aria-hidden="true" />
          Заявка
        </a>
      </div>
    </div>
  );
}
