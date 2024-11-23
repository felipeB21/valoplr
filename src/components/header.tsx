"use client";
import Link from "next/link";
import { ThemeToggle } from "./theme/toggle";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { title_name: "Players", path_name: "players" },
  { title_name: "Teams", path_name: "teams" },
  { title_name: "Tournaments", path_name: "tournaments" },
  { title_name: "About", path_name: "about" },
] as const;

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="dark:bg-neutral-900/30 bg-neutral-50/30">
      <div className="wrapper flex items-center justify-between py-2">
        <div className="flex items-center gap-5">
          <Link
            className="text-xl font-medium flex items-center gap-1"
            href={"/"}
          >
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1155 1000"
              className="w-5 h-5 transform rotate-180 transition-colors duration-300 dark:fill-white fill-black"
            >
              <path d="m577.3 0 577.4 1000H0z" />
            </svg>
            valoplr
          </Link>
          <nav>
            <ul className="flex items-center gap-5">
              {NAV_LINKS.map((link) => (
                <li key={link.path_name}>
                  <Link
                    className={`text-sm dark:text-neutral-300 text-neutral-700 hover:dark:text-white hover:text-black ${
                      pathname === `/${link.path_name}`
                        ? "text-blue-500 dark:text-blue-400 font-bold"
                        : ""
                    }`}
                    href={`/${link.path_name}`}
                  >
                    {link.title_name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
