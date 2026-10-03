"use client";
import React, { useState } from "react";
import styles from "./Projects.module.css";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const categories = [
  "All Development",
  "Website Development",
  "Mobile Development",
  "Frontend Development",
  "Backend Development",
];

const projectsData = [
  {
    id: 1,
    tag: "Web Site",
    title: "Keen Keeper",
    category: "Website Development",
    imgUrl: "/images/projects/project-1.jpg",
    liveLink: "https://keen-keper.vercel.app/",
  },
  {
    id: 2,
    tag: "UI Design",
    title: "Book Vibe Mart",
    category: "Website Development",
    imgUrl: "/images/projects/project-2.jpg",
    liveLink: "https://book-vibe-mart.vercel.app/",
  },
  {
    id: 3,
    tag: "Idea Creation",
    title: "Pet Care & Adoption",
    category: "Backend Development",
    imgUrl: "/images/projects/project-3.jpg",
    liveLink: "https://pet-pals.vercel.app/",
  },
  {
    id: 4,
    tag: "Web App",
    title: "Social Life Lesson",
    category: "Frontend Development",
    imgUrl: "/images/projects/project-4.jpg",
    liveLink: "https://lifelessonclient.vercel.app",
  },
  {
    id: 5,
    tag: "E-Commerce",
    title: "The Dragon News",
    category: "Website Development",
    imgUrl: "/images/projects/project-5.jpg",
    liveLink: "https://dragon-news-ruddy.vercel.app/",
  },
  {
    id: 6,
    tag: "Mobile App",
    title: "Payoo App",
    category: "Mobile Development",
    imgUrl: "/images/projects/project-6.jpg",
    liveLink: "https://payoo-app-one.vercel.app/",
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("Website Development");

  const filteredProjects =
    activeTab === "All Development"
      ? projectsData
      : projectsData.filter((p) => p.category === activeTab);

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.headingWrapper}
        >
          <h2 className={styles.title}>My Projects</h2>
        </motion.div>

        {/* Filter Tabs */}
        <div className={styles.tabsWrapper}>
          <div className={styles.tabsContainer}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.tabBtn} ${
                  activeTab === cat ? styles.activeTabBtn : ""
                }`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Circular Projects Grid */}
        <motion.div layout className={styles.circleGrid}>
          <AnimatePresence mode="popLayout">
            {(filteredProjects.length > 0 ? filteredProjects : projectsData).map(
              (project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.35 }}
                  className={styles.projectItem}
                >
                  {/* Category label above circle */}
                  <span className={styles.projectTag}>{project.tag}</span>

                  {/* Circular Frame */}
                  <div className={styles.circleContainer}>
                    <div className={styles.circleFrame}>
                      <Image
                        src={project.imgUrl}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 180px, 240px"
                        className={styles.projectImg}
                      />
                      <div className={styles.circleBackdrop} />

                      {/* Content overlay inside circle */}
                      <div className={styles.circleContent}>
                        <h3 className={styles.projectName}>{project.title}</h3>
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.liveLink}
                          aria-label={`View ${project.title} live demo`}
                        >
                          <span>Live Demo</span>
                          <ExternalLink size={13} />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Button */}
        <div className={styles.bottomWrapper}>
          <button
            className={styles.seeAllBtn}
            onClick={() => setActiveTab("All Development")}
          >
            <span>SEE ALL PROJECTS</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
