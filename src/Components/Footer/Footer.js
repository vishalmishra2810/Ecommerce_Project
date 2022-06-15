import React from "react";
import insta from "../../images/footer-social/insta.jpg";
import fb from "../../images/footer-social/fb.png";
import linkedin from "../../images/footer-social/linkedin.png";
import twitter from "../../images/footer-social/twitter.jpg";
import heart from "../../images/footer-social/heart.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="storage">
        <a href="/about_us">About Us</a>
        <a href="/helpful_topics">Blog</a>
        <a href="/">Pages</a>
        <a href="/">Chat with us</a>
      </div>
      <div className="storage2">
        <a href="https://instagram.com/vishalmishra_28/">
          <img src={insta} alt="Icon" />
        </a>
        <a href="https://www.facebook.com/vishalmishra2810/">
          <img src={fb} alt="Icon" />
        </a>
        {/* <a href="/">
                <img src={wordpress} alt="Icon" />
              </a> */}
        <a href="https://twitter.com/vishalmishra_28/">
          <img src={twitter} alt="Icon" />
        </a>
        {/* <a href="mailto:mishravishal2810@gmail.com">
          <img src={google} alt="Icon" />
        </a> */}
        <a href="https://www.linkedin.com/in/vishalmishra2810/">
          <img src={linkedin} alt="Icon" />
        </a>
      </div>
      <p className="footer-text">
        Contact: +91-9773686553
        <br />
        <br />
        &copy; COPYRIGHT 2021 reserved by Programming Zone
        <br />
        {/* <br /> */}
        Made with{" "}
        <img
          src={heart}
          alt="Heart"
          style={{ height: "22px", padding: "0 3px", float: "none" }}
        />{" "}
        from{" "}
        <a
          style={{ display: "inline", float: "none" }}
          href="https://www.linkedin.com/in/vishalmishra2810/"
        >
          Vishal Mishra
        </a>
      </p>
    </div>
  );
}

export default Footer;
