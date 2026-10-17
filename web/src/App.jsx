import { useEffect, useMemo, useState } from 'react';
import { lessons, TOTAL_QUESTIONS } from './data/lessons.js';
import './styles/index.css';

const STORAGE_KEY = 'sustainable-cities-olt-progress-v2';
const EMPTY_PROGRESS = { answers: {}, misses: {}, scenarioAnswers: {}, scenarioMisses: {}, completionOrder: [] };

const scenarios = {
  stormwater: {
    title: 'A new parking lot is proposed next to a stream.',
    description: 'Which response is most likely to help manage the additional stormwater?',
    choices: [
      'Cover every remaining green area with asphalt',
      'Include appropriate permeable surfaces and planted runoff areas',
      'Remove existing drains and hope for less rain'
    ],
    correct: 1,
    hint: 'Look for a solution that gives water more places to slow, soak in or be stored.',
    explanation: 'A combination of suitable permeable surfaces and planted runoff features may help reduce and manage the additional runoff. The specific design needs site assessment.'
  },
  drainage: {
    title: 'Your rain garden is filling with sediment.',
    description: 'What should the maintenance team do?',
    choices: [
      'Ignore the buildup indefinitely',
      'Pour concrete over the garden',
      'Inspect and remove sediment as appropriate to restore function'
    ],
    correct: 2,
    hint: 'Even green infrastructure needs ongoing care.',
    explanation: 'Sediment accumulation can reduce drainage performance. Routine inspection and appropriate sediment removal help maintain the system.'
  },
  resilience: {
    title: 'A flood warning is active and a road underpass is flooded.',
    description: 'What is the safest response?',
    choices: [
      'Use an official alternative route and avoid the flooded underpass',
      'Drive through quickly before the water gets deeper',
      'Wade through to find out how deep it is'
    ],
    correct: 0,
    hint: 'Do not enter water when its depth, current or road condition is uncertain.',
    explanation: 'Avoid driving or walking into floodwater. Use safe routes and follow official local warnings and emergency instructions.'
  }
};

const achievements = [
  { id: 'first', icon: '💧', title: 'First Drop', description: 'Answer your first question', when: (s) => s.completed >= 1 },
  { id: 'half', icon: '⚡', title: 'Momentum', description: 'Complete 15 knowledge checks', when: (s) => s.completed >= 15 },
  { id: 'rain', icon: '🌧️', title: 'Runoff Detective', description: 'Finish Stormwater Basics', when: (s) => s.moduleCompleted[0] === 10 },
  { id: 'green', icon: '🌿', title: 'Green City Builder', description: 'Finish Sustainable Drainage', when: (s) => s.moduleCompleted[1] === 10 },
  { id: 'safe', icon: '🛟', title: 'Resilience Champion', description: 'Finish Flood Resilience', when: (s) => s.moduleCompleted[2] === 10 },
  { id: 'lab', icon: '🏙️', title: 'City Strategist', description: 'Solve all three field challenges', when: (s) => s.scenariosCompleted === 3 },
  { id: 'master', icon: '🏆', title: 'Stormwater Scholar', description: 'Complete all 30 questions', when: (s) => s.completed === TOTAL_QUESTIONS }
];

function loadProgress() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if (parsed && typeof parsed === 'object' && parsed.answers && parsed.misses && parsed.scenarioAnswers) {
      return {
        answers: parsed.answers,
        misses: parsed.misses,
        scenarioAnswers: parsed.scenarioAnswers,
        scenarioMisses: parsed.scenarioMisses || {},
        completionOrder: Array.isArray(parsed.completionOrder) ? parsed.completionOrder : []
      };
    }
  } catch {
    // Storage is optional. The app still works in a restricted browser.
  }
  return EMPTY_PROGRESS;
}

function computeStats(progress) {
  const moduleCompleted = lessons.map((lesson) => lesson.questions.filter((q) => progress.answers[q.id]).length);
  const completed = moduleCompleted.reduce((total, number) => total + number, 0);
  const answers = Object.values(progress.answers);
  const scenariosCompleted = Object.keys(progress.scenarioAnswers).length;
  const xp = answers.reduce((sum, answer) => sum + (answer.xp || 0), 0) +
    Object.values(progress.scenarioAnswers).reduce((sum, challenge) => sum + (challenge.xp || 0), 0);
  let streak = 0;
  for (const questionId of [...progress.completionOrder].reverse()) {
    if (progress.answers[questionId]?.firstTry) streak++;
    else break;
  }
  return { completed, moduleCompleted, scenariosCompleted, xp, streak, level: Math.floor(xp / 120) + 1 };
}

