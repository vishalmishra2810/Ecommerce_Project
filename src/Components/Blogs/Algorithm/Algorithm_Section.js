import React from "react";
import DsSidebar from "../../../Components/Blogs/DataStructure/DsSidebar/DsSidebar";
import Header from "../../../Components/Header/Header";
import "./Algorithm_Section.css";
import Ds_SubSection from "../DataStructure/Ds_SubSection/Ds_SubSection";
import Algorithm_Subsection from "./Algorithm_Subsection/Algorithm_Subsection";

function Algorithm_Section() {
  return (
    <div>
      {" "}
      <Header />
      <h1 className="topics">Common Algorithm</h1>
      <Ds_SubSection />
      <Algorithm_Subsection />
      <DsSidebar />
    </div>
  );
}

export default Algorithm_Section;
