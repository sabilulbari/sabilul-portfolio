"use client";
import React, { useState } from "react";
import styles from "./Blog.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { Search, ArrowRight } from "lucide-react";

const blogCategories = ["All", "Development", "Design", "Tutorials"];

const blogPosts = [
  {
    id: 1,
    title: "High-Performance Web Architecture in 2025",
    category: "Development",
    date: "12 Aug 2024",
    imgUrl: "/images/blog/blog-1.jpg",
    excerpt:
      "Deep dive into building resilient frontend microservices, optimizing critical rendering paths, and real-time streams.",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Modern Full-Stack Patterns with Next.js & React 19",
    category: "Development",
    date: "18 Sep 2024",
    imgUrl: "/images/blog/blog-2.jpg",
    excerpt:
      "Leveraging Server Actions, streaming SSR, and reactive state management for enterprise production applications.",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Crafting Immersive 3D Visuals & Smooth Motion UIs",
    category: "Design",
    date: "24 Sep 2024",
    imgUrl: "/images/blog/blog-3.jpg",
    excerpt:
      "How to combine WebGL shaders, subtle micro-interactions, and Framer Motion for breathtaking digital experiences.",
    readTime: "4 min read",
  },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className={styles.blog} id="blog">
      <div className={styles.container}>
        {/* Top Header Row */}
        <div className={styles.topHeader}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.title}>My Blog</h2>
          </motion.div>

        </div>

        {/* Filters and Search Bar Row */}
        <div className={styles.controlsRow}>
          <div className={styles.categoryFilters}>
            {blogCategories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${
                  activeCategory === cat ? styles.activeFilterBtn : ""
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
            <Search size={18} className={styles.searchIcon} />
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className={styles.grid}>
          {filteredPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className={styles.card}
            >
              <div className={styles.imgWrapper}>
                <Image
                  src={post.imgUrl}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className={styles.cardImg}
                />
                <span className={styles.badge}>{post.category}</span>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.metaRow}>
                  <span className={styles.date}>{post.date}</span>
                  <span className={styles.readTime}>• {post.readTime}</span>
                </div>

                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.postExcerpt}>{post.excerpt}</p>

                <div className={styles.readMoreLink}>
                  <span>Read Article</span>
                  <ArrowRight size={15} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Button */}
        <div className={styles.footerWrapper}>
          <button
            className={styles.allArticlesBtn}
            onClick={() => {
              setActiveCategory("All");
              setSearchQuery("");
            }}
          >
            <span>ALL ARTICLES</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
