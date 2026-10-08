# FitLog

FitLog is a focused workout library and planning companion for people who want to
choose their lifts, understand how to perform them, and organize the next
session. The app combines an API-backed exercise library with a fast, dark
fitness dashboard for building a daily plan and saving workouts for later.

## Technologies

- **Next.js 16** with the App Router
- **React 19** and **TypeScript**
- **Tailwind CSS 4** with **DaisyUI**
- **Lucide React** for interface icons
- **React Toastify** for action feedback
- **Next/Image** for optimized local and remote workout imagery
- **FitLog workout API** at `https://api.abcz.workers.dev/api/fitlog`

## Key features

1. **Workout library**  
   Browse a responsive collection of exercises with muscle-group tags,
   equipment information, duration, estimated calories, and ratings.

2. **Detailed workout guidance**  
   Open an individual workout route to view its image, description, target
   muscles, difficulty, sets, reps, duration, calories, rating, and
   step-by-step instructions.

3. **Today's workout plan**  
   Add exercises directly from their detail pages to a personal plan, review
   the plan from the My Plan page, and mark completed workouts as done.

4. **Save workouts for later**  
   Bookmark exercises for future sessions, switch between the current plan and
   saved workouts, and remove saved items when they are no longer needed.

5. **Plan overview and sorting**  
   Track exercise count, total planned minutes, and estimated calories while
   sorting the visible list by duration, calories, or rating. Responsive
   navigation also displays live plan and saved-workout counts.

## Getting started

### Prerequisites

- Node.js 20 or newer
- npm

### Installation

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

## Main routes

- `/` — Hero section and workout library
- `/workouts/[id]` — Workout details and plan actions
- `/my-plan` — Today's plan, saved workouts, summary metrics, and sorting

## Project structure

```text
src/
└── app/
    ├── components/       Shared UI and workout actions
    ├── context/          Workout plan and saved-workout state
    ├── homepage/         Hero banner and library
    ├── my-plan/          Plan dashboard
    ├── workouts/[id]/    Workout detail pages
    └── types/            Exercise data types
```

Workout plan and saved-workout state is currently held in React Context for the
active browser session. Exercise content is fetched from the FitLog API.
