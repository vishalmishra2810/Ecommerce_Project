import React from "react";
import "./PythonContainer.css";

function PythonContainer({ title }) {
  return (
    <div className="PythonContainer">
      <div className="PythonContainer__info">
        <p className="PythonContainer__title">{title}</p>
      </div>
    </div>
  );
}

export default PythonContainer;
