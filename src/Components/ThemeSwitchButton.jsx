import React from "react";

const ThemeSwitchButton = ({ children, theme, ...buttonProps }) => {
    return (
        <>
            <button
                className="absolute right-2 top-2 p-4 transition-all duration-300 rounded-full shadow-lg bg-primary-light dark:bg-primary-dark text-black font-bold dark:shadow-secondary-dark dark:hover:bg-secondary-dark hover:bg-secondary-light shadow-secondary-light "
                {...buttonProps}
            >
                {theme === "dark" ? "🌞" : "🌙"}
            </button>
        </>
    );
};

export default ThemeSwitchButton;
