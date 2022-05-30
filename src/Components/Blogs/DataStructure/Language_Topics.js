import React from "react";
import "./Language_Topics.css";

function Language_Topics({ title, image }) {
  return (
    <div className="Language_Topics">
      <div className="Language_Topics__info">
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

export default Language_Topics;
