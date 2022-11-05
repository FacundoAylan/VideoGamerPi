import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {useParams } from "react-router-dom";
import { detailVideogames } from "../../../redux/action/index";
import './videogamerID.css'

export const VideogamerID = () => {

  const { id } = useParams();

  let detail = useSelector((state) => state.detail);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailVideogames(id));
  }, [dispatch]);
  console.log(detail)
  return(
    <div>
      {
        detail?.length >0 ? detail.map((value) => {
          return(
            <div>
              <img src={value.image} alt=""/>
              <h1>{value.name}</h1>
              <h2>{value.id}</h2>
              <h2>{value.rating}</h2>
              <h2>{value.released}</h2>
            </div>
          )
        })
        :
        <div className="conteinerVideogamerID">
          <svg className="circlevideogamer">
            <circle cx="173" cy="172" r="160" className="circle"></circle>
          </svg>
          <img src = "https://64.media.tumblr.com/83024b1bdea70c2ec03bc521ff47c35b/tumblr_ncqignzCFr1r3smugo1_500.gifv" alt="" />
        </div>
      }
    </div>
  ) 
};
