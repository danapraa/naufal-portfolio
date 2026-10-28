import { education } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="pendidikan" className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <SectionHeading
          number="05"
          eyebrow="Pendidikan"
          title="Latar belakang pendidikan."
        />

        <Reveal>
          <div className="brut-card brut-lift relative bg-white p-7 sm:p-8">
            <span className="font-label absolute -top-4 right-6 rotate-6 rounded-md border-[3px] border-ink bg-acid px-3 py-1 text-xs font-bold uppercase tracking-widest shadow-hard-sm">
              Lulus
            </span>
            <span className="font-label inline-block rounded-md border-2 border-ink bg-sun px-2.5 py-0.5 text-xs font-bold">
              {education.period}
            </span>
            <h3 className="mt-4 text-2xl font-bold">{education.degree}</h3>
            <p className="font-semibold text-ink/60">{education.school}</p>
            <p className="mt-4 leading-relaxed text-ink/75">
              {education.detail}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}