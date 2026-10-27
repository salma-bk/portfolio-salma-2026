import { useState } from 'react';
import { profile, quizQuestions, type QuizQuestion } from '../data/content';

const QUESTION_COUNT = 4;

type Best = { score: number; total: number; attempts: number };

function shuffle<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function pickQuestions(): QuizQuestion[] {
  return shuffle(quizQuestions).slice(0, QUESTION_COUNT);
}

function readBest(): Best | null {
  try {
    const raw = localStorage.getItem('quiz-best');
    return raw ? (JSON.parse(raw) as Best) : null;
  } catch {
    return null; // stockage indisponible : pas de suivi personnel, le quiz reste jouable
  }
}

function writeBest(best: Best) {
  try {
    localStorage.setItem('quiz-best', JSON.stringify(best));
  } catch {
    /* ignore */
  }
}

function resultMessage(score: number, total: number): string {
  const ratio = score / total;
  if (ratio === 1) return 'Score parfait ! Vous avez tout retenu.';
  if (ratio >= 0.5) return 'Beau score, vous avez l’œil.';
  return 'Pas grave, l’essentiel est que vous ayez découvert mon profil.';
}

export function Quiz() {
  const [questions, setQuestions] = useState<QuizQuestion[]>(() => pickQuestions());
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [best, setBest] = useState<Best | null>(() => readBest());

  const current = questions[index];
  const isLast = index === questions.length - 1;

  const handleAnswer = (optionIndex: number) => {
    if (selected !== null) return;
    setSelected(optionIndex);
    if (optionIndex === current.correctIndex) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (!isLast) {
      setIndex((i) => i + 1);
      setSelected(null);
      return;
    }
    const updatedBest: Best = {
      score: best ? Math.max(best.score, score) : score,
      total: questions.length,
      attempts: (best?.attempts ?? 0) + 1,
    };
    writeBest(updatedBest);
    setBest(updatedBest);
    setFinished(true);
  };

  const handleRestart = () => {
    setQuestions(pickQuestions());
    setIndex(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  return (
    <section id="quiz" className="section" aria-labelledby="titre-quiz">
      <div className="container">
        <p className="kicker">Petit quiz</p>
        <h2 id="titre-quiz">Vous avez bien suivi ?</h2>
        <p className="muted">
          {QUESTION_COUNT} questions sur mon profil, résultat instantané. Suivi gardé uniquement
          dans votre navigateur, rien n’est envoyé ni partagé.
        </p>

        <div className="card quiz">
          {!finished ? (
            <>
              <div className="quiz__progress" aria-hidden="true">
                <div
                  className="quiz__progress-bar"
                  style={{ width: `${((index + 1) / questions.length) * 100}%` }}
                />
              </div>
              <p className="muted quiz__step">
                Question {index + 1} / {questions.length}
              </p>
              <h3 className="quiz__question">{current.question}</h3>
              <div className="quiz__options" role="group" aria-label="Réponses possibles">
                {current.options.map((option, i) => {
                  let state: 'default' | 'correct' | 'incorrect' = 'default';
                  if (selected !== null) {
                    if (i === current.correctIndex) state = 'correct';
                    else if (i === selected) state = 'incorrect';
                  }
                  return (
                    <button
                      key={option}
                      type="button"
                      className="quiz__option"
                      data-state={state}
                      onClick={() => handleAnswer(i)}
                      disabled={selected !== null}
                      aria-pressed={selected === i}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
              <p className="sr-only" aria-live="polite">
                {selected === null
                  ? ''
                  : selected === current.correctIndex
                    ? 'Bonne réponse !'
                    : `Pas tout à fait. La bonne réponse était : ${current.options[current.correctIndex]}`}
              </p>
              {selected !== null && (
                <button type="button" className="button quiz__next" onClick={handleNext}>
                  {isLast ? 'Voir mon résultat' : 'Question suivante'}
                </button>
              )}
            </>
          ) : (
            <div className="quiz__result">
              <p className="vital__value quiz__score" aria-live="polite">
                {score} / {questions.length}
              </p>
              <p>{resultMessage(score, questions.length)}</p>
              {best && best.attempts > 1 && (
                <p className="muted">
                  Meilleur score : {best.score} / {best.total} ({best.attempts} essais)
                </p>
              )}
              <div className="hero__actions">
                <a className="button" href={`mailto:${profile.email}`}>
                  Me contacter
                </a>
                <button type="button" className="button button--ghost" onClick={handleRestart}>
                  Rejouer
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
