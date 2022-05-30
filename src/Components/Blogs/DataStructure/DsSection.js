import React from "react";
import DsSidebar from "./DsSidebar/DsSidebar";
import Header from "../../../Components/Header/Header";
import "./DsSection.css";
import Ds_SubSection from "./Ds_SubSection/Ds_SubSection";

function DsSection() {
  return (
    <div>
      {" "}
      <Header />
      <h1 className="topics">Learn Programming Language</h1>
      <Ds_SubSection />
      <DsSidebar />
    </div>
  );
}

export default DsSection;
