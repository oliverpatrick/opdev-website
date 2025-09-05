import Link from "next/link";

export default async function Home() {
  return (
    <main className="p-4">
      <Link href="/games/wordle">Wordle</Link>
    </main>
  );
}
