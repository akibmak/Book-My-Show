import { FaCcVisa, FaCcApplePay, FaApplePay} from "react-icons/fa";
import MovieHero from "../components/MovieHero/MovieHero.component";

const Movie = () => {
    return (
        <>
            <div>
                <MovieHero />
                <div className="my-12 container px-4 lg:ml-20 lg:w-2/3">
                    <div className="flex flex-col items-start gap-3">
                        <h2 className="text-gray-800 font-bold text-2xl">
                            About the Movie
                        </h2>
                        <p>
                        Bruce Wayne and Diana Prince try to bring the metahumans of Earth together after the death of Clark Kent. Meanwhile, Darkseid sends Steppenwolf to Earth with an army to subjugate humans.
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default Movie;