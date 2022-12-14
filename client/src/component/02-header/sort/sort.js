import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getVideogames, filterCreate, filter_rating, getGenres, filterGenre, videogamersALL } from "../../../redux/action/index";
import "./sort.css";

export const Sort = ({setPage}) => {

  const genres = useSelector((state) => state.genres);
  
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getGenres())
  },[]);

  const create = (e) => {
    dispatch(filterCreate(e.target.value));
    setPage(1);
  };

  const Rating = (e) =>{
    dispatch(filter_rating(e.target.value));
    setPage(1);
  };
  const genre = (e) =>{
    dispatch(filterGenre(e.target.value));
    setPage(1);
  }
  const filterALL = (e) => {
    dispatch(videogamersALL(e.target.value));
    setPage(1);
  };
  const reset= () => {
    dispatch(getVideogames())
  }
  return (
    <div className="conteinerSort">
      <input
        type="checkbox"
        id="menuSort"
        name="menuSort"
        className="inputSort"
      />
      <label for="menuSort" className="labelSort">
        ☰
      </label>
      
      <h1 className="titleSort">Sort by:</h1>

      <div className="activeSort">
        <select onChange={(e) => create(e)}>
          <option value="Reset">create</option>
          <option value="Api">Api</option>
          <option value="BD">DB</option>
        </select>

        <select onChange={(e) => Rating(e)}>
          <option value="true">Rating</option>
          <option value="true">Rating↟</option>
          <option value="false">Rating↡</option>
        </select>

        <select onChange={(e) => genre(e)}>
          <option value="true">Genres</option>
          {genres?.map((value) => {
            return(
              <option value={value.name}>{value.name}</option>
            )
          })}
        </select>

        <select onChange={(e) => filterALL(e)}>
          <option value="true">ALL</option>
          <option value="true">A-Z </option>
          <option value="false">Z-A</option>
        </select>

        <div className="create">
          <button onClick={reset} className="resetButton">Reset</button>
          <Link to="/create">
            <button className="createbutton">Create</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
