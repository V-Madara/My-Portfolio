

import React from "react"; 
import { motion, useScroll, AnimatePresence } from "framer-motion"; 
// motion: for animating elements
// useScroll: to track scroll position
// AnimatePresence: to animate components when mounting/unmounting

import reelistImg from "../assets/reelist.jpg";
import nightImg from "../assets/nightcheckin.jpg";
import mindsenseImg from "../assets/mindsense.jpg";
import undertoneImg from "../assets/undertone.jpg";
import chatImg from "../assets/chatapp.jpg";
import brickImg from "../assets/brickbreaker.jpg";
import madaraImg from "../assets/madara.jpg";

const GITHUB = "https://github.com/V-Madara"; // TODO: replace with each project's own GitHub / live link

const MH3 = motion.h3; 
// Shortcut for <motion.h3> for easier typing

// 🔹 Custom Hook: Detects if screen size matches "mobile"
const useIsMobile = (query = "(max-width: 639px)") => {
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== "undefined" && window.matchMedia(query).matches
    // Checks if the screen width is <= 639px (mobile breakpoint)
  );

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(query); // Media query list
    const handler = (e) => setIsMobile(e.matches); // Update state when query changes
    mql.addEventListener?.("change", handler) || mql.addListener(handler); 
    // Add correct event listener (modern OR fallback)

    setIsMobile(mql.matches); // Initialize with current screen size
    return () =>
      mql.removeEventListener?.("change", handler) || mql.removeListener(handler); 
    // Cleanup event listener
  }, [query]);

  return isMobile; 
};

