import React from "react";
import "./Home.css";
import banner from "./images/home_banner.jpg";
import BooksRecommendation from "./Components/BooksRecommendation/Books";
import Visualization from "./Components/Visualizer/Visualization";
import Blog from "./Components/Blogs/Blog";
// import Footer from "./Components/Footers/Footer";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={banner} alt="" />

        <BooksRecommendation />
        <Visualization />
        <Blog />

        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Home;
