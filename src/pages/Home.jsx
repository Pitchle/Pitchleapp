import React, { useEffect, useState } from 'react';
import SplashScreen from '../components/SplashScreen';
import Banner from '../components/Banner';
import Introduction from '../components/Introduction';
import About from '../components/About';
import Feature from '../components/Feature';
import Pricing from '../components/Pricing';
import Philosophy from '../components/Philosophy';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const isMobile = window.innerWidth <= 768; // Define mobile view width
        if (isMobile) {
            setTimeout(() => {
                setLoading(false); // Set loading to false after 5 seconds for mobile view
                AOS.init();
            }, 5000); // Adjust the duration for mobile view
        } else {
            setLoading(false); // Set loading to false immediately for desktop and iPad view
            AOS.init();
        }
    }, []);

    return (
        <div className="App">
            {loading && <SplashScreen />} {/* Only show splash screen if loading is true */}
            {!loading && (
                <main className="banner-bg">
                    <Navbar />
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
