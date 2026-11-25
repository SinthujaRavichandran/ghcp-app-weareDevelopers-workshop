import { deepEqual, equal } from 'node:assert/strict';
import { test } from 'node:test';
import { filterSessions, sessions, toggleSaved } from '../docs/planner/sessions.js';

test('session IDs are unique so saves cannot select multiple cards', () => {
  equal(new Set(sessions.map(({ id }) => id)).size, sessions.length);
});

test('saving and removing a session keeps other selections intact', () => {
  const saved = new Set(['keynote']);
  const added = toggleSaved(saved, 'systems');
  deepEqual([...added], ['keynote', 'systems']);
  deepEqual([...toggleSaved(added, 'keynote')], ['systems']);
  deepEqual([...saved], ['keynote']);
});

test('filtering by track preserves all sessions by default and chronological order', () => {
  deepEqual(filterSessions(sessions, 'All tracks'), sessions);
  deepEqual(
    filterSessions(sessions, 'Engineering').map(({ id, time }) => ({ id, time })),
    [
      { id: 'systems', time: '09:30' },
      { id: 'small-prs', time: '10:30' },
    ],
  );
});
