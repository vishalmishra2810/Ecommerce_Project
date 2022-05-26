import React from "react";
import sorting from "../../images/sorting.png";
import pathfinding from "../../images/path visual.jpg";
import Product2 from "../../Containers/Product2/Product2";
import "./Visualization.css";

const Visualization = () => {
  return (
    <div className="visualize__row">
      <Product2 title="Sorting Visualizer" image={sorting} />
      <Product2 title="Path Finding Visualizer" image={pathfinding} />
    </div>
  );
};

export default Visualization;
