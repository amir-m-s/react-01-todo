import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = props => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{props.title}</h1>
      {location.pathname === "/" && (
        <Button
          value={!props.addFormState ? "Add" : "Cancel"}
          classes={`btn ${!props.addFormState ? "btn-primary" : "btn-error"}`}
          onClickHandler={props.btnClick}
        />
      )}
    </header>
  );
};

// Default prop values
Header.defaultProps = {
  title: "Todo List",
};

// Default prop types
Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
