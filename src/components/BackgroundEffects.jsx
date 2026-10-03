"use client";
import React, { useEffect, useRef } from "react";
import styles from "./BackgroundEffects.module.css";

const BackgroundEffects = () => {
  const meshRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    const handleMouseMove = (e) => {
      if (!meshRef.current) return;
      animationFrameId = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        if (meshRef.current) {
          meshRef.current.style.setProperty("--mouse-x", `${x.toFixed(1)}%`);
          meshRef.current.style.setProperty("--mouse-y", `${y.toFixed(1)}%`);
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={styles.wrapper} aria-hidden="true">
      <div className={styles.ambientOrb1} />
      <div className={styles.ambientOrb2} />
      <div ref={meshRef} className={styles.glowMesh} />
    </div>
  );
};

export default BackgroundEffects;
