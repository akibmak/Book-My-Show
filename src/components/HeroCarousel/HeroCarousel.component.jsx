import React from "react";

import HeroSlider from "react-slick";

// Component
import { NextArrow , PrevArrow } from "./Arrows.component";

const HeroCarousel = () => {
    const settingLG = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "300px",
        slidesToShow: 1,
        infinite: true,
        dots: true,
        NextArrow: <NextArrow />,
        PrevArrow: <PrevArrow />,
    };
    const settings = {
        arrows: true,
        centerMode: true,
        centerPadding: "200px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      const images = [
          "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=925&q=80",
          "https://images.unsplash.com/photo-1563381013529-1c922c80ac8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1485095329183-d0797cdc5676?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1508427991396-70954459dcc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1616097970275-1e187b4ce59f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fG1vdmllc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      ];


    return (
        <>
            <div className="lg:hidden">
            <HeroSlider {...settings}>
                {images.map((image) => (
                    <div className="w-full h-56 md:h-64 ">
                        <img src={image} alt="testing" className="w-full h-full "/>
                    </div>
                ))}
                </HeroSlider>
            </div>
            
            <div className="hidden lg:block">
            <HeroSlider {...settingLG}>
                {images.map((image) => (
                    <div className="w-full h-96 px-2 py-3">
                        <img src={image} alt="testing" className="w-full h-full"/>
                    </div>
                ))}
                </HeroSlider>
            </div>

        </>);
};

export default HeroCarousel;

