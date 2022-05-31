import React from "react";
import "./JavaContainer.css";

function JavaContainer({ title }) {
  return (
    <div className="JavaContainer">
      <div className="JavaContainer__info">
        <p className="JavaContainer__title">{title}</p>
      </div>
    </div>
  );
}

export default JavaContainer;
