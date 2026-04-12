declare module 'zustand' {
  type SetState<T> = (partial: Partial<T> | ((state: T) => Partial<T>)) => void;
  type GetState<T> = () => T;
  type StateCreator<T> = (set: SetState<T>, get: GetState<T>) => T;
  function create<T>(initializer: StateCreator<T>): { (): T; getState: GetState<T> };
  export default create;
}
