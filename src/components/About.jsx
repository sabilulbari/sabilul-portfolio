"use client";
import React from 'react';
import styles from './About.module.css';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className={styles.title}
          >
            About <br /> <span className={styles.accent}>me</span>
            <div className={styles.titleLine}></div>
          </motion.h2>
          
          <div className={styles.content}>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className={styles.description}
            >
              Specialized in building modern web applications with a focus on 
              performance, user experience, and aesthetic design. I bridge the gap 
              between complex backend logic and pixel-perfect frontends.
            </motion.p>

            
            <div className={styles.stats}>
              <div className={styles.stat}>
                <h3>310+</h3>
                <p>project completed</p>
              </div>
              <div className={styles.stat}>
                <h3>10+</h3>
                <p>years experience</p>
              </div>
            </div>

            <button className={styles.knowMore}>
              KNOW MORE <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
