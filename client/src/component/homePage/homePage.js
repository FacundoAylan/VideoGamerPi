import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getVideogames } from "../../redux/action/index";
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
      <div className="header"></div>
      {videoGames?.length > 0 ? (
        <div className="mainConteiner">
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
        <div>
          <img
            src="https://img1.picmix.com/output/stamp/normal/8/5/2/9/509258_fb107.gif"
            alt="Img not found"
            width="150px"
          />
        </div>
      )}
    </div>
  );
};
