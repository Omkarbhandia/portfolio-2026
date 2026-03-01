# Industrial Studio Portfolio v2.0

[Live Demo](#) <!-- Update with your Vercel or deployment link -->

## About
A high-performance, minimalist developer portfolio focused on 'Industrial Glass' aesthetics and motion-driven UX. Designed with a strict brutalist-inspired dark theme, the architecture emphasizes fluid typography, subtle glowing meshes, and an ultra-smooth browsing experience.

## Tech Stack
- **Next.js 14**: Leveraging the App Router for fast, seamless routing and metadata management.
- **React**: Component-driven UI architecture.
- **Framer Motion**: Complex layout transitions, spring animations, and element presence detection.
- **Tailwind CSS**: Utility-first styling for glassmorphism, responsive grids, and design tokens.
- **Web3Forms**: Secure, serverless email contact logic.
- **Vercel**: Optimized edge deployment and hosting platform.

## Features
- **Command Palette Navigation**: A developer-centric keyboard interface for jumping between sections without scrolling.
- **Dynamic Mesh Gradients**: Atmospheric, performance-optimized background gradients.
- **Responsive 'Digital vs. Analog' Split**: An engaging two-column display contrasting technical architecture against human hobbies.
- **Safari Performance Optimizations**: Aggressive hardware acceleration (`translate3d`), CSS `will-change` hints, and static noise overlays to entirely eliminate scroll latency on webkit and mobile devices.

## Architecture
Built entirely on the Next.js App Router. The UI layout utilizes precise `absolute` and `fixed` positioning, along with strict `z-index` layering, to maintain persistent identity branding that perfectly overlaps the lower structural content. Complex components are explicitly mapped to their own GPU layers to prevent blend mode recalculations during interaction.

## Setup

1. Clone the repository and navigate to the root directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Environment Variables:
   Create a `.env.local` file in the root directory to enable the contact form:
   ```env
   NEXT_PUBLIC_WEB3FORMS_KEY=your-web3forms-access-key-here
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) to view the development build.
