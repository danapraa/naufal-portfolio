import { skillGroups } from "@/data/portfolio";

const items = skillGroups.filter((g) => !g.wide).flatMap((g) => g.items);

export default function Marquee() {
  const loop = [...items, ...items, ...items, ...items];

  return (
    <div className="overflow-hidden py-6 sm:py-8" aria-hidden="true">
      <div className="-rotate-1 scale-105 border-y-[3px] border-ink bg-ink py-3 sm:py-4">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {loop.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="font-label flex shrink-0 items-center gap-8 pr-8 text-sm uppercase tracking-widest text-acid sm:text-base"
            >
              {item}
              <span className="h-2 w-2 rotate-45 bg-grape" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}