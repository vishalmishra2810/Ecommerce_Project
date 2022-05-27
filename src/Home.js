import React from "react";
import "./Home.css";
import banner from "./images/home_banner.jpg";
import BooksRecommendation from "./Components/BooksRecommendation/Books";
import Visualization from "./Components/Visualizer/Visualization";
import Motivation from "./Components/Motivation/Motivation";
// import Footer from "./Components/Footers/Footer";
import Blog from "./Components/Blogs/Blog";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={banner} alt="" />

        <h1>Books Recommendation</h1>
        <BooksRecommendation />
        <Visualization />
        <Motivation />
        <Blog />

        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Home;
