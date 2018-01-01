import React from "react";
import { connect } from "react-redux";
import _get from "lodash/get";
import FormGroupControl from "./FormGroupControl";

class FormGroup extends React.Component {
    isRequired(controls) {
        var isRequired = false;

        for (var i = 0; i < controls.length; i++) {
            if (controls[i].validators && controls[i].validators.notBlank) {
                isRequired = true;
            }
        }

        return isRequired;
    }

    render() {
        var classNamesLib = require("classnames");
        const {
            label,
            placeholder,
            isVisible,
            controls,
            fieldValues,
            classNames = {},
            styles = {},
            form
        } = this.props;

        if (isVisible && !isVisible(fieldValues)) {
            return null;
        }

        const required = this.isRequired(controls);
        const numberOfControls = controls.length;

        // label classes
        var labelClassNamesObj = {
            "control-label": true,
            required: required
        };

        if (classNames.label) {
            labelClassNamesObj[classNames.label] = true;
        } else {
            labelClassNamesObj["col-md-4"] = true;
        }
        // end label classes

        return (
            <div className="form-group">
                <label
                    className={classNamesLib(labelClassNamesObj)}
                    style={styles.label ? styles.label : {}}
                >
                    {label}
                </label>
                <div
                    className={
                        classNames.controlsDiv
                            ? classNames.controlsDiv
                            : "col-md-7"
                    }
                >
                    <div className="row">
                        {controls.map(control => (
                            <div
                                key={control.model}
                                className={classNamesLib({
                                    "col-md-12": numberOfControls == 1,
                                    "col-md-6": numberOfControls == 2
                                })}
                            >
                                <FormGroupControl
                                    model={control.model}
                                    fullModel={"forms." + form + control.model}
                                    validators={control.validators}
                                    placeholder={control.placeholder}
                                    type={control.type}
                                    choices={control.choices}
                                    schema={control.schema}
                                    selector={control.selector}
                                    choiceLabel={control.choiceLabel}
                                    resource={control.resource}
                                    fieldValues={this.props.fieldValues}
                                    helpText={control.helpText}
                                    form={this.props.form}
                                    numberOfControls={numberOfControls}
                                    options={control.options}
                                    addOn={control.addOn}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

FormGroup.propTypes = {
    type: React.PropTypes.string,
    label: React.PropTypes.string.isRequired,
    controls: React.PropTypes.array.isRequired,
    form: React.PropTypes.string.isRequired,
    isVisible: React.PropTypes.func
};

function mapStateToProps(state, ownProps) {
    return {
        fieldValues: _get(state, `forms.${ownProps.form}`, {})
    };
}

export default connect(mapStateToProps)(FormGroup);
