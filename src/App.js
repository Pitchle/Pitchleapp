import './App.css';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Feature from "./components/Feature";
import Philosophy from "./components/Philosophy";
import FaQs from "./components/FAQs";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <main className={"banner-bg"}>
                <Navbar/>
                <Banner/>
                <Introduction/>
                <About/>
                <Feature/>
                <Philosophy/>
                {/*<FaQs/>*/}
                <Footer/>
            </main>
        </>
    );
}

export default App;
