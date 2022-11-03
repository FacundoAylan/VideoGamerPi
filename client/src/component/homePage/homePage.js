import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getVideogames } from "../../redux/action/index";
import { Search } from "../search/search";
import { VideoGamer } from "./videogamer/videogamer";
import { Pagination } from "./pagination/pagination";
import "./homePage.css";

export const HomePage = () => {
  //variable que contiene todos los videojuegos
  const videoGames = useSelector((state) => state.videogames);
  //varibles para controlar el paginado
  const [previusPage, setPreviusPage] = useState(0);
  const [nextPage, setNextPage] = useState(15);
  const [page, setPage] = useState(1);
  //varibles para calcular la cantidad de paginas
  const videogamerPage = 15;
  const max = Math.ceil(videoGames?.length / videogamerPage);
  //Hago el dispactch para traer los videojugos desde la base de datos
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  return (
    <div>
      {videoGames?.length > 0 ? (
        <div className="mainConteiner">
          <div className="header">
            <h1>gamer</h1>
            <div className="searcHeader">
              <Search />
            </div>
          </div>
          <div className="conteinerVideogamers">
            {videoGames.slice(previusPage, nextPage).map((value) => {
              return (
                <div>
                  <VideoGamer
                    name={value.name}
                    image={value.image}
                    alt=""
                    genre={value.genres}
                  />
                </div>
              );
            })}
          </div>
          <div className="paginationHome">
            <Pagination
              page={page}
              setPage={setPage}
              previusPage={previusPage}
              setPreviusPage={setPreviusPage}
              nextPage={nextPage}
              setNextPage={setNextPage}
              max={max}
            />
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