function RunoffLab() {
  const [paved, setPaved] = useState(55);
  const [rainfall, setRainfall] = useState(40);
  // Explicitly illustrative coefficients, NOT calibrated runoff predictions.
  const roughShare = (paved / 100) * 0.85 + (1 - paved / 100) * 0.2;
  const runoffDepth = Math.round(rainfall * roughShare);
  const storedDepth = rainfall - runoffDepth;

  return (
    <section className="card lab-card" aria-labelledby="lab-heading">
      <div className="section-kicker">INTERACTIVE CITY LAB</div>
      <h3 id="lab-heading">What if we pave more?</h3>
      <p className="muted smaller">Explore how surfaces might affect runoff in a simplified classroom example.</p>
      <div className="lab-control">
        <label htmlFor="paved-range">Impervious surface <strong>{paved}%</strong></label>
        <input id="paved-range" type="range" min="0" max="100" step="5" value={paved} onChange={(e) => setPaved(Number(e.target.value))} />
        <div className="range-labels"><span>More green space</span><span>More pavement</span></div>
      </div>
      <div className="lab-control">
        <label htmlFor="rain-range">Rainfall scenario <strong>{rainfall} mm</strong></label>
        <input id="rain-range" type="range" min="10" max="100" step="10" value={rainfall} onChange={(e) => setRainfall(Number(e.target.value))} />
      </div>
      <div className="lab-result" aria-live="polite">
        <div className="result-row"><span>Illustrative surface runoff</span><strong>{runoffDepth} mm</strong></div>
        <div className="stacked-bar" role="img" aria-label={`${runoffDepth} millimetres illustrative runoff; ${storedDepth} millimetres other pathways`}>
          <span className="stack-runoff" style={{ width: `${roughShare * 100}%` }} />
          <span className="stack-other" style={{ width: `${(1 - roughShare) * 100}%` }} />
        </div>
        <div className="lab-legend"><span><i className="legend-dot runoff" /> Runoff</span><span><i className="legend-dot other" /> Other pathways</span></div>
      </div>
      <p className="lab-disclaimer">Educational illustration only. Coefficients are assumed; not a calibrated hydrological model or flood prediction.</p>
    </section>
  );
}

