import React from "react";
import java from "../../images/java-book.png";
import CTCIB from "../../images/ctci.png";
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
      </div>
    </div>
  );
}

export default Books;