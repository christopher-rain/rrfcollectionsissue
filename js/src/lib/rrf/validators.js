// @flow
import isEmail from "validator/lib/isEmail";
import isInt from "validator/lib/isInt";

// used val.toString because of moment dates
export const notBlank = (val: string): boolean =>
    Boolean(val && val.toString().length);

export const eMail = (val: string): boolean => Boolean(!val || isEmail(val));

export const valuesMatch = (val1: string, val2: string): boolean =>
    Boolean(!val1 || !val2 || val1 === val2);

export const intBtw1And100OrEmpty = (value: string): boolean =>
    Boolean(!value || isInt(value, { min: 1, max: 100 }));

export const messages = {
    notBlank: "This value should not be blank.",
    eMail: "This value is not a valid e-mail address.",
    passwordsMatch: "Passwords must match",
    intBtw1And100OrEmpty: "This value should be between 1 and 100 or empty."
};
