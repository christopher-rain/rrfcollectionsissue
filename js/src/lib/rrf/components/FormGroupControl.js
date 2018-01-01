import React from "react";
import { connect } from "react-redux";
import replace from "lodash/replace";
import _get from "lodash/get";
import { Errors } from "react-redux-form";
import ErrorsWrapper from "./ErrorsWrapper";
import ErrorComponent from "./ErrorComponent";
import TextareaControl from "./controls/TextareaControl";
import TextControl from "./controls/TextControl";
import { messages } from "../validators";

class FormGroupControl extends React.Component {
    render() {
        var classNames = require("classnames");
        const {
            model,
            fullModel,
            validators = {},
            placeholder,
            type = "text",
            choices,
            resource,
            schema,
            selector,
            choiceLabel,
            fieldInState,
            fieldValues,
            numberOfControls,
            helpText,
            fieldDynamicHelpText,
            options
        } = this.props;

        let control;
        const hasError =
            fieldInState.touched && !fieldInState.valid && !fieldInState.focus;

        if (type === "textarea") {
            control = (
                <TextareaControl
                    model={model}
                    validators={validators}
                    placeholder={placeholder}
                />
            );
        } else {
            control = (
                <TextControl
                    model={model}
                    validators={validators}
                    placeholder={placeholder}
                />
            );
        }

        let controlHelpText = null;

        if (!hasError) {
            if (fieldDynamicHelpText) {
                controlHelpText = fieldDynamicHelpText;
            } else if (helpText) {
                controlHelpText = helpText;
            }
        }

        return (
            <div className={classNames({ "has-error": hasError })}>
                <span>{control}</span>
                <span className="help-block">
                    <Errors
                        model={model}
                        messages={messages}
                        show={{ touched: true, focus: false }}
                        wrapper={ErrorsWrapper}
                        component={ErrorComponent}
                    />
                    {controlHelpText}
                </span>
            </div>
        );
    }
}

FormGroupControl.propTypes = {
    type: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    model: React.PropTypes.string.isRequired,
    validators: React.PropTypes.object,
    isVisible: React.PropTypes.func
};

function mapStateToProps(state, ownProps) {
    const model = replace(ownProps.model, ".", "");

    const fieldInState = _get(state, `forms.forms.${ownProps.form}.${model}`);
    const fieldDynamicHelpText = _get(
        state,
        `forms.${ownProps.form}.${model}DynamicHelpText`
    );

    return {
        fieldInState: fieldInState || {},
        fieldDynamicHelpText: fieldDynamicHelpText || null
    };
}

export default connect(mapStateToProps)(FormGroupControl);
