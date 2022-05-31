import React from "react";
import "../../../../Home.css";
import "./Ds_SubSection.css";
import Language_Topics from "../Language_Topics";
import { Link } from "react-router-dom";

function Ds_SubSection() {
  return (
    <div className="blog">
      <div className="home__container">
        <div className="blog__row">
          <Link to="/LearnJava">
            {" "}
            <Language_Topics title="Java" />
          </Link>
          <Link to="/LearnCpp">
            {" "}
            <Language_Topics title="C++" />{" "}
          </Link>
          <Link to="/LearnPython">
            {" "}
            <Language_Topics title="Python" />{" "}
          </Link>
          <Link to="/LearnJavascript">
            {" "}
            <Language_Topics title="JavaScript" />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Ds_SubSection;
