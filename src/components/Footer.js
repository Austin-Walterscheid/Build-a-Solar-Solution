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
        <div className={styles.footerTitle}>Explore</div>
        <div className={styles.footerTags}>Home</div>
        <div className={styles.footerTags}>About</div>
        <div className={styles.footerTags}>DIY kits</div>
        <div className={styles.footerTags}>Solar Calculator</div>
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
