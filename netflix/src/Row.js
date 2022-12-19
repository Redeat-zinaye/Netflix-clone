import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function Row({ title, fetchUrl, isLargeRow, id, rowId}) {
  const videoBaseUrl = "https://api.themoviedb.org/3";
  const imageBaseUrl = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${videoBaseUrl}${fetchUrl}`);
      // console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  // console.log(movies);
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  const slideLeft = () => {
    const slider = document.getElementById("slider"+rowId);
    slider.scrollLeft = slider.scrollLeft - 600;
  };
  const slideRight = () => {
    const slider = document.getElementById("slider"+rowId);
    slider.scrollLeft = slider.scrollLeft + 600;
  };
  return (
    <div className="row">
      <h1 id={id}>{title}</h1>
      <div className="group relative flex items-center">
        <MdChevronLeft className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block text-black hidden hover:block" onClick={slideLeft} size={40} />
        <div
          id={"slider"+ rowId}
          className="row_posters relative whitespace-nowrap">
          {movies?.map((movie) => {
            return (
              <img
                key={movie.id}
                onClick={() => handleClick(movie)}
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                src={`${imageBaseUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            );
          })}
        </div>
        <MdChevronRight className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block text-black hidden hover:block" onClick={slideRight} size={40} />
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;
