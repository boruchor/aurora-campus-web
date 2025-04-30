
import React from 'react';
import { useTheme } from './ThemeProvider';
import { useAccessibility } from './AccessibilityProvider';
import { Button } from "@/components/ui/button";
import SearchBar from './SearchBar';
import LanguageSwitcher from './LanguageSwitcher';
import { Sun, Moon, ZoomIn, ZoomOut, Contrast } from "lucide-react";

const TopBar = () => {
  const { theme, toggleTheme } = useTheme();
  const { 
    increaseFontSize, 
    decreaseFontSize,
    toggleContrast,
    highContrast
  } = useAccessibility();

  return (
    <div className="bg-slate-100 dark:bg-slate-800 py-2 border-b border-slate-200 dark:border-slate-700">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex-1 min-w-[200px]">
          <SearchBar />
        </div>
        
        <div className="flex items-center space-x-2">
          {/* Accessibility Controls */}
          <div className="flex items-center space-x-1">
            <Button
              variant="outline"
              size="icon"
              onClick={decreaseFontSize}
              aria-label="Decrease font size"
              className="h-8 w-8"
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={increaseFontSize}
              aria-label="Increase font size"
              className="h-8 w-8"
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={toggleContrast}
              aria-label="Toggle high contrast"
              className={`h-8 w-8 ${highContrast ? 'bg-slate-300 dark:bg-slate-600' : ''}`}
            >
              <Contrast className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Language Switcher */}
          <LanguageSwitcher />
          
          {/* Theme Toggle */}
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="h-8 w-8"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
