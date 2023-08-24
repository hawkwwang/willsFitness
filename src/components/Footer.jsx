import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";


const Footer = () => {
  return (
    <footer>
    <div className="container footer__container">
      <article>
        <Link to="/" className="logo">
          <img src={Logo} alt="Footer Logo" />
        </Link>
      </article>
      <article>
        <h4>Permalinks</h4>
        <Link to="/about">About</Link>
        <Link to="/plans">Plans</Link>
        <Link to="/trainers">Trainers</Link>
        <Link to="/contact">Contact</Link>
      </article>
      <article>
        <h4>Insights</h4>
        <Link to="/s">Blog</Link>
        <Link to="/s">Case Studies</Link>
        <Link to="/s">Events</Link>
        <Link to="/s">Communities</Link>
        <Link to="/s">FAQs</Link>
      </article>
      <article>
        <h4>Get In Touch</h4>
        <Link to="/contact">Contact</Link>
        <Link to="/s">Support</Link>
      </article>
    </div>
    <div className="footer__copyright">
      <small>2022 Hao &copy; All Rights Reserved</small>
    </div>
  </footer>
  )
}

export default Footer