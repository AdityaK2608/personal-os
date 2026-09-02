# Personal OS

**Personal command center + knowledge base + AI COO.**

Personal OS is a zero-cost, browser-based personal operating system built around:

**Capture → Organize → Understand → Recommend → Act**

## Current version: V2.0

V2 is a major product evolution from the original V1/V1.1 dashboard. It introduces a more structured offline workspace, a dedicated Focus mode, a command palette, V1 data migration, and a stronger local reasoning layer for the AI COO.

### V2.0 improvements

- **Focus Mode** — choose one task and work it to completion without dashboard clutter.
- **Command Palette** — press `Ctrl+K` to quickly jump between modules and search workspace items.
- **Unified workspace search** — search tasks, projects and knowledge from the global header.
- **Improved AI COO** — combines task priority, project health and system completion into local recommendations.
- **V1 → V2 migration** — existing `personal_os_v1` browser data is automatically migrated when V2 opens for the first time.
- **Dedicated V2 storage** — V2 uses its own browser storage key so the previous V1 data model is not overwritten.
- **Backup & restore** — export the complete workspace as JSON and import it later.
- **Project health model** — projects can be tracked as On track, Steady, Needs focus or At risk.
- **Better operating dashboard** — operating pulse, next actions and attention-needed projects are surfaced together.
- **Mobile navigation** — core modules remain accessible on smaller screens.
- **Local activity history** — task, project, knowledge and migration actions are logged.
- **Private/offline-first architecture** — no backend is required for the core product.

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

## Data model & privacy

V2 is local-first. Workspace data is stored in the browser and is not automatically uploaded to GitHub. Exported JSON backups are created only when you explicitly choose to export them.

Because browser storage is device/browser-specific, data does not automatically sync between devices yet.

## Roadmap

### V2.x

- Continue improving Focus and command workflows
- Better project/task relationships
- More powerful local insights
- Additional productivity views

### V3.0 candidates

A future major release may introduce optional cloud capabilities such as authentication, cross-device synchronization, and a true external AI integration. These will only be added when they can be implemented with an appropriate security model and without breaking the zero-cost principle where possible.

## GitHub Pages

The application is served directly from the repository through GitHub Pages.

Live app: https://adityak2608.github.io/personal-os/

Repository: https://github.com/AdityaK2608/personal-os

## Architecture

The application is intentionally lightweight:

- React 18 via CDN
- Babel Standalone via CDN
- Tailwind CSS via CDN
- Single static `index.html`
- Browser storage for persistence
- No server required

This keeps Personal OS easy to run from a browser and easy to evolve version-by-version.