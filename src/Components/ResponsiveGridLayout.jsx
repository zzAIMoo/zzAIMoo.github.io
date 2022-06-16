import React from "react";
export default class ResponsiveGridLayout extends React.Component {
    render() {
        return (
            <>
                <div className="grid items-center justify-center gap-2 p-4 gap-y-8 lg:gap-8 lg:p-12 grid-cols-auto-fit justify-items-center">
                    {this.props.children}
                </div>
            </>
        );
    }
}
