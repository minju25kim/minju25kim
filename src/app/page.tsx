import Link from "next/link";

export default function Home() {
  const thisYear = new Date().getFullYear()
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Link href='/resume'>
          <p className="hidden md:block">resume</p>
        </Link>
        <Link href='/dev'>
          <p className="hidden md:block">dev</p>
        </Link>
        <Link href='/til'>
          <p className="hidden md:block">til</p>
        </Link>
        <Link href='/terminology'>
          <p className="hidden md:block">terminology</p>
        </Link>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {thisYear} @minju25kim
      </footer>
    </div>
  );
}
