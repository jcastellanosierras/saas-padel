import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Club de pádel</h1>
      <Button asChild>
        <Link href='/courts'>Reservar pista</Link>
      </Button>
    </main>
  );
}
