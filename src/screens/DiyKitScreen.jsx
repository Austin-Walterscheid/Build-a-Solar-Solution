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
import { Container } from 'react-bootstrap';

const DiyKitScreen = () => {
    return (
        <div>
            <Container>

                <div>

                    <h1>Solar Power Cheaper</h1>
                    <p>Solar can be more expensive than a wall street hooker, therefore to reduce the cost we vut out the salesman and provide you with every component you need to provide your home with solar, every project is custom designed to fit your homes needs.</p>
                    <img src={joe} alt=''></img>
                </div>
                <div>
                    <h1>DIY Solar kits</h1>
                    <div className={styles.icons}>
                        <img src={solar} alt="" />
                        <img src={wrench} alt="" />
                        <img src={plug} alt="" />
                        <img src={inverter} alt="" />
                        <img src={clipboard} alt="" />
                        <img src={truck} alt="" />
                        <div>
                            <div className="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/D3byOL6K3cw" title="YouTube video" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default DiyKitScreen;

