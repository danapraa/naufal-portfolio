import Image from "next/image";
import { profile } from "@/data/portfolio";
import Typewriter from "./Typewriter";
import {
  ArrowRightIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MapPinIcon,
} from "./Icons";

const roles = [
  "Front-End Developer",
  "Web Developer",
  "React & Next.js Dev",
  "Laravel Developer",
  "Website Designer",
  "Backend Developer",
  "UI/UX Designer",
];

const chipColors = [
  "bg-acid",
  "bg-grape",
  "bg-ice",
  "bg-sun",
  "bg-bubble",
  "bg-tang",
];

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24"
    >
      {/* Hiasan bentuk */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 left-[46%] hidden h-10 w-10 rotate-12 border-[3px] border-ink bg-bubble lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-16 left-[4%] hidden h-14 w-14 rounded-full border-[3px] border-ink bg-ice lg:block"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
        {/* Kiri: teks */}
        <div className="min-w-0">
          <span
            className="font-label animate-pop inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider shadow-hard-sm sm:text-xs"
            style={{ animationDelay: "0ms" }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-acid opacity-90" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full border-2 border-ink bg-acid" />
            </span>
            Terbuka untuk peluang karier
          </span>

          <h1
            className="animate-pop mt-7 font-bold leading-[0.95] tracking-tight"
            style={{ animationDelay: "100ms" }}
          >
            <span className="block text-3xl sm:text-5xl">Halo, saya</span>
            <span className="marker mt-2 inline-block px-1 text-[4.25rem] leading-none sm:text-[6.5rem] lg:text-[7.5rem]">
              {profile.shortName}
            </span>
          </h1>

          <p
            className="animate-pop mt-7 flex flex-wrap items-center gap-3 text-lg font-bold sm:text-2xl"
            style={{ animationDelay: "200ms" }}
          >
            <span>Saya seorang</span>
            <span className="font-label inline-flex min-h-10 min-w-12 items-center rounded-xl border-[3px] border-ink bg-ink px-4 py-1 text-base text-acid shadow-hard-sm sm:text-xl">
              <Typewriter words={roles} />
            </span>
          </p>

          <p
            className="animate-pop mt-6 max-w-xl text-base leading-relaxed text-ink/75 sm:text-lg"
            style={{ animationDelay: "300ms" }}
          >
            {profile.intro}
          </p>

          <p
            className="animate-pop mt-5 flex items-start gap-2 text-sm font-medium text-ink/70"
            style={{ animationDelay: "400ms" }}
          >
            <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0" />
            <span>
              {profile.location} · {profile.status}
            </span>
          </p>

          <div
            className="animate-pop mt-8 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "500ms" }}
          >
            <a href="#proyek" className="brut-btn bg-acid">
              Lihat Proyek
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a href={profile.cv} download className="brut-btn bg-white">
              <DownloadIcon className="h-4 w-4" />
              Unduh CV
            </a>
          </div>

          <div
            className="animate-pop mt-8 flex items-center gap-4"
            style={{ animationDelay: "600ms" }}
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="brut-btn bg-white p-3"
            >
              <GitHubIcon />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="brut-btn bg-white p-3"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

        {/* Kanan: kartu kode miring */}
        <div
          className="animate-pop relative mx-auto w-full min-w-0 max-w-sm sm:max-w-md"
          style={{ animationDelay: "300ms" }}
        >
          {/* Stiker berputar */}
          <div className="absolute -top-10 -right-3 z-20 hidden h-28 w-28 rounded-full bg-acid shadow-hard sm:block">
            <svg viewBox="0 0 120 120" className="h-full w-full animate-spin-slow">
              <defs>
                <path
                  id="badge-circle"
                  d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
                />
              </defs>
              <circle
                cx="60"
                cy="60"
                r="58"
                fill="#c6f135"
                stroke="#111111"
                strokeWidth="3"
              />
              <text
                fontSize="11"
                fontWeight="700"
                letterSpacing="2.2"
                fill="#111111"
                style={{ fontFamily: "var(--font-spacemono), monospace" }}
              >
                <textPath href="#badge-circle">
                  OPEN TO WORK • OPEN TO WORK •
                </textPath>
              </text>
              <path
                d="M60 42 L66 54 L78 60 L66 66 L60 78 L54 66 L42 60 L54 54 Z"
                fill="#111111"
              />
            </svg>
          </div>

          {/* Stiker teknologi */}
          <span className="font-label absolute top-24 -left-6 z-20 hidden -rotate-6 rounded-lg border-[3px] border-ink bg-sun px-3 py-1 text-sm font-bold shadow-hard-sm sm:block">
            Next.js
          </span>
          <span className="font-label absolute -right-5 bottom-20 z-20 hidden rotate-6 rounded-lg border-[3px] border-ink bg-tang px-3 py-1 text-sm font-bold shadow-hard-sm sm:block">
            Laravel
          </span>
          <span className="font-label absolute -bottom-5 left-8 z-20 hidden -rotate-3 rounded-lg border-[3px] border-ink bg-ice px-3 py-1 text-sm font-bold shadow-hard-sm sm:block">
            MySQL
          </span>

          <div className="animate-float">
            <div className="rotate-2 overflow-hidden rounded-2xl border-[3px] border-ink bg-white shadow-hard-lg">
              <div className="flex items-center gap-2 border-b-[3px] border-ink bg-sun px-4 py-3">
                <span className="h-3.5 w-3.5 rounded-full border-2 border-ink bg-bubble" />
                <span className="h-3.5 w-3.5 rounded-full border-2 border-ink bg-white" />
                <span className="h-3.5 w-3.5 rounded-full border-2 border-ink bg-acid" />
                <span className="font-label ml-2 text-xs font-bold">
                  portfolio.js
                </span>
              </div>

              <div className="flex items-center gap-3 border-b-[3px] border-ink px-5 py-4">
                {/* Foto profil (ganti file public/foto.jpg dengan fotomu) */}
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-[3px] border-ink bg-grape">
                  <Image
                    src="/foto.jpg"
                    alt={profile.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold">{profile.name}</p>
                  <p className="text-xs text-ink/60">{profile.status}</p>
                </div>
              </div>

              <div className="font-label overflow-x-auto bg-ink p-5 text-xs leading-7 text-paper sm:text-[13px]">
                <div className="whitespace-nowrap">
                  <span className="text-grape">const</span>{" "}
                  <span className="text-ice">
                    {profile.shortName.toLowerCase()}
                  </span>{" "}
                  = {"{"}
                </div>
                <div className="whitespace-nowrap pl-5">
                  role: <span className="text-acid">&quot;Front-End Dev&quot;</span>,
                </div>
                <div className="whitespace-nowrap pl-5">
                  stack: [<span className="text-acid">&quot;Next.js&quot;</span>,{" "}
                  <span className="text-acid">&quot;Laravel&quot;</span>],
                </div>
                <div className="whitespace-nowrap pl-5">
                  database: <span className="text-acid">&quot;MySQL&quot;</span>,
                </div>
                <div className="whitespace-nowrap pl-5">
                  openToWork: <span className="text-sun">true</span>,
                </div>
                <div>
                  {"};"}
                  <span className="ml-1 animate-blink text-acid">▍</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 border-t-[3px] border-ink bg-paper px-5 py-4">
                {profile.heroTech.map((tech, i) => (
                  <span
                    key={tech}
                    className={`brut-chip ${chipColors[i % chipColors.length]}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}