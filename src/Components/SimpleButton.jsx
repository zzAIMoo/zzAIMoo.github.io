import React from "react";

export default class SimpleButton extends React.Component {
    render() {
        return (
            <>
                <button
                    id={this.props._id ? this.props._id : ""}
                    className={
                        (this.props.customClasses
                            ? this.props.customClasses
                            : "") +
                        " px-4 py-2  transition-all duration-300 rounded-full shadow-lg bg-purple-400 dark:bg-secondary-dark text-black font-bold dark:shadow-slate-500 dark:hover:bg-slate-500 hover:bg-purple-500 shadow-purple-500 "
                    }
                >
                    {this.props.text}
                </button>
            </>
        );
    }
}
