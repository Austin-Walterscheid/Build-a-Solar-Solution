import React from 'react'
import videobg from '../media/vid.mp4'
import styles from "./homescreen.module.css"


const HomeScreen = (props) => {
    return (
        <div>
      <header className="contactHeader">
      <div className="headerContainer">
        <div className="headerPieces">Home</div>
        <div className="headerPieces">About</div>
        <div className="headerPieces">Finance Options</div>
        <div className="headerPieces">Diy Kits</div>
        <div className="headerPieces">Build your own kit</div>
      </div>
      <img src={props.picture} alt="" />
    </header>
        <div className={styles.main}>
            <div className={styles.overlay}></div>
            <video src={videobg} autoPlay loop muted />
             <div className={styles.contain}>
                <h1>Build a Solar Solution</h1>
                <p>Solar without the salesman!</p>
                <button>Do it Yourself</button>
            </div>g
         </div>
         </div>
    )
}

export default HomeScreen;