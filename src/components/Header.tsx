import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a className="header__name" href="#accueil">
          <span className="header__mark" aria-hidden="true">
            SB
          </span>
          Salma Ben Khalifa
        </a>
        <nav aria-label="Navigation principale">
          <ul className="header__links">
            <li>
              <a href="#parcours">Parcours</a>
            </li>
            <li>
              <a href="#qualite">Qualité</a>
            </li>
            <li>
              <a href="#design-system">Design system</a>
            </li>
            <li>
              <a href="#projets">Projets</a>
            </li>
            <li>
              <a href="#projets-perso">Projets perso</a>
            </li>
            <li>
              <a href="#formations">Formations</a>
            </li>
            <li>
              <a href="#quiz">Quiz</a>
            </li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
