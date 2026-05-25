export default function SectionFooter() {
  return (
    <footer className="py-12 text-center">
      <p className="text-xs text-muted-foreground">
        Built with React &amp; Tailwind.{' '}
        <a
          href="https://github.com/Sujan30"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-400 transition-colors duration-150"
        >
          Source on GitHub →
        </a>
      </p>
    </footer>
  );
}
