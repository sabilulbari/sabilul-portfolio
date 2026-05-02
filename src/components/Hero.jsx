"use client";
import React from 'react';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.subtitle}
          >
            FULL-STACK WEB DEVELOPER
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={styles.title}
          >
            SABILUL <br /> <span>BARI</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={styles.description}
          >
            A Full-Stack Web Developer specialized in creating premium, 
            high-performance digital experiences.
          </motion.p>

          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className={styles.cta}
          >
            <div className={styles.ctaInner}>
              <ArrowDownRight className={styles.icon} />
              <span>DOWNLOAD CV</span>
            </div>
          </motion.button>
        </div>

        <div className={styles.visual}>
          <div className={styles.circleContainer}>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className={styles.orbit}
            >
              <div className={styles.dot}></div>
            </motion.div>
            <div className={styles.mainCircle}>
              <div className={styles.innerGlow}></div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.ticker}>
        <div className={styles.tickerTrack}>
          {['BACK END', 'WEBFLOW', 'FULL STACK', 'FRONT END', 'UI DESIGN'].map((item, i) => (
            <span key={i}>{item}</span>
          ))}
          {['BACK END', 'WEBFLOW', 'FULL STACK', 'FRONT END', 'UI DESIGN'].map((item, i) => (
            <span key={`dup-${i}`}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
