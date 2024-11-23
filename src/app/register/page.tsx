import Link from "next/link";
import React from "react";

export default function RegisterPage() {
  return (
    <div className="wrapper">
      <div className="flex items-center justify-center gap-10 min-h-[75dvh]">
        <Link href={"/register/player"}>Player</Link>
        <Link href={"/register/team"}>Team</Link>
        <Link href={"/register/tournament"}>Tournament</Link>
      </div>
    </div>
  );
}
