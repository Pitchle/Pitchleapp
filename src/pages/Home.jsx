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
    const [isMobile, setIsMobile] = useState(false); // New state to track if it's mobile view

    useEffect(() => {
        const checkIfMobile = () => {
            const isMobileView = window.innerWidth <= 768; // Define mobile view width
            setIsMobile(isMobileView); // Update the state to reflect if it's mobile
        };

        checkIfMobile(); // Check on initial render
        window.addEventListener('resize', checkIfMobile); // Listen for window resize

        if (isMobile) {
            setTimeout(() => {
                setLoading(false); // Set loading to false after 5 seconds for mobile view
                AOS.init();
            }, 5500); // Adjust the duration for mobile view
        } else {
            setTimeout(() => {
                setLoading(false); // Set loading to false after 3 seconds for desktop view
                AOS.init();
            }, 1); // Adjust the duration for desktop view
        }

        return () => {
            window.removeEventListener('resize', checkIfMobile); // Clean up event listener
        };
    }, [isMobile]); // Add isMobile to dependency array

    return (
        <div className="App">
            {loading && <SplashScreen isMobile={isMobile} />} {/* Pass isMobile prop */}
            {!loading && (
                <>
                    <main>
                        <Navbar />
                        <Banner />
                        <Introduction />
                    </main>
                    <About />
                    <Feature />
                    <Philosophy />
                </>
            )}
        </div>
    );
};

export default Home;
