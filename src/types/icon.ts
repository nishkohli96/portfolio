import type { ComponentType, CSSProperties } from 'react';

export type IconComponent = ComponentType<{
  className?: string;
  style?: CSSProperties | undefined;
}>;
