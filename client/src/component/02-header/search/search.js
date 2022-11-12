import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { videogamesName } from '../../../redux/action/index';
import {FcSearch } from "react-icons/fc";
import './search.css';

export const Search = () => {

  const [search, setSearch ] = useState('');

  const dispactch = useDispatch();

  const onchangeInput = (e) => {
    setSearch(e.target.value);
  }
  const onchangeClick = () => {
    dispactch(videogamesName(search))
    setSearch('')
  }
  return (
    <div className="conteinerSearch">
      <input type="text" className="inputSearch" onChange={onchangeInput} placeholder="Search by name" value={search}/>
      <button onClick={onchangeClick}><FcSearch/></button>
    </div>
  );
};
