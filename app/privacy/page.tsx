import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-12 text-brand-graphite">
      <div className="mx-auto max-w-3xl rounded-lg border border-brand-line bg-white p-6 md:p-10">
        <Link href="/" className="text-sm font-semibold text-brand-blue">
          На главную
        </Link>
        <h1 className="mt-6 text-3xl font-bold">Политика конфиденциальности</h1>
        <p className="mt-4 leading-7 text-brand-muted">
          Это базовая страница-заглушка для политики конфиденциальности сайта
          автосервиса «Доктор карс». Перед публикацией замените текст на
          финальный юридический документ.
        </p>
        <p className="mt-4 leading-7 text-brand-muted">
          Через формы сайта могут передаваться имя, телефон, данные об
          автомобиле и описание обращения. Эти данные используются для связи с
          клиентом и уточнения деталей ремонта.
        </p>
      </div>
    </main>
  );
}
