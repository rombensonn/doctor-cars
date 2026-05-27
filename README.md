# Доктор карс - лендинг автосервиса

Одностраничный сайт для автосервиса «Доктор карс» в Подольске: кузовной ремонт, покраска, слесарные работы, диагностика, обслуживание и запись на ремонт.

## Стек

- Next.js App Router, TypeScript, Tailwind CSS
- Framer Motion для мягких появлений блоков
- React Hook Form + Zod для форм
- Route Handler `POST /api/lead`
- SQLite через `better-sqlite3`
- Telegram Bot API для уведомлений

## Запуск

```bash
npm install
npm run dev
```

Локально сайт будет доступен на `http://localhost:3000`.

Production:

```bash
npm run build
npm run start
```

## Переменные окружения

Создайте `.env.local` по примеру `.env.example`:

```env
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
SITE_URL=https://example.ru
NEXT_PUBLIC_SITE_URL=https://example.ru
```

Если Telegram-переменные не заданы, заявка сохраняется в SQLite, ошибка пишется в серверный лог, а пользователь видит нейтральное сообщение с просьбой позвонить.

## Telegram

1. Создайте бота через `@BotFather`.
2. Скопируйте token в `TELEGRAM_BOT_TOKEN`.
3. Добавьте бота в нужный чат или напишите ему напрямую.
4. Получите `chat_id` через `getUpdates` или через отдельного бота для определения ID.
5. Укажите ID в `TELEGRAM_CHAT_ID`.
6. Перезапустите Node.js процесс после изменения `.env.local`.

## Хранение заявок

SQLite-файл создается автоматически:

```text
data/leads.sqlite
```

Таблицы:

- `leads` - заявки с сайта и статус Telegram-доставки
- `lead_attempts` - попытки отправки для rate-limit

## Основные файлы

```text
app/
  api/lead/route.ts
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts
  privacy/page.tsx
  personal-data/page.tsx
components/
  Header.tsx
  Hero.tsx
  TrustBar.tsx
  ServicesSection.tsx
  PriceSection.tsx
  AccidentRepairSection.tsx
  WorkProcessSection.tsx
  WhyChooseSection.tsx
  ReviewsSection.tsx
  CarTypesSection.tsx
  LeadForm.tsx
  ContactsSection.tsx
  FinalCTA.tsx
  Footer.tsx
  MobileStickyCTA.tsx
lib/
  lead-schema.ts
  rate-limit.ts
  sqlite.ts
  telegram.ts
  site-data.ts
public/images/
  hero-workshop.png
  body-repair.png
  diagnostics.png
```

## Перед публикацией

- Заменить `SITE_URL` и `NEXT_PUBLIC_SITE_URL` на реальный домен.
- Заполнить `TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID`.
- Заменить юридические заглушки `/privacy` и `/personal-data` на финальные документы.
- Проверить телефон, адрес, график и ссылку на Яндекс Карты.
- При наличии реальных фотографий сервиса заменить иллюстративные изображения в `public/images`.

## VPS

Минимальный вариант запуска:

```bash
npm ci
npm run build
npm run start
```

Для постоянного процесса можно использовать PM2:

```bash
pm2 start npm --name doctor-cars -- run start
pm2 save
```

Checklist:

- `npm run lint`
- `npm run typecheck`
- `npm run build`
- тестовая отправка формы
- проверка `/robots.txt` и `/sitemap.xml`
- проверка мобильной версии и кликабельных телефонов
