import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chat-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("chat-theme", theme);
    // Apply theme to document
    document.documentElement.setAttribute("data-theme", theme);
    set({ theme });
  },
  initializeTheme: () => {
    const savedTheme = localStorage.getItem("chat-theme") || "coffee";
    document.documentElement.setAttribute("data-theme", savedTheme);
    set({ theme: savedTheme });
  },
}));