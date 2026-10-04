"use client";
import React from "react";
import styles from "./About.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Wand2,
  Clock,
  Code2,
  Rocket,
  Sparkles,
  Compass,
  Target,
  Palette,
  Users,
  Zap,
  Heart,
  Lightbulb,
  Smile,
  Layers,
  Server,
  Database,
  Layout,
  Globe,
  Wind,
  FolderGit2,
} from "lucide-react";

const personalityItems = [
  { icon: Compass, title: "Curious", desc: "Always eager to learn new things" },
  { icon: Target, title: "Detail-oriented", desc: "Pixel-perfect and clean code" },
  { icon: Palette, title: "Creative", desc: "Think outside the box" },
  { icon: Users, title: "Collaborative", desc: "Love working in teams" },
  { icon: Zap, title: "Resilient", desc: "Never give up on challenges" },
  { icon: Heart, title: "Passionate", desc: "Code with heart" },
  { icon: Lightbulb, title: "Innovative", desc: "Always seeking better solutions" },
  { icon: Smile, title: "Adaptable", desc: "Quick to learn new technologies" },
];

const journeyTimeline = [
  {
    year: "2023",
    icon: Code2,
    iconBg: "linear-gradient(135deg, #10b981, #059669)",
    title: "First Line of Code",
    desc: "Started learning HTML, CSS, and JavaScript basics",
    badges: ["✓ Completed first responsive website", "✓ Learned JavaScript fundamentals", "✓ Built first interactive project"],
  },
  {
    year: "2024",
    icon: Rocket,
    iconBg: "linear-gradient(135deg, #3b82f6, #0284c7)",
    title: "Exploring Python",
    desc: "Diving into Python and exploring backend concepts",
    badges: ["✓ Mastered Python syntax and libraries", "✓ Learned OOP and file handling"],
  },
  {
    year: "2025-2026",
    icon: Sparkles,
    iconBg: "linear-gradient(135deg, #ec4899, #d946ef)",
    title: "MERN Stack Mastery",
    desc: "Dived into React, Node.js, Express, and MongoDB",
    badges: ["✓ Built 7+ full-stack projects", "✓ Contributed to open source", "✓ Started freelancing journey", "✓ Learning Next.js & TypeScript"],
  },
];

const techStack = [
  { icon: Layers, label: "Frontend", color: "#3b82f6" },
  { icon: Server, label: "Backend", color: "#10b981" },
  { icon: Database, label: "Database", color: "#a855f7" },
  { icon: Layout, label: "UI/UX", color: "#ec4899" },
  { icon: Globe, label: "Web", color: "#f97316" },
  { icon: Wind, label: "Tailwind", color: "#06b6d4" },
  { icon: FolderGit2, label: "MongoDB", color: "#10b981" },
];

const About = () => {
  return (
    <section className={styles.about} id="about">
      <body>
        <div className={styles.container}>
          {/* Top Header */}
          <div className={styles.headerGroup}>
            <div className={styles.topBadge}>
              <Wand2 className={styles.badgeIcon} />
              <span>Get to know me</span>
            </div>
            <h2 className={styles.title}>
              About <span className={styles.titleGradient}>Me</span>
            </h2>
            <p className={styles.subtitle}>Developer by day, creator by night — passionate about building meaningful digital experiences that make a difference</p>
          </div>

          {/* Main Grid Content */}
          <div className={styles.contentGrid}>
            {/* Left Column */}
            <div className={styles.leftColumn}>
              {/* Profile Image Frame with Glow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={styles.profileWrapper}
              >
                <div className={styles.profileGlow} />
                <div className={styles.profileCard}>
                  <Image src="/images/Sabilul_Bari.png" alt="Md. Mehedi Hasan" width={340} height={380} className={styles.profileImage} priority />
                </div>
              </motion.div>

              {/* Quick Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className={styles.statsGrid}
              >
                <div className={styles.statCard}>
                  <span className={styles.statNumber}>2+ Years</span>
                  <span className={styles.statLabel}>Experience</span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statNumber}>15+</span>
                  <span className={styles.statLabel}>Projects</span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statNumber}>☕ 20+</span>
                  <span className={styles.statLabel}>Coffee/Week</span>
                </div>
              </motion.div>

              {/* My Personality Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className={styles.personalitySection}
              >
                <div className={styles.sectionHeader}>
                  <span className={styles.starIcon}>⭐</span>
                  <h3 className={styles.sectionTitle}>My Personality</h3>
                </div>
                <div className={styles.personalityGrid}>
                  {personalityItems.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className={styles.personalityCard}>
                        <Icon className={styles.personalityIcon} />
                        <div className={styles.personalityContent}>
                          <span className={styles.personalityTitle}>{item.title}</span>
                          <span className={styles.personalityDesc}>{item.desc}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className={styles.rightColumn}>
              {/* Bio Card */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className={styles.bioCard}>
                <h3 className={styles.greeting}>
                  Hi, I&apos;m <span className={styles.nameHighlight}>Md. Sabilul Bari</span>
                </h3>
                <p className={styles.bioText}>
                  A passionate Computer Science student and Full Stack Developer from Bangladesh. My coding journey started with curiosity and turned into a lifelong passion. I
                  love building things that live on the internet and solving real-world problems through code. Every line of code I write is a step towards making the digital world
                  better.
                </p>
              </motion.div>

              {/* Programming Journey Timeline */}
              <div className={styles.journeySection}>
                <div className={styles.journeyHeader}>
                  <Clock className={styles.clockIcon} />
                  <h3>My Programming Journey</h3>
                </div>

                <div className={styles.timeline}>
                  <div className={styles.timelineLine} />
                  {journeyTimeline.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        className={styles.timelineItem}
                      >
                        <div className={styles.timelineIconNode} style={{ background: item.iconBg }}>
                          <Icon size={14} color="#ffffff" />
                        </div>

                        <div className={styles.timelineCard}>
                          <div className={styles.timelineCardHeader}>
                            <h4 className={styles.timelineCardTitle}>{item.title}</h4>
                            <span className={styles.yearBadge}>{item.year}</span>
                          </div>
                          <p className={styles.timelineCardDesc}>{item.desc}</p>
                          <div className={styles.badgeList}>
                            {item.badges.map((b, i) => (
                              <span key={i} className={styles.checkBadge}>
                                {b}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Technologies Section */}
              <div className={styles.techSection}>
                <div className={styles.techHeader}>
                  <span className={styles.codeIcon}>&lt;/&gt;</span>
                  <h3>Technologies I Work With</h3>
                </div>
                <div className={styles.techGrid}>
                  {techStack.map((tech, index) => {
                    const Icon = tech.icon;
                    return (
                      <div key={index} className={styles.techChip}>
                        <Icon size={15} style={{ color: tech.color }} />
                        <span>{tech.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </section>
  );
};

export default About;
