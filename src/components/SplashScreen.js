import React from 'react';

// Accept a prop to differentiate between mobile and desktop
const SplashScreen = ({ isMobile }) => {
    return (
        <div className="splash-screen">
            {/*/!* Conditionally render based on the isMobile prop *!/*/}
            {/*{isMobile ? (*/}
            {/*    <img src="/img/splash.gif" alt="Mobile Splash Screen" />*/}
            {/*) : (*/}
            {/*    <img src="/img/splash_landscape.gif" alt="Desktop Splash Screen" />*/}
            {/*)}*/}

        </div>
    );
};

export default SplashScreen;
