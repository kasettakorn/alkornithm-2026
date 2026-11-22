"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

type SiteHeaderProps = {
  currentPage: "home" | "blog";
};

const navigation = [
  { label: "About", homeHref: "#about", blogHref: "/#about" },
  { label: "Work", homeHref: "#projects", blogHref: "/#projects" },
  { label: "Experience", homeHref: "#experience", blogHref: "/#experience" },
  { label: "YouTube", homeHref: "#youtube", blogHref: "/#youtube" },
  { label: "Writing", homeHref: "/blog", blogHref: "/blog" },
  { label: "Publications", homeHref: "#publications", blogHref: "/#publications" },
  { label: "Contact", homeHref: "#contact", blogHref: "/#contact" },
];

export function SiteHeader({ currentPage }: SiteHeaderProps) {
  const [selectedMenu, setSelectedMenu] = useState<string | null>(
    currentPage === "blog" ? "Writing" : null,
  );

  useEffect(() => {
    if (currentPage === "blog") {
      setSelectedMenu("Writing");
      return;
    }

    const selectedSection = navigation.find(
      (item) => item.homeHref === window.location.hash,
    );
    setSelectedMenu(selectedSection?.label ?? null);
  }, [currentPage]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 shadow-sm shadow-black/[0.02] backdrop-blur-2xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="font-mono text-lg font-bold tracking-tight">
            ALKORNITHM<span className="text-terminal-accent">.</span>
          </Link>
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <a href="https://github.com/kasettakorn" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="inline-flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground hover:border-terminal-accent hover:text-terminal-accent">
              <GithubLogo size={16} />
            </a>
          </div>
        </div>
        <nav aria-label="Main navigation" className="flex items-center gap-5 overflow-x-auto pb-1 font-mono text-[11px] text-muted-foreground md:pb-0">
          {navigation.map((item, index) => {
            const isSelected = selectedMenu === item.label;
            const isCurrentPage = currentPage === "blog" && item.label === "Writing";
            return (
              <Link
                key={item.label}
                href={currentPage === "home" ? item.homeHref : item.blogHref}
                aria-current={
                  isSelected ? (isCurrentPage ? "page" : "location") : undefined
                }
                onClick={() => setSelectedMenu(item.label)}
                className={`shrink-0 ${isSelected ? "text-terminal-accent" : "transition-colors hover:text-terminal-accent"}`}
              >
                <span className="mr-1 text-terminal-accent/70">
                  0{index + 1}.
                </span>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a href="https://github.com/kasettakorn" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 font-mono text-xs transition-colors hover:border-terminal-accent hover:text-terminal-accent">
            <GithubLogo size={14} /> GitHub <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </header>
  );
}