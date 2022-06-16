import React from "react";
import "../../Assets/styles/App.css";
export default class Header extends React.Component {
    render() {
        return (
            <>
                <div className="App-header">{this.props.children}</div>
            </>
        );
    }
}
