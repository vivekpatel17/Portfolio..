import classes from "./App.module.css";
import Navbar from "./components/navbar/Navbar";

import Footer from "./components/footer/Footer";


function App() {
    return (
        <div className={classes.app}>
            <Navbar />

            <Footer />
        </div>
    );
}

export default App;
