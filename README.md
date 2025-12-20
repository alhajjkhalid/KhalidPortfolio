# Khalid Alhajj - Portfolio Website

A modern, one-page portfolio website built with Next.js, showcasing a "generalist advantage" approach inspired by the book "Range: How Generalists Triumph in a Specialized World."

## 🎯 Design Philosophy

This portfolio was designed with the following core principles from David Epstein's "Range":

- **Breadth Over Narrow Specialization**: The site showcases diverse skills as interconnected strengths, not scattered interests
- **Adaptability & Cross-Domain Thinking**: Each section demonstrates how different experiences compound into unique capabilities
- **Pattern Recognition Across Disciplines**: Project descriptions highlight how diverse backgrounds enable novel solutions
- **Creativity from Diverse Experience**: The narrative positions range as a competitive advantage in the AI age

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone or download the project
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
portfolio/
├── public/
│   └── profile.jpg          # Profile photo
├── src/
│   └── app/
│       ├── globals.css      # Global styles, animations, theme
│       ├── layout.tsx       # Root layout with metadata
│       └── page.tsx         # Main one-page portfolio component
├── package.json
└── README.md
```

## 🎨 Features

- **Responsive Design**: Mobile-first approach with smooth transitions
- **Smooth Scroll Navigation**: Fixed navigation with section linking
- **Framer Motion Animations**: Scroll-triggered reveals and hover effects
- **Dark Theme**: Premium dark aesthetic with gold accents
- **Performance Optimized**: Next.js Image optimization, efficient animations
- **Accessible**: Semantic HTML, focus states, alt text

## 📝 Customization Guide

### Updating Content

All content is located in `src/app/page.tsx`. Key sections to modify:

1. **Hero Section**: Update headline, tagline, and stats
2. **About Section**: Modify the narrative and key qualities
3. **Skills Section**: Update the `skillClusters` array
4. **Projects Section**: Modify the `projects` array
5. **Experience Section**: Update `experiences` and `education` arrays
6. **Contact Section**: Update email, phone, and social links

### Changing Theme Colors

Colors are defined as CSS variables in `src/app/globals.css`:

```css
:root {
  --color-bg: #0a0a0b;           /* Background */
  --color-accent: #c9a227;        /* Gold accent */
  --color-accent-light: #e4c85c;  /* Light gold */
  --color-text: #f5f5f5;          /* Primary text */
  --color-text-muted: #9ca3af;    /* Secondary text */
  --color-border: #262629;        /* Border color */
}
```

### Updating Profile Photo

Replace `/public/profile.jpg` with your own image (recommended: 800x1000px, JPG/PNG).

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload the .next folder or connect your GitHub repo
```

### Self-Hosted

```bash
npm run build
npm start
# Runs on port 3000 by default
```

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Outfit (body) + Playfair Display (headings)

## 📄 License

This project is open source and available for personal use and modification.

---

Built with ❤️ by Khalid Alhajj | [LinkedIn](https://linkedin.com/in/khalidalhajj)
