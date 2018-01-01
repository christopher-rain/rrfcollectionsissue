import React from "react";
import { Form as ReactReduxForm } from "react-redux-form";
import replace from "lodash/replace";
import { changeValuesType } from "../services";
import FormBody from "./FormBody";
import FormGroup from "./FormGroup";
import FormActions from "./FormActions";
import Button from "./Button";

const Form = props => {
    const form = replace(props.model, "forms.", "");
    let buttonsIteration = 0;

    return (
        <ReactReduxForm
            model={props.model}
            className="form-horizontal"
            onSubmit={values => {
                const valuesWithCorrectedTypes = changeValuesType(
                    values,
                    props.formGroups
                );
                props.onSubmit(valuesWithCorrectedTypes);
            }}
        >
            <FormBody>
                {props.children}
                {props.formGroups.map(formGroup => (
                    <FormGroup
                        key={formGroup.controls[0].model}
                        form={form}
                        label={formGroup.label}
                        helpText={formGroup.helpText}
                        isVisible={formGroup.isVisible}
                        controls={formGroup.controls}
                        classNames={props.classNames}
                        styles={props.styles}
                    />
                ))}
            </FormBody>
            <FormActions>
                {props.buttons.map(button => {
                    buttonsIteration++;

                    return (
                        <span key={button.label}>
                            {buttonsIteration > 1 && <span>&nbsp;</span>}
                            {button.textLink ? (
                                <a key={button.label} onClick={button.onClick}>
                                    {button.label}
                                </a>
                            ) : (
                                <Button
                                    label={button.label}
                                    loading={button.loading}
                                />
                            )}
                        </span>
                    );
                })}
            </FormActions>
        </ReactReduxForm>
    );
};

export default Form;
