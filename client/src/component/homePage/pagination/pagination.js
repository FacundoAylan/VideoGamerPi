import React from "react";
import "./pagination.css";
export const Pagination = ({
  page,
  setPage,
  previusPage,
  setPreviusPage,
  nextPage,
  setNextPage,
  max,
}) => {
  //varible que contiene la cantidad de botones para la paginacion
  const pagination = [];
  for (let i = 1; i <= max; i++) {
    pagination.push(i);
  }
  //funciones de los botones previus y next
  const previusClick = () => {
    setPage(page - 1);
    setPreviusPage(previusPage - 15);
    setNextPage(nextPage - 15);
  };
  const nextClick = () => {
    setPage(page + 1);
    setPreviusPage(previusPage + 15);
    setNextPage(nextPage + 15);
  };
  return (
    <div className="conteinerPagination">
      <button onClick={previusClick} className="buttonPagination">
        Prev.
      </button>
      {pagination.map((value) => {
        return <button>{value}</button>;
      })}
      <button onClick={nextClick} className="buttonPagination">
        Next
      </button>
    </div>
  );
};
