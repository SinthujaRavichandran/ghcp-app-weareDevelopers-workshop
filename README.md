# Mastering the GitHub Copilot App

WeAreDevelopers India, 25 November 2026, 15:30–17:30 IST. Romaan Shair and Siddhat Joshi.

This repository starts with a working, dependency-free session planner using fictional talks. The missing track filter is intentional.

[Workshop landing page](https://roshair.github.io/ghcp-app-weareDevelopers-workshop/) · [Lab guide](docs/guide.md)

## Run locally

Use Node.js 22.22.0. The `.nvmrc` file pins this repository's Node version; with nvm installed, run `nvm install` and `nvm use` from the repository root to install and select it. Then run these commands from the repository root, in order:

```sh
npm ci
npm test
npm run build
npm start
```

Open [the planner](http://127.0.0.1:4173/planner/) in a browser. Press `Ctrl+C` in the terminal to stop the server. No credentials or API keys are needed.

If port 4173 is already in use, start the server on another port from the repository root:

```sh
# macOS or Linux
PORT=4174 npm start
```

```powershell
# PowerShell
$env:PORT = "4174"; npm start
```

With either command, open http://127.0.0.1:4174/planner/ instead.

- `docs/planner/` — app source.
- `test/` — Node's built-in test runner.
- `dist/planner/` — generated static build.
