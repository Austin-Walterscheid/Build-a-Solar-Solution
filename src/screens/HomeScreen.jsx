import React from "react";
import videobg from "../videos/vid.mp4";
import styles from "./HomeScreen.module.css";
import Header from '../components/Header'

const HomeScreen = () => {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.overlay}></div>
        <video src={videobg} autoPlay loop muted />
        <div className={styles.cont}>
          <Header/>
          <h1>Build a Solar Solution</h1>
          <p>Solar without the salesman!</p>
          <button>Do it Yourself</button>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
