import React from "react";
import "../../../../../Home.css";
import "./LearnJava.css";
import Language_Topics from "../../Language_Topics";
import { Link } from "react-router-dom";
import JavaContainer from "./JavaContainer/JavaContainer";

function LearnJava() {
  return (
    <div className="blog">
      <div className="home__container">
        <div className="blog__row">
          <Link to="/LearnPython">
            {" "}
            <JavaContainer title="Java History" />{" "}
          </Link>
          <Link to="/LearnJava">
            {" "}
            <JavaContainer title="Introduction to Java" />
          </Link>
          <Link to="/LearnCpp">
            {" "}
            <JavaContainer title="C++" />{" "}
          </Link>
          <Link to="/LearnPython">
            {" "}
            <JavaContainer title="Python" />{" "}
          </Link>
        </div>
        <div className="blog__row">
          <Link to="/LearnJava">
            {" "}
            <JavaContainer title="Java" />
          </Link>
          <Link to="/LearnCpp">
            {" "}
            <JavaContainer title="C++" />{" "}
          </Link>
          <Link to="/LearnPython">
            {" "}
            <JavaContainer title="Python" />{" "}
          </Link>
          <Link to="/LearnPython">
            {" "}
            <JavaContainer title="Python" />{" "}
          </Link>
        </div>
        <div className="blog__row">
          <Link to="/LearnJava">
            {" "}
            <JavaContainer title="Java" />
          </Link>

          <Link to="/LearnCpp">
            {" "}
            <JavaContainer title="C++" />{" "}
          </Link>
          <Link to="/LearnPython">
            {" "}
            <JavaContainer title="Python" />{" "}
          </Link>
          <Link to="/LearnPython">
            {" "}
            <JavaContainer title="Python" />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LearnJava;
