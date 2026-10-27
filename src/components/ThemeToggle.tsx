import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

function readStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem('theme');
    return value === 'light' || value === 'dark' ? value : null;
  } catch {
    return null; // stockage indisponible : on suit le système
  }
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = readStoredTheme();
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const next: Theme = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      className="button theme-toggle"
      onClick={() => setTheme(next)}
      aria-label={`Passer en thème ${next === 'dark' ? 'sombre' : 'clair'}`}
    >
      {theme === 'dark' ? '☀︎ Clair' : '☾ Sombre'}
    </button>
  );
}
