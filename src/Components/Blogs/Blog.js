import React from "react";
import java from "../../images/java-book.png";
import CTCIB from "../../images/ctci.png";
import "../../Home.css";
import "./Blog.css";
import Product3 from "../../Containers/Product3/Product3";

function Books() {
  return (
    <div className="blog">
      <div className="home__container">
        <div className="blog__row">
          <Product3
            id="90829332"
            title="Samsung 49' Curved LED Gaming Monitor"
            price={1094.98}
            rating={3}
            image={CTCIB}
          />
          <Product3
            id="90829332"
            title="Samsung 49' Curved LED Gaming Monitor"
            price={1094.98}
            rating={3}
            image={java}
          />
          <Product3
            id="90829332"
            title="Samsung 49' Curved LED Gaming Monitor"
            price={1094.98}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
          <Product3
            id="90829332"
            title="Samsung 49' Curved LED Gaming Monitor"
            price={1094.98}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
          <Product3
            title="Samsung 49' Curved LED Gaming Monitor"
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Books;
