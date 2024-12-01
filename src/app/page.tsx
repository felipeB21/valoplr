import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import { ArrowUpRightIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen dark:bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <main className="wrapper mt-20">
        <div className="flex gap-2 bg-purple-500 rounded-xl">
          <Image
            src={"/pro-players/tenz.avif"}
            alt="Hero"
            width={1000}
            height={1000}
            className="w-auto h-auto shadow-inner"
          />
          <div className="flex flex-col justify-between px-2 py-4">
            <h1 className="text-3xl font-bold uppercase text-pretty text-neutral-50">
              Want to shine as a{" "}
              <span className="text-cyan-300">Pro Player</span>, register your
              <span className="text-yellow-300"> Esports Team</span>, or create
              <span className="text-pink-400">
                {" "}
                Professional Tournaments
              </span>{" "}
              with prize pools?
            </h1>

            <Button asChild className="w-max">
              <Link href={"/register"}>
                Get Started <ArrowUpRightIcon />
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
