import React, { useState, useEffect } from "react";

import HeroSlider from "react-slick";

import axios from "axios";

// Component
import { NextArrow , PrevArrow } from "./Arrows.component";

const HeroCarousel = () => {

    // The hooks useState useEffect etc. must be in top. 

    const [images, setImages] = useState([]);

    // [] we are using an empty array here becuase we don't want the api to call again & again.
    useEffect(() => {
        // asynchronous 
        const requestNowPlayingMovies = async () => {
            const getImages = await axios.get("/movie/now_playing");
            setImages(getImages.data.results);
        };

        requestNowPlayingMovies();
    }, []);

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
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };


    return (
        <>
            <div className="lg:hidden">
            <HeroSlider {...settings}>
                {images.map((image) => (
                    <div className="w-full h-56 md:h-64 ">
                        <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full "/>
                    </div>
                ))}
                </HeroSlider>
            </div>
            
            <div className="hidden lg:block">
            <HeroSlider {...settingLG}>
                {images.map((image) => (
                    <div className="w-full h-96 px-2 py-3">
                        <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full"/>
                    </div>
                ))}
                </HeroSlider>
            </div>

        </>);
};

export default HeroCarousel;

