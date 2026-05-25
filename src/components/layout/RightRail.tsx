import { type ReactNode } from 'react';

interface RightRailProps {
  children: ReactNode;
  className?: string;
}

export default function RightRail({ children, className = '' }: RightRailProps) {
  return (
    <main className={`${className}`} id="main-content">
      {children}
    </main>
  );
}
