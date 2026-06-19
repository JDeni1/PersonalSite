# Personal Portfolio — Jill Denisse Bautista

A personal, responsive portfolio website built with React and TypeScript. Features a clean design, dark mode support, and a single-page layout for the Home and About sections.

## Live Site

>https://jill-bautista.onrender.com/

## Tech Stack

### Core Technologies

- **React** — Frontend UI library
- **TypeScript** — Type-safe JavaScript
- **Vite** — Build tool and development server

### Key Libraries

- **Framer Motion** — Animations and page transitions

## Features

**Dark Mode**
  Toggle between light and dark themes using the sun/moon button in the navbar. The selected theme is persisted in `localStorage` so it is remembered between visits.

**Responsive Design**
  The layout adapts across desktop, tablet, and mobile screen sizes using CSS media queries and flexible grid/flex layouts.

**Single-Page Home + About**
  The Home and About sections live on the same scrollable page. The navbar's "About" link smoothly scrolls to the About section using `IntersectionObserver` to track which section is currently in view and highlight the correct nav item.

**Projects Page**
  A separate `/projects` route showcases software projects, with each project card supports hover animations and optionally plays a preview video.

**Timeline**
  A vertical timeline on the Home page displaying key milestones. Each entry has a colour-coded tag (work, education, project, etc.) with the dot on the timeline line matching the tag colour.

**Photo Gallery**
  A gallery in the About section displays personal photos in a 3-column grid. Clicking a photo opens a modal with the image, a title, description, and date.

**Contact Cards**
  Quick-access contact cards (Email, LinkedIn) are displayed on the Home page with hover animations.

**Sticky Navbar**
  The navbar sticks to the top of the page on scroll and uses a spring animation (via Framer Motion's `layoutId`) to slide the active indicator between tabs smoothly.

## Project Structure

```
src/
├── assets/                  # Images and icons
├── components/
│   ├── Contacts/            # Contact cards data and component
│   ├── Footer/              # Footer component
│   ├── HobbiesGallery/      # Photo gallery with modal
│   ├── HomeFeature/         # Home feature section
│   ├── Intro/               # Intro/hero card component and data
│   ├── Navbar/              # Sticky navbar with scroll tracking
│   ├── Pages/               # Page-level components (Home, About, Projects)
│   ├── ProjectBoxes/        # Project card grid with video hover
│   └── TimeLine/            # Vertical timeline component and data
├── App.tsx                  # Root component with theme and routing
├── Types.ts                 # Shared TypeScript interfaces
├── main.tsx                 # Entry point
└── index.css                # Global styles
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output is written to the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Deployment

This site is deployed as a **Static Site** on [Render](https://render.com).

| Setting | Value |
|---|---|
| Build Command | `npm install && npm run build` |
| Publish Directory | `dist` |
| Rewrite Rule | `/* → /index.html` |

The rewrite rule ensures client-side routes like `/projects` don't 404 on refresh.

## Customisation

All content is stored in data files — no code changes needed to update personal info:

| File | What it controls |
|---|---|
| `src/components/Intro/IntroData.ts` | Hero name, description, and profile image |
| `src/components/Contacts/ContactData.ts` | Email, LinkedIn, and other contact links |
| `src/components/TimeLine/TimeLineData.ts` | Timeline entries with tags and colours |
| `src/components/HobbiesGallery/HobbiesGalleryData.ts` | Gallery photos, titles, and dates |
| `src/components/ProjectBoxes/ProjectBoxesData.ts` | Project cards with links and preview videos |
