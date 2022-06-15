import React from "react";
import "../../../../Home.css";
// import "../Interview_subsection/Interview_subsection.css";
import Language_Topics from "../../DataStructure/Language_Topics";
import { Link } from "react-router-dom";

function Interview_subsection() {
  return (
    <div className="blog">
      <div className="home__container">
        <div className="blog__row">
          <Link style={{ textDecoration: "none" }} to="/commonAlgorithms">
            {" "}
            <Language_Topics title="Common" />
          </Link>
          <Link style={{ textDecoration: "none" }} to="/LearnCpp">
            {" "}
            <Language_Topics title="Interview" />{" "}
          </Link>
          <Link style={{ textDecoration: "none" }} to="/LearnPython">
            {" "}
            <Language_Topics title="Competitve" />{" "}
          </Link>
          <Link style={{ textDecoration: "none" }} to="/LearnJavascript">
            {" "}
            <Language_Topics title="All" />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Interview_subsection;
