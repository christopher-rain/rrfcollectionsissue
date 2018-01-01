import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import createHistory from "history/createBrowserHistory";
import configureStore from "./common/services/configureStore";
import App from "./components/App";

const history = createHistory();

const preloadedState = {};

const store = configureStore(preloadedState, history);

render(
    <Provider store={store}>
        <App history={history} />
    </Provider>,
    document.getElementById("app")
);
