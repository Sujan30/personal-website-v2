import { useEffect, useRef } from 'react';

export function CursorSpotlight() {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;

    const el = spotRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      el.style.background = `radial-gradient(
        600px circle at ${e.clientX}px ${e.clientY}px,
        rgba(56, 189, 248, 0.10),
        transparent 70%
      )`;
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      ref={spotRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30 transition-[background] duration-300"
    />
  );
}
