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
        onClick={(e) => {
          e.preventDefault();
          window.location.href =
            "https://vishalmishra2810.github.io/Vishal-Portfolio/sorting.html";
        }}
      >
        {" "}
        Click To Visualize
      </button>
    </div>
  );
}

export default Product2;
