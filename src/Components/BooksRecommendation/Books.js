import React from "react";
import java from "../../images/java-book.png";
import CTCIB from "../../images/ctci.png";
import Product from "../../Containers/Product/Product";
import "../../Home.css";

function Books() {
  return (
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
  );
}

export default Books;
