import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const Feature = () => {
    const [showQR, setShowQR] = useState(false);
    const [manualToggle, setManualToggle] = useState(false); // tracks if clicked

    const redirectUrl = `${window.location.origin}/redirect`;

    const handleMouseEnter = () => {
        if (!manualToggle) {
            setShowQR(true);
        }
    };

    const handleMouseLeave = () => {
        if (!manualToggle) {
            setShowQR(false);
        }
    };

    const handleClick = () => {
        const newState = !showQR;
        setShowQR(newState);
        setManualToggle(newState);
    };

    return (
        <section className="py-32 lg:py-44 px-4 md:px-16 lg:px-24 text-center relative">
            {/* Heading */}
            <div className="mb-8 space-y-7 lg:space-y-16">
                <h1 className="text-4xl lg:text-8xl font-bold text-[#01BF74] mb-4">
                    We Grow <br /> When You Grow
                </h1>
                <p className="text-lg lg:text-4xl">
                    Download Pitchle and Start Growing <br />Your Business Today!
                </p>
            </div>

            {/* Button */}
            <div
                className="flex justify-center mt-12 relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <button
                    onClick={handleClick}
                    className="bg-[#417DFF] hover:bg-[#049c60] text-white py-3 lg:py-4 px-20 lg:px-10 rounded-full shadow-md transition flex items-center space-x-2 text-sm lg:text-base"
                >
                    <span className="text-xl">Scan to Install</span>
                    <svg width="23" height="23" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.66667 4.66667H11.6667V11.6667H4.66667V4.66667ZM23.3333 4.66667V11.6667H16.3333V4.66667H23.3333ZM16.3333 17.5H18.6667V15.1667H16.3333V12.8333H18.6667V15.1667H21V12.8333H23.3333V15.1667H21V17.5H23.3333V21H21V23.3333H18.6667V21H15.1667V23.3333H12.8333V18.6667H16.3333V17.5ZM18.6667 17.5V21H21V17.5H18.6667ZM4.66667 23.3333V16.3333H11.6667V23.3333H4.66667ZM7 7V9.33333H9.33333V7H7ZM18.6667 7V9.33333H21V7H18.6667ZM7 18.6667V21H9.33333V18.6667H7ZM4.66667 12.8333H7V15.1667H4.66667V12.8333ZM10.5 12.8333H15.1667V17.5H12.8333V15.1667H10.5V12.8333ZM12.8333 7H15.1667V11.6667H12.8333V7ZM2.33333 2.33333V7H0V2.33333C0 1.71449 0.245833 1.121 0.683417 0.683417C1.121 0.245833 1.71449 0 2.33333 0L7 0V2.33333H2.33333ZM25.6667 0C26.2855 0 26.879 0.245833 27.3166 0.683417C27.7542 1.121 28 1.71449 28 2.33333V7H25.6667V2.33333H21V0H25.6667ZM2.33333 21V25.6667H7V28H2.33333C1.71449 28 1.121 27.7542 0.683417 27.3166C0.245833 26.879 0 26.2855 0 25.6667V21H2.33333ZM25.6667 25.6667V21H28V25.6667C28 26.2855 27.7542 26.879 27.3166 27.3166C26.879 27.7542 26.2855 28 25.6667 28H21V25.6667H25.6667Z"
                            fill="white"
                        />
                    </svg>
                </button>

                {/* QR Code Popup */}
                {showQR && (
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white p-3 shadow-lg border rounded-lg z-50">
                        <QRCodeCanvas
                            value={redirectUrl}
                            size={150}
                            bgColor="#ffffff"
                            fgColor="#000000"
                            level="H"
                            includeMargin={true}
                        />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <img
                                src="/img/logo/logo-crop.png"
                                alt="Logo"
                                className="w-10 h-10 bg-white p-1 rounded-full"
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Feature;
