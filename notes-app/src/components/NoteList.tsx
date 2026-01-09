import React from 'react';

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

interface NoteListProps {
  notes: Note[];
  onSelectNote: (note: Note) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, onSelectNote }) => {
  return (
    <div className="space-y-4">
      {notes.length === 0 ? (
        <p>No notes yet. Click "New Note" to create one.</p>
      ) : (
        notes.map((note) => (
          <div
            key={note.id}
            className="border rounded p-4 cursor-pointer hover:bg-gray-100"
            onClick={() => onSelectNote(note)}
          >
            <h3 className="text-lg font-semibold">{note.title}</h3>
            <p className="text-sm text-gray-600">
              Created: {new Date(note.createdAt).toLocaleString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default NoteList;