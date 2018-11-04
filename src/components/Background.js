import React from 'react'

import './Background.css';
import bkg from '../img/bkg.jpg';

const Background = () => {
    return (
       <div className="bkg">
           <img className="fond" src= {bkg} alt=" fond avec une citrouille"/>
       </div> 
    )
}

export default Background;