import { useState, useEffect } from "react";
import { Rate } from "antd";
import Loader from "../../Loader/Loader";
import axios from "axios";
import Movie from "./Movie";

function MovieContainer() {
  const [movieData, setMovieData] = useState(null);
  const [page, setPage] = useState(1);
  const [value, setValue] = useState(0);
  const [searchMovie, setSearchMovie] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    async function getMovieData() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?language=en-US&page=${page}&vote_average.gte=${value}&api_key=106e6e6dcc5b16f98eec656bcb3bac00`
      );
      setMovieData(response.data.results);
    }
    getMovieData();
  }, [page, value]);

  async function handleOnSubmit(event) {
    event.preventDefault();

    const query = event.target.value;
    setSearchMovie(query);
    if (!searchMovie) {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?language=en-US&page=${page}&vote_average.gte=${value}&api_key=106e6e6dcc5b16f98eec656bcb3bac00`
      );
      setIsSearching(false);
      setMovieData(response.data.results);
    } else {
      const responseSearch = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${searchMovie}&api_key=106e6e6dcc5b16f98eec656bcb3bac00`
      );
      setIsSearching(true);
      setMovieData(responseSearch.data.results);
    }
  }

  return movieData === null ? (
    <Loader />
  ) : (
    <div className="container">
      <div className="options-bar d-flex justify-content-between">
        <div className="ranking d-flex flex-column text-center">
          <div>
            <h5 className="text-white">Filter by ranking: </h5>
          </div>
          <div>
            <Rate
              className="custom-rate"
              onChange={(value) => setValue(value * 2 - 2)}
            />
          </div>
        </div>
        <div id="buttons-div">
          {!searchMovie && !isSearching && (
            <>
              {page === 1 ? (
                <div className="d-flex justify-content-end">
                  <button
                    id="btn-next"
                    className="mb-5"
                    onClick={() => setPage(page + 1)}
                  >
                    Next page
                  </button>
                </div>
              ) : (
                <div className="btns-previous-next">
                  <button
                    id="btn-previous"
                    className="mb-5 me-4"
                    onClick={() => setPage(page - 1)}
                  >
                    <span id="span-previous"> Previous</span>
                  </button>
                  <button
                    id="btn-next"
                    className="mb-5"
                    onClick={() => setPage(page + 1)}
                  >
                    <span id="span-next">Next page</span>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <div className="d-flex justify-content-between mb-3 mt-3">
        <div className="search">
          <form action="" onSubmit={(event) => handleOnSubmit(event)}>
            <div className="search-box">
              <div className="search-field">
                <input
                  placeholder="Search..."
                  className="input"
                  type="text"
                  onChange={(e) => setSearchMovie(e.target.value)}
                />
                <div className="search-box-icon">
                  <button className="btn-icon-content">
                    <i className="search-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                          fill="#fff"
                        ></path>
                      </svg>
                    </i>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div>
          <h5 className="page-number text-white">Page {page}</h5>
        </div>
      </div>

      <div className="row">
        {movieData.map(
          (movie) =>
            movie.poster_path && <Movie key={movie.id} movieData={movie} />
        )}
      </div>
    </div>
  );
}

export default MovieContainer;
