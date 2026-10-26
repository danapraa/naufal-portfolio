import { profile } from "@/data/portfolio";

const YEAR = 2026;

export default function Footer() {
  return (
    <footer className="border-t-[3px] border-ink bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm sm:flex-row sm:px-6">
        <p>
          © {YEAR} {profile.name}
        </p>
        <p className="font-label text-paper/60">
          Dibuat dengan Next.js & Tailwind CSS
        </p>
        <a href="#beranda" className="brut-btn bg-acid px-4 py-2 text-xs text-ink">
          ↑ Ke atas
        </a>
      </div>
    </footer>
  );
}