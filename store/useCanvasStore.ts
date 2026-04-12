import create from 'zustand';

type Shape = {
  id: string;
  type?: 'rect' | 'circle';
  x: number;
  y: number;
  width: number;
  height: number;
  radius?: number;
  color: string;
  selected?: boolean;
};

type State = {
  shapes: Shape[];
  addShape: (s: Partial<Shape>) => void;
  updateShape: (id: string, patch: Partial<Shape>) => void;
  selectShape: (id?: string) => void;
  zoom?: number;
  setZoom?: (z: number) => void;
};

export const useCanvasStore = create<State>((set) => ({
  shapes: [],
  addShape: (s: Partial<Shape>) => {
    // generate a robust, reasonably unique id
    const id = (typeof crypto !== 'undefined' && 'randomUUID' in (crypto as any))
      ? (crypto as any).randomUUID()
      : `shape_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;

    const newShape: Shape = {
      id,
      type: s.type ?? 'rect',
      x: s.x ?? 50,
      y: s.y ?? 50,
      width: s.width ?? 100,
      height: s.height ?? 100,
      radius: s.radius,
      color: s.color ?? '#8b5cf6',
      selected: false,
    };
    set((state: State) => ({ shapes: [...state.shapes, newShape] }));
  },
  updateShape: (id: string, patch: Partial<Shape>) => {
    set((state: State) => ({
      shapes: state.shapes.map((sh) => (sh.id === id ? { ...sh, ...patch } : sh)),
    }));
  },
  selectShape: (id?: string) => {
    set((state: State) => ({
      shapes: state.shapes.map((s) => ({ ...s, selected: s.id === id })),
    }));
  },
  zoom: 1,
  setZoom: (z: number) => set((state: State) => ({ zoom: z })),
}));
