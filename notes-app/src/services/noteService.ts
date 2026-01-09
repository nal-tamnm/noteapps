export const generateNoteTitle = (content: string): string => {
  if (!content) {
    return `Untitled Note - ${new Date().toLocaleString()}`;
  }

  const firstLine = content.split('\n')[0];
  const trimmedLine = firstLine.trim();

  if (trimmedLine.length > 50) {
    return trimmedLine.substring(0, 50) + '...';
  }

  return trimmedLine || `Untitled Note - ${new Date().toLocaleString()}`;
};

export const saveNote = (noteContent: string): void => {
  const title = generateNoteTitle(noteContent);
  const newNote = {
    id: Date.now().toString(), // Simple ID generation
    title,
    content: noteContent,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  const notes = JSON.parse(localStorage.getItem('notes') || '[]');
  notes.push(newNote);
  localStorage.setItem('notes', JSON.stringify(notes));
};

export const getNotes = (): any[] => {
  return JSON.parse(localStorage.getItem('notes') || '[]');
};