import React from "react";
import DsSidebar from "../DataStructure/DsSidebar/DsSidebar";
import Header from "../../../Components/Header/Header";
import "./Cs_Section.css";
import Footer from "../../Footer/Footer";
import Cs_Subsection from "./Cs_Subsection/Cs_Subsection";

function Cs_Section() {
  return (
    <div className="Cs_Section">
      <Header />
      <h1 className="topics">Cs Section </h1>
      <Cs_Subsection />
      <DsSidebar />
      <Footer />
    </div>
  );
}

export default Cs_Section;
