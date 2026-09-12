# Bistro Next V2

This repository contains the approved V2 responsive UX case-study website. It uses semantic HTML, CSS, and vanilla JavaScript. A small dependency-free Node.js build script copies the production files into `dist/` for Netlify or another static host.

## Requirements

- Node.js 20 or newer (Node.js 22 is recommended and configured for Netlify)
- npm 10 or newer

## Install and run locally

```sh
npm install
npm run dev
```

Open `http://127.0.0.1:4173` in a browser. To use another port, run `npm run dev -- --port 3000`.

## Create and preview a production build

```sh
npm run build
npm run preview
```

The production output is written to `dist/`. The preview command serves that directory at `http://127.0.0.1:4173`.

## Deploy with GitHub and Netlify

1. Create an empty GitHub repository and push this project to it.
2. In Netlify, choose **Add new site → Import an existing project**, then select the GitHub repository.
3. Netlify reads `netlify.toml` automatically and runs `npm run build` with `dist` as the publish directory.
4. Deploy the site. No environment variables or secrets are required.

All website assets are local. The four food photographs are stored as embedded WebP data inside `assets/food-images.css`; the website makes no runtime requests to ChatGPT, local preview services, external CDNs, or third-party APIs.
