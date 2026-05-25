interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function ExternalLink({ href, children, className = '' }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-text-tertiary hover:text-accent transition-colors duration-150 ${className}`}
    >
      {children}
    </a>
  );
}
