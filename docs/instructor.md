# Instructor runbook

- Use the [lab guide](guide.md) for the 120-minute timing. Start demos from a fresh clone and use only fictional content.
- From `main`, run `npm ci`, `npm test`, `npm run build`, and `npm start`; check that the starter shows six cards and no filter. Then open `checkpoint/complete` in a separate worktree and confirm the two Engineering sessions and retained saved state.
- Open the landing page from a phone without an authenticated GitHub tab. Scan `assets/workshop-qr.png` using a native scanner, check branches and issues, and open the feedback form in a signed-in tab without submitting it.
- Test the Copilot app, GitHub sign-in, repository trust and enabled account previews on the actual presenter machine. Verify the demo-repository PR's initial failing check, prepared review feedback and supported security findings separately. Never rehearse against attendee upstream.
- Prepare short fallback clips in an authorized demo environment. Start each with the app view and precondition, record one flow, then end on the observable result. Verify playback offline. Keep credentials, private organization data and personal notifications off screen.

| Fallback clip | What to capture | Status |
|---|---|---|
| Agent Merge | Prepared review comment or failing check, agent progress, rechecked result; no merge required | Pending |
| Security findings | A genuine finding in the demo repository and where its evidence is shown | Pending |
| ADO authentication-dependent flow | Authorized demo project after sign-in, then one supported action; never record credential entry | Pending |
| Computer Use | A permitted interaction with the fictional planner and its visible result | Pending |
