# Quickstart Guide: Note-Taking Application

## Prerequisites

- Node.js (>=18)
- pnpm (>=7)

## Installation

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    cd notes-app
    ```

2.  Install dependencies:

    ```bash
    pnpm install
    ```

## Development

1.  Start the development server:

    ```bash
    pnpm run dev
    ```

2.  Open your browser and navigate to `http://localhost:5173`.

## Building for Production

1.  Build the application:

    ```bash
    pnpm run build
    ```

2.  Serve the `dist` directory using your favorite static file server.

## Notes

-   This application uses local storage to persist notes in the browser.
-   The UI is built with React, Vite, Tailwind CSS, and Shadcn.