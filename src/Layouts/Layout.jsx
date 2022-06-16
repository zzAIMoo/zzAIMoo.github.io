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
                <div className="custom-scrollbar bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
                    <Header>{this.props.children}</Header>
                    <Body>{this.props.children}</Body>
                    <Footer>{this.props.children}</Footer>
                </div>
            </>
        );
    }
}
