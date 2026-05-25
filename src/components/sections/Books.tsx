import { books, type Book } from '@/data/books';

const GROUPS: { status: Book['status']; label: string }[] = [
  { status: 'reading', label: 'Reading now' },
  { status: '2026',    label: 'Read in 2026' },
  { status: '2025',    label: 'Read in 2025' },
  { status: '2024', label: 'Read in 2024' },
  { status: 'want',    label: 'Want to read' },
];

export default function Books() {
  return (
    <section id="books" className="py-16 lg:py-24">
      <p className="mb-8 text-xs font-semibold tracking-widest uppercase text-accent lg:hidden">
        Books
      </p>

      <div className="space-y-10">
        {GROUPS.map(({ status, label }) => {
          const list = books.filter((b) => b.status === status);
          if (!list.length) return null;
          return (
            <div key={status}>
              <h3 className="font-serif italic text-text-primary text-xl mb-4">{label}</h3>
              <ul className="space-y-4">
                {list.map((b) => (
                  <li
                    key={b.title}
                    className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-1 md:gap-6 text-sm py-1"
                  >
                    <div>
                      <span className="text-text-primary">{b.title}</span>
                      <span className="text-text-tertiary"> — {b.author}</span>
                      {b.rating && (
                        <span className="ml-2 text-accent text-[11px]">
                          {'★'.repeat(b.rating)}
                        </span>
                      )}
                      {b.tags && (
                        <div className="mt-1 flex gap-1 flex-wrap">
                          {b.tags.map((t) => (
                            <span
                              key={t}
                              className="text-[10px] px-1.5 py-px border border-border rounded text-text-tertiary font-mono"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    {b.take && (
                      <p className="text-text-secondary italic text-[13px] leading-relaxed">
                        {b.take}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
