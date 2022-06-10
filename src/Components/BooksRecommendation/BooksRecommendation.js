import React from "react";
import java from "../../images/java-book.png";
import CTCIB from "../../images/ctci.png";
import software_D_Career from "../../images/software_D_Career.png";
import System_Design_Alex_Xu from "../../images/System_Design_Alex_Xu.png";
import Cpp_Erik from "../../images/Cpp_Erik.png";
import react_Lionet from "../../images/react_Lionet.png";
import coding_narsimha from "../../images/coding_narsimha.png";
import DBMS_S_Chand from "../../images/DBMS_S_Chand.png";
import Designing_Martin from "../../images/Designing_Martin.png";
import Product from "../../Containers/Product/Product";
import "../../Home.css";

function BooksRecommendation() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__row">
          <Product
            id="123211341"
            title="Java For Beginners Guide To Learn Java And Java Programming"
            price={1262}
            image={java}
            rating={4}
          />
          <Product
            id="123211341"
            title="Cracking the Coding Interview"
            price={875}
            image={CTCIB}
            rating={5}
          />
          <Product
            id="123211341"
            title="The Complete Software Developer's Career Guide: How to Learn Your Next Programming Language"
            price={2138.06}
            image={software_D_Career}
            rating={4}
          />
          <Product
            id="49538094"
            title="System Design Interview"
            price={3317}
            rating={4}
            image={System_Design_Alex_Xu}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Quickstart Step-By-Step Guide To Learning React Javascript Library"
            price={1224}
            rating={3}
            image={react_Lionet}
          />
          <Product
            id="23445930"
            title="Database Management Systems (DBMS)"
            price={489}
            rating={5}
            image={DBMS_S_Chand}
          />
          <Product
            id="4903850"
            title="The C++ book is the ultimate beginner's guide to programming C++"
            price={848.18}
            rating={3}
            image={Cpp_Erik}
          />
          <Product
            id="23445930"
            title="Coding Interview Questions by Narasimha Karumanchi "
            price={2362}
            rating={5}
            image={coding_narsimha}
          />
          <Product
            id="3254354345"
            title="Designing Data-Intensive Applications"
            price={1490}
            rating={4}
            image={Designing_Martin}
          />
        </div>
      </div>
    </div>
  );
}

export default BooksRecommendation;
