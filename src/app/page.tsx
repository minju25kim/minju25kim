import Link from "next/link";

export default function Home() {

  return (
    <main >
      <Link href='/resume'>resume</Link>
      <Link href='/dev'>dev</Link>
      <Link href='/til'>til</Link>
      <Link href='/terminology'>terminology</Link>
    </main>
  );
}
