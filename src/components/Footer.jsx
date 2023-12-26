import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="copyright">Copyright &copy; 2023</p>
      <Link to="/about">About</Link>
    </footer>
  );
};

export default Footer;
