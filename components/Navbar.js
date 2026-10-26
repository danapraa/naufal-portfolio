"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";
import { CloseIcon, MenuIcon } from "./Icons";

const links = [
  { href: "#beranda", label: "Beranda" },
  { href: "#tentang", label: "Tentang" },
  { href: "#keahlian", label: "Keahlian" },
  { href: "#pengalaman", label: "Pengalaman" },
  { href: "#proyek", label: "Proyek" },
  { href: "#kontak", label: "Kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("beranda");

  useEffect(() => {
    const elements = links
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-4 sm:px-4">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full border-[3px] border-ink bg-white px-3 shadow-hard sm:px-4">
        <a href="#beranda" className="flex items-center text-lg font-bold">
          <span className="rounded-lg border-2 border-ink bg-acid px-2.5 py-0.5">
            {profile.shortName}
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`rounded-full border-2 px-4 py-1 text-sm font-bold transition ${
                    isActive
                      ? "border-ink bg-acid"
                      : "border-transparent hover:border-ink hover:bg-paper"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href={`mailto:${profile.email}`}
          className="brut-btn hidden bg-grape px-5 py-2 text-sm lg:inline-flex"
        >
          Hubungi Saya
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg border-2 border-ink bg-acid p-2 lg:hidden"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {open && (
        <ul className="brut-card mx-auto mt-3 max-w-5xl bg-white p-3 lg:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-bold hover:bg-acid"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="p-2">
            <a
              href={`mailto:${profile.email}`}
              onClick={() => setOpen(false)}
              className="brut-btn w-full bg-grape text-sm"
            >
              Hubungi Saya
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}