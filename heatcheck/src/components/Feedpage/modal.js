import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Modal extends Component {
    state = { show: false };

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

