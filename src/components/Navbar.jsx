import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaLinkedinIn, FaYoutube, FaApple, FaGooglePlay } from "react-icons/fa";
import { LuScan } from "react-icons/lu";
import { QRCodeCanvas } from "qrcode.react";

const navItems = [
    { name: "About", path: "/about" },
    { name: "Plans", path: "/plans" },
    { name: "Blog", path: "/blog" },
    { name: "We Care", path: "/we-care" },
    { name: "FAQs", path: "/faq" },
];

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [showQR, setShowQR] = useState(false);
    const location = useLocation();
    const redirectUrl = `${window.location.origin}/redirect`;

    return (
        <nav className="sticky top-0 z-50 w-full bg-transparent">
            <div className="w-11/12 mx-auto mt-4 border border-[#ECECEC] rounded-full px-4 sm:px-6 lg:px-8 bg-white">
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
                            className="bg-[#00C26A] text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-[#00b05f] transition relative"
                        >
                            Scan to Install <LuScan size={18} />
                        </button>

                        {/* QR Code Popup */}
                        {showQR && (
                            <div
                                className="absolute top-14 right-0 bg-white p-2 shadow-lg border rounded-lg z-50"
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

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileOpen(true)}
                            className="text-2xl text-gray-800"
                        >
                            <FiMenu />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Fullscreen Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-full z-50 bg-[#00C26A] transition-transform duration-300 ease-in-out transform ${
                    mobileOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Header in Drawer */}
                <div className="flex items-center justify-between p-2 bg-white rounded-full m-4">
                    <div className="flex items-center space-x-2">
                        <img src="/img/logo/logo-crop.png" alt="logo" className="w-10 h-10" />
                        <span className="font-bold text-lg text-gray-800">Pitchle</span>
                    </div>
                    <button
                        onClick={() => setMobileOpen(false)}
                        className="text-xl bg-[#00C26A] text-white w-8 h-8 flex items-center justify-center rounded-full"
                    >
                        <FiX />
                    </button>
                </div>

                {/* Navigation Items */}
                <div className="flex flex-col items-center justify-center mt-16 space-y-10 ">
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
