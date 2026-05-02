"use client";
import React, { useEffect, useRef } from 'react';
import styles from './BackgroundEffects.module.css';

const BackgroundEffects = () => {
  const meshRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!meshRef.current) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;
      
      meshRef.current.style.setProperty('--mouse-x', `${x}%`);
      meshRef.current.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.noise}></div>
      <div ref={meshRef} className={styles.glowMesh}></div>
    </div>
  );
};

export default BackgroundEffects;
