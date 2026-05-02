"use client";
import React, { useState } from 'react';
import styles from './Projects.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  'UI Development', 'Website Development', 'Android Development', 'Backend Development', 'Webflow Development'
];

const projectsData = [
  { id: 1, title: 'Nexus CRM', category: 'Website Development', color: '#4c1d95' },
  { id: 2, title: 'Flow App', category: 'Website Development', color: '#18181b' },
  { id: 3, title: 'Vibe Social', category: 'Website Development', color: '#450a0a' },
  { id: 4, title: 'Zenith CMS', category: 'Backend Development', color: '#1e1b4b' },
  { id: 5, title: 'Aura UI', category: 'UI Development', color: '#312e81' },
  { id: 6, title: 'Nova POS', category: 'Android Development', color: '#0f172a' },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState('Website Development');

  const filteredProjects = projectsData.filter(p => p.category === activeTab);

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <h2 className={styles.title}>My Projects <span>↘</span></h2>
        
        <div className={styles.tabs}>
          {categories.map(cat => (
            <button 
              key={cat}
              className={`${styles.tab} ${activeTab === cat ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(project => (
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
                <div className={styles.cardContent}>
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className={styles.footer}>
          <button className={styles.viewAll}>SEE ALL PROJECTS <span>↗</span></button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
