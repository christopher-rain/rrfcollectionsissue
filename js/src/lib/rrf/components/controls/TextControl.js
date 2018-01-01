import React from "react";
import { Control } from "react-redux-form";

const TextControl = ({ model, validators, placeholder }) =>
    <Control.text
        model={model}
        validators={validators}
        controlProps={{
            maxLength: "128",
            className: "form-control",
            placeholder: placeholder
        }}
    />;

export default TextControl;
