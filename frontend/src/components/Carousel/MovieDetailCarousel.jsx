import React, { useEffect, useState } from "react";
import "./movieDetailCarousel.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const MovieDetailCarousel = ({ id }) => {
  const [castImage, setCastImage] = useState([]);

  const fetchCastImage = async () => {
    console.log("id", id);
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    const data = await response.json();
    setCastImage(data.cast);
  };

  useEffect(() => {
    fetchCastImage();
  }, [id]);

  const items = castImage?.map((cast) => {
    const { profile_path, name } = cast;
    return (
      <div className="carouselWrapper">
        <img
          className="carouselImg"
          src={`https://image.tmdb.org/t/p/w300/${profile_path}`}
          alt={name}
          onDragStart={handleDragStart}
        />
        <h1 className="crewName">{name}</h1>
      </div>
    );
  });

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };

  return (
    <AliceCarousel
      disableDotsControls
      responsive={responsive}
      autoPlay
      infinite
      disableButtonsControls
      autoPlayInterval="2000"
      mouseTracking
      items={items}
    />
  );
  // return (
  //   <>
  //     <div>
  //       {castImage?.map((cast) => (
  //         <div>
  //           <img
  //             src={`https://image.tmdb.org/t/p/w300/${cast.profile_path}`}
  //             alt={cast.name}
  //           />
  //           <h1>{cast.name}</h1>
  //         </div>
  //       ))}
  //     </div>
  //   </>
  // );
};

export default MovieDetailCarousel;
