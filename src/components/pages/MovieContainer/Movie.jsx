import { Modal, Button } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

// useEffect con axios al endpoint de la id

function Movie({ movieData }) {
  const {
    original_title,
    release_date,
    vote_average,
    poster_path,
    overview,
    title,
  } = movieData;
  const [open, setOpen] = useState(false);

  return (
    <div className="col-md-3">
      <div className="contenedor mb-5">
        <div
          onClick={() => setOpen(true)}
          className="title d-flex align-items-center justify-content-center"
        >
          <h5 className="text-center">
            {title} <br /> ({release_date})
            <br />
            <span>
              <i className="bi bi-star-fill text-warning me-2"></i>
              {vote_average.toFixed(1)}
            </span>
          </h5>
        </div>
        <div className="image">
          <img
            onClick={() => setOpen(true)}
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt="movie-image"
          />

          <Modal
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            cancelText="+Info"
            okText="Nice"
            width={1000}
            className="custom-modal"
            footer={[
              <Link to={`/movie/${movieData.id}`}>
                <Button className="custom-ok-button ms-3">+ More Info</Button>
              </Link>,
              <Button
                className="custom-cancel-button ms-3"
                onClick={() => setOpen(false)}
              >
                Nice!
              </Button>,
            ]}
          >
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-4">
                  <div className="div-modal-img mt-2 d-flex justify-content-center">
                    <img
                      id="img-modal"
                      src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                      alt="movie-image"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-8">
                  <div id="info-modal">
                    <h4 className="mb-3 text-center font-weight-bold">
                      {title}
                    </h4>
                    <h6 id="overview-title"> Overview: </h6>
                    <p id="overview-text" className="mb-3">
                      {overview}
                    </p>
                    <h6 id="ranking-title">Ranking</h6>
                    <p id="ranking-text">
                      {" "}
                      <strong> {title}</strong> has{" "}
                      <i className="bi bi-star-fill text-warning"></i>{" "}
                      <strong>
                        {" "}
                        <span className="text-warning">
                          {vote_average.toFixed(1)}/10
                        </span>{" "}
                        ranking points
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Movie;
