# Tasks: Note-Taking Application

**Feature Branch**: `001-note-taking-app`
**Date**: 2026-01-09

## Phase 1: Setup

- [x] T001 Create project structure: `notes-app/src/`, `notes-app/tests/`

## Phase 2: Foundational

- [x] T002 Initialize React + Vite + TypeScript project in `notes-app/` using the latest stable versions. (Follow instructions from https://react.dev/learn/start-a-new-react-project and https://v3.tailwindcss.com/docs/guides/vite)
- [x] T003 Configure Tailwind CSS in `notes-app/` using the latest stable versions. (Follow instructions from https://v3.tailwindcss.com/docs/guides/vite)
- [x] T004 Integrate Shadcn UI components into `notes-app/` using the latest stable versions. (Follow instructions from https://ui.shadcn.com/docs/installation/vite)

## Phase 3: User Story 1 - Create and View Notes (P1)
- [x] T005 [P] [US1] Create "New Note" button and basic layout in `notes-app/src/pages/HomePage.tsx`

**Story Goal**: As a user, I want to be able to create new notes, have them automatically titled based on content or date, and have them auto-saved, so that I can quickly capture and access my thoughts.
**Independent Test**: Can be fully tested by creating a note, verifying its title generation and auto-save, and then viewing it. Delivers the primary value of capturing information.

- [x] T005 [P] [US1] Create "New Note" button and basic layout in `notes-app/src/pages/HomePage.tsx`
- [x] T006 [P] [US1] Implement note editor component in `notes-app/src/components/NoteEditor.tsx`
- [x] T007 [P] [US1] Implement auto-save logic for note content in `notes-app/src/components/NoteEditor.tsx`
- [x] T008 [P] [US1] Implement auto-title generation logic (content-based or datetime), including handling for empty content (placeholder) and long content (truncation) in `notes-app/src/services/noteService.ts`
- [x] T009 [P] [US1] Implement note list display component in `notes-app/src/components/NoteList.tsx`
- [x] T010 [P] [US1] Integrate note creation and display on the main screen in `notes-app/src/pages/HomePage.tsx`

## Phase 4: User Story 2 - Edit and Manage Notes (P2)
- [x] T011 [P] [US2] Implement note editing functionality in `notes-app/src/components/NoteEditor.tsx`

**Story Goal**: As a user, I want to be able to edit existing notes and have changes auto-saved, so that I can refine and update my information.
**Independent Test**: Can be tested by opening an existing note, making changes, and verifying they are saved and reflected.

- [x] T011 [P] [US2] Implement note editing functionality in `notes-app/src/components/NoteEditor.tsx`
- [x] T012 [P] [US2] Ensure auto-save functionality works for editing existing notes in `notes-app/src/components/NoteEditor.tsx`

## Phase 5: Quality Assurance & Performance
 
- [ ] T013 [QA] Verify SC-001: New note auto-save within 5 seconds.
- [ ] T014 [QA] Verify SC-002: 95% of notes titled within 2 seconds.
- [ ] T015 [QA] Verify SC-003: Edit/save existing notes without data loss.
- [ ] T016 [QA] Verify SC-004: Intuitive and clean UI/UX, adhering to design system and WCAG 2.1 AA.
- [ ] T017 [Perf] Implement basic performance monitoring for auto-save and title generation.
- [ ] T018 [Perf] Conduct basic performance tests for page load and interactive elements.
 
## Dependencies

- Phase 2 tasks must be completed before Phase 3 tasks.
- Phase 3 tasks must be completed before Phase 4 tasks.

## Parallel Execution Examples

**Phase 3 (User Story 1)**:
- T005, T006, T007, T008, T009 can be worked on in parallel as they touch different components/services. T010 depends on the completion of T005-T009.

**Phase 4 (User Story 2)**:
- T011 and T012 can be worked on in parallel as they relate to editing and saving.

## Implementation Strategy

- **MVP First**: Focus on completing User Story 1 (Create and View Notes) first, as it represents the core functionality.
- **Incremental Delivery**: Each phase delivers a complete, independently testable increment.