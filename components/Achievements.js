import Image from "next/image";
import { achievements } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { ExternalLinkIcon } from "./Icons";

const frameColors = [
  "bg-acid",
  "bg-sun",
  "bg-ice",
  "bg-bubble",
  "bg-grape",
  "bg-tang",
];

export default function Achievements() {
  if (achievements.length === 0) return null;

  return (
    <section
      id="prestasi"
      className="border-y-[3px] border-ink bg-bubble/25 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          number="06"
          eyebrow="Prestasi"
          title="Penghargaan & pencapaian."
          description="Lomba dan penghargaan yang pernah saya raih."
        />

        <div className="flex flex-wrap justify-center gap-8">
          {achievements.map((item, i) => {
            const href = item.link || item.image;

            return (
              <Reveal
                key={`${item.title}-${i}`}
                delay={(i % 3) * 120}
                className="flex w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]"
              >
                <article className="brut-card brut-lift flex w-full flex-col overflow-hidden bg-white">
                  {/* Gambar sertifikat */}
                  <div
                    className={`relative aspect-[4/3] border-b-[3px] border-ink ${
                      frameColors[i % frameColors.length]
                    }`}
                  >
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={`Sertifikat ${item.title}`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-contain p-3"
                      />
                    ) : (
                      <div className="flex h-full flex-col items-center justify-center gap-1">
                        <span className="font-label text-6xl font-bold text-ink/25">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-label text-[11px] font-bold uppercase tracking-widest text-ink/55">
                          Tambahkan gambar
                        </span>
                      </div>
                    )}

                    {item.level && (
                      <span className="font-label absolute top-3 left-3 rounded-md border-2 border-ink bg-white px-2 py-0.5 text-xs font-bold">
                        {item.level}
                      </span>
                    )}
                  </div>

                  {/* Isi kartu */}
                  <div className="flex flex-1 flex-col p-5">
                    {item.year && (
                      <span className="font-label inline-block self-start rounded-md border-2 border-ink bg-sun px-2.5 py-0.5 text-xs font-bold">
                        {item.year}
                      </span>
                    )}
                    <h3 className="mt-3 text-lg font-bold leading-snug sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="text-sm font-semibold text-ink/60">
                      {item.organizer}
                    </p>

                    {item.description && (
                      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink/75">
                        {item.description}
                      </p>
                    )}

                    {href && (
                      <div className="mt-auto pt-4">
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="brut-btn bg-white px-4 py-2 text-sm"
                        >
                          <ExternalLinkIcon className="h-4 w-4" />
                          Lihat sertifikat
                        </a>
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}