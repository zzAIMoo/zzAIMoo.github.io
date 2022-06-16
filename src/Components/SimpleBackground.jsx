import React from "react";

export default class SimpleBackground extends React.Component {
    render() {
        return (
            <>
                <div
                    id={this.props._id ? this.props._id : ""}
                    className={
                        (this.props.customClasses
                            ? this.props.customClasses
                            : "") +
                        " flex items-center justify-center p-6 bg-purple-300 shadow-2xl shadow-purple-700 min-h-[10rem] min-w-[10rem] rounded-2xl dark:bg-slate-300 dark:shadow-slate-700"
                    }
                >
                    {this.props.children}
                </div>
            </>
        );
    }
}
