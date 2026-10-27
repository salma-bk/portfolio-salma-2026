import { certifications, formations } from '../data/content';

export function Education() {
  return (
    <section id="formations" className="section" aria-labelledby="titre-formations">
      <div className="container">
        <p className="kicker">Formations</p>
        <h2 id="titre-formations">Formations &amp; certifications</h2>

        <div className="formations-grid">
          <div>
            <h3>Formations</h3>
            <ul className="formation-list">
              {formations.map((f) => (
                <li key={f.degree} className="card formation-item">
                  <span>{f.degree}</span>
                  <span className="muted">
                    {f.institute} · {f.year}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Certifications</h3>
            <ul className="formation-list">
              {certifications.map((c) => (
                <li key={c} className="card cert-item">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
