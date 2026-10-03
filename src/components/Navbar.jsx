"use client";
import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <a href="#home" className={styles.logo}>
          <span className={styles.logoText}>SABILUL BARI</span>
        </a>

        <nav className={styles.desktopNav} aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={styles.navLink}>
              {link.name}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          {/* Cool Theme Toggle Switch */}
          <button
            onClick={toggleTheme}
            className={`${styles.themeSwitch} ${theme === "light" ? styles.lightSwitch : styles.darkSwitch}`}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <div className={styles.switchTrack}>
              <span className={styles.trackIconMoon}>
                <Moon size={13} />
              </span>
              <span className={styles.trackIconSun}>
                <Sun size={13} />
              </span>
              <motion.div
                className={styles.switchThumb}
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                {mounted && (theme === "dark" ? <Moon size={12} /> : <Sun size={12} />)}
              </motion.div>
            </div>
          </button>

          {/* HIRE ME Button */}
          <a href="#contact" className={styles.hireBtn}>
            <span>HIRE ME</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className={styles.menuToggle}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className={styles.mobileMenu}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={styles.mobileNavLink}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className={styles.mobileHireBtn}
              onClick={() => setIsOpen(false)}
            >
              HIRE ME
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
