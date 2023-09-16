import React from "react";
import { Provider } from "react-redux";
import store from "./config/dva";
import Navigator from "./navigator";

export default class extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Navigator />
            </Provider>
        )
    }
};