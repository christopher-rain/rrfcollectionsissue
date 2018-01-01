// @flow
import React from "react";
import { connect } from "react-redux";
import { openModal as uiOpenModal } from "../actions";
import { replaceLiteralsWithValues } from "../../utils/various";

const ButtonsContainer = ({
    buttons,
    openModal,
    rowData = null,
    buttonSize = "default",
    extraSpaceBtwButtons = false
}: {
    buttons: any,
    openModal: Function,
    rowData?: any,
    buttonSize?: "default" | "small",
    extraSpaceBtwButtons?: boolean
}) => (
    <span>
        {buttons.map(button => {
            let buttonLink = null;
            let buttonSmallClass = "";
            const paramsMapping = button.paramsMapping
                ? button.paramsMapping
                : { id: "id" };
            const mappedParams = {};

            if (rowData) {
                Object.keys(paramsMapping).forEach(key => {
                    mappedParams[key] = rowData.get(paramsMapping[key]);
                });
            }

            const id = mappedParams.id ? mappedParams.id : null;

            if (button.link) {
                buttonLink = replaceLiteralsWithValues(button.link, rowData);
            }

            if (buttonSize === "small") {
                buttonSmallClass = "btn-sm";
            }

            return (
                <span key={button.label}>
                    <a
                        className={`btn ${
                            buttonSmallClass
                        } btn-outline blue-madison`}
                        onClick={() => {
                            if (button.onClick) {
                                button.onClick(id);
                            }

                            if (button.openModal) {
                                openModal(button.openModal, mappedParams);
                            }
                        }}
                        href={buttonLink}
                    >
                        <i className={`fa fa-${button.icon}`} /> {button.label}
                    </a>
                    {extraSpaceBtwButtons ? "  " : ""}
                </span>
            );
        })}
    </span>
);

function mapDispatchToProps(dispatch) {
    return {
        openModal: (modal, params) => dispatch(uiOpenModal(modal, params))
    };
}

export default connect(null, mapDispatchToProps)(ButtonsContainer);
