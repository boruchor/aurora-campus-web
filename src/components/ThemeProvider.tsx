
import { createContext, useContext, useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Client-side rendering check
    if (typeof window === 'undefined') return 'light';
    
    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) return savedTheme;
    
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  });

  const [mounted, setMounted] = useState(false);

  // Handle hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // Remove old theme classes before adding new one
    document.documentElement.classList.remove("light", "dark", "high-contrast");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
    
    // Refresh AOS when theme changes to reapply animations
    if (typeof AOS !== 'undefined') {
      setTimeout(() => {
        AOS.refresh();
      }, 200);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
