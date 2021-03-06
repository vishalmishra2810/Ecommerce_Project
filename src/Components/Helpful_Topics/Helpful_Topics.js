import React from "react";
import "./Helpful_Topics.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";
import Header from "../../Components/Header/Header";

// Images
import faang from "../../images/helpful_topics_images/faang.png";

function Helpful_Topics() {
  return (
    <div className="searchPage">
      <Header />
      <div className="searchPage__info">
        {/* <p>62 stays · 26 august to 30 august · 2 guest</p> */}
        <h1>
          Topics and Articles that will help you throughout your Software
          journey
        </h1>
        <Button variant="outlined">Companies</Button>
        <Button variant="outlined">Placement</Button>
        <Button variant="outlined">Best Resources</Button>
        <Button variant="outlined">Top Skill</Button>
        <Button variant="outlined">Best Youtube Channel</Button>
      </div>
      <a
        style={{ textDecoration: "none" }}
        href="https://e-gmat.com/blogs/top-tech-companies-best-paying-jobs-in-technology/"
        target="_blank"
      >
        <SearchResult
          img={faang}
          // location="Private room in center of London"
          title="Top Tech Companies with the Best Paying Jobs in 2020"
          description="In this article, we analyze the top tech companies to work for in 2020, based on various parameters such as the number of MBA graduates hired, compensation, and job satisfaction. The article also covers the skills required to pursue a career in Technology."
        />
      </a>
      <a
        style={{ textDecoration: "none" }}
        href="https://www.forbes.com/sites/jenamcgregor/2022/06/09/microsoft-announces-it-will-include-pay-ranges-in-all-us-job-postings-experts-predict-it-will-be-the-first-of-many/?sh=599478115c72"
        target="_blank"
      >
        <SearchResult
          img="https://imageio.forbes.com/specials-images/imageserve/62a22539ebc9184778876078/A-Microsoft-Corp--Store-As-Company-Exceeds-Sales--Profit-Estimates-On-Cloud-Gains/1960x0.jpg?format=jpg&width=960"
          // location="Private room in center of London"
          title="Microsoft Announces It Will Include Pay Ranges In All U.S. Job Postings. Experts Predict It Will Be The First Of Many"
          description="In a blog post, Microsoft said it would disclose salary ranges in all internal and external U.S. job postings no later than January 2023. That date is when Washington state, where Microsoft’s headquarters are located, will start requiring employers with at least 15 employees to disclose salary ranges for each position. The law covers Washington state; Microsoft’s initiative will apply “across the U.S.,” it said."
        />
      </a>
      <SearchResult
        img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
        location="Private room in center of London"
        title="London Studio Apartments"
        description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
        star={3.8}
        price="£35 / night"
        total="£207 total"
      />
      <SearchResult
        img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
        location="Private room in center of London"
        title="30 mins to Oxford Street, Excel London"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.1}
        price="£55 / night"
        total="£320 total"
      />
      <SearchResult
        img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg"
        location="Private room in center of London"
        title="Spacious Peaceful Modern Bedroom"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning"
        star={5.0}
        price="£60 / night"
        total="£450 total"
      />
      <SearchResult
        img="https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937"
        location="Private room in center of London"
        title="The Blue Room In London"
        description="2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine"
        star={4.23}
        price="£65 / night"
        total="£480 total"
      />
      <SearchResult
        img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
        location="Private room in center of London"
        title="5 Star Luxury Apartment"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={3.85}
        price="£90 / night"
        total="£650 total"
      />
    </div>
  );
}

export default Helpful_Topics;
