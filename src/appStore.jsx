import { create } from "zustand";
import { persist } from "zustand/middleware";

const appStore = persist(
  (set) => ({
    dopen: true,
    updateOpen: (dopen) => set({ dopen }),
  }),
  { name: "my_app-storage" }
);

export const useAppStore = create(appStore);
