
import { createContext, useContext, useState, useEffect } from "react";

type AccessibilityContextType = {
  fontSize: "normal" | "large" | "x-large";
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  resetFontSize: () => void;
  highContrast: boolean;
  toggleContrast: () => void;
};

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [fontSize, setFontSize] = useState<"normal" | "large" | "x-large">(() => {
    const saved = localStorage.getItem("fontSize");
    return saved === "large" || saved === "x-large" ? saved : "normal";
  });

  const [highContrast, setHighContrast] = useState<boolean>(() => {
    return localStorage.getItem("highContrast") === "true";
  });

  useEffect(() => {
    // Apply font size to document
    document.documentElement.classList.remove("text-normal", "text-large", "text-x-large");
    document.documentElement.classList.add(`text-${fontSize}`);
    localStorage.setItem("fontSize", fontSize);
  }, [fontSize]);

  useEffect(() => {
    // Apply contrast to document
    if (highContrast) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }
    localStorage.setItem("highContrast", String(highContrast));
  }, [highContrast]);

  const increaseFontSize = () => {
    setFontSize(prev => prev === "normal" ? "large" : "x-large");
  };

  const decreaseFontSize = () => {
    setFontSize(prev => prev === "x-large" ? "large" : "normal");
  };

  const resetFontSize = () => {
    setFontSize("normal");
  };

  const toggleContrast = () => {
    setHighContrast(prev => !prev);
  };

  return (
    <AccessibilityContext.Provider value={{
      fontSize,
      increaseFontSize,
      decreaseFontSize,
      resetFontSize,
      highContrast,
      toggleContrast
    }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error("useAccessibility must be used within an AccessibilityProvider");
  }
  return context;
}
