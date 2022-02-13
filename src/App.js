import classes from "./App.module.css";
import Navbar from "./components/navbar/Navbar";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";


function App() {
    return (
        <div className={classes.app}>
            <Navbar />
            <Body />
            <Footer />
        </div>
    );
}

export default App;
