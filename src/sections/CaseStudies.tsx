import { caseStudies } from '../data/content';

export function CaseStudies() {
  return (
    <section id="projets" className="section" aria-labelledby="titre-projets">
      <div className="container">
        <p className="kicker">Études de cas</p>
        <h2 id="titre-projets">Études de cas</h2>
        <p className="muted">
          Chaque projet suit la même logique : contexte, hypothèse, décisions et compromis, résultats.
        </p>

        <ol className="cases">
          {caseStudies.map((c) => (
            <li key={c.id} className="card case">
              <header>
                <p className="muted case__meta">
                  {c.period} · {c.role}
                </p>
                <h3>{c.client}</h3>
              </header>

              <h4>Contexte</h4>
              <p>{c.context}</p>

              <h4>Hypothèse</h4>
              <p>{c.hypothesis}</p>

              <h4>Décisions et compromis</h4>
              <ul>
                {c.decisions.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>

              <h4>Résultats</h4>
              <ul>
                {c.results.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>

              <ul className="tags" aria-label="Technologies">
                {c.stack.map((s) => (
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
