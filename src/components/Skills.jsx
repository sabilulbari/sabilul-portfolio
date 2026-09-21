"use client";
import React from 'react';
import styles from './Skills.module.css';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const skillsData = [
  { name: 'Tailwind', level: 9 },
  { name: 'React', level: 9 },
  { name: 'Fremar Motion', level: 6 },
  { name: 'Next.js', level: 9 },
  { name: 'Javascript', level: 9 },
  { name: 'Node.js', level: 7 },
  { name: 'Express.js', level: 6 },
  { name: 'MongoDB', level: 7 },
  { name: 'TypeScript', level: 5 },
];

const Skills = () => {
  return (
    <section className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            My skills <span>↘</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {skillsData.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={styles.skillCard}
            >
              <span className={styles.skillName}>{skill.name}</span>
              <div className={styles.dots}>
                {[...Array(10)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`${styles.dot} ${i < skill.level ? styles.active : ''}`}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
