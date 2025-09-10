
import { create } from "zustand";

type ViewType = "My Home" | "profile" | "messages" | "jobs";

interface ViewStore {
  activeView: ViewType;
  setActiveView: (view: ViewType) => void;
}

export const useViewStore = create<ViewStore>((set) => ({
  activeView: "My Home",
  setActiveView: (view) => set({ activeView: view }),
}));
