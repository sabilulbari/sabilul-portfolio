"use client";
import React from 'react';
import styles from './Footer.module.css';
import { MessageCircle, Globe, Briefcase, Users, ArrowDownLeft } from 'lucide-react';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.followSection}>
          <h2 className={styles.followTitle}>Follow me</h2>
          <div className={styles.socials}>
            <a href="#"><MessageCircle /></a>
            <a href="#"><Globe /></a>
            <a href="#"><Briefcase /></a>
            <a href="#"><Users /></a>
          </div>

          <ArrowDownLeft className={styles.bigArrow} />
        </div>

        <div className={styles.bottom}>
          <div className={styles.logo}>SABILUL BARI</div>
          <div className={styles.links}>
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>© 2024 Sabilul. All rights reserved.</p>
          <div className={styles.legal}>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
