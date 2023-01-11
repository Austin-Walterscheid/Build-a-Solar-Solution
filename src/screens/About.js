import React from "react";
import styles from "./About.module.css";
import Header from "../components/Header";
import Footer from '../components/Footer'
export default function About() {
  return (
    <>
      <div className={styles.main}>
        <Header />

        <div className={styles.flex}>
          <div className={styles.aboutContainer}>
            <div className={styles.mainText}>Our Mission</div>
            <div className={styles.aboutText}>
              Our mission is to not be gay and get rid of the salesman because
              bottom line you guys pay way too much. We could potentially save
              everyone 20k
            </div>
          </div>
        </div>
      </div>
      <div className={styles.secondMain}>
    
        <div className={styles.leftContainer}>
          <h2>About us</h2>
          <div className={styles.aboutParagraph}>We are a company focused on giving back to the coustomer. Both of us once being solar salesman and felt li</div>
        </div>
        <div className={styles.rightContainer}>
          <h2>The Real Cost Of Solar</h2>
          <div className={styles.aboutParagraph}>Look up what an average solar salesman makes a year(its 100k btw) and tell me whose pocket that money comes out of. The average solar salesman makes 10k a deal! We want to take that huge margin away. We charge 100 dollars per kw   </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
