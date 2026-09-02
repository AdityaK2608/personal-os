# Personal OS

**Personal command center + knowledge base + AI COO.**

Personal OS is a zero-cost, browser-based personal operating system built around:

**Capture → Organize → Understand → Recommend → Act**

## Current version: V3.0

V3 is the first major intelligence release. It moves Personal OS from a structured dashboard into a local operating layer that ranks work, connects knowledge and explains recommendations without requiring an external AI API.

## V3.0 improvements

### Intelligent execution

- **Smart priority engine** — open tasks are ranked using priority, due date urgency, project health, task age and blocked-state signals.
- **Daily Top 3** — the system automatically surfaces the three strongest next actions.
- **Do this now** — the dashboard and AI COO explain which action currently has the strongest local signal.
- **Neglected work detection** — older open tasks are surfaced as momentum risks.
- **Deadline risk detection** — overdue and near-term tasks influence the recommendation score.

### Knowledge intelligence

- **Smart knowledge search** — meaning-like matching uses shared concepts, tags and text relationships without external embeddings or an LLM.
- **Knowledge → action relationships** — notes are evaluated against task/project concepts so relevant context can influence execution.
- **“What do I already know?” workflow** — Knowledge now acts as a memory layer rather than only a list of notes.

### AI COO 3.0

- **Operating brief** — the dashboard explains the current execution signal.
- **Contextual recommendations** — recommendations can focus on a task, deadline risk, project risk or stale work.
- **System diagnosis** — AI COO considers open work, project health and knowledge volume together.
- **Deterministic local intelligence** — V3 deliberately avoids a paid/external LLM dependency while the architecture evolves.

### Personal analytics

- **Insights view** — completion rate, aging queue, project risk and workload distribution.
- **Local activity depth** — V3 keeps a longer operating history and records schema/migration events.
- **Usage-aware metrics** — analytics improve as more real activity accumulates in the browser.

### Data architecture

- **Schema versioning** — V3 stores `schemaVersion: 3` and maintains explicit timestamps.
- **V2 → V3 migration** — an existing `personal_os_v2` workspace is automatically migrated when V3 is opened for the first time.
- **Recovery-safe backups** — V3 exports/imports the full workspace as JSON and validates the core collections before restore.
- **Separate V3 storage key** — V3 uses `personal_os_v3`, leaving the previous V2 data source available for migration.

## V2.0 improvements

- Focus Mode
- Command Palette / `Ctrl+K`
- Unified workspace search
- Stronger local AI COO reasoning
- V1/V1.1 → V2 migration
- Dedicated V2 storage
- JSON backup and restore
- Project health model
- Better operating dashboard
- Mobile navigation
- Local activity history
- Private/offline-first architecture

## V1.1 improvements

- Dynamic date and greeting
- Task creation, editing, deletion and filtering
- Project creation, editing and deletion
- Knowledge note creation, editing and deletion
- Tags/categories for knowledge
- Automatic activity logging
- Global search
- Improved dashboard focus and project health
- Mobile navigation improvements
- JSON export/import/reset controls

## V1.0 foundation

- Dashboard
- Tasks
- Projects
- Knowledge Base
- Activity timeline
- AI COO foundation
- Browser persistence using localStorage
- GitHub Pages hosting

## Current feature set

| Module | V3 capability |
| --- | --- |
| Dashboard | Operating brief, Daily Top 3, next action, attention signals |
| Focus | Recommended next task and completion workflow |
| Tasks | CRUD, priority, status, due dates, local priority scoring |
| Projects | CRUD, progress, project health and risk influence |
| Knowledge | CRUD, tags, smart search and relationship matching |
| Insights | Completion, aging, risk and workload analytics |
| Activity | Local operating history |
| AI COO | Local recommendations, diagnosis and action guidance |
| Settings | Version health, JSON backup/restore and reset |

## Versioning policy

We use semantic product evolution for Personal OS:

- **V1.1, V1.2, V1.3...** = minor improvements and incremental features.
- **V2.0, V3.0, V4.0...** = major product or architecture changes.

Every new version must update this README with the improvements introduced in that release.

## Zero-cost principle

Personal OS is designed to remain **₹0** for the core experience.

- No paid infrastructure
- No mandatory API key
- No subscription
- No local software installation required
- Browser-based deployment through GitHub Pages

V3 specifically does **not** require an external LLM, vector database or paid AI service.

## Data model & privacy

Personal OS is local-first. Workspace data is stored in browser storage and is not automatically uploaded to GitHub. Exported JSON backups are created only when you explicitly choose to export them.

Because browser storage is device/browser-specific, data does not automatically sync between devices yet.

V3 uses a dedicated `personal_os_v3` storage key and migrates V2 data into the versioned V3 schema. The previous V2 storage key is not intentionally destroyed by migration.

## Roadmap

### V3.x

- Better project/task dependency modeling
- More relationship controls between knowledge and tasks
- Historical charts with richer time-series data
- More explainable recommendation scoring
- Better task completion velocity metrics

### V4.0 candidates

- Optional cross-device sync with a carefully designed free-tier architecture
- Pluggable LLM adapter so a real AI provider can be added without redesigning the product
- Optional authentication and encrypted sync
- More advanced knowledge graph capabilities

These are candidates, not promises; the zero-cost and privacy principles remain the primary constraints.

## GitHub Pages

The application is served directly from the repository through GitHub Pages.

Live app: https://adityak2608.github.io/personal-os/

Repository: https://github.com/AdityaK2608/personal-os

## Architecture

The application remains intentionally lightweight:

- React 18 via CDN
- Babel Standalone via CDN
- Tailwind CSS via CDN
- Single static `index.html` with the V3 intelligence layer
- Browser storage for persistence
- No server required

V3 adds intelligence as deterministic browser-side logic. That gives Personal OS a path toward future LLM integration without making the current product dependent on an API key or paid infrastructure.