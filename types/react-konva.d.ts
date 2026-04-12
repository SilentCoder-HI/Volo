declare module 'react-konva' {
  import type { ComponentType } from 'react';
  export const Stage: ComponentType<Record<string, unknown>>;
  export const Layer: ComponentType<Record<string, unknown>>;
  export const Rect: ComponentType<Record<string, unknown>>;
  export const Circle: ComponentType<Record<string, unknown>>;
  export const Line: ComponentType<Record<string, unknown>>;
}
