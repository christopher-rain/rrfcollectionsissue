import { combineReducers } from "redux";
import { combineForms } from "react-redux-form";
import { routerReducer } from "react-router-redux";

const rootReducer = combineReducers({
    forms: combineForms(
        {
            account: {},
            reservation: {
                reservationType: 1,
                trips: []
            },
            trip: {},
            vehicleType: {},
            tripVehicle: {},
            test: {}
        },
        "forms"
    ),
    router: routerReducer
});

export default rootReducer;
