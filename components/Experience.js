import { experiences } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="pengalaman" className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <SectionHeading
          number="03"
          eyebrow="Pengalaman"
          title="Jejak Kerja Saya."
          description="Pengalaman profesional yang membentuk cara kerja saya."
        />

        <ol className="relative flex flex-col gap-10">
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-0 left-[9px] w-[3px] bg-ink"
          />
          {experiences.map((item, i) => (
            <Reveal
              as="li"
              key={item.company}
              delay={i * 120}
              className="relative pl-12"
            >
              <span className="absolute top-7 left-0 z-10 h-5 w-5 rounded-full border-[3px] border-ink bg-acid" />

              <div className="brut-card brut-lift bg-white p-6 sm:p-7">
                <span className="font-label inline-block rounded-md border-2 border-ink bg-sun px-2.5 py-0.5 text-xs font-bold">
                  {item.period}
                </span>
                <h3 className="mt-3 text-xl font-bold sm:text-2xl">
                  {item.role}
                </h3>
                <p className="font-semibold text-ink/60">{item.company}</p>

                <ul className="mt-5 space-y-2.5">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 text-ink/80">
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 border-2 border-ink bg-grape" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}