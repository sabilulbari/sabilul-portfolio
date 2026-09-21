"use client";
import React, { useState } from "react";
import styles from "./Projects.module.css";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = ["All", "UI Development", "Website Development", "Mobile Web App", "Full Stack Development"];

const projectsData = [
  {
    id: 1,
    title: "Keen Keeper",
    category: "Website Development",
    imgUrl: "https://ik.imagekit.io/sabilul/Gemini_Generated_Image_6nfn7a6nfn7a6nfn.jfif",
    liveLink: "https://keen-keper.vercel.app/",
    color: "#4c1d95",
  },
  {
    id: 2,
    title: "Book Vibe Mart",
    category: "Website Development",
    imgUrl: "https://ik.imagekit.io/sabilul/Gemini_Generated_Image_rmc7qtrmc7qtrmc7.jfif",
    liveLink: "https://book-vibe-mart.vercel.app/",
    color: "#18181b",
  },
  {
    id: 3,
    title: "Pet Care & Adoption",
    category: "Full Stack Development",
    imgUrl: "https://ik.imagekit.io/sabilul/Gemini_Generated_Image_hunha3hunha3hunh.jfif",
    liveLink: "https://pet-pals.vercel.app/",
    color: "#450a0a",
  },
  {
    id: 4,
    title: "Social Life Lesson",
    category: "Full Stack Development",
    imgUrl: "https://ik.imagekit.io/sabilul/Gemini_Generated_Image_o3cxdko3cxdko3cx.jfif",
    liveLink: "https://lifelessonclient.vercel.app",
    color: "#1e1b4b",
  },
  {
    id: 5,
    title: "The Dragon News",
    category: "UI Development",
    imgUrl: "https://ik.imagekit.io/sabilul/Gemini_Generated_Image_7n8xa77n8xa77n8x.jfif",
    liveLink: "https://dragon-news-ruddy.vercel.app/",
    color: "#312e81",
  },
  {
    id: 6,
    title: "Payoo App",
    category: "Mobile Web App",
    imgUrl: "https://ik.imagekit.io/sabilul/Gemini_Generated_Image_rvz4khrvz4khrvz4.jfif",
    liveLink: "https://payoo-app-one.vercel.app/",
    color: "#0f172a",
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");

  // Filter projects based on activeTab (Show all if 'All' is selected)
  const filteredProjects = activeTab === "All" ? projectsData : projectsData.filter((p) => p.category === activeTab);

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <h2 className={styles.title}>
          My Projects <span>↘</span>
        </h2>

        <div className={styles.tabs}>
          {categories.map((cat) => (
            <button key={cat} className={`${styles.tab} ${activeTab === cat ? styles.activeTab : ""}`} onClick={() => setActiveTab(cat)}>
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={styles.card}
                style={{ backgroundColor: project.color }}
              >
                <Image src={project.imgUrl} alt={project.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className={styles.project_img} />
                <div className={styles.cardContent}>
                  <h3>{project.title}</h3>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    Show Live
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer button toggles activeTab to 'All' or hides when already on 'All' */}
        {activeTab !== "All" && (
          <div className={styles.footer}>
            <button className={styles.viewAll} onClick={() => setActiveTab("All")}>
              SEE ALL PROJECTS <span>↗</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
