import React from 'react';
import AboutUsImg from './AboutUs.png';
import AboutUsMainStyle from './AboutusMain.module.css';
import Header from '../components/Header';

function AboutusMain() {
    return (
        <div>
            <Header/>
            <img src={AboutUsImg} alt="About Us" className={AboutUsMainStyle.AboutUsImg} />
        </div>
    )
}

export default AboutusMain