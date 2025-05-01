
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
    if (savedTheme) return savedTheme;
    
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  });

  const [mounted, setMounted] = useState(false);

  // Handle hydration mismatch
  useEffect(() => {
    setMounted(true);
    
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // Apply theme to document
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
    
    // Refresh AOS when theme changes
    if (typeof window !== 'undefined' && AOS) {
      setTimeout(() => {
        AOS.refresh();
      }, 200);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
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
