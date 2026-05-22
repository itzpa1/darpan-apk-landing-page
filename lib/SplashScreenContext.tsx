"use client";
import React, { createContext, useContext, useState } from "react";
import SplashScreen from "@/components/SplashScreen";

interface SplashScreenContextType {
  showSplash: () => void;
}

const SplashScreenContext = createContext<SplashScreenContextType>({
  showSplash: () => {},
});

export function SplashScreenProvider({ children }: { children: React.ReactNode }) {
  const [isActive, setIsActive] = useState(true);

  const showSplash = () => {
    setIsActive(true);
  };

  return (
    <SplashScreenContext.Provider value={{ showSplash }}>
      {isActive && <SplashScreen onComplete={() => setIsActive(false)} />}
      {children}
    </SplashScreenContext.Provider>
  );
}

export function useSplashScreen() {
  return useContext(SplashScreenContext);
}
