import React from "react";

const ErrorComponent = props =>
    <li>
        <span className="glyphicon glyphicon-exclamation-sign" />
        {props.children}
    </li>;

export default ErrorComponent;
