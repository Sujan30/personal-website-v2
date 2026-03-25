import { cn } from "@/lib/utils";
import type { ExperienceItem } from "@/data/experience";

type Props = {
  items: ExperienceItem[];
  variant?: "full" | "compact";
  className?: string;
};

export default function ExperienceTimeline({ items, variant = "full", className }: Props) {
  const bulletCount = variant === "compact" ? 2 : undefined;

  return (
    <ol className={cn("relative border-l border-white/[0.07] pl-6 md:pl-8", className)}>
      {items.map((exp) => (
        <li key={`${exp.company}-${exp.role}`} className="relative pb-10 last:pb-0">
          {/* Timeline dot */}
          <span className="absolute -left-[5px] top-[6px] h-2.5 w-2.5 rounded-full bg-primary/60 border border-primary/30" />

          <div className="flex flex-col gap-1.5">
            {/* Date + company */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="font-mono-custom text-xs text-zinc-500 tracking-wide">
                {exp.dates}
              </span>
              <span className="text-xs text-zinc-600">·</span>
              <span className="text-sm font-semibold text-white">{exp.company}</span>
              {variant === "full" && (
                <span className="text-xs text-zinc-500">{exp.location}</span>
              )}
            </div>

            {/* Role */}
            <h3 className="text-base font-semibold text-zinc-200 tracking-tight">{exp.role}</h3>

            {/* Highlights */}
            <ul className="mt-2 space-y-1.5 text-sm text-zinc-400">
              {(bulletCount ? exp.highlights.slice(0, bulletCount) : exp.highlights).map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="text-primary/50 mt-1.5 flex-shrink-0">—</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}
