import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface State {
  bears: number;
  title: string;
  setTitle: (value: string) => void;
  increasePopulation: () => void;
  setBears: (value: number) => void;
  removeAllBears: () => void;
};

const testStore = create(
  persist<State>(
    (set) => ({
      bears: 0,
      title: "Astro Counter",
      setTitle: (value: string) => set({ title: value }),
      increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
      setBears: (value: number) => set({ bears: value }),
      removeAllBears: () => set({ bears: 0 }),
    }),
    {
      name: "test-store", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

const { getState, setState, subscribe } = testStore;

export { getState, setState, subscribe, testStore };
