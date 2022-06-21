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
import Card from "../../Containers/Card/Card";

function Blog() {
  return (
    <div className="blog">
      <div className="blog__section">
        <Link style={{ textDecoration: "none" }} to="/DsSection">
          <Card
            src={ds}
            title="Data Structure"
            description="Best Data Structure Practices that will help you through out your Interview Preperation."
            // price="£130/night"
          />
        </Link>
        <Link style={{ textDecoration: "none" }} to="/Algorithm_Section">
          <Card
            src={algorithm}
            title="Algorithms"
            description="Best Algorithmic Practices that will help you through out your Interview Preperation."
            // price="£350/night"
          />
        </Link>
        <Link style={{ textDecoration: "none" }} to="/Interview_Section">
          <Card
            src={Interview}
            title="Interview Preperation"
            description="Full resources and Data that you will definetly need to check during your preperation."
            // price="£70/night"
          />{" "}
        </Link>{" "}
        <Link style={{ textDecoration: "none" }} to="/Cs_Section">
          <Card
            src={DBMS}
            title="Core Cs Subjects"
            description="Never miss core cs subjects, during your preperation, here's every resources in one place."
            // price="£70/night"
          />
        </Link>
      </div>
    </div>
  );
}

export default Blog;
