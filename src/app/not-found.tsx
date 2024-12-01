import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 min-h-[75dvh]">
      <h3>We couldn&apos;t find the page you were looking for</h3>
      <Button asChild>
        <Link href={"/"}>
          <Home /> Go back to home
        </Link>
      </Button>
    </div>
  );
}
