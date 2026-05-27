import AccidentRepairSection from "@/components/AccidentRepairSection";
import CarTypesSection from "@/components/CarTypesSection";
import ContactsSection from "@/components/ContactsSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LeadForm from "@/components/LeadForm";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import PriceSection from "@/components/PriceSection";
import ReviewsSection from "@/components/ReviewsSection";
import ServicesSection from "@/components/ServicesSection";
import TrustBar from "@/components/TrustBar";
import WhyChooseSection from "@/components/WhyChooseSection";
import WorkProcessSection from "@/components/WorkProcessSection";
import { site } from "@/lib/site-data";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "http://localhost:3000"
).replace(/\/$/, "");

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["AutoRepair", "LocalBusiness"],
  name: site.name,
  url: siteUrl,
  image: `${siteUrl}/images/workshop-hero-industrial.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. 8 Марта, 2",
    addressLocality: "Подольск",
    addressRegion: "Московская область",
    addressCountry: "RU",
  },
  telephone: site.phones,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "20:00",
    },
  ],
  paymentAccepted: site.payments.join(", "),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    ratingCount: site.ratingCount,
    reviewCount: site.reviewCount,
  },
  sameAs: [site.yandexMapsUrl],
  areaServed: ["Подольск", "Ново-Сырово"],
  makesOffer: [
    "кузовной ремонт",
    "покраска авто",
    "слесарные работы",
    "диагностика",
    "ремонт после ДТП",
    "ремонт бамперов",
    "антикор",
    "сервисное обслуживание",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="pb-20 md:pb-0">
        <Hero />
        <TrustBar />
        <ServicesSection />
        <PriceSection />
        <AccidentRepairSection />
        <WorkProcessSection />
        <WhyChooseSection />
        <ReviewsSection />
        <CarTypesSection />
        <section id="lead" className="premium-surface py-16 md:py-24">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 md:grid-cols-[0.78fr_1.22fr] md:px-6">
            <div className="border border-steel-light bg-white p-6 cut-corner md:p-8">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-signal">
                Заявка
              </p>
              <h2 className="mt-4 text-4xl font-black leading-[1.02] text-carbon md:text-5xl">
                Сформулируйте задачу для мастера
              </h2>
              <p className="mt-5 text-base leading-8 text-brand-muted">
                Укажите телефон, автомобиль и тип обращения. Если пока не знаете
                точную причину, просто напишите, что заметили: звук, ошибку,
                повреждение или поведение машины.
              </p>
              <div className="mt-7 grid gap-3 border-t border-steel-light pt-5 text-sm text-brand-muted">
                <div>
                  <span className="mono-tabular font-black text-signal">01</span>{" "}
                  заявка уходит в обработку
                </div>
                <div>
                  <span className="mono-tabular font-black text-signal">02</span>{" "}
                  мастер уточняет детали
                </div>
                <div>
                  <span className="mono-tabular font-black text-signal">03</span>{" "}
                  согласовываются работы и детали
                </div>
              </div>
            </div>
            <LeadForm variant="full" source="main-form" />
          </div>
        </section>
        <ContactsSection />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
