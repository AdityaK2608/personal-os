# Personal OS

**Personal command center + knowledge base + AI COO.**

Personal OS is a zero-cost, browser-based personal operating system built around:

**Capture → Organize → Understand → Recommend → Act**

## Current version: V4.1

V4.1 is a stability and polish release on top of the V4 premium UI redesign. It removes legacy script collisions, restores keyboard search, makes the date and greeting dynamic, hardens browser-data loading, and improves mobile access to Settings.

## V4.1 improvements — Bug fixes & hardening

- **Removed duplicate legacy React scripts** — V4 now runs from a single active application script instead of retaining conflicting V2/V3 global declarations.
- **Restored `Ctrl+K` / `⌘K` search** — the global shortcut now focuses the V4 search field again.
- **Dynamic date** — the Home page no longer contains a hard-coded release date.
- **Dynamic greeting** — Home now switches between morning, afternoon and evening based on the current local time.
- **Safer local-storage loading** — malformed or incomplete workspace structures no longer get treated as valid V4 state.
- **Safer activity handling** — activity history is guarded as an array during migration and mutations.
- **Mobile Settings access** — the floating mobile navigation now includes a `More` entry for Settings instead of silently hiding it.
- **Activity logging consistency** — task/project/knowledge deletion and mutations retain a usable local activity trail.
- **Temporary CI cleanup** — temporary V4.1 fix workflows were removed after their successful runs; the production repo does not depend on them.

## V4.0 improvements — Premium UI

- **Apple-inspired visual language** — system-style typography, generous whitespace, restrained contrast and a premium light canvas.
- **Floating glass sidebar** — navigation now feels like a product workspace rather than a traditional admin dashboard.
- **Translucent surfaces** — cards, search and mobile navigation use layered transparency and blur for depth.
- **Larger visual hierarchy** — the dashboard uses editorial-scale headlines and compact supporting metadata.
- **Minimal interaction chrome** — pill controls, quiet secondary actions and fewer dense borders reduce visual noise.
- **Premium task presentation** — priority, due date and the V3 local score are visible without turning the page into a spreadsheet.
- **Executive-style dashboard** — Daily Top 3, operating brief, workspace completion and project attention are presented as a calm command surface.
- **Redesigned Focus** — one-task execution gets a cleaner, distraction-light presentation.
- **Redesigned Knowledge** — notes are presented as a premium personal library rather than a CRUD grid.
- **Redesigned Insights** — analytics are intentionally lightweight and readable instead of BI-heavy.
- **Redesigned AI COO** — recommendations are presented as an executive layer with clear action and reasoning.
- **Responsive mobile navigation** — a floating bottom navigation bar replaces desktop sidebar patterns on smaller screens.
- **Smooth visual transitions** — lightweight page fade motion adds polish without introducing a dependency.

## V3.0 intelligence

V3 introduced the local intelligence foundation that V4 preserves:

- Smart priority scoring using priority, urgency, project health, task age and blocked-state signals.
- Daily Top 3 and “Do this next”.
- Overdue and neglected-work detection.
- Smart text/concept search across tasks, projects and knowledge.
- Knowledge-to-action relationship matching.
- Local AI COO recommendations and diagnosis.
- Insights for completion, aging, workload and project risk.
- Versioned data schema and V2 → V3 migration.

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

| Module | V4.1 capability |
| --- | --- |
| Home | Premium command center, dynamic greeting/date, Daily Top 3, operating brief, project attention |
| Focus | Recommended next task and completion workflow |
| Tasks | CRUD, priority, status, due dates, V3 local ranking score |
| Projects | CRUD, progress, project health and risk signals |
| Knowledge | CRUD, tags, smart search and clean library presentation |
| Insights | Completion, aging, workload and project-risk views |
| Activity | Local operating history with safer persistence |
| AI COO | Local recommendations, diagnosis and action guidance |
| Settings | Schema health, JSON backup/restore, reset and mobile access |

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

V4.1 continues to use local deterministic intelligence. It does not require an external LLM, vector database, or paid AI service.

## Data model & privacy

Personal OS is local-first. Workspace data is stored in browser storage and is not automatically uploaded to GitHub. Exported JSON backups are created only when you explicitly choose to export them.

Because browser storage is device/browser-specific, data does not automatically sync between devices yet.

V4 uses a dedicated `personal_os_v4` storage key and migrates data from `personal_os_v3`, `personal_os_v2`, or `personal_os_v1` when available. V4.1 additionally validates the core collections and protects activity history handling during startup and mutations.

## Roadmap

### V4.x

- Refine animations and micro-interactions
- Add richer relationship editing between tasks, projects and knowledge
- Improve historical analytics as more local activity accumulates
- Add stronger accessibility and keyboard navigation polish
- Add a clearer mobile `More` surface for secondary utilities

### V5 candidates

- Pluggable AI provider adapter
- Optional encrypted cross-device sync
- More advanced knowledge graph capabilities
- Deeper automation and proactive workflows

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
- Single static `index.html`
- Browser storage for persistence
- No server required

V4.1 remains primarily a presentation-layer and reliability release over the V3 intelligence foundation. The premium visual system and local intelligence remain browser-side so the core product stays easy to run and maintain at ₹0.