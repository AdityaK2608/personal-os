# Personal OS

**Personal command center + second brain + AI COO.**

Personal OS is a zero-cost, browser-based personal operating system built around:

**Capture → Organize → Understand → Recommend → Act**

## Current version: V6.0 — Personal Brain

V6 is the major product-direction change. Personal OS is no longer structured as separate dashboard modules alone; it now treats **tasks, projects, knowledge, areas, dependencies and activity as one connected personal context system**.

The design direction is inspired by the broader PersonalOS philosophy of surfacing important work, keeping contextual knowledge connected, and making personal context available to AI. The implementation here is intentionally browser-native, local-first and independent of WordPress or a paid backend. citeturn974833view0

## V6.0 — Personal Brain

### Connected personal context

- **Areas** — persistent responsibilities such as Work, Personal and Learning.
- **Projects** — goals, health, execution progress and connected knowledge.
- **Tasks** — execution items with NOW / LATER / FOLLOW-UP lanes.
- **Dependencies** — tasks can explicitly block other tasks.
- **Knowledge** — notes can belong to areas/projects and connect back to execution.
- **Activity** — a local history of meaningful workspace changes.

### Personal command center

The Home page is now an operating surface rather than a generic dashboard:

- Dynamic greeting and date.
- Daily objective.
- Highest-leverage “Do this now” action.
- Daily Top 3 execution queue.
- Blocker and project-risk signals.
- Second-brain context counts.

### Task execution engine

V6 adds an execution model designed around deciding **what matters now**:

- NOW / LATER / FOLLOW-UP lanes.
- Priority scoring.
- Deadline urgency.
- Project health weighting.
- Task age weighting.
- Dependency penalties.
- Explicit Blocked state.
- Shared ranking between Home and Focus.

### Knowledge-to-action workflows

- Related execution records are surfaced beside knowledge notes.
- Notes can become tasks directly.
- Project and area context is retained when converting knowledge into action.
- Search spans tasks, projects and knowledge.
- Lightweight local relationship matching avoids vector databases and API costs.

### AI COO 6.0

The AI COO remains deterministic and private, but now reasons over the connected model:

- Blocker diagnosis.
- Project health warnings.
- Deadline pressure.
- NOW queue guidance.
- Explainable next-step recommendations.
- “Ask My OS” workflow through the global context search.

### Local data platform

V6 keeps the V5 technical foundation:

- IndexedDB-first persistence.
- localStorage compatibility/fallback.
- V5 → V6 migration by normalization.
- Versioned schema marker.
- JSON export/import.
- Local recovery snapshots and recovery bin from the V5 architecture.
- Optional SHA-256 integrity digest on exports where Web Crypto is available.

## V5.1 — Execution & recovery foundation

- IndexedDB-first browser persistence.
- LocalStorage fallback.
- Dependency-aware task scoring.
- Recovery snapshots.
- Recovery bin for deleted tasks and knowledge.
- Knowledge → Task conversion.
- Seven-day local execution analytics.
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
- Floating glass sidebar.
- Translucent surfaces and blur.
- Large display hierarchy.
- Premium task and dashboard presentation.
- Responsive mobile navigation.
- Redesigned Focus, Knowledge, Insights and AI COO.

## V3.0 — Intelligence foundation

- Smart task scoring.
- Daily Top 3.
- Overdue and neglected-work detection.
- Smart search.
- Knowledge-to-action relationship matching.
- Deterministic AI COO recommendations.
- Local workload and project-risk insights.

## V2.0 — Workspace foundation

- Focus Mode.
- Command Palette.
- Unified workspace search.
- Stronger local AI COO reasoning.
- V1 migration.
- JSON backup/restore.
- Project health.
- Activity history.

## V1.1 / V1.0 — Original foundation

- Dynamic dashboard.
- Tasks, projects and knowledge CRUD.
- Tags and categories.
- Activity timeline.
- Global search.
- Browser persistence.
- GitHub Pages hosting.

## Current feature set

| Module | V6 capability |
| --- | --- |
| Home | Personal command center, daily objective, Top 3, risks, blockers and context pulse |
| Focus | Highest-leverage action, dependency awareness and NOW/LATER/FOLLOW-UP execution |
| Tasks | CRUD, priority, due dates, status, lane, area, project, context and dependencies |
| Projects | Goals, health, progress, linked tasks and linked knowledge |
| Knowledge | Notes, tags, areas, projects, related execution and Knowledge → Task |
| Areas | Persistent context layer across projects and tasks |
| Insights | Completion, aging, priority load, risk and lane mix |
| Activity | Local workspace history and filtering |
| AI COO | Local diagnosis, project risk, blockers and next-step recommendations |
| Settings | Workspace controls, IndexedDB/localStorage status, backup, recovery and reset |

## Product model

Personal OS now treats the workspace as a connected graph of practical objects:

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

The objective is to move from a collection of CRUD screens toward a personal operating system where the relationships between records are useful in everyday decisions.

## Zero-cost and privacy principles

Personal OS remains designed for **₹0** core operation:

- No paid infrastructure.
- No mandatory API key.
- No subscription.
- No local application installation.
- Browser-based deployment through GitHub Pages.
- Deterministic local intelligence by default.

Workspace data stays in browser storage and is not automatically uploaded to GitHub by the application. Cross-device sync is not provided by the core build yet.

## Architecture

V6 remains a single static browser application:

- React 18 via CDN.
- Babel Standalone via CDN.
- Single static `index.html`.
- IndexedDB primary persistence.
- localStorage compatibility/fallback.
- Browser Web Crypto for optional export integrity hashing.
- Deterministic local scoring and recommendation engine.
- No server required.
- GitHub Pages hosting.

## Versioning policy

- **V1.x / V2.x / V3.x / V4.x / V5.x / V6.x** = incremental features and refinements within a major product model.
- **V2.0, V3.0, V4.0, V5.0, V6.0...** = major product or architecture changes.

Every release must update this README with the improvements introduced in that release.

## Roadmap

### V6.x

- Richer visual relationship graph.
- Drag-and-drop task lanes.
- Recurring tasks and routines.
- Better area/project navigation.
- Stronger local retrieval for knowledge.
- More detailed weekly review.
- Accessibility and keyboard navigation polish.

### V7 candidates

- Local encrypted vault.
- Pluggable AI adapter with a strict offline default.
- More advanced local knowledge graph.
- Rule-based automation builder.
- Optional integrations that preserve the zero-cost/privacy constraint.

These are candidates, not promises.

## GitHub Pages

Live app: https://adityak2608.github.io/personal-os/

Repository: https://github.com/AdityaK2608/personal-os
