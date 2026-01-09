import React, { useState, useEffect } from 'react';
import { Button } from '@/components/Button';
import NoteEditor from '@/components/NoteEditor';
import NoteList from '@/components/NoteList';
import { saveNote, getNotes } from '../services/noteService';

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

const HomePage: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const loadedNotes = getNotes();
    setNotes(loadedNotes);
  }, []);

  const handleNewNote = () => {
    setSelectedNote(null); // Clear selection to start a new note
    setIsEditing(true);
  };

  const handleSaveNote = (content: string) => {
    if (selectedNote) {
      // Update existing note
      const updatedNote = {
        ...selectedNote,
        content,
        updatedAt: new Date().toISOString(),
      };
      const updatedNotes = notes.map(note =>
        note.id === selectedNote.id ? updatedNote : note
      );
      setNotes(updatedNotes);
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
      setSelectedNote(null); // Clear selection after saving
      setIsEditing(false);
    } else {
      // Create new note
      saveNote(content); // saveNote also generates title and ID
      setNotes(getNotes()); // Refresh notes list
      setIsEditing(false);
    }
  };

  const handleSelectNote = (note: Note) => {
    setSelectedNote(note);
    setIsEditing(true);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Notes</h1>
      <div className="mb-6 flex justify-between items-center">
        <Button onClick={handleNewNote}>+ New Note</Button>
        {selectedNote && (
          <Button variant="outline" onClick={() => setIsEditing(true)}>
            Edit Note
          </Button>
        )}
      </div>

      {isEditing ? (
        <NoteEditor
          onSave={handleSaveNote}
          initialContent={selectedNote ? selectedNote.content : ''} // Pass initial content if editing
        />
      ) : (
        <NoteList notes={notes} onSelectNote={handleSelectNote} />
      )}
    </div>
  );
};

export default HomePage;