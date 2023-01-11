import React, { useState } from "react";
import styles from "./Calculator.module.css";
import photo from "../media/contactphoto.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Calculator() {
  const [firstSection, setFirstSection] = useState(true);
  const [secondSection, setSecondSection] = useState(false);
  const [thirdSection, setThirdSection] = useState(false);
  return (
    <div>
      <Header />
      <div className={styles.main}>
        <div className={styles.mainContainer}>
          <div className={styles.calcTitle}>Solar Panel Cost Calculator</div>
          <div>
            Our calculator takes some basic information so we can estimate what
            size system you need!
          </div>
          {firstSection && (
            <>
              <div className={styles.calcQuiz}>
                <div className={styles.quizTitle}>
                  How much do you pay a month?
                </div>
                <div>
                  <input type="text" placeholder="$" />
                  <button
                    onClick={() => {
                      Promise.all([setFirstSection(false)]).then(
                        setSecondSection(true)
                      );
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </>
          )}
          {secondSection && (
            <>
              <div className={styles.calcQuiz}>
                <div className={styles.quizTitle}>
                  Do you plan on Claiming the tax credit?(you must owe federal
                  income tax)
                </div>
                <div>
                  <div className={styles.quizContainer}>
                    <div className={styles.checkRow}>
                      <input type="checkbox" />
                      <div>I do want my system 26% discounted</div>
                    </div>
                    <div className={styles.checkRow}>
                      <input type="checkbox" />
                      <div>I do want my system 26% discounted</div>
                    </div>
                    <button
                      onClick={() => {
                        Promise.all([setSecondSection(false)]).then(
                          setThirdSection(true)
                        );
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
          {thirdSection && (
            <>
              <div className={styles.calcQuiz}>
                <div className={styles.quizTitle}>
                  
                </div>
                <div>
                  
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
