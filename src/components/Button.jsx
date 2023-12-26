import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  return (
    <>
      <button className={props.classes} onClick={props.onClickHandler}>
        {props.value}
      </button>
    </>
  );
};

Button.defaultProps = {
  value: "Button",
  classes: "btn",
  onClickHandler: () => console.log("On click Handler Unassigned!"),
};

Button.propTypes = {
  classes: PropTypes.string,
  onClickHandler: PropTypes.func.isRequired,
};

export default Button;
