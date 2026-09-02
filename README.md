# Personal OS

**Personal command center + second brain + Knowledge Engine + AI COO.**

Personal OS is a zero-cost, browser-based personal operating system built around:

**Capture → Organize → Understand → Recommend → Act**

## Current version: V7.3 — Button & Interaction Reliability

V7.3 keeps the V7 Knowledge Engine and makes the visible UI actions real, persistent operations. Navigation, search, task CRUD, project CRUD, note CRUD, knowledge browsing, knowledge-to-task conversion, backup/restore controls, reset, and keyboard actions now use a centralized browser action layer.

## V7.3 — Interaction release

### All visible controls are wired

- Centralized `data-action` dispatcher for UI buttons.
- Navigation works from desktop and mobile.
- Global search filters built-in knowledge, personal notes, tasks and projects.
- Knowledge cards open full articles.
- Knowledge category filters switch the visible corpus.
- Create/edit/delete task operations are functional.
- Task Done/Reopen actions persist to browser storage.
- Create/edit project operations are functional.
- Create/edit/delete personal notes are functional.
- Knowledge → Task conversion is functional.
- JSON backup export works through a browser download.
- JSON backup import validates the major collections before loading.
- Workspace reset restores starter data.
- `Ctrl+K` / `⌘K` focuses search.
- `Ctrl+N` / `⌘N` opens a new task.
- `Esc` closes active modal/detail UI.

### Runtime safety

- Native HTML/CSS/JavaScript only.
- No React dependency.
- No Babel dependency.
- No application CDN dependency.
- A visible application shell exists before JavaScript runs.
- Runtime errors cannot silently remove the base HTML surface.

## Knowledge Engine

V7's built-in library remains bundled locally across 11 domains:

- Linux
- RHEL
- Networking
- Cybersecurity
- SIEM / SOC
- Cloud
- DevOps
- Programming
- Databases
- AI and ML
- Productivity

The corpus is generated from topic packs so future releases can expand it without turning the application into a remote-service dependency.

## V6.0 — Personal Brain

- Areas as persistent context.
- Projects with goals and health.
- NOW / LATER / FOLLOW-UP task lanes.
- Dependencies and Blocked state.
- Connected knowledge.
- Focus and Daily Top 3.
- Local deterministic AI COO.
- IndexedDB-first foundation.

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

| Module | V7.3 capability |
| --- | --- |
| Home | Command center, Daily Top 3, project risk, knowledge pulse and working shortcuts |
| Tasks | Create, edit, delete, complete/reopen, priority, lane, area, project, context and due date |
| Projects | Create, edit, goals, health and execution pulse |
| Areas | Persistent context layer |
| Knowledge | Built-in library + private notes, filters, full views and task conversion |
| Search | Unified local search across knowledge, notes, tasks and projects |
| Activity | Local mutation history |
| Backup | JSON export/import and local reset |
| Runtime | Dependency-free native browser application |

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

The objective is a connected personal operating system where knowledge can influence action and actions can build knowledge.

## Zero-cost & privacy principles

Personal OS is designed for **₹0** core operation:

- No paid infrastructure.
- No mandatory API key.
- No subscription.
- No local application installation.
- Browser-based deployment through GitHub Pages.
- Deterministic local intelligence by default.
- No required third-party application runtime.

Workspace data remains browser-local and is not automatically uploaded to GitHub by the application. Cross-device synchronization is not part of the core build yet.

## Architecture

V7.3 is a single static browser application:

- Native HTML/CSS/JavaScript runtime.
- One centralized UI action dispatcher.
- Browser-local persistence.
- V1–V7 migration compatibility where compatible data exists.
- Bundled technical knowledge corpus.
- Local search and relationship matching.
- Deterministic execution guidance.
- No server required.
- GitHub Pages hosting.

## Release reliability rule

A release is not considered complete when source code merely exists in GitHub. Visible controls must have a deterministic action path, mutations must persist locally, and the application must retain a renderable base surface without optional framework loading.

V7.3 applies that rule to the visible UI through a centralized action dispatcher and browser-native persistence/actions.

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
- Better search relevance.
- More complete keyboard navigation.
- Richer project/task relationship views.

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
