import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import trips from "../trips/index";

export default class App extends React.Component {
    render() {
        return (
            <ConnectedRouter history={this.props.history}>
                <Switch>
                    <Route
                        exact
                        path="/index.html"
                        component={trips.components.IndexPage}
                    />
                </Switch>
            </ConnectedRouter>
        );
    }
}
