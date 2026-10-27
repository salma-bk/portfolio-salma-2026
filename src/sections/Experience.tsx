import { experiences } from '../data/content';

export function Experience() {
  return (
    <section id="parcours" className="section" aria-labelledby="titre-parcours">
      <div className="container">
        <p className="kicker">Parcours</p>
        <h2 id="titre-parcours">Parcours professionnel</h2>
        <p className="muted">Du plus récent au plus ancien.</p>

        <ol className="history-list">
          {experiences.map((e) => (
            <li key={e.id} className="card history-item">
              <div className="history-item__head">
                <h3>{e.client}</h3>
                <span className="history-item__period">{e.period}</span>
              </div>
              <p className="case__meta">{e.role}</p>
              <p>{e.context}</p>
              <ul className="tags" aria-label="Technologies">
                {e.stack.map((s) => (
                  <li key={s} className="tag">
                    {s}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
