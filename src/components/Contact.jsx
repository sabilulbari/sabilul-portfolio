"use client";
import React, { useState } from "react";
import styles from "./Contact.module.css";
import { motion } from "framer-motion";
import { Paperclip, CheckCircle2, Send } from "lucide-react";

const serviceList = [
  "WEBSITE DEVELOPMENT",
  "APP DEVELOPMENT",
  "UI/UX DESIGN",
  "GRAPHIC DESIGN",
  "DIGITAL MARKETING",
];

const Contact = () => {
  const [selectedService, setSelectedService] = useState("WEBSITE DEVELOPMENT");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
    agreed: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please provide your name and email address.");
      return;
    }
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        description: "",
        agreed: false,
      });
    }, 4000);
  };

  return (
    <section className={styles.hireMe} id="contact">
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Hire Me</h2>
        </motion.div>

        {/* Services Selection */}
        <div className={styles.servicesSection}>
          <span className={styles.servicesLabel}>Services:</span>
          <div className={styles.servicesRow}>
            {serviceList.map((service) => (
              <button
                key={service}
                type="button"
                className={`${styles.serviceCard} ${
                  selectedService === service ? styles.activeServiceCard : ""
                }`}
                onClick={() => setSelectedService(service)}
              >
                <span className={styles.serviceName}>{service}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Personal Data Form */}
        <div className={styles.formSection}>
          <h3 className={styles.formSubheading}>Personal Data</h3>

          <form className={styles.form} onSubmit={handleSubmit}>
            {/* 3 Columns Input Row */}
            <div className={styles.inputsRow}>
              <div className={styles.inputFieldWrapper}>
                <label className={styles.fieldLabel}>FULL NAME</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className={styles.textInput}
                />
              </div>

              <div className={styles.inputFieldWrapper}>
                <label className={styles.fieldLabel}>EMAIL</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className={styles.textInput}
                />
              </div>

              <div className={styles.inputFieldWrapper}>
                <label className={styles.fieldLabel}>PHONE</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className={styles.textInput}
                />
              </div>
            </div>

            {/* Project Description Textarea with Paperclip Icon */}
            <div className={styles.textareaWrapper}>
              <label className={styles.fieldLabel}>PROJECT DESCRIPTION</label>
              <div className={styles.textareaContainer}>
                <textarea
                  rows={4}
                  placeholder="Briefly describe your project goals, scope, and timeline..."
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className={styles.textareaInput}
                />
                <button
                  type="button"
                  className={styles.attachBtn}
                  title="Attach Project Brief / File"
                  onClick={() => alert("Attachment upload dialog")}
                >
                  <Paperclip size={18} />
                </button>
              </div>
            </div>

            {/* Checkbox */}
            <div className={styles.checkboxRow}>
              <label className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  checked={formData.agreed}
                  onChange={(e) =>
                    setFormData({ ...formData, agreed: e.target.checked })
                  }
                  className={styles.hiddenCheckbox}
                />
                <span className={styles.customCheck} />
                <span className={styles.checkboxLabel}>
                  I agree with the terms and conditions and the Privacy Policy.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className={styles.submitRow}>
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle2 size={18} />
                    <span>MESSAGE SENT!</span>
                  </>
                ) : (
                  <>
                    <span>SUBMIT</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
