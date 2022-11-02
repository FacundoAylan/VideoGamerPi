import React from "react";
import "./videogamer.css";

export const VideoGamer = ({ name, image, genre }) => {
  return (
    <div className="conteinerVideogamer">
      <img src={image} alt="" className="imageVideogamer" />
      <div className="capaVideogamer">
        <h1>{name}</h1>
        {genre.map((value) => {
          return (
            <div>
              <h2>{value}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};
