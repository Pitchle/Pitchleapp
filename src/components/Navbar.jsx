import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaLinkedinIn, FaYoutube, FaApple, FaGooglePlay } from "react-icons/fa";
import { QRCodeCanvas } from "qrcode.react";

const navItems = [
    { name: "About", path: "/about" },
    { name: "Plans", path: "/plans" },
    { name: "Blog", path: "/blog" },
    { name: "We Care",path: "/about#CARE"},
    { name: "FAQs", path: "/#FAQ" },
];

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [showQR, setShowQR] = useState(false);
    const location = useLocation();
    const redirectUrl = `${window.location.origin}/redirect`;
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    const bgColor = location.pathname === '/blog' ? "bg-[#f6f6f6]" : "bg-white";
    return (
        <nav className={`w-full ${bgColor}`}>
            <div className="w-11/12 mx-auto mt-4 border border-[#ECECEC] rounded-full px-2 lg:px-5 py-0 lg:py-3 bg-white">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <Link className="flex justify-center items-center space-x-2" to={"/"}>
                            <img
                                src="/img/logo/logo.png"
                                alt="logo"
                                className="w-14 h-14 rounded-full"
                            />
                            <span className="text-xl font-semibold text-gray-800">
                                Pitchle
                            </span>
                        </Link>
                    </div>

                    {/* Center Nav Items */}
                    <div className="hidden md:flex space-x-12">
                        {navItems.map((item) => (
                            <Link
                                onClick={scrollToTop}
                                key={item.name}
                                to={item.path}
                                className={`font-medium transition header-style text-[#343434] ${
                                    location.pathname === item.path
                                        ? "underline underline-offset-4"
                                        : "hover:underline hover:underline-offset-4"
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right Install Button with QR */}
                    <div className="hidden md:flex relative">
                        <button
                            onMouseEnter={() => setShowQR(true)}
                            onMouseLeave={() => setShowQR(false)}
                            className="bg-[#01BF74] text-white px-8 py-4 text-xl font-semibold rounded-full flex items-center gap-2 hover:bg-[#00b05f] transition relative"
                        >
                            Scan to Install
                            <svg width="26" height="26" viewBox="0 0 28 28" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2003_254)">
                                    <path
                                        d="M4.66667 4.66667H11.6667V11.6667H4.66667V4.66667ZM23.3333 4.66667V11.6667H16.3333V4.66667H23.3333ZM16.3333 17.5H18.6667V15.1667H16.3333V12.8333H18.6667V15.1667H21V12.8333H23.3333V15.1667H21V17.5H23.3333V21H21V23.3333H18.6667V21H15.1667V23.3333H12.8333V18.6667H16.3333V17.5ZM18.6667 17.5V21H21V17.5H18.6667ZM4.66667 23.3333V16.3333H11.6667V23.3333H4.66667ZM7 7V9.33333H9.33333V7H7ZM18.6667 7V9.33333H21V7H18.6667ZM7 18.6667V21H9.33333V18.6667H7ZM4.66667 12.8333H7V15.1667H4.66667V12.8333ZM10.5 12.8333H15.1667V17.5H12.8333V15.1667H10.5V12.8333ZM12.8333 7H15.1667V11.6667H12.8333V7ZM2.33333 2.33333V7H0V2.33333C0 1.71449 0.245833 1.121 0.683417 0.683417C1.121 0.245833 1.71449 0 2.33333 0L7 0V2.33333H2.33333ZM25.6667 0C26.2855 0 26.879 0.245833 27.3166 0.683417C27.7542 1.121 28 1.71449 28 2.33333V7H25.6667V2.33333H21V0H25.6667ZM2.33333 21V25.6667H7V28H2.33333C1.71449 28 1.121 27.7542 0.683417 27.3166C0.245833 26.879 0 26.2855 0 25.6667V21H2.33333ZM25.6667 25.6667V21H28V25.6667C28 26.2855 27.7542 26.879 27.3166 27.3166C26.879 27.7542 26.2855 28 25.6667 28H21V25.6667H25.6667Z"
                                        fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_2003_254">
                                        <rect width="28" height="28" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>

                        </button>

                        {/* QR Code Popup */}
                        {showQR && (
                            <div
                                className="absolute top-16 right-5 bg-white p-2 shadow-lg border rounded-lg z-50"
                                onMouseEnter={() => setShowQR(true)}
                                onMouseLeave={() => setShowQR(false)}
                            >
                                <QRCodeCanvas
                                    value={redirectUrl}
                                    size={150}
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

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileOpen(true)}
                            className="text-2xl text-gray-800"
                        >
                            <FiMenu className={"bg-[#01BF74] text-white p-2 w-12 h-12 rounded-full"} />
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Fullscreen Drawer */}
            <div className={`fixed top-0 right-0 h-full w-full z-50 bg-[#01BF74] transition-transform duration-300 ease-in-out transform ${
                    mobileOpen ? "translate-x-0" : "translate-x-full"
                }`}>
                {/* Header in Drawer */}
                <div className="flex items-center justify-between p-2 bg-white rounded-full m-4">
                    <div className="flex items-center space-x-2">
                        <img src="/img/logo/logo-crop.png" alt="logo" className="w-12 h-12" />
                        <span className="font-bold text-3xl text-gray-800">Pitchle</span>
                    </div>
                    <button
                        onClick={() => setMobileOpen(false)}
                        className="text-xl bg-[#00C26A] text-white w-12 h-12 flex items-center justify-center rounded-full"
                    >
                        <FiX />
                    </button>
                </div>

                {/* Navigation Items */}
                <div className="flex flex-col items-center justify-center mt-16 space-y-10 ">
                    <Link onClick={() => setMobileOpen(false)} className={"text-white text-2xl font-medium"} to={"/"}>Home </Link>
                    <>
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setMobileOpen(false)}
                            className={`text-white text-2xl font-medium ${
                                location.pathname === item.path ? "underline" : ""
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                    </>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center gap-4 mt-16">
                    {[FaLinkedinIn, FaYoutube, FaApple, FaGooglePlay].map((Icon, i) => (
                        <div
                            key={i}
                            className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full"
                        >
                            <Icon size={20} />
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
