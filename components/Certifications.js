import Image from "next/image";
import { certificationGroups } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { ExternalLinkIcon } from "./Icons";

const groupColors = ["bg-ice", "bg-acid", "bg-sun"];
const frameColors = ["bg-paper", "bg-sun/60", "bg-ice/50", "bg-bubble/40"];

export default function Certifications() {
  const groups = certificationGroups.filter((g) => g.items.length > 0);
  if (groups.length === 0) return null;

  return (
    <section id="sertifikasi" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          number="07"
          eyebrow="Sertifikasi"
          title="Sertifikasi & pelatihan."
          description="Kemampuan bahasa Inggris dan pelatihan yang pernah saya ikuti."
        />

        <div className="space-y-16">
          {groups.map((group, g) => (
            <div key={group.title}>
              {/* Judul grup */}
              <Reveal>
                <div className="mb-8 flex items-center gap-4">
                  <h3
                    className={`brut-card inline-block px-5 py-2 text-lg font-bold sm:text-xl ${
                      groupColors[g % groupColors.length]
                    }`}
                  >
                    {group.title}
                  </h3>
                  <span className="font-label rounded-md border-2 border-ink bg-white px-2 py-0.5 text-xs font-bold">
                    {String(group.items.length).padStart(2, "0")}
                  </span>
                  <span className="hidden h-[3px] flex-1 bg-ink sm:block" />
                </div>
              </Reveal>

              {/* Kartu sertifikat */}
              <div className="flex flex-wrap justify-center gap-8">
                {group.items.map((item, i) => {
                  const href = item.link || item.image;

                  return (
                    <Reveal
                      key={`${item.name}-${i}`}
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
                            <a
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Buka sertifikat ${item.name}`}
                              className="relative block h-full w-full"
                            >
                              <Image
                                src={item.image}
                                alt={`Sertifikat ${item.name}`}
                                fill
                                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                className="object-contain p-3"
                                loading="eager"
                              />
                            </a>
                          ) : (
                            <div className="flex h-full flex-col items-center justify-center gap-1">
                              <span className="font-label text-5xl font-bold text-ink/25">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <span className="font-label text-[11px] font-bold uppercase tracking-widest text-ink/55">
                                Tambahkan gambar
                              </span>
                            </div>
                          )}

                          {item.year && (
                            <span className="font-label pointer-events-none absolute top-3 left-3 rounded-md border-2 border-ink bg-white px-2 py-0.5 text-xs font-bold">
                              {item.year}
                            </span>
                          )}
                        </div>

                        {/* Keterangan */}
                        <div className="flex flex-1 flex-col p-5">
                          <h4 className="text-lg font-bold leading-snug">
                            {item.name}
                          </h4>
                          <p className="mt-1 text-sm font-semibold text-ink/60">
                            {item.issuer}
                          </p>

                          {item.description && (
                            <p className="mt-3 text-sm leading-relaxed text-ink/75">
                              {item.description}
                            </p>
                          )}

                          {item.score && (
                            <span className="brut-chip mt-3 inline-block self-start bg-acid">
                              {item.score}
                            </span>
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
          ))}
        </div>
      </div>
    </section>
  );
}
