# Vishal Prajapati — Portfolio

React + Vite + Tailwind CSS + Framer Motion portfolio.

## Run locally
```
npm install
npm run dev
```

## Contact form (EmailJS)
Copy `.env.template` to `.env` and fill in `VITE_SERVICE_ID`, `VITE_TEMPLATE_ID`, `VITE_PUBLIC_KEY`.
The form sends the fields `name`, `email`, `idea` (the message), `from_name`, `reply_to`.

## Where to edit
- `src/sections/Projects.jsx` — project cards (replace the GitHub links with live/repo links)
- `src/sections/Experience.jsx` — Journey timeline
- `public/Resume.pdf` — resume download
- `public/*.mp3` — background music

## Deploy
Vercel or Netlify: build command `npm run build`, publish directory `dist`.
