import { FaCcVisa, FaApplePay} from "react-icons/fa";
import React, { useContext, useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router";

// Slider
import Slider from "react-slick";

// Components
import MovieHero from "../components/MovieHero/MovieHero.component";
import Cast from "../components/Cast/Cast.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

// Context
import { MovieContext } from "../context/movie.context";


// configs


// import TempPosters from "../../config/TempPosters.config";

const Movie = () => {

    const { id } = useParams();

    const {movie } = useContext(MovieContext);

    const [cast, setCast] = useState([]);

    const [simillarMovies, setSimillarMovies] = useState([]);

    const [recommended, setRecommended] = useState([]);

    useEffect(() => {
        const requestCast  = async () => {
            const getCast = await axios.get(`/movie/${id}/credits`);
            setCast(getCast.data.cast);
        };
        requestCast();
    },[id]);

    useEffect(() => {
        const requestSimillarMovies = async () => {
          const getSimillarMovies = await axios.get(`/movie/${id}/similar`);
          setSimillarMovies(getSimillarMovies.data.results);
        };
    
        requestSimillarMovies();
    }, [id]);

    useEffect(() => {
        const requestRecommendedMovies = async () => {
          const getRecommendedMovies = await axios.get(`/movie/${id}/recommendations`);
          setRecommended(getRecommendedMovies.data.results);
        };
    
        requestRecommendedMovies();
    }, [id]);

    const settings = {
        infinity: false,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        InitialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              InitialSlide: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
        ],
      };

      const settingsCast = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        InitialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 2,
              InitialSlide: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      };

    return (
        <>
                <MovieHero />
                <div className="my-12 container px-4 lg:ml-20 lg:w-2/3">
                    <div className="flex flex-col items-start gap-3">
                        <h2 className="text-gray-800 font-bold text-2xl">
                            About the Movie
                        </h2>
                        <p>
                        {movie.overview}
                        </p>
                    </div>
                    <div className="my-8">
                        <hr />
                    </div>
                    <div className="my-8  ">
                        <h2 className="text-gray-800 font-bold text-2xl mb-3">Applicable Offer</h2>

                        <div className="flex flex-col gap-3 lg:flex-row">
                        <div className="flex items-start gap-2 bg-yellow-100 px-3 py-3 border-yellow-400 border-dashed border-2 ">
                            <div className="h-8 w-8">
                            <FaCcVisa className="h-full w-full"/>
                            </div>
                            <div className="flex flex-col items-start">
                                <h3 className="text-gray-700 text-xl font-bold">Visa Stream Offer</h3>
                                <p className="text-sm text-gray-500">Get 50% off up to INR 150 on all RuPay cards* on BookMyShow
                                     Stream.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-2 bg-yellow-100 px-3 py-3 border-yellow-400 border-dashed border-2 ">
                            <div className="h-8 w-8">
                            <FaApplePay className="h-full w-full"/>
                            </div>
                            <div className="flex flex-col items-start">
                                <h3 className="text-gray-700 text-xl font-bold">Filmy Pass</h3>
                                <p className="text-sm text-gray-500">Get rs. 75% off up to INR 150 on all RuPay cards* on BookMyShow
                                     Stream.</p>
                            </div>
                        </div>
                        </div>
                        <h2 className="text-gray-800 font-bold text-2xl mb-4 my-8">Cast & crew</h2>
                    </div>
                    
                    <Slider {...settingsCast}>
                    {cast.map((castdata) => (
                        <Cast 
                        image={`https://image.tmdb.org/t/p/original${castdata.profile_path}`}
                        castName={castdata.original_name}
                        role={castdata.character}
                        />
                    ))}
                    </Slider>

                <div className="my-8">
                <PosterSlider
                    config={settings}
                    images={simillarMovies}
                    title="You might also like"
                    isDark={false}
                    />
                </div>
                <div className="my-8">
                <PosterSlider
                    config={settings}
                    images={recommended}
                    title="BMS XLUSIVE"
                    isDark={false}
                    />
                </div>
            </div>
                
        </>
    );
};

export default Movie;