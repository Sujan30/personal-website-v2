import books from '@/data/books.json';

export default function Books() {
  return (
    <section id="books" className="py-16 lg:py-24">
      <p className="mb-8 text-xs font-semibold tracking-widest uppercase text-sky-400 lg:hidden">
        Books
      </p>

      <ol className="space-y-6">
        {books.map((book, i) => (
          <li key={i} className="flex gap-4">
            <span className="mt-0.5 shrink-0 text-xs tabular-nums text-muted-foreground w-5 text-right">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div>
              <p className="text-sm font-medium text-foreground">
                {book.title}
                <span className="ml-2 text-xs font-normal text-muted-foreground">
                  — {book.author}
                </span>
              </p>
              <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                {book.blurb}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
