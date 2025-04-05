import React, { useState } from 'react';
import { AiOutlineQrcode } from 'react-icons/ai';
import { QRCodeCanvas } from 'qrcode.react';

const Feature = () => {
    const [showQR, setShowQR] = useState(false);
    const redirectUrl = `${window.location.origin}/redirect`;

    return (
        <section className="py-32 lg:py-40 px-4 md:px-16 lg:px-24 text-center relative">
            {/* Heading */}
            <div className="mb-8 space-y-7">
                <h1 className="text-3xl lg:text-7xl font-bold text-[#01BF74] mb-4">We Grow <br /> When You Grow</h1>
                <p className="text-md lg:text-lg">
                    Download Pitchle and Start Growing <br/>Your Business Today!
                </p>
            </div>

            {/* Button */}
            <div className="flex justify-center mt-10 relative">
                <button
                    onMouseEnter={() => setShowQR(true)}
                    onMouseLeave={() => setShowQR(false)}
                    className="bg-blue-500 text-white py-3 px-8 lg:px-12 rounded-full shadow-md hover:bg-blue-600 transition flex items-center space-x-2 text-sm lg:text-base"
                >
                    <span>Scan to Install</span>
                    <AiOutlineQrcode className="w-5 h-5" />
                </button>

                {/* QR Code Popup */}
                {showQR && (
                    <div
                        className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white p-3 shadow-lg border rounded-lg z-50"
                        onMouseEnter={() => setShowQR(true)}
                        onMouseLeave={() => setShowQR(false)}
                    >
                        <QRCodeCanvas
                            value={redirectUrl}
                            size={128}
                            bgColor={"#ffffff"}
                            fgColor={"#000000"}
                            level={"H"}
                            includeMargin={true}
                        />
                        {/* Logo overlay */}
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
