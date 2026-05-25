import { useEffect, useRef, useState } from 'react';

export type SectionId = 'about' | 'experience' | 'projects' | 'books';

export function useActiveSection(sectionIds: SectionId[]): SectionId {
  const [active, setActive] = useState<SectionId>(sectionIds[0]);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current?.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActive(visible[0].target.id as SectionId);
        }
      },
      {
        threshold: 0,
        // Section becomes active once it occupies the 20%–80% band of the viewport.
        // This ensures exactly one section is active at any scroll position.
        rootMargin: '-20% 0px -60% 0px',
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.current!.observe(el);
    });

    return () => observer.current?.disconnect();
  }, [sectionIds]);

  return active;
}
