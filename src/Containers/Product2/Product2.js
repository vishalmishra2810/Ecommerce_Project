import React from "react";
import "./Product2.css";

function Product2({ title, image }) {
  return (
    <div className="product2">
      <div className="product2__info">
        <p>{title}</p>
      </div>
      <img src={image} alt="" />

      <button
      // type="button"
      >
        {" "}
        Click To Visualize
      </button>
    </div>
  );
}

export default Product2;
