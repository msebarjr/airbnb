import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import Home from "./screens/Home";

function App() {
    return (
        <>
            <Navigation isHeader={true} />
            <Home />
            <Footer isHeader={false} />
        </>
    );
}

export default App;
