import "./MovieDetails.css";
import axios from "axios";
import Loader from "../../Loader/Loader";
import YouTube from "react-youtube";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const [oneMovieData, setOneMovieData] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [playing, setPlaying] = useState(false);
  const params = useParams();

  useEffect(() => {
    async function getOneMovie() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=106e6e6dcc5b16f98eec656bcb3bac00&append_to_response=videos`
      );
      if (
        response.data.videos &&
        response.data.videos.results &&
        response.data.videos.results.length > 0
      ) {
        const trailer = response.data.videos.results.find(
          (vid) => vid.name === "Official Trailer"
        );
        setTrailer(trailer || response.data.videos.results[0]);
      }
      setOneMovieData(response.data);
    }
    getOneMovie();
  }, [params.id]);

  return oneMovieData === null ? (
    <Loader />
  ) : (
    <>
      <div
        className={`movie-presentation${playing ? " viewtrailer" : ""}`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original${oneMovieData.backdrop_path})`,
          backgroundPosition: "center 20%",
        }}
      >
        {playing ? (
          <>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <YouTube
                    videoId={trailer.key}
                    className="reproductor container"
                    containerClassName="youtube-container amru"
                    opts={{
                      width: "100%",
                      height: "100%",
                      playerVars: {
                        autoplay: 1,
                        controls: 0,
                        cc_load_policy: 0,
                        fs: 0,
                        iv_load_policy: 0,
                        modestbranding: 0,
                        rel: 0,
                        showinfo: 0,
                      },
                    }}
                  />
                  <button
                    className="close btn btn-dark mb-3 me-5"
                    onClick={() => setPlaying(false)}
                  >
                    Close Trailer
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="container">
            <div className="row">
              <div className="col-12">
                {trailer ? (
                  <div id="div-btn-play" className="mt-4">
                    <button
                      className="btn btn-dark"
                      onClick={() => setPlaying(true)}
                      type="button"
                    >
                      Play Trailer
                    </button>
                  </div>
                ) : (
                  <h6 className="text-center text-white mt-3">
                    Sorry, no trailer available
                  </h6>
                )}
              </div>
            </div>
          </div>
        )}
        {playing
          ? null
          : oneMovieData.tagline && (
              <h4 className="presentation-quote text-white fade-in">
                "{oneMovieData.tagline}"
              </h4>
            )}
      </div>
      <div className="container">
        <div className="movie-details-transition fade-in">
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="divImage  w-100 d-flex justify-content-center align-items-center">
                <img
                  id="movie-details-img"
                  src={`https://image.tmdb.org/t/p/w500${oneMovieData.poster_path}`}
                  alt="movie-poster"
                />
              </div>
            </div>
            <div className="col-12 col-lg-8 text-white pt-5">
              <div className="divInfo ps-lg-5">
                <div className="d-flex mb-4">
                  <div id="rate" className="text-center me-5">
                    <h4>TOP</h4>
                    <h4 id="vote_average">
                      {Math.round(oneMovieData.vote_average)}
                    </h4>
                  </div>
                  <div id="title">
                    <h2 className="movie-title d-flex flex-column">
                      {oneMovieData.title}
                    </h2>{" "}
                    <div className="text-secondary">
                      <h6 className="d-flex ">{oneMovieData.original_title}</h6>
                      <h6 className="d-flex ">
                        Released on ({oneMovieData.release_date})
                      </h6>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="movie-details-overview">
                  <h3 className="movie-details-title mb-3">Overview</h3>
                  <p className="mb-3 movie-overview">{oneMovieData.overview}</p>
                </div>
                <hr />
                <div className="movie-details-popularity">
                  <h3 className="movie-details-title mb-3">Popularity</h3>
                  <p className="mb-3 movie-popularity">
                    This movie has been already watched by{" "}
                    <strong className="strong-details">
                      {Math.round(oneMovieData.popularity)} people!
                    </strong>
                  </p>
                </div>
                <hr />
                <div className="vote-movie-details">
                  <h3 className="movie-details-title mb-3">Votes</h3>
                  <p className="mb-3 movie-votes">
                    People decided to vote this movie and it has about{" "}
                    <strong className="strong-details">
                      {oneMovieData.vote_count} votes!
                    </strong>
                  </p>
                </div>
                <hr />
                <small className="string-grey mb-4" id="production">
                  Produced by{" "}
                  <strong> {oneMovieData.production_companies[0].name}</strong>{" "}
                  in{" "}
                  <strong>{oneMovieData.production_countries[0].name}</strong>
                </small>
                <a href={oneMovieData.homepage}>
                  <button className="btn btn-dark p-3 mb-5">
                    Visit the Homepage
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;
