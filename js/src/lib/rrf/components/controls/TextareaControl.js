import React from "react";
import { Control } from "react-redux-form";

const TextareaControl = ({ model, validators, placeholder }) =>
    <Control.textarea
        model={model}
        validators={validators}
        controlProps={{
            className: "form-control",
            placeholder,
            rows: "4"
        }}
    />;

export default TextareaControl;
