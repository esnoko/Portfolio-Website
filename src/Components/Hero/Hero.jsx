/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m E.N Kgomo</h1>
        <p className={styles.description}>
          I&apos;m a <span className={styles.highlight}>Software Developer</span> specializing in full-stack development with
          PHP, React, Java, and C++. I have experience with ReactNative,
          Laravel, Next.js and Express.js, Spring Boot, Node.js, along with MySQL,
          MongoDB, Firebase, and Git. Passionate about building scalable
          web/mobile apps and continuously learning new technologies.
        </p>
        <div className={styles.buttonContainer}>
          <a 
            href="resume.pdf" 
            className={`${styles.linkBtn} ${styles.resumeBtn}`}
            download="ENKgomo_Resume.pdf"
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
