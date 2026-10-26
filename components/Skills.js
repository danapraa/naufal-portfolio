import { skillGroups } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const headColors = ["bg-acid", "bg-grape", "bg-ice", "bg-tang", "bg-sun"];

export default function Skills() {
  return (
    <section
      id="keahlian"
      className="border-y-[3px] border-ink bg-sun/50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          number="02"
          eyebrow="Keahlian"
          title="Teknologi yang saya pakai."
          description="Dipakai di proyek akademik, magang, dan proyek pribadi."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.title}
              delay={(i % 2) * 100}
              className={`h-full ${group.wide ? "md:col-span-2" : ""}`}
            >
              <div className="brut-card brut-lift h-full overflow-hidden bg-white">
                <div
                  className={`flex items-center justify-between border-b-[3px] border-ink px-5 py-3 ${
                    headColors[i % headColors.length]
                  }`}
                >
                  <h3 className="text-lg font-bold">{group.title}</h3>
                  <span className="font-label text-xs font-bold">
                    {String(group.items.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2.5 p-5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="brut-chip bg-paper transition hover:bg-ink hover:text-acid"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}