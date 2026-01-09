import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage';
import './index.css'; // Assuming index.css is the main CSS file for Tailwind/Shadcn

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
);
