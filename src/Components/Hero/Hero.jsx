/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m NokoDev</h1>
        <p className={styles.description}>
          I&apos;m a <span className={styles.highlight}>Software Developer</span> specializing in full-stack development with
          React, Node.js, and Spring Boot. I have experience with Flutter,
          Angular, Vue, Laravel, Next.js and Express.js, along with MySQL,
          MongoDB, Docker, Firebase, and Git. Passionate about building scalable
          web/mobile apps and continuously learning new technologies.
        </p>
        <div className={styles.buttonContainer}>
          <a 
            href="resume.pdf" 
            className={`${styles.linkBtn} ${styles.resumeBtn}`}
            download="NokoDev_Resume.pdf"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/hero.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
