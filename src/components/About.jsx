"use client";
import React from "react";
import styles from "./About.module.css";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        {/* Left Side: Circular Workspace Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={styles.imageCol}
        >
          <div className={styles.circleOuterGlow}>
            <div className={styles.circleFrame}>
              <Image
                src="/images/about-workspace.jpg"
                alt="Sabilul Bari Developer Workspace"
                fill
                sizes="(max-width: 768px) 320px, 440px"
                className={styles.circleImg}
              />
              <div className={styles.circleOverlay} />
            </div>
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <div className={styles.contentCol}>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.headerGroup}
          >
            <h2 className={styles.title}>
              About
              <br />
              <span className={styles.titleMe}>
                me <ArrowDownRight className={styles.titleArrow} />
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className={styles.description}
          >
            I&apos;m a Full-Stack Web Developer dedicated to engineering performant
            web applications, building intuitive UI/UX design systems, and converting
            intricate ideas into seamless digital solutions with clean, scalable code.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={styles.statsRow}
          >
            <div className={styles.statItem}>
              <span className={styles.statNumber}>
                45<span className={styles.plus}>+</span>
              </span>
              <span className={styles.statLabel}>Project Completed</span>
            </div>

            <div className={styles.statItem}>
              <span className={styles.statNumber}>
                2<span className={styles.plus}>+</span>
              </span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
          </motion.div>

          {/* Hire Me Pill Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <a href="#contact" className={styles.hireBtn}>
              <span>HIRE ME</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
