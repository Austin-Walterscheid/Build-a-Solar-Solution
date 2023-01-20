import React, { useState } from "react";
import axios from 'axios'
import styles from "./Kit.module.css";
import { useLocation, useParams } from "react-router-dom";
import joe from "../media/joe.png";
import solar from "../media/solarrrr.png";
import wrench from "../media/wrench.png";
import plug from "../media/plug.png";
import inverter from "../media/inverter.jpg";
import clipboard from "../media/clipboard.png";
import truck from "../media/truck.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import kitSolar from "../media/kitSolar.png";

export function Kit() {
  const { id } = useParams();
  const [solarParts, setSolarParts] = useState(false);

  const handleSubmit = async () => {
    try{
      let newPackage = await axios.post('./api/newPackage', {
        panels: getPanels(),
        inverter: 'SolarEdge',
        wiring: 10,
        racking: 'normal',
      })
    } catch (error) {
      console.log(error)
    }
  }
  const getPanels = () => {
    return (id * 100) / 400
  }
  const getKw = () => {
    return 
  }
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.kwTitle}>Your {id} Kw system</div>
      <div className={styles.split}>
        <div className={styles.iconsCont2}>
          <div className={styles.wordsWicon}>
            <div className={styles.imageRow}>
              <div className={styles.imageCenter}>
                <img src={solar} alt="" className={styles.icon1} />
              </div>
              <div className={styles.info}>
                <h5 className={styles.title}>Solar System</h5>
                <p>Monocrystalline, black on black solar panels</p>
              </div>
            </div>
            <div className={styles.somethingContainer}>
              <div className={styles.other}>
                <div className={styles.title}>Panel Type</div>
                <div>Silfab</div>
              </div>
              <div className={styles.other}>
                <div className={styles.paragraph}>Amount of panels</div>
                <input onChange={(event) => {handleSubmit = event.target.value}} style={{ width: "30px" }} type="text" placeholder={id} />
              </div>
              <div className={styles.other}>
                <div className={styles.paragraph}>Panel color</div>
                <div>Black</div>
              </div>
            </div>
          </div>
          <div className={styles.wordsWicon}>
            <div className={styles.somethingContainer}>
              <div className={styles.title}>Complete Racking includes:</div>
              <div className={styles.listCenter}>
                <li className={styles.paragraph}>Solar brackets</li>
                <li className={styles.paragraph}>Nuts and Bolts</li>
                <li className={styles.paragraph}>
                  All extra hardware and installation guide
                </li>
              </div>
            </div>
            <div className={styles.imageBackwards}>
              <div className={styles.imageCenter}>
                <img src={wrench} alt="" className={styles.icon1} />
              </div>
              <div className={styles.info}>
                <h5 className={styles.title}>Hardware</h5>
                <p>Complete racking system with all the hardware</p>
              </div>
            </div>
          </div>
          <div className={styles.wordsWicon}>
            <div className={styles.imageRow}>
              <div className={styles.imageCenter}>
                <img src={plug} alt="" className={styles.icon1} />
              </div>
              <div className={styles.info}>
                <h5 className={styles.title}>Electrical</h5>
                <p>Wiring, switches, and all other necessary components</p>
              </div>
            </div>
            <div className={styles.somethingContainer}>
              <div className={styles.paragraph}>Stuff about electricity</div>
            </div>
          </div>

          <div className={styles.wordsWicon}>
            <div className={styles.somethingContainer}>
              <div className={styles.paragraph}>Stuff about Inverters</div>
            </div>
            <div className={styles.imageBackwards}>
              <div className={styles.imageCenter}>
                <img src={inverter} alt="" className={styles.icon1} />
              </div>
              <div className={styles.info}>
                <h5 className={styles.title}>Inverters</h5>
                <p>Designed for your specific needs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => {handleSubmit()}}>Create Package</button>
      <Footer />
    </div>
  );
}
