import React from "react";
import PropTypes from "prop-types";

const Button = (props)=> {
    return (
        <button onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default Button;