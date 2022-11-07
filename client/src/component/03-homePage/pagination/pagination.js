import React from "react";
import "./pagination.css";
export const Pagination = ({ page, setPage, max }) => {
  //varible que contiene la cantidad de botones para la paginacion
  const pagination = [];
  for (let i = 1; i <= max; i++) {
    pagination.push(i);
  }
  //funciones de los botones previus y next
  const previusClick = () => {
    setPage(page - 1);
  };
  const nextClick = () => {
    setPage(page + 1);
  };
  const pageClick = (e) => {
    console.log(Number(e.target.value));
    setPage(Number(e.target.value));
  };
  return (
    <div className="conteinerPagination">
      <button
        onClick={previusClick}
        className={page === 1 ? "disabledPrevius" : "buttonPagination"}
      >
        Prev.
      </button>
      {pagination.map((value) => {
        return (
          <button
            className={page === value ? "active" : "disabled"}
            onClick={pageClick}
            value={value}
          >
            {value}
          </button>
        );
      })}
      <button
        onClick={nextClick}
        className={page === max ? "disabledNext" : "buttonPagination"}
      >
        Next
      </button>
    </div>
  );
};
