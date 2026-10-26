import Image from "next/image";
import { about, profile } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const statColors = ["bg-acid", "bg-ice", "bg-bubble"];

export default function About() {
  return (
    <section id="tentang" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          number="01"
          eyebrow="Tentang"
          title="Sedikit tentang saya."
        />

        <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <div className="relative mx-auto w-full max-w-xs">
              <span className="absolute -top-3 left-1/2 z-10 h-7 w-24 -translate-x-1/2 rotate-3 border-2 border-ink bg-sun" />
              <div className="-rotate-3 rounded-2xl border-[3px] border-ink bg-white p-4 shadow-hard-lg">
                {/* Foto profil (ganti file public/foto.jpg dengan fotomu) */}
                <div className="relative aspect-square overflow-hidden rounded-xl border-[3px] border-ink bg-grape">
                  <Image
                    src="/foto.jpg"
                    alt={profile.name}
                    fill
                    sizes="320px"
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-lg font-bold leading-tight">
                      {profile.name}
                    </p>
                    <p className="text-sm text-ink/60">{profile.status}</p>
                  </div>
                  <span className="font-label rounded-md border-2 border-ink bg-acid px-2 py-0.5 text-xs font-bold">
                    ID
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <div className="space-y-5 text-base leading-relaxed text-ink/80 sm:text-lg">
              {about.paragraphs.map((text, i) => (
                <Reveal key={text} delay={i * 120}>
                  <p>{text}</p>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {about.stats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 120} className="h-full">
                  <div
                    className={`brut-card brut-lift h-full p-5 ${
                      statColors[i % statColors.length]
                    }`}
                  >
                    <p className="text-4xl font-bold">{stat.value}</p>
                    <p className="mt-1 text-sm font-semibold">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}