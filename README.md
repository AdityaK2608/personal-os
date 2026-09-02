# Personal OS

**Personal command center + knowledge base + AI COO.**

Personal OS is a zero-cost, browser-based personal operating system built around:

**Capture → Organize → Understand → Recommend → Act**

## Current version: V5.1

V5.1 is a major usability and technical-consolidation release. It keeps the premium V4/V5 visual direction while making the browser application easier to operate, recover and extend.

## V5.1 — Major update

### Execution engine

- Dependency-aware task model with explicit `dependsOn` relationships.
- Ranking combines priority, due-date urgency, project health, task age and dependency blocking.
- Focus mode and Home share the same recommended queue.
- Keyboard-first task creation with `Ctrl+N` / `⌘N`.

### Recovery & resilience

- IndexedDB remains the primary workspace store.
- localStorage remains a compatibility/fallback path.
- Manual and automatic local snapshots are retained in a dedicated snapshot store.
- Snapshot restore creates a safety snapshot before replacement.
- Deleted tasks and notes move into a local recovery bin instead of being destroyed immediately.
- JSON export remains available, including optional SHA-256 integrity hashing through Web Crypto.

### Knowledge relationships

- Notes are matched locally to tasks and projects using lightweight token overlap.
- Each knowledge card exposes related execution context.
- Knowledge can be converted directly into a task.
- No embeddings, vector database or paid AI service is required.

### Analytics & operating visibility

- Seven-day local activity view.
- Open-work aging signal.
- Priority queue signal.
- Snapshot and recovery counts.
- Project execution pulse based on linked task completion while preserving the project baseline.
- Activity filtering by task, knowledge, recovery and system events.

### Technical consolidation

- V5.1 is a single consolidated application runtime rather than another legacy-script layer.
- V5 browser storage is normalized on startup so older V1–V5 data can continue into the new model.
- UI, storage, execution intelligence and recovery behavior now live in one maintainable application surface.

## V5.0 — Technical foundation

- IndexedDB-first persistence with localStorage fallback.
- V1 → V5 migration path.
- Schema normalization.
- Local recovery snapshots.
- Recovery bin foundation.
- JSON backup/restore.
- Dependency-aware scoring foundation.
- Knowledge-to-action relationship matching.
- Local deterministic AI COO.

## V4.1 — Stability & hardening

- Removed duplicate legacy React application scripts.
- Restored `Ctrl+K` / `⌘K` search.
- Dynamic local date and greeting.
- Safer local-storage collection validation.
- Safer activity-history handling.
- Mobile Settings access.
- More consistent activity logging.

## V4.0 — Premium UI

- Apple-inspired visual language.
- Floating glass sidebar and responsive bottom navigation.
- Translucent surfaces, blur and restrained contrast.
- Larger display hierarchy and calmer dashboard composition.
- Premium task presentation and executive-style dashboard.
- Redesigned Focus, Knowledge, Insights and AI COO surfaces.

## V3.0 — Intelligence foundation

- Smart task scoring.
- Daily Top 3 and next-action guidance.
- Overdue and neglected-work detection.
- Smart search across tasks, projects and knowledge.
- Knowledge-to-action matching.
- Local deterministic AI COO diagnosis and recommendations.
- Completion, aging, workload and project-risk insights.
- Versioned data schema and migration.

## V2.0 — Workspace foundation

- Focus Mode.
- Command Palette / `Ctrl+K`.
- Unified search.
- Stronger local AI COO reasoning.
- V1/V1.1 → V2 migration.
- Dedicated V2 storage.
- JSON backup and restore.
- Project health model.
- Activity history and mobile navigation.

## V1.1 — Product foundation expansion

- Dynamic date and greeting.
- Task/project/knowledge CRUD.
- Tags and categories.
- Automatic activity logging.
- Global search.
- Project health and dashboard improvements.
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

| Module | V5.1 capability |
| --- | --- |
| Home | Premium command center, dynamic greeting/date, objective, Daily Top 3, operating pulse |
| Focus | Dependency-aware recommended next task and one-action completion |
| Tasks | CRUD, priorities, statuses, due dates, dependencies and execution score |
| Projects | Health, progress baseline and linked-task execution pulse |
| Knowledge | CRUD, tags, related tasks/projects and Knowledge → Task conversion |
| Insights | Seven-day activity, aging, queue load, knowledge and recovery signals |
| AI COO | Deterministic daily brief, blockers, neglected work and next-action reasoning |
| Activity | Local timeline with event-type filters |
| Settings | Snapshots, restore, recovery bin, export and workspace reset |

## Versioning policy

- **V1.1, V1.2, V1.3...** = incremental features and refinements.
- **V2.0, V3.0, V4.0, V5.0...** = major product or architecture changes.
- Every new release must update this README with the improvements introduced in that release.

## Zero-cost principle

Personal OS is designed to remain **₹0** for the core experience.

- No paid infrastructure.
- No mandatory API key.
- No subscription.
- No local application installation required.
- Browser-based deployment through GitHub Pages.
- Native browser capabilities are preferred over paid services.

The current AI COO is deterministic and local. Personal OS does not require an external LLM, vector database or paid AI service.

## Data model & privacy

Personal OS is local-first. Workspace data is stored in browser storage and is not automatically uploaded to GitHub by the application.

V5.1 uses:

- IndexedDB database: `personal_os_db_v5`.
- Workspace store: `workspace`.
- Snapshot store: `snapshots_v5`.
- Active workspace key: `current`.
- Compatibility key: `personal_os_v51`.

Earlier `personal_os_v5`, `personal_os_v4`, `personal_os_v3`, `personal_os_v2` and `personal_os_v1` data is considered during first-launch migration.

Browser storage is device/browser-specific, so cross-device synchronization is not provided.

## Architecture

V5.1 remains a single static browser application:

- React 18 via CDN.
- Babel Standalone via CDN.
- Single static `index.html`.
- Native IndexedDB for primary persistence.
- localStorage fallback/compatibility.
- Browser Web Crypto for optional export hashing.
- Deterministic local intelligence.
- No server required.
- GitHub Pages hosting.

## Roadmap

### V5.x

- Richer dependency graph visualization.
- Bulk recovery-bin actions.
- More granular activity filtering.
- Historical analytics and trend comparisons.
- Accessibility and deeper keyboard navigation.
- Relationship editing between tasks, projects and knowledge.

### V6 candidates

- Optional encrypted export vault.
- Pluggable AI provider adapter with strict local/offline default.
- Advanced local knowledge graph/retrieval.
- Rule-based automation builder.
- Optional cross-device sync only where it remains privacy-safe and ₹0.

These are candidates, not promises. The zero-cost, browser-first and privacy-first principles remain the primary constraints.

## GitHub Pages

Live app: https://adityak2608.github.io/personal-os/

Repository: https://github.com/AdityaK2608/personal-os
