import Image from "next/image";
import { projects } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { ExternalLinkIcon, GitHubIcon } from "./Icons";

const banners = ["bg-grape", "bg-ice", "bg-tang", "bg-bubble", "bg-sun"];
const chipColors = ["bg-acid", "bg-sun", "bg-bubble", "bg-ice"];

export default function Projects() {
  return (
    <section
      id="proyek"
      className="border-y-[3px] border-ink bg-grape/30 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          number="04"
          eyebrow="Proyek"
          title="Proyek pilihan."
          description="Beberapa aplikasi web yang pernah saya kerjakan."
        />

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, i) => (
            <Reveal
              key={`${project.title}-${i}`}
              delay={(i % 2) * 120}
              className="flex w-full md:w-[calc(50%-1rem)]"
            >
              <article className="brut-card brut-lift flex w-full flex-col overflow-hidden bg-white">
                {/* Gambar / banner */}
                <div
                  className={`relative border-b-[3px] border-ink ${
                    banners[i % banners.length]
                  }`}
                >
                  {project.image ? (
                    <>
                      <Image
                        src={project.image}
                        alt={`Tampilan website ${project.title}`}
                        width={1600}
                        height={900}
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="block h-auto w-full"
                      />
                      <span className="font-label absolute top-3 left-3 rounded-md border-2 border-ink bg-white px-2 py-0.5 text-xs font-bold">
                        0{i + 1}
                      </span>
                    </>
                  ) : (
                    <div className="relative flex aspect-video items-end overflow-hidden p-5">
                      <div className="absolute top-4 left-4 flex gap-1.5">
                        <span className="h-3 w-3 rounded-full border-2 border-ink bg-white" />
                        <span className="h-3 w-3 rounded-full border-2 border-ink bg-white" />
                        <span className="h-3 w-3 rounded-full border-2 border-ink bg-white" />
                      </div>
                      <span className="absolute -top-8 -right-8 h-32 w-32 rounded-full border-[3px] border-ink bg-white/50" />
                      <span className="font-label absolute top-4 right-5 text-5xl font-bold text-ink/20">
                        0{i + 1}
                      </span>
                      <span className="relative text-2xl font-bold leading-none sm:text-3xl">
                        {project.title}
                      </span>
                    </div>
                  )}
                </div>

                {/* Isi kartu */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span className="font-label inline-block rounded-md border-2 border-ink bg-white px-2.5 py-0.5 text-xs font-bold">
                      {project.period}
                    </span>
                    <span className="text-sm font-semibold text-ink/60">
                      {project.type}
                    </span>
                  </div>

                  <h3 className="mt-3 text-xl font-bold sm:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 line-clamp-4 flex-1 leading-relaxed text-ink/75">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech, t) => (
                      <span
                        key={`${tech}-${t}`}
                        className={`brut-chip ${chipColors[t % chipColors.length]}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {(project.demo || project.repo) && (
                    <div className="mt-5 flex flex-wrap gap-3">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="brut-btn bg-acid px-5 py-2 text-sm"
                        >
                          <ExternalLinkIcon className="h-4 w-4" />
                          Demo
                        </a>
                      )}
                      {project.repo && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="brut-btn bg-white px-5 py-2 text-sm"
                        >
                          <GitHubIcon className="h-4 w-4" />
                          Kode
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}