import React from "react";

class Label extends React.Component {
    render() {
        var classNames = require("classnames");

        return (
            <span
                className={classNames(
                    "label",
                    "label-sm",
                    `label-${this.props.type}`
                )}
            >
                {this.props.children}
            </span>
        );
    }
}

Label.propTypes = {
    type: React.PropTypes.oneOf([
        "default",
        "primary",
        "info",
        "success",
        "danger",
        "warning"
    ])
};

Label.defaultProps = {
    type: "default"
};

export default Label;
