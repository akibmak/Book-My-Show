import React from "react";
import Slider from "react-slick";

// components
import Poster from "../Poster/poster.component";

// configs
import PosterCarousalSettings from "../../config/PosterCarousal.config";
import PremierImages from "../../config/TempPosters.config";

export const Premier = () => {

  return (
    <>
    <div className="flex flex-col items-start">
        <h3 className="text-white text-xl font-bold">Premiers</h3>
        <p className="text-white text-sm">Brand new release every friday</p>
    </div>
      <Slider {...PosterCarousalSettings}>
        {PremierImages.map((image) => (
          <Poster {...image} isDark />
        ))}
      </Slider>
    </>
  );
};

export default Premier;