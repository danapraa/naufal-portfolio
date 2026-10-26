import Reveal from "./Reveal";

export default function SectionHeading({ number, eyebrow, title, description }) {
  return (
    <Reveal className="mb-12 sm:mb-14">
      <p className="font-label inline-block rounded-lg border-2 border-ink bg-acid px-3 py-1 text-xs font-bold uppercase tracking-widest shadow-hard-sm">
        {number} / {eyebrow}
      </p>
      <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base text-ink/70 sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}