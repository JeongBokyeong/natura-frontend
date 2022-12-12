import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from '@mohammedsrehan/react-responsive-carousel';
// impo
import i1 from "./Intro.png";
import i2 from "./Banner02.png";
import i3 from "./Banner03.png";
import Style from './Bannerstyle.module.css';


export default function CarouselComponent() {
    return (
        <div>
            <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false}  >
                <div> 
                    <img src={i1} className = {Style.imgBanner}/>

                </div>
                <div>
                    <img src={i2} className ={Style.imgBanner}/>
                </div>
                <div>
                    <img src={i3} className = {Style.imgBanner}/>
                </div>
            </Carousel>
        </div>
    );
}
