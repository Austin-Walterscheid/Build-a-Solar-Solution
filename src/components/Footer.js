import React from "react";
import styles from "./Footer.module.css";
import { useNavigate } from "react-router-dom";
import {Insta} from '../media/Insta'
import { Facebook } from "../media/Facebook.js";
import { Linkedin } from "../media/Linkedin.js";
import { Twitter } from "../media/Twitter.js";
import photo from '../media/logo.png'

// import Logo from '../media/logo.svg'
export default function Footer(props) {
  const navigate = useNavigate();

  return (
    <div className={styles.footer}>
      <img className={styles.logo} src={photo} alt="" />
      <div className="exploreContainer">
        <div  className={styles.footerTitle}>Explore</div>
        <div onClick={() => {navigate('/')}} className={styles.footerTags}>Home</div>
        <div onClick={() => {navigate('/about')}} className={styles.footerTags}>About</div>
        <div onClick={() => {navigate('/diy')}} className={styles.footerTags}>DIY kits</div>
        <div onClick={() => {navigate('/solarcalculator')}} className={styles.footerTags}>Solar Calculator</div>
      </div>
      <div className="contactUsContainer">
        <div className={styles.socialsText}>Our Socials </div>
        <div>
          <Insta/>
          <Facebook/>
          <Linkedin/>
          <Twitter/>
        </div>
      </div>
    </div>
  );
}
