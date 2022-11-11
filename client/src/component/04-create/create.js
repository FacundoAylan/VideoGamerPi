import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGenres, create } from "../../redux/action/index";
import { PlatformsApi } from "./platformsApi";
import { Link } from "react-router-dom";
import { Verificacion } from "./verificacion";
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
});

  const expresiones = {
    name: /^[\s\S]{2,10}$/,
    rating: /^[0-9]+([,][0-9]+)?$/,
    image: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/,
    description: /^[\s\S]{10,25}$/
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGenres());
  }, []);

  const input = (e) =>{
    if(e.target.id === "rating"){
      setState({
        ...state,
        [e.target.id]:  Number(e.target.value) ?  Number(e.target.value) : e.target.value
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

  let verificaion = Verificacion(state,expresiones);

  return (
    <div className="conteinterCreate">
      <Link to="/videogames"  className="backCreate">
        <button>{"<="}</button>
      </Link>
      <form className="conteinerForm" onSubmit={handlerOnSubmit} >
        <div className="name">
          <label>Name:</label>
          <input 
            placeholder="Name"
            id="name"
           value={state.name}
           onChange={input}
          />
          <label className={!expresiones.name.test(state.name)? "label": "disabledCreate"}>2 to 10 characters</label>
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
          <label>Rating:</label>
          <input
            placeholder="Rating"
            id="rating"
            value={state.rating}
            onChange={input}  
          />
          <label className={!expresiones.rating.test(state.rating)? "label": "disabledCreate"}>example (2 or 2,5)</label>
        </div>  

        <div className="name">
          <label>Image:</label>
          <input 
            placeholder="Image"
            id="image"
           value={state.image}
           onChange={input}
          />
          <label className={!expresiones.image.test(state.image)? "label": "disabledCreate"}>url (jpg o png)</label>
        </div>

        <div className="description">
          <label>Description: </label>
          <textarea
          id="description"
          value={state.description}
          onChange={input}
          />
          <label className={!expresiones.description.test(state.description)? "label": "disabledCreate"}>10 to 25 characters</label>
        </div>

        <button className={verificaion?"buttonCreate": "disabledButtonCreate"}>Create videogamer</button>
      </form>
    </div>
  );
};
