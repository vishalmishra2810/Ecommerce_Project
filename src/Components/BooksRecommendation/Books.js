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

function Books() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__row">
          <Product
            id="123211341"
            title="the lean startup"
            price={29.99}
            image={java}
            rating={4}
          />
          <Product
            id="123211341"
            title="the lean startup"
            price={29.99}
            image={CTCIB}
            rating={4}
          />
          <Product
            id="123211341"
            title="the lean startup"
            price={29.99}
            image={software_D_Career}
            rating={4}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking"
            price={239.0}
            rating={4}
            image={System_Design_Alex_Xu}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image={react_Lionet}
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image={DBMS_S_Chand}
          />
          <Product
            id="4903850"
            title="Samsung 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image={Cpp_Erik}
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image={coding_narsimha}
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image={Designing_Martin}
          />
        </div>
      </div>
    </div>
  );
}

export default Books;
