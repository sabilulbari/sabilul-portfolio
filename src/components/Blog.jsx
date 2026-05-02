"use client";
import React from 'react';
import styles from './Blog.module.css';
import { motion } from 'framer-motion';

const blogPosts = [
  { id: 1, title: 'Managing State with useReducer, useContext', date: '20 May 2024', excerpt: 'One of the solutions to this problem is Code...' },
  { id: 2, title: 'Advanced Framer Motion Animations', date: '21 May 2024', excerpt: 'Learning how to create smooth transitions...' },
  { id: 3, title: 'The Future of Next.js App Router', date: '22 May 2024', excerpt: 'Exploring the latest features in Next.js...' },
];

const Blog = () => {
  return (
    <section className={styles.blog} id="blog">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>My Blog <span>↘</span></h2>
          <div className={styles.search}>
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        <div className={styles.grid}>
          {blogPosts.map((post, i) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={styles.card}
            >
              <div className={styles.cardInfo}>
                <span className={styles.date}>{post.date}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className={styles.footer}>
          <button className={styles.viewAll}>ALL ARTICLES <span>↗</span></button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
