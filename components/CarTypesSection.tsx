import { CarFront } from "lucide-react";

import { site } from "@/lib/site-data";

export default function CarTypesSection() {
  return (
    <section className="bg-paper py-12 md:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="grid gap-5 border-y border-steel-light py-8 md:grid-cols-[0.55fr_1.45fr] md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-signal">
              Автомобили
            </p>
            <h2 className="mt-2 text-2xl font-black text-carbon md:text-3xl">
              С какими группами авто работают
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {site.carTypes.map((type) => (
              <div
                key={type}
                className="inline-flex items-center gap-2 border border-steel-light bg-white px-4 py-3 text-sm font-black text-carbon"
              >
                <CarFront className="h-4 w-4 text-signal" aria-hidden="true" />
                {type}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
