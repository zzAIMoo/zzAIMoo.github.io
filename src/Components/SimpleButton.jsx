import React from "react";

const SimpleButton = ({ children, customClasses, text, ...buttonProps }) => {
    return (
        <>
            <button
                className={`${
                    customClasses ?? ""
                } px-4 py-2 transition-all duration-300 rounded-full shadow-lg bg-purple-400 dark:bg-secondary-dark text-black font-bold dark:shadow-slate-500 dark:hover:bg-slate-500 hover:bg-purple-500 shadow-purple-500 `}
                {...buttonProps}
            >
                {text ?? children}
            </button>
        </>
    );
};

export default SimpleButton;
