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
          <Link to="/learnjava">
            {" "}
            <Language_Topics title="Java" />
          </Link>
          <Link to="/learncpp">
            {" "}
            <Language_Topics title="C++" />{" "}
          </Link>
          <Link to="/learnpython">
            {" "}
            <Language_Topics title="Python" />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Ds_SubSection;
