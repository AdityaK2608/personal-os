# Personal OS

**Personal command center + knowledge base + AI COO.**

Personal OS is a zero-cost, browser-based personal operating system built around:

**Capture → Organize → Understand → Recommend → Act**

## Current version: V5.0

V5 is a major technical foundation release. It keeps the premium V4 interface while moving the workspace toward a real browser-side application platform: IndexedDB-first persistence, automatic recovery snapshots, dependency-aware execution intelligence, stronger schema normalization, and connected knowledge-to-action workflows.

## V5.0 — Major technical update

### 1. Browser database layer

- **IndexedDB-first persistence** — V5 stores the active workspace in a dedicated browser database instead of relying only on localStorage.
- **LocalStorage fallback** — if IndexedDB is unavailable, V5 falls back to the existing browser storage model.
- **Asynchronous save path** — workspace persistence is handled without requiring a server or desktop installation.
- **Dedicated V5 database namespace** — `personal_os_db_v5` and `personal_os_v5` keep V5 data isolated from earlier versions.

### 2. Versioned migration & normalization

- **V4/V3/V2/V1 migration path** — first launch looks for earlier Personal OS browser data and brings it into the V5 schema.
- **Schema normalization** — task, project, knowledge, activity and recovery collections are validated and normalized before use.
- **Safer defaults** — malformed fields are replaced with known-safe values rather than being allowed to break rendering.
- **V5 schema marker** — active workspaces are explicitly stamped with `schemaVersion: 5`.

### 3. Recovery system

- **Automatic local snapshots** — V5 keeps recent workspace snapshots in a separate IndexedDB store.
- **One-click snapshot restore** — Settings exposes recent recovery points.
- **Recovery bin** — deleted tasks and knowledge records are retained locally instead of disappearing immediately.
- **JSON backup/restore** — a full workspace export can be saved and later restored.
- **SHA-256 backup digest** — exports include a browser-generated integrity digest when Web Crypto is available.

### 4. Execution intelligence 5.0

- **Dependency-aware task scoring** — priority, due date, project health, task age and dependency state influence the recommended order.
- **Blocked/dependency detection** — the system explicitly distinguishes work that cannot move yet.
- **Reasoned recommendations** — AI COO explains signals such as overdue work, project risk, near deadlines and blockers.
- **Daily Top 3** — Focus and Home share the same ranked execution queue.
- **Project-aware scoring** — work attached to risky projects is automatically elevated.

### 5. Knowledge-to-action layer

- **Local relationship matching** — knowledge notes are matched to related tasks and projects using lightweight token overlap.
- **Related context** — each note shows likely connected execution records.
- **Knowledge → Task** — convert a useful note directly into actionable work.
- **No vector database required** — all relationship scoring remains browser-side and zero-cost.

### 6. Better operating analytics

- **Seven-day task activity view** — activity events are grouped into a simple local execution trend.
- **Open-work aging** — average age of active tasks is surfaced.
- **Priority load** — high-priority queue size is visible at a glance.
- **Project pulse** — linked task completion can inform project progress while preserving a manual project baseline.

### 7. Keyboard-first operation

- `Ctrl+K` / `⌘K` opens global search.
- `Ctrl+N` / `⌘N` opens a new task.
- `Esc` closes the active search state.
- Global search covers Tasks, Projects and Knowledge.

## V4.1 — Stability & hardening

- Removed duplicate legacy React application scripts.
- Restored `Ctrl+K` / `⌘K` search.
- Dynamic local date and greeting.
- Safer local-storage collection validation.
- Safer activity-history handling.
- Mobile Settings access through `More`.
- More consistent activity logging for mutations.
- Temporary CI repair workflows removed after successful fixes.

## V4.0 — Premium UI

- Apple-inspired visual language.
- Floating glass sidebar and responsive bottom navigation.
- Translucent surfaces, blur and restrained contrast.
- Larger display hierarchy and calmer dashboard composition.
- Premium task presentation and executive-style dashboard.
- Redesigned Focus, Knowledge, Insights and AI COO surfaces.
- Responsive mobile navigation.

## V3.0 — Intelligence foundation

