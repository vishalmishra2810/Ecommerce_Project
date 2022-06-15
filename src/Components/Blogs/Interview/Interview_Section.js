import React from "react";
import DsSidebar from "../DataStructure/DsSidebar/DsSidebar";
import Header from "../../../Components/Header/Header";
import "./Interview_Section.css";
import Footer from "../../Footer/Footer";
import Interview_subsection from "./Interview_subsection/Interview_subsection";

function Interview_Section() {
  return (
    <div className="Interview_Section">
      <Header />
      <h1 className="topics">Most Important Interview Topics</h1>
      <Interview_subsection />
      <DsSidebar />
      <Footer />
    </div>
  );
}

export default Interview_Section;
