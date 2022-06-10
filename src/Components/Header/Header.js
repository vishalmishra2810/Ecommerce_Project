import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import InterestsIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src="/images/Visco.jpeg" alt="" />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/Resume_Builder">
          <div className="header__option">
            <span className="header__optionLineOne">Resume</span>
            <span className="header__optionLineTwo">Creator</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Interview</span>
          <span className="header__optionLineTwo">Guider</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Chat</span>
          <span className="header__optionLineTwo">With us</span>
        </div>

        <Link to="/helpful_topics">
          <div className="header__option">
            <span className="header__optionLineOne">Helpful</span>
            <span className="header__optionLineTwo">Topics</span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <InterestsIcon />
            <span
              className="header__optionLineTwo
            header__basketCount"
            >
              {basket?.length}
            </span>
          </div>
        </Link>
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
