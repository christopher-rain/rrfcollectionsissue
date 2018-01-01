import replace from "lodash/replace";
import map from "lodash/map";

export const replaceLiteralsWithValues = (subject, values) =>
    replace(subject, /\$\{([\w]+)\}/g, (fullmatch, match) => values.get(match));

export const objectToQueryString = obj =>
    map(obj, function(v, k) {
        return `${encodeURIComponent(k)}=${encodeURIComponent(v)}`;
    }).join("&");
