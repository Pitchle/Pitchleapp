import React, {useEffect, useState} from 'react';
import SplashScreen from "../components/SplashScreen";
import Banner from "../components/Banner";
import Introduction from "../components/Introduction";
import About from "../components/About";
import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Philosophy from "../components/Philosophy";
import AOS from "aos";
import 'aos/dist/aos.css';

const Home = () =>{
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
                    <Banner />
                    <Introduction />
                    <About />
                    <Feature />
                    <Philosophy />
                </main>
            )}
        </div>
    );
};

export default Home;