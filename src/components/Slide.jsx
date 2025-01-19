import React from 'react';
import { Carousel } from 'flowbite-react';
import image1 from "../assets/1.1.webp";
import image2 from "../assets/1.2.webp";
import image3 from "../assets/1.3.webp";
import image4 from "../assets/4.jpg";
import image5 from "../assets/5.jpg";
import image6 from "../assets/6.jpg";
import image7 from "../assets/7.jpg";

const Slide = () => {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
                <img src={image1} alt="..." />
                <img src={image2} alt="..." />
                <img src={image3} alt="..." />
                <img src={image4} alt="..." />
                <img src={image5} alt="..." />
                <img src={image6} alt="..." />
                <img src={image7} alt="..." />
            </Carousel>
        </div>
    );
}

export default Slide;
