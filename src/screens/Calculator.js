import React, { useState } from "react";
import styles from "./Calculator.module.css";
import photo from "../media/contactphoto.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Calculator() {
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

  const getSystemNeeded = () => {
    let number = (monthlyAverage / kwPrice) * 12;
    let largeRounded = number / 1000;
    let rounded = largeRounded.toFixed(1);
    setSystemSize(rounded);

    console.log(systemSize);
  };
  const getCost = () => {
    const cost = systemSize * 1700;
    const discountedCost = discounted === true ? cost * .74 : cost
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
        average = average + average * 0.02;
        counter = counter + average;
      }
    }
    let savings = counter - cost;
    let realSavings = savings.toFixed(2);
    setSavings(realSavings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  };

  return (
    <div>
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
                  <input
                    type="text"
                    placeholder="$"
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
                          debugger
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
                        Promise.all([setSecondSection(false), getCost()]).then([
                          setThirdSection(true),
                          findSavings(),
                        ]);
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
      <Footer />
    </div>
  );
}
