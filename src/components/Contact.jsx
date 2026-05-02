"use client";
import React, { useState } from 'react';
import styles from './Contact.module.css';
import { motion } from 'framer-motion';

const services = [
  'Website Development', 'UI Design', 'Android Development', 'Backend Development', 'Webflow Development'
];

const Contact = () => {
  const [selectedService, setSelectedService] = useState('Website Development');

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <h2 className={styles.title}>Hire Me</h2>
        
        <div className={styles.section}>
          <h3>Services</h3>
          <div className={styles.servicesGrid}>
            {services.map(service => (
              <button 
                key={service}
                className={`${styles.serviceBtn} ${selectedService === service ? styles.activeService : ''}`}
                onClick={() => setSelectedService(service)}
              >
                {service}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h3>Personal Data</h3>
          <form className={styles.form}>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>First Name</label>
                <input type="text" placeholder="Your first name" />
              </div>
              <div className={styles.inputGroup}>
                <label>Last Name</label>
                <input type="text" placeholder="Your last name" />
              </div>
              <div className={styles.inputGroup}>
                <label>Email</label>
                <input type="email" placeholder="Your email address" />
              </div>
            </div>
            
            <div className={styles.inputGroup}>
              <label>Project Details / Message</label>
              <textarea placeholder="Tell me about your project..."></textarea>
            </div>

            <div className={styles.terms}>
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">I agree with the terms and conditions and the Privacy Policy.</label>
            </div>

            <button type="submit" className={styles.submitBtn}>
              SEND ME <span>→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
