import React, {useState, useEffect} from "react";
import styles from "./Header.module.css";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { auth } from "../firebase"



export default function Header(props) {
  const navigate = useNavigate()
  
  const [ user, setUser] = useState('')
useEffect(() => {
  axios({
    method: 'get',
    url: `http://localhost:3000/getUser/${auth.currentUser?.email}`
  }).then((res) => {
    console.log(res)
    setUser(res.data)
  })
}, [])


  return (
    <header className={styles.contactHeader}>
      <div className={styles.headerContainer}>
        <div>
          
        </div>
        <div onClick={() => {navigate('/')}} className={styles.headerPieces}>Home</div>
        <div onClick={() => {navigate('/about')}} className={styles.headerPieces}>About</div>
        <div onClick={() => navigate('/diy')} className={styles.headerPieces}>Diy Kits</div>
        <div onClick={() => navigate('/solarcalculator')} className={styles.headerPieces}>Solar Calculator</div>
        <div onClick={() => navigate('/login')} className={styles.headerPieces}>Login</div>
        <div onClick={() => navigate('/getUser')} className={styles.headerPieces}>{auth.currentUser?.email}</div>
      </div>
    </header>
  );
}
