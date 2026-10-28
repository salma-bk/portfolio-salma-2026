import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import { Experience } from './sections/Experience';
import { QualityLive } from './sections/QualityLive';
import { TokenExplorer } from './sections/TokenExplorer';
import { CaseStudies } from './sections/CaseStudies';
import { SideProjects } from './sections/SideProjects';
import { Education } from './sections/Education';
import { Quiz } from './sections/Quiz';
import { Learning } from './sections/Learning';
import { profile } from './data/content';

export function App() {
  return (
    <>
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>
      <Header />
      <main id="contenu">
        <Hero />
        <Experience />
        <QualityLive />
        <TokenExplorer />
        <CaseStudies />
        <SideProjects />
        <Learning />
        <Education />
        <Quiz />
      </main>
      <footer className="footer">
        <div className="container footer__inner muted">
          <p>{profile.name}</p>
          <ul className="footer__links">
            <li>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <a href={profile.github}>GitHub</a>
            </li>
            <li>
              <a href={profile.linkedin}>LinkedIn</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
