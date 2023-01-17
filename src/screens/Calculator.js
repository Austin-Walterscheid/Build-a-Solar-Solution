import React, { useState } from "react";
import styles from "./Calculator.module.css";
import photo from "../media/contactphoto.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Calculator(props) {
  const [firstSection, setFirstSection] = useState(true);
  const [secondSection, setSecondSection] = useState(false);
  const [thirdSection, setThirdSection] = useState(false);
  const [kwPrice, setkwPrice] = useState(false);
  const [monthlyAverage, setMonthlyAverage] = useState(0);
  const [cost, setCost] = useState(0);
  const [installCost, setInstallCost] = useState(0);
  const [savings, setSavings] = useState(0);
  const [systemSize, setSystemSize] = useState(0);
  const [discounted, setDiscounted] = useState(false);
  const navigate = useNavigate();

  const getSystemNeeded = () => {
    let number = (monthlyAverage / kwPrice) * 12;
    let largeRounded = number / 1000;
    let rounded = largeRounded.toFixed(1);
    setSystemSize(rounded);

    console.log(systemSize);
  };
  const getCost = () => {
    const cost = systemSize * 1700;
    const discountedCost = discounted === true ? cost * 0.74 : cost;
    setCost(discountedCost);
    let formattedCost = cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    setInstallCost(formattedCost);
  };

  const findSavings = () => {
    let counter = 0;
    let average = parseInt(monthlyAverage);
    for (let i = 0; i < 301; i++) {
      if (i % 12 !== 0) {
        counter = counter + average;
      } else {
        average = average + average * 0.05;
        counter = counter + average;
      }
    }
    let savings = counter - cost;
    let realSavings = savings.toFixed(2);
    setSavings(realSavings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  };

  return (
    <div className={styles.overlay}>
      <div
        style={{ backgroundImage: `url(${photo})` }}
        className={styles.contactHeader}
      >
        <div className={styles.headerContainer}>
          <div></div>
          <div
            onClick={() => {
              navigate("/");
            }}
            className={styles.headerPieces}
          >
            Home
          </div>
          <div
            onClick={() => {
              navigate("/about");
            }}
            className={styles.headerPieces}
          >
            About
          </div>
          <div onClick={() => navigate("/diy")} className={styles.headerPieces}>
            Diy Kits
          </div>
          <div
            onClick={() => navigate("/solarcalculator")}
            className={styles.headerPieces}
          >
            Solar Calculator
          </div>
          <div
            onClick={() => navigate("/login")}
            className={styles.headerPieces}
          >
            Login
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.calcTitleContainer}>
            <div className={styles.calcTitle}>Solar Panel Cost Calculator</div>
          </div>
          <div className={styles.calcParagraphContainer}>
            <div className={styles.calcParagraph}>
              How much do solar panels cost? Our solar calculator takes a few
              key pieces of information (your location and current energy
              consumption) and estimates what size system you might need to zero
              out your electric bill.
            </div>
          </div>
          <div className={styles.mainContainer}>
            {firstSection && (
              <>
                <div className={styles.calcQuiz}>
                  <div className={styles.quizTitle}>
                    How much do you pay a month?
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Monthly Average"
                      onChange={(event) => {
                        setMonthlyAverage(event.target.value);
                      }}
                    />

                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="kwh price"
                      onChange={(event) => {
                        setkwPrice(event.target.value);
                      }}
                    />

                    <button
                      onClick={() => {
                        Promise.all([
                          setFirstSection(false),
                          getSystemNeeded(),
                        ]).then(setSecondSection(true));
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
                        <input
                          onClick={() => {
                            debugger;
                            setDiscounted(true);
                          }}
                          type="checkbox"
                        />
                        <div>I do want my system 26% discounted</div>
                      </div>
                      <div className={styles.checkRow}>
                        <input type="checkbox" />
                        <div>I dont want my system 26% discounted</div>
                      </div>

                      <button
                        onClick={() => {
                          Promise.all([
                            setSecondSection(false),
                            getCost(),
                          ]).then([setThirdSection(true), findSavings()]);
                        }}
                        Promise
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      Promise.all([setFirstSection(true)]).then(
                        setSecondSection(false)
                      );
                    }}
                  >
                    back baby
                  </button>
                </div>
              </>
            )}
            {thirdSection && (
              <>
                <div className={styles.statsContainer}>
                  <div>
                    <div>Install Cost</div>
                    <div>{installCost}</div>
                  </div>
                  <div>
                    <div>System Size</div>
                    <div>{systemSize}</div>
                  </div>
                  <div>
                    <div>25 Year Savings</div>
                    <div>{savings}</div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    Promise.all([setSecondSection(true)]).then(
                      setThirdSection(false)
                    );
                  }}
                >
                  back baby
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <div className={styles.solarFAQ}>
        <div>
          <div className={styles.questionsTitle}>
            Frequently Asked Questions
          </div>
        </div>
        <div>
          <div className={styles.questionsContainer}>
            <div className={styles.questionsLeftContainer}>
              <div className={styles.questionsParagraph}>
                How much do solar panels cost?
              </div>

              <div className={styles.questionsParagraph}>
                How much does it cost to install solar panels?
              </div>
            </div>
            <div className={styles.questionsRightContainer}>
              <div className={styles.questionsParagraph}>
                What size solar system do I need?
              </div>
              <div className={styles.questionsParagraph}>
                Is solar energy a sound investment?
              </div>
              <div className={styles.questionsParagraph}>
                How Does the Federal Tax Credit Work?{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
