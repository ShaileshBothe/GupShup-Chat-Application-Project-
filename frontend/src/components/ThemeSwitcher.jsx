import React, { useState } from 'react';
import { useThemeStore } from '../store/useThemeStore';
import { THEMES } from '../constants';
import { Palette } from 'lucide-react';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useThemeStore();
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn btn-ghost btn-sm gap-2"
        aria-label="Theme switcher"
      >
        <Palette className="w-4 h-4" />
        <span className="hidden sm:inline capitalize">{theme}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-base-200 rounded-lg shadow-lg border border-base-300 z-50 max-h-96 overflow-y-auto">
          <div className="p-2">
            {THEMES.map((themeName) => (
              <button
                key={themeName}
                onClick={() => handleThemeChange(themeName)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  theme === themeName
                    ? 'bg-primary text-primary-content'
                    : 'hover:bg-base-300'
                }`}
              >
                <span className="capitalize">{themeName}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Backdrop to close dropdown */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default ThemeSwitcher; 