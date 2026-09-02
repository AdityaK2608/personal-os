# Personal OS

**Personal command center + second brain + Knowledge Engine + AI COO.**

Personal OS is a zero-cost, browser-based personal operating system built around:

**Capture → Organize → Understand → Recommend → Act**

## Current version: V7.2 — Runtime Reliability

V7.2 keeps the V7 Knowledge Engine and removes the remaining framework/runtime failure risk from the deployed application. The active site is now a **single dependency-free HTML/CSS/JavaScript application** with an explicit visible fallback if JavaScript fails.

## V7.2 — Blank-page reliability release

### Runtime hardening

- Removed the active React/Babel dependency from the application shell.
- The interface renders using native browser JavaScript only.
- No client-side compilation is needed before the app can mount.
- No external application CDN is required.
- Added a visible loading/fallback surface so a runtime error does not appear as a silent blank page.
- Added defensive startup error reporting in the page itself.
- Kept the GitHub Pages and ₹0 deployment model.

### Knowledge Engine retained

- **176 built-in reference entries** across 11 domains.
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

The corpus is generated locally from topic packs embedded in the static application and does not depend on a remote service.

### Workspace features retained

- Personal command center.
- Tasks with NOW / LATER / FOLLOW-UP lanes.
- Projects and areas.
- Knowledge and personal notes.
- Search across knowledge, tasks and projects.
- Knowledge → Task conversion.
- Local activity history.
- Local browser persistence.
- JSON backup.
- Mobile navigation.
- Keyboard shortcuts.

## V7.1 — Knowledge Engine & previous runtime stabilization

- Knowledge Engine with 176 built-in references.
- 11 technical/productivity domains.
- Built-in vs Personal knowledge distinction.
- Article views and domain filtering.
- Global search.
- Personal note relationships.
- Knowledge → Task conversion.
- Dependency-aware execution foundation.
- Dependency-free runtime direction started.

## V7.0 — Knowledge Engine

V7 made knowledge a first-class product surface with a large built-in technical reference library alongside private notes.

## V6.0 — Personal Brain

- Areas as a persistent context layer.
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

| Module | V7.2 capability |
| --- | --- |
| Home | Personal command center, daily objective, Top 3, blockers, project risks and knowledge pulse |
| Tasks | NOW/LATER/FOLLOW-UP, priorities, status, due dates, areas, projects and dependencies |
| Projects | Goals, health, progress and linked task context |
| Areas | Persistent context layer for responsibilities |
| Knowledge | 176 built-in references + private notes, domain filtering and article views |
| Ask/Search | Local search over built-in knowledge, notes, tasks and projects |
| Activity | Local operating history |
| Backup | Browser-local JSON export |
| Runtime | Native HTML/CSS/JavaScript with no framework requirement |

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

Each built-in record contains a title, domain, summary, practical guidance and searchable tags. The corpus is intentionally structured so future releases can add deeper command references, playbooks and cross-links.

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

V7.2 is a single static browser application:

- Native HTML/CSS/JavaScript runtime.
- No React runtime required by the active shell.
- No Babel compilation required.
- Single static `index.html`.
- Browser-local persistence.
- V1–V7 migration compatibility through normalization where available.
- Bundled 176-entry knowledge corpus.
- Local search and knowledge relationships.
- Deterministic execution guidance.
- No server required.
- GitHub Pages hosting.

## Runtime reliability rule

A release is not considered complete when the source merely exists in GitHub. The application must also have a visible render path that does not depend on optional framework loading. V7.2 therefore keeps a plain HTML fallback visible before application JavaScript executes and exposes startup errors in-page rather than failing to an empty viewport.

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
