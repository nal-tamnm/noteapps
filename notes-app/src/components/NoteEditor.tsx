import React, { useState, useEffect, useCallback } from 'react';

interface NoteEditorProps {
  onSave: (content: string) => void;
  initialContent?: string;
}

const NoteEditor: React.FC<NoteEditorProps> = ({ onSave, initialContent }) => {
  const [content, setContent] = useState(initialContent || '');

  // Debounce the save function
  const debouncedSave = useCallback(
    (value: string) => {
      onSave(value);
    },
    [onSave]
  );

  useEffect(() => {
    setContent(initialContent || '');
  }, [initialContent]);

  useEffect(() => {
    // Save the note content whenever it changes, but debounce the save function
    const timeoutId = setTimeout(() => {
      debouncedSave(content);
    }, 500); // Save every 500ms

    // Clear the timeout if the content changes before the timeout is reached
    return () => clearTimeout(timeoutId);
  }, [content, debouncedSave]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  return (
    <div className="border rounded p-4">
      <textarea
        className="w-full h-40 p-2 border rounded"
        value={content}
        onChange={handleChange}
        placeholder="Start writing your note..."
      />
    </div>
  );
};

export default NoteEditor;