"use client";

import { useTheme } from "./ThemeProvider";

export default function DarkModeButton() {
  const { dark, setDark } = useTheme();

  return (
    <button
      onClick={() => setDark(!dark)}
      className="bg-slate-800 px-4 py-2 rounded-lg"
    >
      {dark ? "☀ Light" : "🌙 Dark"}
    </button>
  );
}
