// context/GenderContext.tsx
import { createContext, useState, useContext, ReactNode } from "react";

type GenderContextType = {
  gender: string;
  setGender: (gender: string) => void;
};

const GenderContext = createContext<GenderContextType | undefined>(undefined);

export const GenderProvider = ({ children }: { children: ReactNode }) => {
  const [gender, setGender] = useState("men");

  return (
    <GenderContext.Provider value={{ gender, setGender }}>
      {children}
    </GenderContext.Provider>
  );
};

export const useGender = () => {
  const context = useContext(GenderContext);
  if (!context) throw new Error("useGender must be used within GenderProvider");
  return context;
};
