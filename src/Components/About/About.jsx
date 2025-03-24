/* eslint-disable no-unused-vars */
import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img
                    src={getImageUrl("about/aboutImage.png")}
                    alt="Me sitting with a laptop"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Junior Frontend Developer</h3>
                            <p>
                                I am a qualified frontend developer with knowledge in building responsive and optimized websites, ready to apply my skills in professional environment.
                            </p>

                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Junior Backend Developer</h3>
                            <p>
                                I am qualified in developing fast and optimized back-end systems and APIs, eager to apply my knowledge and skills in professional setting.
                            </p>

                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Junior Technician</h3>
                            <p>
                                I am assisting in the development and maintenance of various
                                technical systems, ensuring smooth operation and timely updates.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};
