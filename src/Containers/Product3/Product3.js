import React from "react";
import "./Product3.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Product3({ title, image, button }) {
  return (
    <div className="product3">
      <div className="product3__info">
        <p>{title}</p>
      </div>
      <img src={image} alt="" />

      {/* <button
      // type="button"
      >
        {" "}
        Click To View
      </button> */}
    </div>
  );
}

export default Product3;
