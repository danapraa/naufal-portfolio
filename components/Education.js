import { education, certifications } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Education() {
  const hasCerts = certifications.length > 0;

  return (
    <section id="pendidikan" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          number="05"
          eyebrow="Pendidikan"
          title="Pendidikan & sertifikasi."
        />

        <div
          className={`grid gap-8 ${
            hasCerts ? "lg:grid-cols-2" : "mx-auto max-w-3xl"
          }`}
        >
          <Reveal className="h-full">
            <div className="brut-card brut-lift relative h-full bg-white p-7 sm:p-8">
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

          {hasCerts && (
            <Reveal delay={150} className="h-full">
              <div className="brut-card brut-lift h-full bg-sun p-7 sm:p-8">
                <h3 className="text-2xl font-bold">Sertifikasi & Pelatihan</h3>
                <ul className="mt-5">
                  {certifications.map((cert) => (
                    <li
                      key={cert.name}
                      className="flex flex-wrap items-baseline justify-between gap-2 border-b-2 border-dashed border-ink py-3 last:border-b-0"
                    >
                      <span className="font-bold">
                        {cert.name}
                        <span className="font-medium text-ink/65">
                          {" "}
                          · {cert.issuer}
                        </span>
                      </span>
                      {cert.year && (
                        <span className="font-label text-sm font-bold">
                          {cert.year}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}