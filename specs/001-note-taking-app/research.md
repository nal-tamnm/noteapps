# Research: Note-Taking Application Storage

## Decision: Local Storage (Web Storage API)

### Rationale:
For a basic note-taking application with no backend, local storage provides a simple and effective way to persist user notes directly in the browser. It meets the immediate requirements of auto-saving and retrieving notes without introducing complex server-side infrastructure. It's easy to implement and widely supported across modern browsers.

### Alternatives Considered:
- **IndexedDB**: More powerful and flexible than local storage, suitable for larger amounts of structured data. However, it introduces more complexity than needed for the initial basic requirements.
- **Web SQL Database**: Deprecated and not recommended for new development.
- **Server-side database (e.g., PostgreSQL, MongoDB)**: Overkill for the current scope which explicitly states "no folder, no tag" and implies a client-side only application. This would introduce significant backend development, which is out of scope for this phase.