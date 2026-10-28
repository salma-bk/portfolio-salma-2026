import { useEffect, useRef, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

const LINKS = [
  { href: '#parcours', label: 'Parcours' },
  { href: '#qualite', label: 'Qualité' },
  { href: '#design-system', label: 'Design system' },
  { href: '#projets', label: 'Projets' },
  { href: '#projets-perso', label: 'Projets perso' },
  { href: '#formations', label: 'Formations' },
  { href: '#quiz', label: 'Quiz' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const onClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('click', onClickOutside);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('click', onClickOutside);
    };
  }, [open]);

  return (
    <header className="header" ref={headerRef}>
      <div className="container header__inner">
        <a className="header__name" href="#accueil">
          <span className="header__mark" aria-hidden="true">
            SB
          </span>
          Salma Ben Khalifa
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="menu-principal"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="nav-toggle__bar" aria-hidden="true" />
        </button>

        <nav aria-label="Navigation principale" id="menu-principal" data-open={open}>
          <ul className="header__links">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
