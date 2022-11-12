import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { detailVideogames } from "../../../redux/action/index";
import { Link } from "react-router-dom";
import "./videogamerID.css";

export const VideogamerID = () => {
  const { id } = useParams();

  let detail = useSelector((state) => state.detail);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailVideogames(id));
  }, [dispatch]);

  const [description, setDescription] = useState(false);
  const activeDescription = () => {
    if (description === false) {
      setDescription(true);
    } else {
      setDescription(false);
    }
  };
  return (
    <div className="conteinerID">
      <Link to="/videogames" className="black">
        <button>{"<="}</button>
      </Link>
      {detail !== undefined ? (
        <div className="conteinerVideogamerID">
          <div className="divImage">
            <img src={detail.image} alt="" className="imageVideogamerID" />
          </div>
          <div className="detailVideogamerID">
            <h1>Name: {detail.name}</h1>
            <h2>ID: {detail.id}</h2>
            <h2>
              description:
              <button
                className={
                  description === true ? "disabledButton" : "activeButton"
                }
                onClick={activeDescription}
              >
                Visualize
              </button>
            </h2>
            <h2 className={description === false ? "disabledID" : "activeID"}>
              <button onClick={activeDescription}>X</button>
              <div>{detail.description}</div>
            </h2>

            <h2>Rating: {detail.rating}</h2>
            <h2>Released: {detail.released}</h2>
            <div className="dataVideogamerID">
              <div>
                <h2>Genres:</h2>
                {detail.genres.map((genres) => {
                  return <h2>{genres}</h2>;
                })}
              </div>
              <div>
                <h2>Platforms:</h2>
                {detail.platforms.map((platforms) => {
                  return <h2>{platforms}</h2>;
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="conteinerMario">
          <svg className="circlevideogamer">
            <circle cx="173" cy="172" r="160" className="circle"></circle>
          </svg>
          <img
            src="https://64.media.tumblr.com/83024b1bdea70c2ec03bc521ff47c35b/tumblr_ncqignzCFr1r3smugo1_500.gifv"
            alt=""
          />
        </div>
      )}
    </div>
  );
};
