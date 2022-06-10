import React from "react";
import "./Home.css";
import banner from "./images/home_banner.jpg";
import BooksRecommendation from "./Components/BooksRecommendation/BooksRecommendation";
import Visualization from "./Components/Visualizer/Visualization";
import Motivation from "./Components/Motivation/Motivation";
import { Link } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Blog from "./Components/Blogs/Blog";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={banner} alt="" />

        <h1 className="books_recommendation">Books Recommendation</h1>
        <BooksRecommendation />
        <h1 className="visualization_topics">Want to Visualize?</h1>
        <Visualization />
        <h1 className="motivation_topics">Always Stay Motivated</h1>
        <Motivation />
        <h1 className="blog_topics">Learning Squads</h1>
        <Blog />
        <h1 className="Resume">Want to Create Resume?</h1>
        <Link to="/Resume_Builder">
          <button className="resume_button">Click Here</button>
        </Link>

        <Footer />
      </div>
    </div>
  );
}

export default Home;
