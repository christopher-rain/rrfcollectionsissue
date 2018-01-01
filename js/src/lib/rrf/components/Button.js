// @flow
import React from "react";

const Button = ({
    label,
    loading = false
}: {
    label: string,
    loading?: boolean
}) =>
    <button
        type="submit"
        className="btn-outline blue-madison btn"
        disabled={loading}
    >
        {loading && <i className="fa fa-spinner fa-spin blue-madison" />}{" "}
        {label}
    </button>;

export default Button;
