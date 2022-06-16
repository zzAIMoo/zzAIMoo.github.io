import logo from "./Assets/images/misc/logo.png";
import "./Assets/styles/App.css";
import Layout from "./Layouts/Layout";

function App() {
    return (
        <>
            <Layout>
                <img src={logo} className="App-logo" alt="logo" />
            </Layout>
        </>
    );
}

export default App;
