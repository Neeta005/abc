"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface SideNavContextType {
  isToggled: boolean;
  setIsToggled: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideNavContext = createContext<SideNavContextType | undefined>(undefined);

export const useSideNavContext = () => {
  const context = useContext(SideNavContext);
  if (!context) {
    throw new Error("useSideNavContext must be used within a SideNavProvider");
  }
  return context;
};

export const SideNavProvider = ({ children }: { children: ReactNode }) => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const value: SideNavContextType = {
    isToggled,
    setIsToggled,
  };

  return (
    <SideNavContext.Provider value={value}>
      {children}
    </SideNavContext.Provider>
  );
};

export default SideNavContext;