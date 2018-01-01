import replace from "lodash/replace";

export const convertObjectToChoices = obj => {
    var choices = [];

    for (var property in obj) {
        choices.push({
            value: property,
            name: obj[property]
        });
    }

    return choices;
};

export const changeValuesType = (values, formGroups) => {
    const modifiedValues = Object.assign({}, values);
    // see if we have valueType set somewhere
    const fieldsWithTypes = [];
    for (let i = 0; i < formGroups.length; i += 1) {
        for (let j = 0; j < formGroups[i].controls.length; j += 1) {
            if (formGroups[i].controls[j].valueType) {
                fieldsWithTypes.push({
                    field: replace(formGroups[i].controls[j].model, ".", ""),
                    valueType: formGroups[i].controls[j].valueType
                });
            }
        }
    }

    for (let i = 0; i < fieldsWithTypes.length; i += 1) {
        if (fieldsWithTypes[i].valueType === "number") {
            modifiedValues[fieldsWithTypes[i].field] = Number(
                modifiedValues[fieldsWithTypes[i].field]
            );
        }
    }

    return modifiedValues;
};
