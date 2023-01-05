import React from "react";
import "./header.module.css";
import { useNavigate } from 'react-router-dom';
export default function Header(props) {
  const navigate = useNavigate()
    
  return (
    <header className="contactHeader">
      <div className="headerContainer">
        <div onClick={() => {navigate()}} className="headerPieces">Home</div>
        <div onClick={() => {navigate('/about')}} className="headerPieces">About</div>
        <div onClick={() => navigate('/finance-options')} className="headerPieces">Finance Options</div>
        <div onClick={() => navigate('/DIYKits')} className="headerPieces">Diy Kits</div>
        <div onClick={() => navigate('/headerPieces')} className="headerPieces">Build your own kit</div>
      </div>
      <img src={props.picture} alt="" />
    </header>
  );
}
