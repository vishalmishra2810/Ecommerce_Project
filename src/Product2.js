import React from "react";
import "./Product2.css";
import { useStateValue } from "./StateProvider";

function Product2({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToInterested = () => {
    //dispatch the item into the data layer

    dispatch({
      type: "ADD_TO_INTERESTED",
      item: {
        title: title,
        image: image,
        rating: rating,
      },
    });
  };
  return (
    <div className="product2">
      <div className="product2__info">
        <p>{title}</p>
      </div>
      <img src={image} alt="" />
      <button onClick={addToInterested}>Add to Interested</button>
    </div>
  );
}

export default Product2;
