"use client";
import React from "react";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  const tickerItems = [
    "BACK END",
    "WEBFLOW",
    "FULL STACK",
    "FRONT END",
    "BACK END",
    "WEBFLOW",
    "FULL STACK",
    "FRONT END",
  ];

  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        {/* Left Column: Hero Text Content */}
        <div className={styles.content}>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className={styles.subtitleWrapper}>
            <span className={styles.subtitle}>FULL-STACK WEB DEVELOPER</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className={styles.title}>
            SABILUL
            <br />
            BARI
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className={styles.description}>
            Specialized in crafting premium, high-performance web applications, stunning responsive interfaces, and scalable full-stack architectures.
          </motion.p>
        </div>

        {/* Right Column: Hero Visual Portrait with Aura & CV Download Badge */}
        <div className={styles.visualContainer}>
          <div className={styles.visualWrapper}>
            {/* Glowing Neon Circular Halo Behind the Avatar */}
            <div className={styles.auraGlow} />
            <div className={styles.haloRing} />
            <div className={styles.concentricArc} />

            {/* Sabilul's Portrait Image */}
            <div className={styles.portraitWrapper}>
              <Image src="/images/profile.png" alt="Sabilul Bari - Full-Stack Web Developer" width={620} height={680} priority className={styles.portraitImg} />
            </div>

            {/* Glowing Round Download CV Badge */}
            <motion.a
              href="https://drive.google.com/file/d/1Rl4SZOIOTFOeVOiJ0xfr7Ffs5qiFgLUb/view?usp=sharing"
              className={styles.cvBadge}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              title="Download CV"
            >
              <div className={styles.cvBadgeInner}>
                <Download size={22} className={styles.downloadIcon} />
                <span className={styles.cvBadgeText}>RESUME</span>
              </div>
              <div className={styles.cvPulse} />
            </motion.a>

            {/* Floating Social Icons on the right */}
            <div className={styles.socialRail}>
              <a href="https://github.com/sabilulbari" target="_blank" rel="noopener noreferrer" className={styles.railIcon} aria-label="GitHub">
                <GithubIcon size={17} />
              </a>
              <a href="http://www.linkedin.com/in/sabbilul" target="_blank" rel="noopener noreferrer" className={styles.railIcon} aria-label="LinkedIn">
                <LinkedinIcon size={17} />
              </a>
              <a href="https://wa.me/1778421726" target="_blank" rel="noopener noreferrer" className={styles.railIcon} aria-label="Website">
                <FaWhatsapp size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Ticker / Infinite Marquee Banner */}
      <div className={styles.tickerBar}>
        <div className={styles.tickerTrack}>
          {tickerItems.concat(tickerItems).map((text, idx) => (
            <div key={idx} className={styles.tickerItem}>
              <span className={`${styles.tickerText} ${text === "FULL STACK" ? styles.tickerHighlighted : ""}`}>{text}</span>
              <span className={styles.tickerDot}>•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
