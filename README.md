# Clawbot Installer Guide (Next.js)

This project delivers a single-page Next.js 14 application that walks you through installing the Clawbot desktop tooling – from driver prep to firmware flashing and diagnostics.

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm 9+ (bundled with Node.js)

### Installation

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to view the setup guide.

## Available Scripts

- `npm run dev` – start the development server
- `npm run build` – create a production build
- `npm start` – serve the production build
- `npm run lint` – run Next.js/ESLint checks

## Deploying

The project is optimised for Vercel. After `npm run build` succeeds locally you can deploy with:

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-8b1c5d47
```

## Project Structure

```
app/
├─ components/
│  └─ StepCard.tsx       # Reusable step renderer
├─ globals.css           # Global styling
├─ layout.tsx            # Root layout and metadata
└─ page.tsx              # Main installer walkthrough
```

## License

Released under the MIT license.
