import React from "react";
import ResumeHeader from "./components/Header/Header";
import Body from "./components/Body/Body";
import Header from "../../Components/Header/Header";

import "./ResumeBuilder.css";

function ResumeBuilder() {
  return (
    <div className="ResumeBuilder">
      <Header />
      <ResumeHeader />
      <Body />
    </div>
  );
}

export default ResumeBuilder;
