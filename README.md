# Personal OS

**Personal command center + second brain + Knowledge Engine + AI COO.**

Personal OS is a zero-cost, browser-based personal operating system built around:

**Capture → Organize → Understand → Recommend → Act**

## Current version: V7.0 — Knowledge Engine

V7 makes knowledge a first-class product surface. Personal OS now ships with a **large built-in technical reference library** alongside private personal notes, with both searchable from the same browser application.

The knowledge direction is intentionally inspired by the broader PersonalOS idea of keeping useful context close to everyday work, while the implementation remains our own static, local-first application.

## V7.0 — Knowledge Engine

### Large built-in knowledge library

V7 includes **132 generated reference entries** across 11 domains:

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

The corpus is bundled into the application, so the reference library works without an external API, backend or database service.

### Knowledge browser

- Dedicated Knowledge module.
- Domain filters.
- Built-in vs Personal knowledge distinction.
- Searchable cards and full article views.
- Topic tags and category metadata.
- Practical troubleshooting/checklist framing.

### Unified search

Global search now covers:

- Built-in knowledge
- Personal notes
- Tasks
- Projects

`Ctrl+K` / `⌘K` focuses global search.

### Personal second brain

Personal notes remain local and can carry:

- Area
- Project
- Tag
- Body content
- Related task/project context

Personal knowledge can also be converted directly into a task.

### Knowledge → action

A personal note can surface related tasks/projects using lightweight local token matching, then become an actionable task without leaving the knowledge view.

### Local intelligence

Ask My OS operates over the local workspace and knowledge library. V7 remains deterministic and does not require a paid LLM, embeddings API or vector database.

## V6.0 — Personal Brain

V6 changed the product model so Tasks, Projects, Knowledge, Areas, Dependencies and Activity behave as one connected personal context system.

- Areas
- Projects with goals and health
- NOW / LATER / FOLLOW-UP task lanes
- Dependencies and Blocked state
- Knowledge-to-action workflows
- Context-aware Home
- Focus and Daily Top 3
- Local AI COO and Ask My OS foundation
- IndexedDB-first architecture with localStorage compatibility

## V5.1 — Execution & recovery foundation

- IndexedDB-first browser persistence.
- LocalStorage fallback.
- Dependency-aware scoring.
- Local recovery snapshots.
- Recovery bin for deleted records.
- Knowledge → Task conversion.
- Seven-day execution analytics.
- Activity filtering.
- Keyboard-first shortcuts.

## V5.0 — Technical foundation

- Browser database layer.
- Versioned migration and normalization.
- Local snapshots.
- JSON backup/restore.
- SHA-256 backup digest.
- Dependency-aware scoring.
- Knowledge-to-action matching.
- Project-aware execution signals.

## V4.1 — Stability & hardening

- Removed duplicate legacy React application scripts.
- Restored `Ctrl+K` / `⌘K` search.
- Dynamic date and greeting.
- Safer local-storage validation.
- Safer activity-history handling.
- Mobile Settings access.
- More consistent mutation logging.

## V4.0 — Premium UI

- Apple-inspired light visual language.
- Floating glass sidebar and responsive mobile navigation.
- Translucent surfaces and blur.
- Large display hierarchy.
- Premium dashboard and task presentation.
- Redesigned Focus, Knowledge, Insights and AI COO.

## V3.0 — Intelligence foundation

- Smart task scoring.
- Daily Top 3.
- Overdue and neglected-work detection.
- Smart search.
- Knowledge-to-action relationship matching.
- Deterministic AI COO recommendations.
- Workload and project-risk insights.

## V2.0 — Workspace foundation

- Focus Mode.
- Command Palette.
- Unified workspace search.
- Stronger local AI COO reasoning.
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

| Module | V7 capability |
| --- | --- |
| Home | Personal command center, daily objective, Top 3, blockers, project risks and knowledge pulse |
| Focus | Highest-leverage execution queue with NOW/LATER/FOLLOW-UP logic |
| Tasks | CRUD, priority, status, due date, lane, area, project, context and dependencies |
| Projects | Goals, health, progress, linked tasks and linked knowledge |
| Areas | Persistent context layer for responsibilities |
| Knowledge | 132 built-in references + private notes, domain filters, related context and task conversion |
| Ask My OS | Local context search over tasks, projects and knowledge |
| Activity | Local operating history |
| Settings | Backup, local workspace controls and Knowledge Engine information |

## Knowledge architecture

The built-in corpus is generated from versioned topic packs in the static application:

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

Each entry contains a title, domain, summary, practical guidance and searchable tags.

This structure makes future corpus expansion straightforward without turning the application into one giant hand-edited text blob.

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

V7 remains a single static browser application:

- React 18 via CDN.
- Babel Standalone via CDN.
- Single static `index.html`.
- Browser-local persistence.
- V1–V6 migration compatibility through normalization.
- Bundled 132-entry knowledge corpus.
- Local search and relationship matching.
- Deterministic execution scoring and AI COO.
- No server required.
- GitHub Pages hosting.

## Versioning policy

- **V1.x, V2.x, V3.x, V4.x, V5.x, V6.x, V7.x** = incremental features and refinements within a product generation.
- **V2.0, V3.0, V4.0, V5.0, V6.0, V7.0...** = major product or architecture changes.

Every release must update this README with the improvements introduced in that release.

## Roadmap

### V7.x

- Expand the corpus beyond the initial 132-entry foundation.
- Add richer article structures, commands and troubleshooting playbooks.
- Add local favorites and saved knowledge.
- Add knowledge backlinks and relationship editing.
- Add better keyboard navigation.
- Add local knowledge import/export packs.

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
