import React from 'react'
import './homescreen.module.css'

const HomeScreen = () => {
 return (
    <div> 
      <header className='header'>
         <div className='headerContainer'>
            <div className='headerPieces'>Home</div>
            <div className='headerPieces'>About</div>
            <div className='headerPieces'>Finance Options</div>
            <div className='headerPieces'>Diy Kits</div>
            <div className='headerPieces'>Build your own kit</div>
         </div>
      </header>
    </div>
 )
}

export default HomeScreen;