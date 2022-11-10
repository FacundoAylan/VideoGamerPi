import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGenres, create } from "../../redux/action/index";
import { PlatformsApi } from "./platformsApi";
import "./create.css";

export const Create = () => {
  const genres = useSelector((state) => state.genres);
  const platformsApi = PlatformsApi();

  const [state, setState] = useState({
      "name": "",
      "description": "",
      "image": "",
      "released": "",
      "rating": "",
      "platforms": [],
      "genres":[] 
})

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGenres());
  }, []);

  const input = (e) =>{
    if(e.target.id === "rating"){
      setState({
        ...state,
        [e.target.id]: Number(e.target.value)
      }) 
    }else{
      setState({
        ...state,
        [e.target.id]: e.target.value
      })
    }
  };
  const inputSelect = (e) =>{
    if(e.target.id === "genres"){
      setState({
        ...state,
        genres: state.genres.concat(e.target.value)
      })
    }else{
      setState({
        ...state,
        platforms: state.platforms.concat(e.target.value)
      })
    }
  };
  const handlerOnSubmit = (event) => {
    event.preventDefault()
    dispatch(create(state))
  }
  console.log(state)
  return (
    <div className="conteinterCreate">
      <a className="blackCreate" href="javascript:history.back()">
        <button>
          {"<="}
        </button> 
      </a>
      <form className="conteinerForm" onSubmit={handlerOnSubmit} >
        <div className="name">
          <label>Name:</label>
          <input 
            placeholder="Name"
            id="name"
           value={state.name}
           onChange={input}
          />
        </div>

        <div className="name">
          <label>released: </label>
          <input 
          placeholder="mm/dd/yyyy"
          type="date" 
          id="released"
          value={state.released}
          onChange={input}
          />
        </div>

        <div className="name">
          <label>Rating:</label>
          <input
            placeholder="Rating"
            id="rating"
            value={state.rating}
            onChange={input}  
          />
        </div>

        <div className="genres">
          <label>Genres: </label>
          <select id="genres" onChange={inputSelect}>
            <option value={null}>Genres</option>
            {genres?.map((value) => {
              return <option value={value.name}>{value.name}</option>;
            })}
          </select>
        </div>

        <div className="genres">
          <label>Plataform: </label>
          <select id="plataform" onChange={inputSelect}>
            <option value="true">Plataform</option>
            {platformsApi.map((value) => {
              return <option value={value}>{value}</option>;
            })}
          </select>

        </div>
        <div className="name">
          <label>Image:</label>
          <input 
            placeholder="Image"
            id="image"
           value={state.image}
           onChange={input}
          />
        </div>

        <div className="description">
          <label>Description: </label>
          <textarea
          id="description"
          value={state.description}
          onChange={input}
          />
        </div>

        <button className="buttonCreate">Create videogamer</button>
      </form>
    </div>
  );
};
