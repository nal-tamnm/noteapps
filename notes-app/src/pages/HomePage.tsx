import React from 'react';
import { Button } from '@/components/Button';

const HomePage: React.FC = () => {
  const handleNewNote = () => {
    console.log('New note button clicked');
    // Logic to create a new note will be implemented here
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Notes</h1>
      <div className="mb-6">
        <Button onClick={handleNewNote}>+ New Note</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Note list will be rendered here */}
        <p>Your notes will appear here.</p>
      </div>
    </div>
  );
};

export default HomePage;