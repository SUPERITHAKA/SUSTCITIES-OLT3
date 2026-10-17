import { useState } from 'react';
import { lessons } from './data/lessons.js';

export default function App() {
  const [activeLesson, setActiveLesson] = useState(0);
  const [answers, setAnswers] = useState({});

  const lesson = lessons[activeLesson];
  const selectedAnswer = answers[lesson.id];

  const completed = lessons.filter(
    (item) => answers[item.id] !== undefined
  ).length;

  const score = lessons.filter(
    (item) => answers[item.id] === item.correctAnswer
  ).length;

  function answerQuestion(index) {
    setAnswers((previous) => ({
      ...previous,
      [lesson.id]: index
    }));
  }

  return (
    <div className="app">
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <header className="site-header">
        <div className="container">
          <p className="eyebrow">
            LUT UNIVERSITY | SUSTAINABLE CITIES
          </p>
          <h1>Stormwater &amp; Flood Resilience</h1>
          <p>
            An interactive online learning experience
            for more resilient cities.
          </p>
        </div>
      </header>

      <main id="main" className="container">
        <section aria-labelledby="progress-heading"
                 className="panel">
          <h2 id="progress-heading">Your learning progress</h2>
          <progress value={completed} max={lessons.length}>
            {completed} of {lessons.length}
          </progress>
          <p>
            {completed} of {lessons.length} knowledge checks
            completed. Correct answers: {score}.
          </p>
        </section>

        <nav className="panel"
             aria-label="Learning modules">
          <h2>Learning modules</h2>
          <div className="module-list">
            {lessons.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={
                  index === activeLesson
                    ? 'module-button active'
                    : 'module-button'
                }
                aria-current={
                  index === activeLesson ? 'step' : undefined
                }
                onClick={() => setActiveLesson(index)}
              >
                {index + 1}. {item.title}
              </button>
            ))}
          </div>
        </nav>

        <article className="panel"
                 aria-labelledby="lesson-title">
          <p className="eyebrow">
            MODULE {activeLesson + 1} OF {lessons.length}
          </p>
          <h2 id="lesson-title">{lesson.title}</h2>
          <p className="lead">{lesson.description}</p>
          <p>{lesson.content}</p>

          <section className="quiz"
                   aria-labelledby="quiz-heading">
            <h3 id="quiz-heading">Knowledge check</h3>

            <fieldset>
              <legend>{lesson.question}</legend>

              {lesson.options.map((option, index) => (
                <label key={index} className="answer">
                  <input
                    type="radio"
                    name={`answer-${lesson.id}`}
                    checked={selectedAnswer === index}
                    onChange={() => answerQuestion(index)}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </fieldset>

            <div role="status" aria-live="polite">
              {selectedAnswer !== undefined && (
                <p className="feedback">
                  {selectedAnswer === lesson.correctAnswer
                    ? 'Correct! Well done.'
                    : 'Not quite. Try another answer.'}
                </p>
              )}
            </div>
          </section>

          {activeLesson < lessons.length - 1 && (
            <button
              className="primary-button"
              type="button"
              onClick={() => setActiveLesson(activeLesson + 1)}
            >
              Next module
            </button>
          )}
        </article>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>
            Sustainable Cities | Online Learning Tool
            | LUT University | 2026
          </p>
        </div>
      </footer>
    </div>
  );
}