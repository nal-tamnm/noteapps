# Data Model: Note-Taking Application

## Note

Represents a single piece of text content.

### Attributes:
- `id`: Unique identifier for the note. (e.g., UUID)
- `title`: The generated title of the note.
- `content`: The main text content of the note.
- `createdAt`: Timestamp when the note was created.
- `updatedAt`: Timestamp when the note was last updated.

### Validation Rules:
- `title`: Cannot be empty.
- `content`: Can be empty initially, but should be saved.

### State Transitions:
(Not applicable for this basic version as there are no complex states or workflows defined.)