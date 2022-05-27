import React from "react";
import "../../Home.css";
import "./Blog.css";
import Product3 from "../../Containers/Product3/Product3";
import ds from "../../images/Articles/DS.png";
import algorithm from "../../images/Articles/algorithm.png";
import DBMS from "../../images/Articles/DBMS.png";
import Aptitude from "../../images/Articles/Aptitude.png";
import Interview from "../../images/Articles/Interview.png";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div className="blog">
      <div className="home__container">
        <div className="blog__row">
          <Link to="/DsSection">
            {" "}
            <Product3 title="Data Structure" image={ds} />
          </Link>
          <Link to="/Algorithm_Section">
            {" "}
            <Product3 title="Algorithms" image={algorithm} />{" "}
          </Link>
          <Link to="/Interview_Section">
            {" "}
            <Product3 title="Interview Preperation" image={Interview} />{" "}
          </Link>
          <Link to="/Cs_Section">
            {" "}
            <Product3 title="Core Cs Subjects" image={DBMS} />{" "}
          </Link>
          <Link to="/Aptitude_Section">
            {" "}
            <Product3 title="Aptitude" image={Aptitude} />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Blog;
