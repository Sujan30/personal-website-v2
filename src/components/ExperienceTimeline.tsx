import { Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ExperienceItem } from "@/data/experience";

type Props = {
  items: ExperienceItem[];
  /**
   * - "full": show all highlights + location
   * - "compact": show 2 highlights + hide location
   */
  variant?: "full" | "compact";
  className?: string;
};

export default function ExperienceTimeline({
  items,
  variant = "full",
  className,
}: Props) {
  const bulletCount = variant === "compact" ? 2 : undefined;

  return (
    <ol className={cn("relative border-l pl-6 md:pl-8", className)}>
      {items.map((exp) => (
        <li key={`${exp.company}-${exp.role}`} className="relative pb-10 last:pb-0">
          {/* timeline node */}
          <span className="absolute -left-[13px] top-[-2px] flex h-6 w-6 items-center justify-center rounded-full border bg-background">
            <Briefcase className="h-3.5 w-3.5 text-primary" />
          </span>

          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
                {exp.dates}
              </span>
              <span className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{exp.company}</span>
                {variant === "full" && (
                  <>
                    {" • "}
                    {exp.location}
                  </>
                )}
              </span>
            </div>

            <h3 className="text-xl font-semibold tracking-tight">{exp.role}</h3>

            <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
              {(bulletCount ? exp.highlights.slice(0, bulletCount) : exp.highlights).map(
                (h) => (
                  <li key={h}>{h}</li>
                )
              )}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}


