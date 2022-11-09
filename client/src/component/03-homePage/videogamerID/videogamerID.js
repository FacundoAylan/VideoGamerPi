import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { detailVideogames } from "../../../redux/action/index";
import "./videogamerID.css";

export const VideogamerID = () => {
  const { id } = useParams();

  let detail = useSelector((state) => state.detail);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailVideogames(id));
  }, [dispatch]);
  return (
    <div className="conteinerID">
      <a className="black" href="javascript:history.back()">
        <button>
          {"<="}
        </button> 
      </a>
      {detail !== undefined ? (
            <div className="conteinerVideogamerID">
              <img src={detail.image} alt="" className="imageVideogamerID" />
              <div className="detailVideogamerID">
                <h1>Name: {detail.name}</h1>
                <h2>Id: {detail.id}</h2>
                <h2>Rating: {detail.rating}</h2>
                <h2>Released: {detail.released}</h2>
                <div className="dataVideogamerID">
                  <div>
                    <h2>Genres:</h2>
                    {detail.genres.map((genres) => {
                      return  (<h2>{genres}</h2>);
                    })}
                  </div>
                  <div>
                    <h2>Platforms:</h2>
                    {detail.platforms.map((platforms) => {
                      return  (<h2>{platforms}</h2>);
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
