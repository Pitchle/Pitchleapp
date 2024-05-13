// App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Feature from "./components/Feature";
import Philosophy from "./components/Philosophy";
import Footer from "./components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import SplashScreen from "./components/SplashScreen";
import Pricing from "./components/Pricing";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false); // Set loading to false after a certain duration (e.g., 3 seconds)
            AOS.init();
        }, 6000); // Adjust the duration as needed
    }, []);

    return (
        <div className="App">
            {loading ? (
                <SplashScreen />
            ) : (
                <main className="banner-bg">
                    <Navbar />
                    <Banner />
                    <Introduction />
                    <About />
                    <Feature />
                    <Pricing/>
                    <Philosophy />
                    {/* <FaQs /> */}
                    <Footer />
                </main>
            )}
        </div>
    );
}

export default App;
