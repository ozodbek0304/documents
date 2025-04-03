import { create } from "zustand";

interface Catalog {
  open: boolean;
  toggleOpen: () => boolean;
}

export const useCatalogStore = create<Catalog>((set, get) => ({
  open: false,
  toggleOpen: () => {
    const newValue = !get().open;
    set({ open: newValue });
    return newValue;
  },
}));
