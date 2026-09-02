# Personal OS

**Personal command center + second brain + Knowledge Engine + AI COO.**

Personal OS is a zero-cost, browser-based personal operating system built around:

**Capture → Organize → Understand → Recommend → Act**

## Current version: V7.1 — Runtime Stability

V7.1 keeps the V7 Knowledge Engine but removes the React/Babel compilation dependency from the application shell. The site now uses a dependency-free browser runtime so GitHub Pages can render the interface directly without a client-side compilation step.

## V7.1 — Blank-page stability release

### Runtime reliability

- Removed React/Babel from the active application shell.
- The app now renders with native browser JavaScript.
- No framework compilation is required before the interface mounts.
- Removed the extra CDN runtime failure points from the application layer.
- Kept the same static GitHub Pages deployment model.

### Data compatibility

- V7.1 uses `personal_os_v71` as its active workspace key.
- Older `personal_os_v7`, `personal_os_v6`, `personal_os_v5`, `personal_os_v4`, `personal_os_v3`, `personal_os_v2` and `personal_os_v1` data is still considered during startup migration.
- Workspace data remains local to the browser.

### Knowledge Engine retained

- 176 generated built-in reference entries across 11 domains.
- Linux
- RHEL
- Networking
- Cybersecurity
- SIEM / SOC
- Cloud
- DevOps
- Programming
- Databases
- AI & ML
- Productivity

The corpus is generated from topic packs inside the static application rather than fetched from a remote service.

## V7.0 — Knowledge Engine

V7 made knowledge a first-class product surface with a large built-in technical reference library alongside private notes.

- Domain browsing.
- Built-in vs Personal knowledge distinction.
- Article views.
- Topic tags.
- Global search across knowledge, tasks and projects.
- Personal note relationships.
- Knowledge → Task conversion.
- Local Ask My OS context search.
- Zero API / zero backend requirement.

## V6.0 — Personal Brain

- Areas as a persistent context layer.
- Projects with goals and health.
- NOW / LATER / FOLLOW-UP task lanes.
- Dependencies and Blocked state.
- Connected knowledge.
- Activity history.
- Focus and Daily Top 3.
- Local deterministic AI COO.
- IndexedDB-first technical foundation.

## V5.x — Technical foundation

- IndexedDB-first persistence.
- LocalStorage compatibility.
- Schema normalization and migration.
- Recovery snapshots.
- Recovery bin.
- Dependency-aware scoring.
- Knowledge-to-action matching.
- Local execution analytics.

## V4.x — Premium UI & hardening

- Apple-inspired light visual language.
- Floating glass sidebar.
- Responsive mobile navigation.
- Translucent surfaces and blur.
- Larger display hierarchy.
- Keyboard search.
- Dynamic greeting/date.
- Runtime and storage hardening.

## V3.0 — Intelligence foundation

- Smart task scoring.
- Daily Top 3.
- Overdue and neglected-work detection.
- Smart search.
- Knowledge-to-action matching.
- Deterministic AI COO recommendations.
- Workload and project-risk insights.

## V2.0 — Workspace foundation

- Focus Mode.
- Command Palette.
- Unified search.
- JSON backup/restore.
- Project health.
- Activity history.
- Mobile navigation.

## V1.x — Original foundation

- Dashboard.
- Tasks, projects and knowledge CRUD.
- Tags and categories.
- Activity timeline.
- Global search.
- Browser persistence.
- GitHub Pages hosting.

## Current feature set

| Module | V7.1 capability |
| --- | --- |
| Home | Personal command center, daily objective, Top 3, blockers, project risks and knowledge pulse |
| Focus | Highest-leverage execution queue with NOW/LATER/FOLLOW-UP logic |
| Tasks | CRUD, priority, status, due date, lane, area, project, context and dependencies |
| Projects | Goals, health, progress, linked tasks and linked knowledge |
| Areas | Persistent context layer for responsibilities |
| Knowledge | 176 built-in references + private notes, domain filters, article views and task conversion |
| Ask My OS | Local context search over tasks, projects and knowledge |
| Activity | Local operating history |
| Settings | Workspace controls, backup and Knowledge Engine information |

## Knowledge architecture

```text
Knowledge Engine
├── Linux
├── RHEL
├── Networking
├── Cybersecurity
├── SIEM / SOC
├── Cloud
├── DevOps
├── Programming
├── Databases
├── AI & ML
└── Productivity
```

Each built-in record contains a title, domain, summary, practical guidance and searchable tags. The corpus can grow without putting individual articles into separate deployment dependencies.

## Product model

```text
Area
 ├── Project
 │    ├── Task
 │    │    └── Dependency → Task
 │    └── Knowledge
 │
 └── Task

Task / Project / Knowledge
            ↓
         Activity
            ↓
        AI COO
```

The long-term objective is a connected personal operating system where knowledge can influence action and actions can build knowledge.

## Zero-cost & privacy principles

Personal OS is designed for **₹0** core operation:

- No paid infrastructure.
- No mandatory API key.
- No subscription.
- No local application installation.
- Browser-based deployment through GitHub Pages.
- Deterministic local intelligence by default.

Workspace data remains browser-local and is not automatically uploaded to GitHub by the application. Cross-device synchronization is not part of the core build yet.

## Architecture

V7.1 is a single static browser application:

- Native HTML/CSS/JavaScript runtime.
- No React runtime required by the active shell.
- No Babel compilation required.
- Single static `index.html`.
- Browser-local persistence.
- V1–V7 migration compatibility through normalization.
- Bundled 176-entry knowledge corpus.
- Local search and relationship matching.
- Deterministic execution scoring and local AI COO guidance.
- No server required.
- GitHub Pages hosting.

## Versioning policy

- **V1.x through V7.x** = incremental features and refinements within a product generation.
- **V2.0, V3.0, V4.0, V5.0, V6.0, V7.0...** = major product or architecture changes.

Every release must update this README with the improvements introduced in that release.

## Roadmap

### V7.x

- Expand the corpus with deeper command references and troubleshooting playbooks.
- Favorites and saved knowledge.
- Knowledge backlinks and relationship editing.
- Local knowledge import/export packs.
- Better search relevance and keyboard navigation.

### V8 candidates

- Advanced local knowledge graph.
- Encrypted local knowledge vault.
- Rule-based automation engine.
- Optional pluggable AI adapter with a strict offline default.
- More advanced local retrieval and summarization.

These are candidates, not promises. The zero-cost, browser-first and privacy-first principles remain the primary constraints.

## GitHub Pages

The application is served directly from the repository through GitHub Pages.

Live app: https://adityak2608.github.io/personal-os/

Repository: https://github.com/AdityaK2608/personal-os
