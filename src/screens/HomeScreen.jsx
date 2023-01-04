import React from 'react'
import videobg from '../videos/vid.mp4'
import styles from "./HomeScreen.module.css"


const HomeScreen = () => {
    return (

        <div className={styles.main}>
            <div className={styles.overlay}></div>
            <video src={videobg} autoPlay loop muted />
             <div className={styles.cont}>
                <h1>Build a Solar Solution</h1>
                <p>Solar without the salesman!</p>
                <button>Do it Yourself</button>
            </div>
         </div>
    )
}

export default HomeScreen;