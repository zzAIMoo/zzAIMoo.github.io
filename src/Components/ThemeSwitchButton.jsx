import React from "react";

const ThemeSwitchButton = ({ children, theme, ...buttonProps }) => {
    return (
        <>
            <button
                className=" px-4 py-2 transition-all duration-300 rounded-full shadow-lg bg-purple-400 dark:bg-secondary-dark text-black font-bold dark:shadow-slate-500 dark:hover:bg-slate-500 hover:bg-purple-500 shadow-purple-500 "
                {...buttonProps}
            >
                {theme === "dark" ? "🌞" : "🌙"}
            </button>
        </>
    );
};

export default ThemeSwitchButton;
