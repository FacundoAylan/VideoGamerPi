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
    name: "",
    description: "",
    image: "",
    released: "",
    rating: "",
    platforms: [],
    genres: [],
  });

  const expresiones = {
    name: /^[\s\S]{2,10}$/,
    rating: /^[0-9]+([,][0-9]+)?$/,
    image: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/,
    description: /^[\s\S]{10,100}$/,
  };
  const [warnings, setWarnings] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGenres());
  }, []);

  const controller = (value) =>{
    document.getElementById(value).selectedIndex = 0;
  };

  const input = (e) => {
    if (e.target.id === "rating") {
      setState({
        ...state,
        [e.target.id]: Number(e.target.value)
          ? Number(e.target.value)
          : e.target.value,
      });
    } else {
      setState({
        ...state,
        [e.target.id]: e.target.value,
      });
    }
  };
  const inputSelect = (e) => {
    if (e.target.id === "genres") {
      setState({
        ...state,
        genres: state.genres.concat(e.target.value),
      });
      controller("genres")
    } else {
      setState({
        ...state,
        platforms: state.platforms.concat(e.target.value),
      });
      controller("platform")
    }
  };

  const onChangeDelete = (e) => {
    const filter =
      e.target.id === "platforms"
        ? state.platforms.filter((value) => value !== e.target.value)
        : state.genres.filter((value) => value !== e.target.value);
    if (filter.length === 0) {
      setState({
        ...state,
        [e.target.id]: [],
      });
    } else {
      setState({
        ...state,
        [e.target.id]: filter,
      });
    }
  };
  const handlerOnSubmit = (event) => {
    event.preventDefault();
    setWarnings(true);
    dispatch(create(state));
  };
  const exit = () => {
    setWarnings(false);
    setState({
      name: "",
      description: "",
      image: "",
      released: "",
      rating: "",
      platforms: [],
      genres: [],
    })
  }
   
  let verificaion = Verificacion(state, expresiones);
 
  return (
    <div className="conteinterCreate">

      <div className={warnings? "warningactive": "warningdisabled"}>
        <button onClick={exit}>X</button>
        <h1>videogame created</h1>
        <img
            src="https://media.tenor.com/e8aElio9JQAAAAAj/mario-walking.gif"
            alt=""
            className="headerImage"
          />
      </div>

      <Link to="/videogames" className="backCreate">
        <button>{"<="}</button>
      </Link>
      <form className="conteinerForm" onSubmit={handlerOnSubmit}>
        <div className="name">
          <label>Name:</label>
          <input
            placeholder="Name"
            id="name"
            value={state.name}
            onChange={input}
          />
          <label
            className={
              !expresiones.name.test(state.name) ? "label" : "disabledCreate"
            }
          >
            2 to 10 characters
          </label>
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
          <div className="delete1">
            {state.genres.map((value) => (
              <button value={value} id="genres" onClick={onChangeDelete}>
                {value}
              </button>
            ))}
          </div>
        </div>

        <div className="genres">
          <label>Platform: </label>
          <select id="platform" onChange={inputSelect}>
            <option value="true">Platforms</option>
            {platformsApi.map((value) => {
              return <option value={value}>{value}</option>;
            })}
          </select>
          <div className="delete2">
            {state.platforms.map((value) => (
              <button value={value} id="platforms" onClick={onChangeDelete}>
                {value}
              </button>
            ))}
          </div>
        </div>

        <div className="name">
          <label>Rating:</label>
          <input
            placeholder="Rating"
            id="rating"
            value={state.rating}
            onChange={input}
          />
          <label
            className={
              !expresiones.rating.test(state.rating)
                ? "label"
                : "disabledCreate"
            }
          >
            example (2 or 2,5)
          </label>
        </div>

        <div className="name">
          <label>Image:</label>
          <input
            placeholder="Image"
            id="image"
            value={state.image}
            onChange={input}
          />
          <label
            className={
              !expresiones.image.test(state.image) ? "label" : "disabledCreate"
            }
          >
            url (jpg o png)
          </label>
        </div>

        <div className="description">
          <label>Description: </label>
          <textarea
            id="description"
            value={state.description}
            onChange={input}
          />
          <label
            className={
              !expresiones.description.test(state.description)
                ? "label"
                : "disabledCreate"
            }
          >
            10 to 50 characters
          </label>
        </div>

        <button
          className={verificaion ? "buttonCreate" : "disabledButtonCreate"}
        >
          Create videogamer
        </button>
      </form>
    </div>
  );
};
