import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link} from 'react-router-dom';
import { getVideogames, warnings1 } from "../../redux/action/index";
import { Search } from "../02-header/search/search";
import { VideoGamer } from "./videogamer/videogamer";
import { Pagination } from "./pagination/pagination";
import { Sort } from "../02-header/sort/sort";
import "./homePage.css";

export const HomePage = () => {
  //variable que contiene todos los videojuegos
  const videoGames = useSelector((state) => state.videogames,() => false);
  const warnings = useSelector((state) => state.warnings);
  //varibles para controlar el paginado
  const [page, setPage] = useState(1);
  //varibles para calcular la cantidad de paginas
  const videogamerPage = 15;
  const max = Math.ceil(videoGames?.length / videogamerPage);
  //Hago el dispactch para traer los videojugos desde la base de datos
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideogames());
  }, []);

  const exit = () =>{
    dispatch(warnings1());
  }
  console.log(warnings)
  return (
    <div>
      {videoGames?.length > 0 || warnings? (
        <div className="mainConteiner">
          <div className={warnings? "activewarning": "disabledwarning"}>
            <button onClick={exit}>X</button>
            <h1>{warnings}</h1>
            <img
                src="https://media.tenor.com/e8aElio9JQAAAAAj/mario-walking.gif"
                alt=""
                className="headerImage"
              />
          </div>
          <div className="header">
            <div className="headerTitle">
              <Link to ="/">
                <h1 className="headerH1">VIDEOGAMES</h1>
              </Link>
              <img
                src="https://media.tenor.com/e8aElio9JQAAAAAj/mario-walking.gif"
                alt=""
                className="headerImage"
              />
            </div>
            <div className="searcHeader">
              <Search />
            </div>
            <div className="sortHeader">
              <Sort setPage={setPage}/>
            </div>
          </div>
          <div className="conteinerVideogamers">
            {videoGames
              .slice(
                (page - 1) * videogamerPage,
                (page - 1) * videogamerPage + videogamerPage
              )
              .map((value) => {
                return (
                  <div>
                    <Link to={`/videogames/${value.id}`}>
                      <VideoGamer
                        name={value.name}
                        image={value.image}
                        genre={value.genres}
                      />
                    </Link>
                  </div>
                );
              })}
          </div>
          <div className="paginationHome">
            <Pagination page={page} setPage={setPage} max={max} />
          </div>
        </div>
      ) : (
        <div className="loader">
          <div className="circles">
            <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
          </div>
          <div className="pacman">
            <span className="top"></span>
            <span className="bottom"></span>
            <span className="left"></span>
            <div className="eye"></div>
          </div>
          <h1 className="loaderH1">loading...</h1>
        </div>
      )}
    </div>
  );
};
