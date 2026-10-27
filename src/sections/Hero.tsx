import { profile, proofs } from '../data/content';

export function Hero() {
  const [firstName, ...rest] = profile.name.split(' ');
  return (
    <section id="accueil" className="hero section" aria-labelledby="titre-accueil">
      <div className="container">
        <p className="hero__eyebrow muted">{profile.experience}</p>
        <h1 id="titre-accueil" className="hero__title">
          <span className="highlight">{firstName}</span> {rest.join(' ')}
        </h1>
        <p className="hero__role">{profile.title}</p>
        <p className="hero__promise">{profile.promise}</p>
        <ul className="proofs" aria-label="Résultats clés">
          {proofs.map((p) => (
            <li key={p.value} className="card proof">
              <span className="proof__value">{p.value}</span>
              <span className="muted">{p.label}</span>
            </li>
          ))}
        </ul>
        <div className="hero__actions">
          <a className="button hero__cta" href="#projets">
            Voir les études de cas
          </a>
          <a className="button button--ghost" href="/cv-salma-ben-khalifa.pdf" download>
            Télécharger mon CV (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
