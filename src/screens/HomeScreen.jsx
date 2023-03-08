import React from "react";
import videobg from "../media/vid.mp4";
import styles from "./HomeScreen.module.css";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.overlay}></div>
        <video src={videobg} autoPlay loop muted />
        <div className={styles.cont}>
          <header className={styles.contactHeader}>
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
              <div
                onClick={() => navigate("/diy")}
                className={styles.headerPieces}
              >
                Diy Kits
              </div>
              <div
                onClick={() => navigate("/login")}
                className={styles.headerPieces}
              >
                Login
              </div>
            </div>
          </header>
          <div className={styles.loginContainer}>
            <div className={styles.title}>Lets make this easy</div>
            <div className={styles.p}>Solar without the salesman!</div>
            <button
              className={styles.button}
              onClick={() => {
                navigate("/diy");
              }}
            >
              Do it Yourself
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
