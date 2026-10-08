<div align="center">

# Vishal Prajapati | Portfolio

**Full Stack Developer · AI/ML Developer · B.Tech CSE (AI)**

[![Live Site](https://img.shields.io/badge/Live-my--portfolio--mvn4.vercel.app-00bf8f?style=for-the-badge&logo=vercel&logoColor=white)](https://my-portfolio-mvn4.vercel.app/)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)
![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)

</div>

---

## About

This is my personal portfolio website. It showcases who I am, my skills, the projects I've built, and my journey so far as a B.Tech CSE (AI) student at the University of Lucknow.

I enjoy backend development, problem solving, and turning machine learning models into working web apps. I'm currently exploring Generative AI and Agentic AI.

**Live site:** https://my-portfolio-mvn4.vercel.app/

## Sections

| Section | What's inside |
|---|---|
| **Home** | Animated intro, typing roles, and links to my resume and socials |
| **About** | A short bio and what I'm focused on |
| **Skills** | Scrolling showcase of the languages, frameworks, and AI/ML tools I use |
| **Projects** | Scroll-driven project cards with screenshots, tech stacks, and live links |
| **Journey** | Timeline of education, DSA practice, and hackathons |
| **Contact** | Working contact form that emails me directly |

## Featured Projects

| Project | Description | Links |
|---|---|---|
| **Reelist** | Full-stack movie recommendation system using NLP (TF-IDF) with the TMDB API | [Live](https://reelists-1.onrender.com/) |
| **Night Check-In** | ML web app that predicts Airbnb room types, served through a FastAPI REST API | [Live](https://new-york-airbnb.onrender.com/) |
| **Student Mental Health Signal** | Student wellness analytics app with a trained model behind a FastAPI backend | [Live](https://mansik-health-1.onrender.com/) |
| **Undertone** | Text emotion detector covering sadness, joy, love, anger, fear, and surprise | [Live](https://undertone-4z6z.onrender.com/) |
| **Chatting Application** | Personal chat app project | [GitHub](https://github.com/V-Madara/Chatting-App) |
| **Brick Breaker** | Java desktop game with a paddle, ball, bricks, and score | [GitHub](https://github.com/V-Madara/Vishal_GUIs/tree/main/Brick%20Breaker%20Game) |
| **Madara Uchiha Website** | Multi-section fan website hosted on GitHub Pages | [Live](https://v-madara.github.io/Madara-Website/HTML/index.html) |

## Tech Stack

- **Framework:** React 19 with Vite
- **Styling:** Tailwind CSS 4
- **Animation:** Framer Motion, GSAP
- **Icons:** React Icons
- **Contact form:** EmailJS
- **Hosting:** Vercel

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/V-Madara/<your-repo-name>.git
cd <your-repo-name>

# Install dependencies
npm install
```

### Environment variables

The contact form uses [EmailJS](https://www.emailjs.com/). Copy `.env.template` to a new file named `.env` and fill in your values:

```env
VITE_SERVICE_ID=your_service_id
VITE_TEMPLATE_ID=your_template_id
VITE_PUBLIC_KEY=your_public_key
```

> Without these values, the form falls back to opening the visitor's email app.
> Restart the dev server after changing `.env`.

### Run locally

```bash
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview
```

## Deployment

The site is deployed on **Vercel**:

1. Push the repository to GitHub.
2. Import it on [vercel.com](https://vercel.com) (Vite is detected automatically).
3. Add `VITE_SERVICE_ID`, `VITE_TEMPLATE_ID`, and `VITE_PUBLIC_KEY` under **Environment Variables**.
4. Deploy. Every push to `main` redeploys automatically.

## Project Structure

```
├── public/              # Resume, favicon, and static files
├── src/
│   ├── assets/          # Images and project screenshots
│   ├── components/      # Navbar, menu, cursor, intro, particles, music player
│   ├── sections/        # Home, About, Skills, Projects, Journey, Contact, Footer
│   ├── App.jsx
│   └── main.jsx
├── .env.template        # EmailJS variables template
└── index.html
```

## Customizing

- **Projects:** edit the list in `src/sections/Projects.jsx`
- **Journey timeline:** edit `src/sections/Experience.jsx`
- **Skills:** edit `src/sections/Skills.jsx`
- **Resume:** replace `public/Resume.pdf`

## Credits

Built on a React portfolio template and customized with my own content, projects, and design changes.

## Contact

- **Email:** vishalkumarprajapati1881@gmail.com
- **LinkedIn:** [vishal-prajapati](https://linkedin.com/in/vishal-prajapati-b1585437b)
- **GitHub:** [@V-Madara](https://github.com/V-Madara)

---

<div align="center">

If you like this project, consider giving it a ⭐

</div>
