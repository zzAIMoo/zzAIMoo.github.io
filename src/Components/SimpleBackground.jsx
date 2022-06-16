import React from "react";

const SimpleBackground = ({ children, customClasses }) => {
    return (
        <>
            <div
                className={`${
                    customClasses ?? ""
                } flex items-center justify-center p-6 bg-purple-300 shadow-2xl shadow-purple-700 min-h-[10rem] min-w-[10rem] rounded-2xl dark:bg-slate-300 dark:shadow-slate-700`}
            >
                {children}
            </div>
        </>
    );
};

export default SimpleBackground;
