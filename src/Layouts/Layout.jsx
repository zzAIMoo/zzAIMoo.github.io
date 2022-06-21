import React from "react";
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";

export default class Layout extends React.Component {
    componentDidMount() {
        document.querySelector("body").classList.add("custom-scrollbar");
    }
    render() {
        return (
            <>
                <Header>{this.props.children}</Header>
                <div className="pb-8 bg-gradient-to-b from-teal-500 to-black custom-scrollbar">
                    <Body>{this.props.children}</Body>
                </div>
                <Footer>{this.props.children}</Footer>
            </>
        );
    }
}
