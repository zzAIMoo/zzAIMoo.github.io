import React from "react";
const ResponsiveGridLayout = ({ children }) => {
    return (
        <>
            <div className="grid items-center justify-center gap-2 p-4 gap-y-8 lg:gap-8 lg:p-12 grid-cols-auto-fit justify-items-center">
                {children}
            </div>
        </>
    );
};

export default ResponsiveGridLayout;
