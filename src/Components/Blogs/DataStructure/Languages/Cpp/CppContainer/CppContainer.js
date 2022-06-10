import React from "react";
import "./CppContainer.css";

function CppContainer({ title }) {
  return (
    <div className="CppContainer">
      <div className="CppContainer__info">
        <p className="CppContainer__title">{title}</p>
      </div>
    </div>
  );
}

export default CppContainer;
