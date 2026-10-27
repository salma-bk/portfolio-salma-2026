import { sideProjects } from '../data/content';

export function SideProjects() {
  return (
    <section id="projets-perso" className="section" aria-labelledby="titre-projets-perso">
      <div className="container">
        <p className="kicker">Projets personnels</p>
        <h2 id="titre-projets-perso">Projets personnels</h2>
        <p className="muted">Projets développés en dehors des missions, pour explorer et pratiquer.</p>

        <ul className="projects-grid">
          {sideProjects.map((p) => (
            <li key={p.id} className="card project-card">
              <div className="project-card__thumb">
                <img
                  src={p.image}
                  alt={`Capture d'écran du site ${p.title}`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="case__meta">{p.type}</p>
              <h3>{p.title}</h3>
              <p>{p.context}</p>
              <ul className="tags" aria-label="Technologies">
                {p.stack.map((s) => (
                  <li key={s} className="tag">
                    {s}
                  </li>
                ))}
              </ul>
              <a
                className="button button--ghost project-card__link"
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le projet <span className="sr-only">(nouvel onglet)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
