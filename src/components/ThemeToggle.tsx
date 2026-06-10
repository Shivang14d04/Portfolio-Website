import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-dark-card/80 dark:hover:bg-slate-800 border border-slate-200/50 dark:border-dark-border/80 text-slate-700 dark:text-yellow-400 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-sm hover:shadow-glow-primary focus:outline-none"
      aria-label="Toggle dark/light theme"
    >
      <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
        <div
          className={`absolute transition-all duration-500 transform ${
            darkMode 
              ? 'rotate-0 scale-100 opacity-100' 
              : 'rotate-90 scale-0 opacity-0'
          }`}
        >
          <Sun className="w-5 h-5" />
        </div>
        <div
          className={`absolute transition-all duration-500 transform ${
            darkMode 
              ? '-rotate-90 scale-0 opacity-0' 
              : 'rotate-0 scale-100 opacity-100'
          }`}
        >
          <Moon className="w-5 h-5 text-indigo-600" />
        </div>
      </div>
    </button>
  );
};
