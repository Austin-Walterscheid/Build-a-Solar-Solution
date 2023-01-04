import React from "react";
import "./header.css";
export default function Header(props) {
    
  return (
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
  );
}
