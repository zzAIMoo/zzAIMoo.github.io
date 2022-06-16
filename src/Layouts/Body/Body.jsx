import React from "react";
export default class Body extends React.Component {
    render() {
        return (
            <>
                <div className="overflow-x-hidden">{this.props.children}</div>
            </>
        );
    }
}
