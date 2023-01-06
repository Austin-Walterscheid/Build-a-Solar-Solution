import React from "react";
import "./Contact.css";
import photo from "../media/contactphoto.jpg";
import Header from "../components/Header";
export default function DIY() {
  return (
    <div>
      <Header picture={photo}/>
      <div className="contactContainer">
        <h2 className="contactText">Get In Touch With Us!</h2>
        <div className="inputTopContainer">
          <input className="smallInput" placeholder="First Name" />
          <input className="smallInput" placeholder="Last Name"/>
        </div>
        <div className="inputBottomContainer">
          <input className="largeInput" placeholder="Email" />
          <input className="largeInput" />
        </div>
      </div>
    </div>
  );
}
