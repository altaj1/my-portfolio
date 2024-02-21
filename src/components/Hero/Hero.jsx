import React from 'react';
import styles from "./Hero.module.css";
import {getImageUrl} from "../../utils"
const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.taitalcon}>
                <h1 className={styles.title}>Hi, I'm  Al-Taj</h1>
                </div>
                <p className={styles.description}>
                   Experienced web developer is passionate about crafting user-centric experiences. Proficient in front-end and back-end technologies. We are dedicated to continuous learning and collaboration. Let's build something extraordinary together.                  
               </p>
               <a href="altaj1019@gmail.com"
               className={styles.contactBtn}>Contact Me</a>
            </div>
            <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
        </section>
    );
};

export default Hero;