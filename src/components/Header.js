import React from "react";
import "./Header.module.css";
import { useNavigate } from 'react-router-dom';
// import Logo from '../media/logo.svg'
export default function Header(props) {
  const navigate = useNavigate()
    
  return (
    <header className="contactHeader">
      <div className="headerContainer">
        <div>
          
        </div>
        <div onClick={() => {navigate('/')}} className="headerPieces">Home</div>
        <div onClick={() => {navigate('/about')}} className="headerPieces">About</div>
        <div onClick={() => navigate('/diy')} className="headerPieces">Diy Kits</div>
        <div onClick={() => navigate('/solarcalculator')} className="headerPieces">Solar Calculator</div>
      </div>
      <img src={props.picture} alt="" />
    </header>
  );
}
