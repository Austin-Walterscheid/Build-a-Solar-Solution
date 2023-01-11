import React from 'react';
import styles from "./DiyKitScreen.module.css";
import joe from "../media/joe.png";
import solar from "../media/solarrrr.png";
import wrench from "../media/wrench.png";
import plug from "../media/plug.png";
import inverter from "../media/inverter.jpg";
import clipboard from "../media/clipboard.png";
import truck from "../media/truck.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/Header";

const DiyKitScreen = () => {
    return (
        <div className={styles.main}>
            {/* <img src={joe} alt=''></img> */}
            {/* <Container> */}
            <Header picture={joe} />
            <div className={styles.topContainer2}>
                <div className={styles.topContainer}>
                    <h1>Solar Power Cheaper</h1>
                    <p>Solar can be more expensive than a wall street hooker, therefore to reduce the cost we cut out the salesman and provide you with every component you need to provide your home with solar, every project is custom designed to fit your homes needs.</p>
                    <h1>DIY Solar kits</h1>
                </div>
            </div>
            <div className={styles.split}>
                <div className={styles.iconsCont2}>
                    <div className={styles.icons}>
                        <img src={solar} alt="" className={styles.icon1} />
                        <img src={wrench} alt="" className={styles.icon1} />
                        <img src={plug} alt="" className={styles.icon1} />
                    </div>
                    <div className={styles.bottomIcons}>
                        <img src={inverter} alt="" className={styles.icon1} />
                        <img src={clipboard} alt="" className={styles.icon1} />
                        <img src={truck} alt="" className={styles.icon1} />
                    </div>
                </div>
                <div className={styles.video}>
                    <iframe src="https://www.youtube.com/embed/D3byOL6K3cw" title="YouTube video" allowFullScreen className={styles.video2}></iframe>
                </div>
            </div>
            {/* </Container> */}
        </div>
    )
}

export default DiyKitScreen;

