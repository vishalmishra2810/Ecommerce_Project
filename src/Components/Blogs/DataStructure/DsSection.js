import React from "react";
import DsSidebar from "./DsSidebar/DsSidebar";
import Header from "../../../Components/Header/Header";
import "./DsSection.css";
import Main_DsSS1 from "./Ds_SubSection1/Main_DsSS1";

function DsSection() {
  return (
    <div>
      {" "}
      <Header />
      <Main_DsSS1 />
      <DsSidebar />
    </div>
  );
}

export default DsSection;
