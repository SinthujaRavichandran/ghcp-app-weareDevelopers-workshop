import { filterSessions, sessions, toggleSaved } from './sessions.js';

const list = document.querySelector('#sessions');
const count = document.querySelector('#count');
const trackFilter = document.querySelector('#track-filter');
let saved = new Set();

function updateSchedule() {
  const visibleSessions = filterSessions(sessions, trackFilter.value);
  list.replaceChildren(...visibleSessions.map(sessionCard));
  count.textContent = `${visibleSessions.length} shown · ${saved.size} saved`;
}

function sessionCard(session) {
  const card = document.createElement('li');
  const meta = document.createElement('p');
  meta.className = 'meta';
  meta.textContent = `${session.time} · ${session.track}`;
  const title = document.createElement('h3');
  title.textContent = session.title;
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = 'Save';
  button.setAttribute('aria-label', `Save ${session.title}`);
  const updateButton = () => button.setAttribute('aria-pressed', String(saved.has(session.id)));
  updateButton();
  button.addEventListener('click', () => {
    saved = toggleSaved(saved, session.id);
    updateButton();
    updateCount();
  });
  card.append(meta, title, button);
  return card;
}

trackFilter.addEventListener('change', updateSchedule);
updateSchedule();
