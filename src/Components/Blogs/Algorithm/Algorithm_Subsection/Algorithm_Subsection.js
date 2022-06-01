import React from "react";
import "../../../../Home.css";
import "../Algorithm_Subsection/Algorithm_Subsection.css";
import Language_Topics from "../../DataStructure/Language_Topics";
import { Link } from "react-router-dom";

function Algorithm_SubSection() {
  return (
    <div className="blog">
      <div className="home__container">
        <div className="blog__row">
          <Link to="/commonAlgorithms">
            {" "}
            <Language_Topics title="Common" />
          </Link>
          <Link to="/LearnCpp">
            {" "}
            <Language_Topics title="Interview" />{" "}
          </Link>
          <Link to="/LearnPython">
            {" "}
            <Language_Topics title="Competitve" />{" "}
          </Link>
          <Link to="/LearnJavascript">
            {" "}
            <Language_Topics title="All" />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Algorithm_SubSection;
