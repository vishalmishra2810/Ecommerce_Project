import React from "react";
import DsSidebar from "../../../Components/Blogs/DataStructure/DsSidebar/DsSidebar";
import Header from "../../../Components/Header/Header";
import "./Algorithm_Section.css";
import Algorithm_Subsection from "./Algorithm_Subsection/Algorithm_Subsection";
import Footer from "../../../Components/Footer/Footer";

function Algorithm_Section() {
  return (
    <div>
      {" "}
      <Header />
      <h1 className="topics">Algorithms </h1>
      <Algorithm_Subsection />
      <DsSidebar />
      <Footer />
    </div>
  );
}

export default Algorithm_Section;
