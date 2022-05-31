import React from "react";
import "./Language_Topics.css";

function Language_Topics({ title }) {
  return (
    <div className="Language_Topics">
      <div className="Language_Topics__info">
        <p className="Language_Topics__title">{title}</p>
      </div>
    </div>
  );
}

export default Language_Topics;
