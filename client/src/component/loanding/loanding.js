import React from "react";
import { Link } from "react-router-dom";
import "./loanding.css";

export const Start = () => {
  return (
    <div className="start">
      <h1>VIDEOGAMES</h1>
      <Link to="/videogames" className="linkStart">
        <button className="buttonStart">Start</button>
      </Link>
    </div>
  );
};