export default function Projects() {
  const isMobile = useIsMobile(); 
  // Detect if the user is on a mobile screen

  // 🔹 List of project objects (text-based cards)
  const projects = React.useMemo(
    () => [
      {
        title: "Reelist",
        subtitle: "Full-Stack Movie Recommendation System",
        link: "https://reelists-1.onrender.com/",
        live: true,
        image: reelistImg,
        bgColor: "#0d4d3d",
        tech: ["FastAPI", "Python", "NLP", "TF-IDF", "TMDB API", "Render"],
        points: [
          "Full-stack web app built with FastAPI and an HTML, CSS, and JavaScript frontend.",
          "NLP-based movie recommendations using TF-IDF similarity.",
          "Integrated the TMDB API for metadata, posters, search, and recommendations, with a local catalog fallback when the API is unavailable.",
        ],
      },
      {
        title: "Night Check-In",
        subtitle: "Airbnb Room Type Predictor",
        link: "https://new-york-airbnb.onrender.com/",
        live: true,
        image: nightImg,
        bgColor: "#1d4f91",
        tech: ["Scikit-learn", "Pandas", "NumPy", "FastAPI", "Pydantic", "Render"],
        points: [
          "End-to-end ML web app that predicts Airbnb room types from listing, location, pricing, review, and availability features.",
          "FastAPI REST API with Pydantic validation serving model inference.",
          "Interactive frontend, deployed on Render.",
        ],
      },
      {
        title: "Student Mental Health Signal",
        subtitle: "MindSense AI: Student Wellness Analytics",
        link: "https://mansik-health-1.onrender.com/",
        live: true,
        image: mindsenseImg,
        bgColor: "#3b2a86",
        tech: ["Python", "Scikit-learn", "FastAPI", "Pydantic", "Joblib", "Render"],
        points: [
          "ML-powered student wellness analytics app with a web interface for collecting student-related inputs such as sleep, study, screen time, and stress.",
          "FastAPI backend serving a trained model via Joblib, with Pydantic input validation.",
        ],
      },
      {
        title: "Undertone",
        subtitle: "Text Emotion Detector",
        link: "https://undertone-4z6z.onrender.com/",
        live: true,
        image: undertoneImg,
        bgColor: "#6b4a12",
        tech: ["Render"],
        points: [
          "Web app that reads the emotion behind a piece of text: sadness, joy, love, anger, fear, or surprise.",
          "Shows the top emotion with a confidence score and a breakdown across all six emotions.",
        ],
      },
      {
        title: "Chatting Application",
        subtitle: "Personal Project",
        link: "https://github.com/V-Madara/Chatting-App",
        image: chatImg,
        bgColor: "#0b5d52",
        tech: [],
        points: [
          "Real-time style chat interface with two users messaging side by side, message timestamps, and a send box.",
        ],
      },
      {
        title: "Brick Breaker",
        subtitle: "Java Desktop Game",
        link: "https://github.com/V-Madara/Vishal_GUIs/tree/main/Brick%20Breaker%20Game",
        image: brickImg,
        bgColor: "#7a1f1f",
        tech: ["Java"],
        points: [
          "Classic brick breaker game built in Java with a paddle, bouncing ball, bricks, and a live score.",
        ],
      },
      {
        title: "Madara Uchiha Website",
        subtitle: "Fan Website",
        link: "https://v-madara.github.io/Madara-Website/HTML/index.html",
        live: true,
        image: madaraImg,
        bgColor: "#3a0b2a",
        tech: ["HTML", "CSS"],
        points: [
          "Multi-section fan website with gallery, quotes, about, and contact sections.",
          "Hosted on GitHub Pages.",
        ],
      },
    ],
    []
  );

  const sceneRef = React.useRef(null); 
  // Reference to the whole projects section (used for scroll tracking)

  const { scrollYProgress } = useScroll({
    target: sceneRef, 
    offset: ["start start", "end end"], 
    // Scroll progress is 0 when section top hits viewport top and 1 at the end
  });

  const thresholds = projects.map((_, i) => (i + 1) / projects.length); 
  // Array of thresholds to switch between projects as user scrolls
  const [activeIndex, setActiveIndex] = React.useState(0); 
  // Keeps track of which project is currently active

  // 🔹 Update activeIndex as user scrolls
  React.useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      const idx = thresholds.findIndex((t) => v <= t); 
      // Find the first threshold that is greater than or equal to scroll progress
      setActiveIndex(idx === -1 ? thresholds.length - 1 : idx); 
      // If not found, show the last project
    });
    return () => unsubscribe(); 
    // Cleanup scroll listener
  }, [scrollYProgress, thresholds]);

  const activeProject = projects[activeIndex]; 
  // Currently displayed project

  return (
    <section
      id="projects"
      ref={sceneRef} 
      className="relative text-white"
      style={{
        height: `${100 * projects.length}vh`, 
        // Section height = 100vh per project (makes scroll-based transitions work) 
        backgroundColor: activeProject.bgColor, 
        // Background changes color based on active project
        transition: "background-color 400ms ease",
      }}
    >
      {/* Sticky container keeps content fixed while scrolling */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        
        {/* Section Title */}
        <h2 className={`text-3xl font-semibold z-10 text-center ${isMobile ? "mt-4" : "mt-8"}`}>
          My Projects 
        </h2>

        {/* Main Project Display Area */}
        <div className={`relative w-full flex-1 flex items-center justify-center ${isMobile ? "-mt-4" : ""}`}>
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                activeIndex === idx ? "opacity-100 z-20" : "opacity-0 z-0 sm:z-10"
              }`}
              style={{ width: "85%", maxWidth: "1200px" }}
            >
              {/* Animate project title when switching */}
              <AnimatePresence mode="wait">
                {activeIndex === idx && (
                  <MH3
                    key={project.title}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`block text-center text-[clamp(2rem,6vw,5rem)] text-white/95 sm:absolute sm:-top-21 sm:left-[35%] lg:left-[-5%] sm:mb-0 font-bangers italic font-semibold ${
                      isMobile ? "-mt-25" : ""
                    }`}
                    style={{ zIndex: 5, textAlign: isMobile ? "center" : "left" }}
                  >
                    {project.title}
                  </MH3>
                )}
              </AnimatePresence>

              {/* Project Details Card */}
              <div
                className={`relative w-full overflow-y-auto bg-black/25 backdrop-blur border border-white/15 shadow-2xl ${
                  isMobile ? "mb-6 rounded-lg p-5" : "mb-10 sm:mb-12 rounded-xl p-10"
                } max-h-[62vh] sm:max-h-[66vh] flex flex-col lg:flex-row gap-6 lg:gap-10 lg:items-center`}
                style={{ zIndex: 10 }}
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full lg:w-1/2 rounded-lg border border-white/15 shadow-xl object-cover"
                    loading="lazy"
                  />
                )}
                <div className="flex-1">
                <p className="text-lg sm:text-2xl text-white/80 mb-4">{project.subtitle}</p>
                <ul className="list-disc pl-5 space-y-3 text-base sm:text-xl text-white/90">
                  {project.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                {project.tech.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-sm bg-white/15 border border-white/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Project Button */}
        <div className={`absolute ${isMobile ? "bottom-20" : "bottom-10"}`}>
          <a
            href={activeProject?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 font-semibold rounded-lg bg-white text-black hover:bg-gray-200 transition-all"
            aria-label={`View ${activeProject?.title}`}
          >
            {activeProject?.live ? "View Live" : "View on GitHub"}
          </a>
        </div>
      </div>
    </section>
  );
}
