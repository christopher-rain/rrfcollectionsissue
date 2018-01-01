import React from "react";

const FormActions = props => {
    return (
        <div className="form-actions right">
            {props.children}
        </div>
    );
};

export default FormActions;
