# React Spline Animation Project

A modern React application featuring interactive 3D Spline animations, smooth GSAP scroll effects, and a beautiful dark-themed landing page.

## Features

- 🎨 Interactive 3D Spline particle viewer
- ✨ GSAP animations with ScrollTrigger
- 📱 Fully responsive design
- 🌓 Dark theme UI
- 🎬 Smooth scroll animations
- 🚀 Built with Vite for fast development

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **GSAP** - Animation library
- **Spline Viewer** - 3D interactive scenes

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd react-spline
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit the URL shown in the terminal (usually `http://localhost:5173`)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
react-spline/
├── src/
│   ├── components/
│   │   ├── HeroSection.jsx      # Hero section with Spline viewer
│   │   ├── AboutSection.jsx     # About us section
│   │   ├── FeaturesSection.jsx  # Features grid
│   │   ├── ServicesSection.jsx  # Services section
│   │   ├── CTASection.jsx       # Call to action
│   │   ├── ContactSection.jsx   # Contact information
│   │   └── Footer.jsx           # Footer component
│   ├── hooks/
│   │   └── useGSAP.js           # GSAP animations setup
│   ├── App.jsx                  # Main app component
│   ├── App.css                  # Global styles
│   └── main.jsx                 # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Customization

### Change Spline Scene

Edit `src/components/HeroSection.jsx` and update the `url` prop in the `spline-viewer` component:

```jsx
<spline-viewer
  url="YOUR_SPLINE_SCENE_URL"
  id="spline-viewer"
></spline-viewer>
```

### Modify Animations

All GSAP animations are configured in `src/hooks/useGSAP.js`. You can adjust timing, easing, and trigger points there.

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready to be deployed to any static hosting service.

## License

This project is open source and available for personal and commercial use.

