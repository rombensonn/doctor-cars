import type { Metadata } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

const jetBrains = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "http://localhost:3000"
).replace(/\/$/, "");

const title = "Доктор карс - автосервис в Подольске, кузовной ремонт и покраска";
const description =
  "Автосервис Доктор карс в Подольске: кузовной ремонт, покраска, слесарные работы, диагностика и обслуживание авто. Рейтинг 5,0 на Яндекс Картах. Работаем ежедневно с 10:00 до 20:00.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "автосервис Подольск",
    "кузовной ремонт Подольск",
    "покраска авто Подольск",
    "ремонт после ДТП Подольск",
    "слесарные работы Подольск",
    "ремонт бамперов Подольск",
    "автосервис Ново-Сырово",
    "Доктор карс Подольск",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName: "Доктор карс",
    title,
    description,
    images: [
      {
        url: "/images/workshop-hero-industrial.png",
        width: 1680,
        height: 900,
        alt: "Индустриальный автосервис и кузовной ремонт автомобиля",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${jetBrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
