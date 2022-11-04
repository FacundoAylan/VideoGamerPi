import React from "react";
import "./sort.css";

export const Sort = () => {
  return (
    <div className="conteinerSort">
      <input type="checkbox" id="menuSort" name="menuSort" className="inputSort" />
      <label for="menuSort" className="labelSort">☰</label>
      <div className="option">
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
        </ul>

      </div>
    </div>
  );
};
