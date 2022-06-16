import "./Assets/styles/App.css";
import logo from "./Assets/images/misc/logo.png";
import Layout from "./Layouts/Layout";
import SimpleBackground from "./Components/SimpleBackground";
import SimpleButton from "./Components/SimpleButton";
import ThemeSwitchButton from "./Components/ThemeSwitchButton";
import { useEffect, useState } from "react";

function App() {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        console.log(theme);
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <>
            <Layout>
                <ThemeSwitchButton onClick={handleThemeSwitch} theme={theme} />
                <SimpleButton onClick={(e) => console.log("ciao")}>
                    dadasds
                </SimpleButton>
                <SimpleBackground></SimpleBackground>
                <img src={logo} className="App-logo" alt="logo" />
            </Layout>
        </>
    );
}

export default App;