- Smart priority scoring using urgency, priority, project health, age and blockers.
- Daily Top 3 and “Do this next”.
- Overdue and neglected-work detection.
- Smart text search across tasks, projects and knowledge.
- Knowledge-to-action relationship matching.
- Local deterministic AI COO diagnosis and recommendations.
- Insights for completion, aging, workload and project risk.
- Versioned data schema and migration.

## V2.0 — Workspace foundation

- Focus Mode.
- Command Palette / `Ctrl+K`.
- Unified workspace search.
- Stronger local AI COO reasoning.
- V1/V1.1 → V2 migration.
- Dedicated V2 storage.
- JSON backup and restore.
- Project health model.
- Operating dashboard, activity history and mobile navigation.

## V1.1 — Product foundation expansion

- Dynamic date and greeting.
- Task/project/knowledge CRUD.
- Tags and categories.
- Automatic activity logging.
- Global search.
- Project health and dashboard improvements.
- Mobile navigation improvements.
- JSON export/import/reset controls.

## V1.0 — Original foundation

- Dashboard.
- Tasks.
- Projects.
- Knowledge Base.
- Activity timeline.
- AI COO foundation.
- Browser persistence.
- GitHub Pages hosting.

## Current feature set

| Module | V5 capability |
| --- | --- |
| Home | Premium command center, dynamic greeting/date, objective, Daily Top 3, operating brief |
| Focus | Dependency-aware recommended next task and completion workflow |
| Tasks | CRUD, priority, status, due dates, dependencies, V5 execution score |
| Projects | CRUD, health, progress baseline and linked-task progress pulse |
| Knowledge | CRUD, tags, related tasks/projects, Knowledge → Task conversion |
| Insights | Completion, open aging, priority load, seven-day task activity, project pulse |
| AI COO | Daily brief, diagnosis, blockers, stale work and ranked recommendations |
| Activity | Local mutation and execution history |
| Settings | IndexedDB status, snapshots, restore, JSON backup/restore, reset, workspace identity |

## Versioning policy

- **V1.1, V1.2, V1.3...** = incremental features and refinements.
- **V2.0, V3.0, V4.0, V5.0...** = major product or architecture changes.

Every new release must update this README with the improvements introduced in that release.

## Zero-cost principle

Personal OS is designed to remain **₹0** for the core experience.

- No paid infrastructure.
- No mandatory API key.
- No subscription.
- No local application installation required.
- Browser-based deployment through GitHub Pages.
- V5 uses native browser capabilities instead of a paid backend.

The current AI COO remains deterministic and local. V5 does not require an external LLM, vector database or paid AI service.

## Data model & privacy

Personal OS is local-first. Workspace data is stored in browser storage and is not automatically uploaded to GitHub by the application.

V5 uses:

- IndexedDB database: `personal_os_db_v5`.
- Workspace key: `current` inside the V5 workspace store.
- Snapshot store: `snapshots_v5`.
- LocalStorage fallback/compatibility key: `personal_os_v5`.

On first V5 launch, earlier `personal_os_v4`, `personal_os_v3`, `personal_os_v2` or `personal_os_v1` data is migrated when available.

Browser storage is device/browser-specific, so cross-device synchronization is not provided yet.

## Architecture

V5 remains a single static browser application:

- React 18 via CDN.
- Babel Standalone via CDN.
- Single static `index.html`.
- Native IndexedDB for primary local persistence.
- localStorage fallback for browser compatibility.
- Browser Web Crypto for optional backup integrity hashing.
- Deterministic local intelligence engine.
- No server required.
- GitHub Pages hosting.

## Roadmap

### V5.x

- Richer dependency visualisation.
- Better recovery-bin management.
- More keyboard navigation and accessibility polish.
- More historical analytics.
- Better activity filtering and timeline views.
- Expanded knowledge relationship editing.

### V6 candidates

- Optional encrypted export vault.
- Pluggable AI provider adapter with a strict local/offline default.
- More advanced local knowledge graph and retrieval.
- Rule-based automation builder.
- Optional cross-device sync only where it can remain privacy-safe and ₹0.

These are candidates, not promises. The zero-cost, browser-first and privacy-first principles remain the primary constraints.

## GitHub Pages

The application is served directly from the repository through GitHub Pages.

Live app: https://adityak2608.github.io/personal-os/

Repository: https://github.com/AdityaK2608/personal-os
