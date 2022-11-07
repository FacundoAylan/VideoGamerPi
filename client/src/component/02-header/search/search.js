import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { videogamesName } from '../../../redux/action/index';
import './search.css'
export const Search = () => {

  const [search, setSearch ] = useState('');

  const dispactch = useDispatch();
  useEffect(() =>{
    dispactch(videogamesName(search))
  }, [search]);

  const onchangeInput = (e) => {
    setSearch(e.target.value.toLowerCase());
  }
  console.log(search)
  return (
    <div className="conteinerSearch">
      <input type="text" className="inputSearch" onChange={onchangeInput}/>
      <label>Search by name</label>
    </div>
  );
};
