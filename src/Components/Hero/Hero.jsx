/* eslint-disable no-unused-vars */
import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm NokoDev</h1>
        <p className={styles.description}>
          I'm a junior software developer with 2 years of experience using React
          and NodeJS. I specialize in creating dynamic and responsive web
          applications. I am passionate about learning new technologies and
          improving my skills. Reach out if you'd like to learn more about my
          work or discuss potential opportunities!
        </p>
        <a href="mailto:elvisnoko18@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
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
