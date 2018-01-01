import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "react-router-redux";
import reducers from "../rootReducer";

const configureStore = (preloadedState, history) => {
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        reducers,
        preloadedState,
        composeEnhancers(applyMiddleware(routerMiddleware(history)))
    );

    return store;
};

export default configureStore;
