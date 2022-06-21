import React from "react";

const SimpleBackground = ({ children, customClasses }) => {
    return (
        <>
            <div
                className={`${
                    customClasses ?? ""
                } flex items-center justify-center p-6 bg-primary-light shadow-xl shadow-secondary-light min-h-[10rem] min-w-[10rem] rounded-2xl dark:bg-primary-dark dark:shadow-tertiary-dark transition-all duration-300`}
            >
                {children}
            </div>
        </>
    );
};

export default SimpleBackground;
