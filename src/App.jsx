import "./Assets/styles/App.css";
import Layout from "./Layouts/Layout";
import SimpleBackground from "./Components/SimpleBackground";
import SimpleButton from "./Components/SimpleButton";
import SimpleImageCard from "./Components/SimpleImageCard";
import ThemeSwitchButton from "./Components/ThemeSwitchButton";
import ResponsiveGridLayout from "./Components/ResponsiveGridLayout";
import { useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

function App() {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        library.add(fab, faCheckSquare, faCoffee);
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
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <>
            <Layout>
                <ThemeSwitchButton onClick={handleThemeSwitch} theme={theme} />

                <ResponsiveGridLayout>
                    <SimpleButton onClick={(e) => console.log("ciao")}>
                        dadasds
                    </SimpleButton>
                    <SimpleBackground></SimpleBackground>
                    <SimpleImageCard></SimpleImageCard>
                    <SimpleImageCard></SimpleImageCard>
                </ResponsiveGridLayout>
            </Layout>
        </>
    );
}

export default App;
