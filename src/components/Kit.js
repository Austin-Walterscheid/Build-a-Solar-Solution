import React, { useState } from "react";
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
  console.log(id);

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.split}>
        <div className={styles.iconsCont2}>
          <div className={styles.wordsWicon}>
            <div>
              <img src={solar} alt="" className={styles.icon1} />
              <h5 className={styles.title}>4 Solar Panels</h5>
              <p>Monocrystalline, black on black solar panels</p>
            </div>
            <div className={styles.somethingContainer}>
              <div>
                <div>Panel Type</div>
                <div>Silfab</div>
              </div>
              <div className={styles.other}>
                <div className={styles.paragraph}>Panel Amount:</div>
                <div className={styles.paragraph}>Kw Size:</div>
              </div>
            </div>
          </div>
          <div className={styles.wordsWicon}>
            <div className={styles.paragraph}>this is hardware info</div>
            <div>
              <img src={wrench} alt="" className={styles.icon1} />
              <h5 className={styles.title}>Hardware</h5>
              <p>Complete racking system with all the hardware</p>
            </div>
          </div>
          <div className={styles.wordsWicon}>
            <div>
              <img src={plug} alt="" className={styles.icon1} />
              <h5 className={styles.title}>Electrical</h5>
              <p>Wiring, switches, and all other necessary components</p>
            </div>
            <div className={styles.paragraph}>Stuff about electricity</div>
          </div>

          <div className={styles.wordsWicon}>
            <div className={styles.paragraph}>Stuff about Inverters</div>
            <div>
              <img src={inverter} alt="" className={styles.icon1} />
              <h5 className={styles.title}>Inverters</h5>
              <p>Designed for your specific</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
