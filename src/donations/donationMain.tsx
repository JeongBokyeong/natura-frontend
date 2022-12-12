import React from 'react';
import DonationHeader from './DonationHeader';
import DonationBody from './donationBody'
import Style from './donationBody.module.css';
import Header  from '../components/Header';

function Donation() {
    return (
        <div style={{width:"100%"}}>
            <Header/>
            <div className={Style.whiteSpace}></div>
            <DonationHeader/>
            <DonationBody/> 
        </div>
    )
}
export default Donation 