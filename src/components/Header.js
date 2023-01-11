import React from "react";
import styles from "./Header.css";
import { useNavigate } from 'react-router-dom';
export default function Header(props) {
  const navigate = useNavigate()
    
  return (
    <header className="contactHeader">
      <div className="headerContainer">
        <div>
          
        </div>
        <div onClick={() => {navigate('/')}} className={styles.headerPieces}>Home</div>
        <div onClick={() => {navigate('/about')}} className={styles.headerPieces}>About</div>
        <div onClick={() => navigate('/diy')} className={styles.headerPieces}>Diy Kits</div>
        <div onClick={() => navigate('/solarcalculator')} className={styles.headerPieces}>Solar Calculator</div>
      </div>
      <img className={styles.picture} src={props.picture} alt="" />
    </header>
  );
}
