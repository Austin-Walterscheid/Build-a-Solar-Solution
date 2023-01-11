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
import Footer from '../components/Footer';

const DiyKitScreen = () => {
    return (
        <>
        <div className={styles.main}>
            <Header picture={joe} />
            <div className={styles.topContainer2}>
                <div className={styles.topContainer}>
                    <h1>Solar Power Cheaper</h1>
                    <p>Solar can be more expensive than a wall street hooker, therefore to reduce the cost we cut out the salesman and provide you with every component you need to provide your home with solar, every project is custom designed to fit your homes needs.</p>

                </div>
            </div>
            <div className={styles.split}>
                <div className={styles.iconsCont2}>
                    <div className={styles.icons}>
                        <div className={styles.wordsWicon}>
                        <img src={solar} alt="" className={styles.icon1} />
                        <h5>Solar Panels</h5>
                        <p>Monocrystalline, black on black solar panels</p>
                        </div>
                        <div className={styles.wordsWicon}>
                        <img src={wrench} alt="" className={styles.icon1} />
                        <h5>Mounting Hardware</h5>
                        <p>Complete racking system with all the hardware</p>
                        </div>
                        <div className={styles.wordsWicon}>
                        <img src={plug} alt="" className={styles.icon1} />
                        <h5>Electrical</h5>
                        <p>Wiring, switches, and all other necessary components</p>
                        </div>
                    </div>
                    <div className={styles.bottomIcons}>
                        <div className={styles.wordsWicon}>
                        <img src={inverter} alt="" className={styles.icon1} />
                        <h5>Inverters</h5>
                        <p>Designed for your specific needs</p>
                        </div>
                        <div className={styles.wordsWicon}>
                        <img src={clipboard} alt="" className={styles.icon1} />
                        <h5>Plan Set & Engineering</h5>
                        <p>The paperwork you need to go solar</p>
                        </div>
                        <div className={styles.wordsWicon}>
                        <img src={truck} alt="" className={styles.icon1} />
                        <h5>Free Shipping</h5>
                        <p>Included with all DIY kits</p>
                        </div>
                    </div>
                </div>
                <div className={styles.video}>
                    <iframe src="https://www.youtube.com/embed/D3byOL6K3cw" title="YouTube video" allowFullScreen className={styles.video2}></iframe>
                </div>
            </div>
            <div className={styles.bottomContainer}>
            <Footer />
            </div>
        </div>
        </>
    )
}

export default DiyKitScreen;

