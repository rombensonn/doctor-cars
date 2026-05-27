import Link from "next/link";

export default function PersonalDataPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-12 text-brand-graphite">
      <div className="mx-auto max-w-3xl rounded-lg border border-brand-line bg-white p-6 md:p-10">
        <Link href="/" className="text-sm font-semibold text-brand-blue">
          На главную
        </Link>
        <h1 className="mt-6 text-3xl font-bold">
          Согласие на обработку персональных данных
        </h1>
        <p className="mt-4 leading-7 text-brand-muted">
          Это базовая страница-заглушка. Перед запуском сайта замените ее на
          согласие, подготовленное под фактического оператора персональных
          данных и используемые процессы обработки.
        </p>
        <p className="mt-4 leading-7 text-brand-muted">
          Отправляя заявку, пользователь соглашается, что указанные контактные
          данные могут быть использованы для обратной связи по обращению.
        </p>
      </div>
    </main>
  );
}
