"use client";
import React from "react";
import styles from "./Skills.module.css";
import { motion } from "framer-motion";
import { ArrowDownRight, Code2, Paintbrush, FileCode2, Cpu, Globe, Layers, Server, Box } from "lucide-react";

const leftSkills = [
  { name: "CSS", icon: Paintbrush, level: 10 },
  { name: "Tailwind", icon: Layers, level: 7 },
  { name: "Javascript", icon: FileCode2, level: 8 },
  { name: "React", icon: Cpu, level: 8 },
];

const rightSkills = [
  { name: "HTML", icon: Code2, level: 10 },
  { name: "Next.js", icon: Box, level: 9 },
  { name: "Webflow", icon: Globe, level: 9 },
  { name: "Node.js", icon: Server, level: 8 },
];

const SkillItem = ({ skill, index }) => {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={styles.skillRow}
    >
      <div className={styles.skillMeta}>
        <div className={styles.iconBox}>
          <Icon size={16} className={styles.skillIcon} />
        </div>
        <span className={styles.skillName}>{skill.name}</span>
      </div>

      <div className={styles.dotsTrack}>
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i < skill.level ? styles.dotFilled : styles.dotEmpty}`}
          />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.headingWrapper}
        >
          <h2 className={styles.title}>
            My skills <ArrowDownRight className={styles.titleArrow} />
          </h2>
        </motion.div>

        <div className={styles.grid}>
          {/* Left Skills Column */}
          <div className={styles.column}>
            {leftSkills.map((skill, index) => (
              <SkillItem key={skill.name} skill={skill} index={index} />
            ))}
          </div>

          {/* Right Skills Column */}
          <div className={styles.column}>
            {rightSkills.map((skill, index) => (
              <SkillItem key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
