import React, { useEffect, useState } from "react";
import videobg from "../media/vid.mp4";
import styles from "./HomeScreen.module.css";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { auth } from '../firebase'
import { getUser } from "../server/util/controller";



const HomeScreen = () => {
  const navigate = useNavigate();
    const [ user, setUser] = useState('')
  useEffect(() => {
      console.log(auth)
      axios({
          method: 'get',
          url: `http://localhost:3000/getUser/${auth.currentUser?.email}`
        }).then((res) => {
            setUser(res.data)
          })
},[])



  return (
    <div>
      <div className={styles.main}>
        <video src={videobg} autoPlay loop muted />
        <div className={styles.cont}>
          <header className="contactHeader">
            <div className="headerContainer">
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
          </header>
          <h1>Build a Solar Solution</h1>
          <p>Solar without the salesman!</p>
          <button onClick={() => {navigate('/diy')}}>Do it Yourself</button>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
