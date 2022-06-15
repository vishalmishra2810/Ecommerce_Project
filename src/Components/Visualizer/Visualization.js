import React from "react";
import sorting from "../../images/sorting.png";
import pathfinding from "../../images/path visual.jpg";
import Product2 from "../../Containers/Product2/Product2";
import "./Visualization.css";

const Visualization = () => {
  return (
    <div className="visualize__row">
      <a
        style={{ textDecoration: "none" }}
        href="https://vishalmishra2810.github.io/Vishal-Portfolio/sorting.html"
        target="_blank"
      >
        {" "}
        <Product2 title="Sorting Visualizer" image={sorting} />
      </a>
      <a
        style={{ textDecoration: "none" }}
        href="https://vishalmishra2810.github.io/Vishal-Portfolio/Path-Finding-Visualizer-master/index.html"
        target="_blank"
      >
        <Product2 title="Path Finding Visualizer" image={pathfinding} />
      </a>
    </div>
  );
};

export default Visualization;
