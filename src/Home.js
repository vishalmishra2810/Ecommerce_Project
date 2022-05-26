import React from "react";
import "./Home.css";
import Product from "./Product";
import banner from "./images/home_banner.jpg";
import java from "./images/java-book.png";
import CTCIB from "./images/ctci.png";
import Visualization from "./Visualization";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={banner} alt="" />

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
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={4}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking"
            price={239.0}
            rating={4}
            image="https://cdn.pixabay.com/photo/2013/07/12/14/55/blender-149032_1280.png"
          />
        </div>

        <Visualization />

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="4903850"
            title="Samsung 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung 49' Curved LED Gaming Monitor"
            price={1094.98}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
          <Product
            id="90829332"
            title="Samsung 49' Curved LED Gaming Monitor"
            price={1094.98}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
          <Product
            id="90829332"
            title="Samsung 49' Curved LED Gaming Monitor"
            price={1094.98}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
          <Product
            id="90829332"
            title="Samsung 49' Curved LED Gaming Monitor"
            price={1094.98}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
          <Product
            id="90829332"
            title="Samsung 49' Curved LED Gaming Monitor"
            price={1094.98}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
