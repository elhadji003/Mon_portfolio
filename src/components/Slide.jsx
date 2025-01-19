import React from 'react';
import { Carousel } from 'flowbite-react';
import image1 from "../assets/image 1.avif";
import image2 from "../assets/image 2.jpg";
import image3 from "../assets/image3.webp";
import image4 from "../assets/image4.jpg";

const Slide = () => {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
                <img src={image1} alt="..." />
                <img src={image2} alt="..." />
                <img src={image3} alt="..." />
                <img src={image4} alt="..." />
            </Carousel>
        </div>
    );
}

export default Slide;
