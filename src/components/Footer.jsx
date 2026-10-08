"use client";
import React from "react";
import styles from "./Footer.module.css";
import { motion } from "framer-motion";
import { ArrowDownLeft } from "lucide-react";
import {
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  GithubIcon,
} from "./SocialIcons";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* "Follow me" Banner Section */}
        <div className={styles.followBanner}>
          {/* Left: Follow Me + Socials + Arrow */}
          <div className={styles.bannerLeft}>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={styles.followHeading}
            >
              Follow me
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className={styles.socialIconsRow}
            >
              <a href="http://www.linkedin.com/in/sabbilul" target="_blank" rel="noopener noreferrer" className={styles.socialCircle} aria-label="LinkedIn">
                <LinkedinIcon size={18} />
              </a>
              <a href="https://github.com/sabilulbari" target="_blank" rel="noopener noreferrer" className={styles.socialCircle} aria-label="GitHub">
                <GithubIcon size={18} />
              </a>
              <a href="https://wa.me/1778421726" target="_blank" rel="noopener noreferrer" className={styles.railIcon} aria-label="Website">
                <FaWhatsapp size={17} />
              </a>
            </motion.div>

            {/* Large Diagonal Arrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={styles.arrowWrapper}
            >
              <ArrowDownLeft className={styles.bigArrow} />
            </motion.div>
          </div>

          {/* Right: Sabilul Portrait with Glowing Violet Aura */}
          <div className={styles.bannerRight}>
            <div className={styles.portraitGlow} />
            <div className={styles.portraitContainer}>
              <Image src="/images/profile.png" alt="Sabilul Bari" width={460} height={500} className={styles.followPortrait} />
            </div>
          </div>
        </div>

        {/* Bottom Footer Details */}
        <div className={styles.bottomSection}>
          <div className={styles.brandCol}>
            <span className={styles.brandLogo}>SABILUL BARI</span>
            <p className={styles.copyright}>© {new Date().getFullYear()} Sabilul. All rights reserved.</p>
          </div>

          <div className={styles.linksCol}>
            <div className={styles.navRow}>
              <a href="#home" className={styles.footerLink}>
                Home
              </a>
              <a href="#about" className={styles.footerLink}>
                About
              </a>
              <a href="#projects" className={styles.footerLink}>
                Projects
              </a>
              <a href="#blog" className={styles.footerLink}>
                Blog
              </a>
              <a href="#contact" className={styles.footerLink}>
                Contact
              </a>
            </div>

            <div className={styles.legalRow}>
              <a href="#" className={styles.legalLink}>
                Privacy Policy
              </a>
              <span className={styles.legalDivider}>•</span>
              <a href="#" className={styles.legalLink}>
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
