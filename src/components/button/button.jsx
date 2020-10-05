import React from "react";

import './button.scss';

export const Button = ({func, text}) => {
    return (
        <button onClick={func} className="btn">{text}</button>
    )
}