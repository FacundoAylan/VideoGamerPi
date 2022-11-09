import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGenres } from "../../redux/action/index";
import "./create.css";

export const Create = () => {
  const genres = useSelector((state) => state.genres);
  const platformsApi = [
    "PC",
    "PlayStation 5",
    "PlayStation 4",
    "PlayStation 3",
    "Xbox One",
    "Xbox Series S/X",
    "Xbox 360",
    "Xbox",
    "Nintendo Switch",
    "Nintendo 3DS",
    "Nintendo DS",
    "Nintendo DSi",
    "iOS",
    "Android",
    "macOS",
    "Linux",
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGenres());
  }, []);
  return (
    <div className="conteinterCreate">
      <a className="blackCreate" href="javascript:history.back()">
        <button>
          {"<="}
        </button> 
      </a>
      <form className="conteinerForm">
        <div className="name">
          <label>Name:</label>
          <input />
        </div>

        <div className="name">
          <label>released: </label>
          <input type="date" />
        </div>

        <div className="name">
          <label>Rating:</label>
          <input />
        </div>

        <div className="genres">
          <label>Genres: </label>
          <select>
            <option value="true">Genres</option>
            {genres?.map((value) => {
              return <option value={value.name}>{value.name}</option>;
            })}
          </select>
        </div>

        <div className="genres">
          <label>Plataform: </label>
          <select>
            <option value="true">Plataform</option>
            {platformsApi.map((value) => {
              return <option value={value}>{value}</option>;
            })}
          </select>

        </div>

        <div className="description">
          <label>Description: </label>
          <input type="text" />
        </div>

        <button className="buttonCreate">Create videogamer</button>
      </form>
    </div>
  );
};
