import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h4>Version 1.0.0</h4>
        <p>
          Designed for learning purposes, Maybe it will get improved someday!
        </p>
        <Link className="btn" to="/">
          Go back
        </Link>
      </div>
    </div>
  );
};

export default About;