export default function App() {
  const [progress, setProgress] = useState(loadProgress);
  const [activeModule, setActiveModule] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selected, setSelected] = useState('');
  const [notice, setNotice] = useState(null);
  const [scenarioNotice, setScenarioNotice] = useState(null);
  const [showAchievements, setShowAchievements] = useState(false);
  const stats = useMemo(() => computeStats(progress), [progress]);
  const module = lessons[activeModule];
  const question = module.questions[activeQuestion];
  const solved = progress.answers[question.id];
  const scenario = scenarios[module.id];
  const solvedScenario = progress.scenarioAnswers[module.id];
  const earned = achievements.filter((item) => item.when(stats));
  const totalXPToNextLevel = 120;
  const xpInLevel = stats.xp % totalXPToNextLevel;

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); } catch { /* local saving optional */ }
  }, [progress]);

  useEffect(() => {
    const solvedAnswer = progress.answers[question.id];
    setSelected(solvedAnswer ? String(solvedAnswer.selected) : '');
    setNotice(null);
  }, [activeModule, activeQuestion, question.id, progress.answers]);

  useEffect(() => { setScenarioNotice(null); }, [activeModule]);

  function chooseModule(index) {
    setActiveModule(index);
    setActiveQuestion(0);
  }

  function checkAnswer(event) {
    event.preventDefault();
    if (selected === '' || solved) return;
    const chosen = Number(selected);
    if (chosen !== question.correct) {
      setProgress((prev) => ({
        ...prev,
        misses: { ...prev.misses, [question.id]: (prev.misses[question.id] || 0) + 1 }
      }));
      setNotice({ type: 'retry', text: `Not quite. ${question.hint}` });
      return;
    }
    const firstTry = !(progress.misses[question.id] > 0);
    const xp = firstTry ? 10 : 6;
    setProgress((prev) => {
      if (prev.answers[question.id]) return prev;
      return {
        ...prev,
        answers: { ...prev.answers, [question.id]: { selected: chosen, firstTry, xp } },
        completionOrder: [...prev.completionOrder, question.id]
      };
    });
    setNotice({ type: 'success', text: `Correct! +${xp} XP. ${question.explanation}` });
  }

  function answerScenario(index) {
    if (solvedScenario) return;
    if (index !== scenario.correct) {
      setProgress((prev) => ({ ...prev, scenarioMisses: { ...prev.scenarioMisses, [module.id]: (prev.scenarioMisses[module.id] || 0) + 1 } }));
      setScenarioNotice({ type: 'retry', text: scenario.hint });
      return;
    }
    const xp = progress.scenarioMisses[module.id] ? 8 : 15;
    setProgress((prev) => {
      if (prev.scenarioAnswers[module.id]) return prev;
      return { ...prev, scenarioAnswers: { ...prev.scenarioAnswers, [module.id]: { selected: index, xp } } };
    });
    setScenarioNotice({ type: 'success', text: `Great city-planning decision! +${xp} XP. ${scenario.explanation}` });
  }

  function advanceQuestion() {
    if (activeQuestion < module.questions.length - 1) {
      setActiveQuestion(activeQuestion + 1);
    } else if (activeModule < lessons.length - 1) {
      chooseModule(activeModule + 1);
    } else {
      setShowAchievements(true);
    }
  }

  function resetProgress() {
    if (!window.confirm('Reset all OLT quiz answers, XP, achievements and field challenges on this browser?')) return;
    setProgress({ answers: {}, misses: {}, scenarioAnswers: {}, scenarioMisses: {}, completionOrder: [] });
    setSelected('');
    setNotice(null);
    setScenarioNotice(null);
    setActiveQuestion(0);
    setActiveModule(0);
    setShowAchievements(false);
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to learning content</a>
      <header className="topbar">
        <div className="topbar-inner wrap">
          <a className="brand" href="#top" aria-label="OLT Stormwater Academy home">
            <span className="brand-mark" aria-hidden="true">◉</span>
            <span><span className="brand-name">STORMWATER <strong>ACADEMY</strong></span><span className="brand-sub">ONLINE LEARNING TOOL</span></span>
          </a>
          <span className="uni-label">LUT University <span className="uni-separator">·</span> Sustainable Cities</span>
        </div>
      </header>

      <div id="top" className="hero">
        <div className="wrap hero-content">
          <div className="hero-copy">
            <div className="hero-kicker"><span className="pulse-dot" /> LEARN · EXPLORE · BUILD RESILIENCE</div>
            <h1>Small actions.<br /><em>Resilient cities.</em></h1>
            <p>Explore the journey of rainwater through our cities. Take on 3 learning missions, solve 30 questions and earn your Stormwater Scholar badge.</p>
            <div className="hero-chips"><span>🌧️ Real-world topics</span><span>🧠 30 challenges</span><span>🏆 Earn achievements</span></div>
          </div>
          <div className="hero-graphic" aria-hidden="true">
            <div className="glow-one" /><div className="glow-two" />
            <div className="city-silhouette"><span /><span /><span /><span /><span /><span /></div>
            <div className="flow-curve curve-one" /><div className="flow-curve curve-two" />
            <div className="rain-mark rain-one">✦</div><div className="rain-mark rain-two">✦</div><div className="rain-mark rain-three">✦</div>
            <div className="hero-circle"><span>💧</span><strong>{Math.round((stats.completed / TOTAL_QUESTIONS) * 100)}%</strong><small>completed</small></div>
          </div>
        </div>
      </div>

      <div className="wrap">
        <section className="dashboard" aria-label="Your learning statistics">
          <div className="dashboard-cell"><div className="stat-icon icon-gold" aria-hidden="true">✦</div><div><strong>{stats.xp} <span>XP</span></strong><small>Experience earned</small></div></div>
          <div className="dashboard-cell"><div className="stat-icon icon-blue" aria-hidden="true">✓</div><div><strong>{stats.completed}<span> / {TOTAL_QUESTIONS}</span></strong><small>Questions solved</small></div></div>
          <div className="dashboard-cell"><div className="stat-icon icon-orange" aria-hidden="true">🔥</div><div><strong>{stats.streak}<span> in a row</span></strong><small>First-try streak</small></div></div>
          <div className="dashboard-cell dashboard-level"><div><div className="level-top"><strong>Level {stats.level}</strong><small>{xpInLevel}/120 XP to next</small></div><div className="level-track" role="progressbar" aria-label="Progress to next level" aria-valuemin="0" aria-valuemax="120" aria-valuenow={xpInLevel}><span style={{ width: `${(xpInLevel / 120) * 100}%` }} /></div></div></div>
        </section>

        <div className="learning-grid" id="main-content">
          <aside className="sidebar" aria-label="Learning missions and tools">
            <section className="card mission-menu">
              <div className="section-kicker">YOUR LEARNING PATH</div>
              <h2>Mission map <span className="heading-count">3 missions</span></h2>
              <div className="mission-buttons">
                {lessons.map((item, index) => {
                  const done = stats.moduleCompleted[index];
                  return <button type="button" key={item.id} onClick={() => chooseModule(index)} className={`mission-item ${index === activeModule ? 'selected' : ''}`} aria-current={index === activeModule ? 'step' : undefined}>
                    <span className={`mission-icon accent-${item.accent}`} aria-hidden="true">{item.icon}</span>
                    <span className="mission-text"><strong>{item.shortTitle}</strong><small>{done}/10 completed</small><span className="small-track"><span style={{ width: `${done * 10}%` }} /></span></span>
                    <span className="mission-chevron" aria-hidden="true">›</span>
                  </button>;
                })}
              </div>
              <p className="menu-footnote">Your answers and XP are saved on this device.</p>
            </section>
            <RunoffLab />
          </aside>

          <main className="main-content">
            <section className={`card lesson-card accent-border-${module.accent}`} aria-labelledby="lesson-heading">
              <div className="lesson-heading-row">
                <div>
                  <div className="section-kicker">MISSION {module.number} <span className="dot-sep">·</span> {module.tag}</div>
                  <h2 id="lesson-heading">{module.title}</h2>
                  <p className="lesson-intro">{module.intro}</p>
                </div>
                <span className={`big-lesson-icon accent-${module.accent}`} aria-hidden="true">{module.icon}</span>
              </div>
              <div className="lesson-metadata"><span>◷ {module.duration}</span><span>◎ 10 knowledge checks</span><span>✦ {module.mission}</span></div>
              <h3 className="subsection-title">Before you start: 3 things to know</h3>
              <div className="concept-grid">
                {module.concepts.map((item) => <div className="concept" key={item.title}><span className="concept-symbol" aria-hidden="true">{item.icon}</span><strong>{item.title}</strong><p>{item.text}</p></div>)}
              </div>
            </section>

            <section className="card quiz-card" aria-labelledby="challenge-heading">
              <div className="quiz-heading">
                <div><div className="section-kicker">TEST YOUR KNOWLEDGE</div><h2 id="challenge-heading">Knowledge challenge <span className="question-counter">{activeQuestion + 1} of 10</span></h2></div>
                <span className="xp-pill" title="Correct on first attempt: 10 XP; after retry: 6 XP">✦ +10 XP</span>
              </div>
              <div className="question-steps" aria-label="Choose a question">
                {module.questions.map((q, index) => <button key={q.id} type="button" className={`step ${index === activeQuestion ? 'current' : ''} ${progress.answers[q.id] ? 'done' : ''}`} aria-label={`Question ${index + 1}${progress.answers[q.id] ? ', completed' : ''}`} aria-current={index === activeQuestion ? 'step' : undefined} onClick={() => setActiveQuestion(index)}>{progress.answers[q.id] ? '✓' : index + 1}</button>)}
              </div>
              <div className="quiz-content">
                <div className="question-meta"><span className={`difficulty difficulty-${question.level.toLowerCase()}`}>{question.level}</span><span>QUESTION {activeQuestion + 1} / 10</span></div>
                <h3>{question.question}</h3>
                <form onSubmit={checkAnswer}>
                  <fieldset className="answer-fieldset" disabled={Boolean(solved)}>
                    <legend className="sr-only">Choose one answer</legend>
                    {question.options.map((option, index) => <label key={index} className={`option ${selected === String(index) ? 'is-selected' : ''} ${solved && index === question.correct ? 'correct-option' : ''}`}>
                      <input type="radio" name={`answer-${question.id}`} value={index} checked={selected === String(index)} onChange={() => { setSelected(String(index)); if (notice?.type === 'retry') setNotice(null); }} />
                      <span className="option-letter" aria-hidden="true">{String.fromCharCode(65 + index)}</span><span className="option-text">{option}</span>
                      {solved && index === question.correct && <span className="option-check" aria-label="Correct answer">✓</span>}
                    </label>)}
                  </fieldset>
                  {(solved || notice) && <div className={`feedback ${solved ? 'success' : 'retry'}`} role="status" aria-live="polite">
                    <span className="feedback-symbol" aria-hidden="true">{solved ? '✓' : '↻'}</span>
                    <div><strong>{solved ? 'Nice work — you got it!' : 'Keep exploring'}</strong><p>{solved ? question.explanation : notice?.text}</p>{solved && <small>{solved.firstTry ? '+10 XP · first try!' : '+6 XP · learned through practice'}</small>}</div>
                  </div>}
                  <div className="quiz-actions">
                    {!solved ? <button className="action-btn" type="submit" disabled={selected === ''}>Check my answer <span aria-hidden="true">→</span></button> :
                      <button className="action-btn" type="button" onClick={advanceQuestion}>{activeQuestion === 9 && activeModule === 2 ? 'View achievements' : activeQuestion === 9 ? 'Next mission' : 'Next question'} <span aria-hidden="true">→</span></button>}
                    <span className="help-text">{solved ? 'Knowledge check complete' : 'Wrong answer? Use the hint and try again.'}</span>
                  </div>
                </form>
              </div>
            </section>

            <section className="card scenario-card" aria-labelledby="scenario-heading">
              <div className="scenario-top"><span className="scenario-icon" aria-hidden="true">🏙️</span><div><div className="section-kicker">BONUS MINI-MISSION <span className="dot-sep">·</span> +15 XP</div><h2 id="scenario-heading">City decision lab</h2></div></div>
              <p className="scenario-description"><strong>{scenario.title}</strong> {scenario.description}</p>
              <div className="scenario-options" role="group" aria-label="Choose a city planning response">
                {scenario.choices.map((choice, index) => <button key={choice} type="button" disabled={Boolean(solvedScenario)} onClick={() => answerScenario(index)} className={`scenario-choice ${solvedScenario?.selected === index ? 'scenario-correct' : ''}`}><span aria-hidden="true">{solvedScenario?.selected === index ? '✓' : String.fromCharCode(65 + index)}</span>{choice}</button>)}
              </div>
              {(solvedScenario || scenarioNotice) && <p role="status" aria-live="polite" className={`scenario-feedback ${solvedScenario ? 'good' : ''}`}>{solvedScenario ? `✓ ${scenario.explanation} (+${solvedScenario.xp} XP)` : `Hint: ${scenarioNotice?.text}`}</p>}
            </section>
          </main>
        </div>

        <section className="card achievements-card" aria-labelledby="achievements-heading">
          <div className="achievement-header"><div><div className="section-kicker">YOUR LEARNING REWARDS</div><h2 id="achievements-heading">Achievement gallery <span className="heading-count">{earned.length}/{achievements.length} unlocked</span></h2></div><button className="text-button" type="button" onClick={() => setShowAchievements((value) => !value)} aria-expanded={showAchievements}>{showAchievements ? 'Hide details ↑' : 'Show details ↓'}</button></div>
          <div className="achievement-grid">
            {achievements.map((badge) => <div key={badge.id} className={`achievement ${badge.when(stats) ? 'unlocked' : 'locked'}`} title={badge.description}><span className="achievement-emblem" aria-hidden="true">{badge.icon}</span><div><strong>{badge.title}</strong>{showAchievements && <small>{badge.description}</small>}</div>{badge.when(stats) && <span className="unlocked-mark" aria-label="Unlocked">✓</span>}</div>)}
          </div>
          {stats.completed === TOTAL_QUESTIONS && <div className="completion-banner" role="status"><span aria-hidden="true">🏆</span><div><strong>You did it! All 30 questions complete.</strong><p>You earned your Stormwater Scholar achievement. Explore the field challenges and revisit any lesson whenever you like.</p></div></div>}
        </section>

        <footer className="footer"><p><strong>OLT · Sustainable Cities</strong> — LUT University · Educational prototype</p><button type="button" className="reset-button" onClick={resetProgress}>Reset learning progress</button></footer>
      </div>
    </div>
  );
}
