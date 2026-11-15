import type { ElementType, ReactNode } from 'react';

interface CardProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

export default function Card({ as: Component = 'div', className = '', children }: CardProps) {
  return (
    <Component className={`border-surface-border bg-surface rounded-2xl border ${className}`}>
      {children}
    </Component>
  );
}
