// @flow
import React from "react";
import { Form as LibForm } from "../../lib/rrf/";
import { notBlank } from "../../lib/rrf/validators";

const Form = props => {
    const { formModel, buttons, onSubmit } = props;

    const formGroups = [
        {
            label: "Passengers",
            controls: [
                {
                    placeholder: "Number of Passengers",
                    model: ".passengersNumber",
                    valueType: "number",
                    validators: { notBlank }
                }
            ]
        }
    ];

    return (
        <div className="row">
            <div className="col-md-12">
                <LibForm
                    model={formModel}
                    formGroups={formGroups}
                    buttons={buttons}
                    classNames={{
                        controlsDiv: "col-md-8"
                    }}
                    onSubmit={values => {
                        onSubmit(values);
                    }}
                />
            </div>
        </div>
    );
};

export default Form;
