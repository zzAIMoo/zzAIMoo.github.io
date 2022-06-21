import React from "react";

const SimpleButton = ({ children, customClasses, text, ...buttonProps }) => {
    return (
        <>
            <button
                className={`${
                    customClasses ?? ""
                } px-4 py-2 rounded-full shadow-lg bg-primary-light dark:bg-primary-dark text-black font-bold dark:shadow-secondary-dark dark:hover:bg-secondary-dark hover:bg-secondary-light shadow-secondary-light transition-all duration-300`}
                {...buttonProps}
            >
                {text ?? children}
            </button>
        </>
    );
};

export default SimpleButton;
