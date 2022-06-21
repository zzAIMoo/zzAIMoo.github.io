import React from "react";

const SimpleBreadcrumb = ({ children, text, customClasses }) => {
    return (
        <>
            <span
                className={`${
                    customClasses ?? ""
                } inline-block px-3 py-1 mb-2 mr-2 overflow-x-auto text-sm font-semibold text-gray-700 rounded-full shadow-lg bg-stone-200 text-ellipsis whitespace-nowrap shadow-gray-500 transition-all duration-300`}
            >
                {text}
            </span>
        </>
    );
};

export default SimpleBreadcrumb;
