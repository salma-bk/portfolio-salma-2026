import { useEffect, useRef, useState, type ReactNode } from 'react';
import { learningIntro, learningProject, learningSteps, type StepStatus } from '../data/learning';

const STATUS_LABEL: Record<StepStatus, string> = {
  'en-cours': 'En cours',
  prevu: 'Prévu',
};

// Fait apparaître un bloc au défilement (sans effet si l'utilisateur réduit les animations)
function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal${visible ? ' is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function Learning() {
  const enCours = learningSteps.filter((s) => s.status === 'en-cours').length;
  const prevus = learningSteps.length - enCours;

  return (
    <section id="apprentissage" className="section" aria-labelledby="titre-apprentissage">
      <div className="container">
        <p className="kicker">Apprentissage</p>
        <h2 id="titre-apprentissage">Ce que je me forme à apprendre</h2>
        <p className="muted learning-intro">{learningIntro}</p>
        <p className="learning-summary">
          <span className="status status--en-cours">{enCours} en cours</span>
          <span className="status status--prevu">{prevus} prévus</span>
        </p>

        <div className="learning-layout">
          <ol className="timeline" aria-label="Parcours de formation">
            {learningSteps.map((step, i) => (
              <li key={step.id} className="timeline__item">
                <span
                  className={`timeline__dot timeline__dot--${step.status}`}
                  aria-hidden="true"
                />
                <Reveal delay={i * 90}>
                  <div className="card timeline__card">
                    <div className="timeline__head">
                      <h3>{step.title}</h3>
                      <span className={`status status--${step.status}`}>
                        {STATUS_LABEL[step.status]}
                      </span>
                    </div>
                    <p>
                      <strong>Pourquoi :</strong> {step.why}
                    </p>
                    <p className="muted">
                      <strong>Où j’en suis :</strong> {step.now}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal delay={120}>
            <article className="card learning-project">
              <p className="kicker">Projet en cours</p>
              <h3>{learningProject.title}</h3>
              <p>{learningProject.summary}</p>
              <p className="muted">
                <strong>Problème :</strong> {learningProject.problem}
              </p>

              <h4>Déjà en place</h4>
              <ul>
                {learningProject.done.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>

              <h4>Ce que j’en retiens</h4>
              <ul>
                {learningProject.learned.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>

              <ul className="tags" aria-label="Technologies">
                {learningProject.stack.map((s) => (
                  <li key={s} className="tag">
                    {s}
                  </li>
                ))}
              </ul>

              <a
                className="button button--ghost learning-project__link"
                href={learningProject.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir la démo <span className="sr-only">(nouvel onglet)</span>
              </a>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
