
import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLinkedin, FaYoutube, FaApple, FaGooglePlay } from 'react-icons/fa';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
    const location = useLocation();
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!email) {
            setEmailError("Email is required.");
            return;
        }

        if (!emailRegex.test(email)) {
            setEmailError("Please enter a valid email address.");
            return;
        }

        setSubscribed(true);
        setEmail("");
        setEmailError("");

        toast.success("Thanks for subscribing! You’ll get all updates from this site.");
        requestNotificationPermission();
    };

    const requestNotificationPermission = () => {
        if ("Notification" in window && Notification.permission !== "granted") {
            Notification.requestPermission().then((permission) => {
                if (permission === "granted") {
                    new Notification("Subscription Successful!", {
                        body: "You will receive updates for new blogs.",
                        icon: "/img/logo/logo.png", // Make sure this path exists
                    });
                }
            });
        }
    };

    return (
        <footer className="bg-gray-100 py-10 p-4 text-[#343434] md:px-8 lg:m-4 lg:p-16 rounded-xl mt-10">
            <ToastContainer
                position="top-right"     // <-- change from top-center to top-right
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="max-w-7xl mx-auto">
                {/* Row 1: Brand (left) + Newsletter (right) */}
                <div className="flex flex-col md:flex-row md:justify-between gap-2">
                    {/* Brand */}
                    <div className="flex lg:scale-125 -mt-10 flex-col justify-center items-center md:items-start">
                        <div className="flex items-center space-x-2">
                            <img
                                src="/img/logo/logo.png"
                                alt="Pitchle Logo"
                                className="w-16 h-16 rounded-full"
                            />
                            <h2 className="text-3xl font-bold">Pitchle</h2>
                        </div>
                        <p className="text-lg mt-4 text-center md:text-left">
                            The Social Network <br className="block"/>
                            for Business &amp; <br className="block md:hidden"/> Commerce
                        </p>
                    </div>

                    {/* Newsletter */}
                    <div className="w-full md:w-1/2 lg:scale-125 lg:w-2/5 my-10 lg:my-12">
                        <h3 className="text-2xl lato-font text-center md:text-left mb-2">
                            Stay Updated with Our Latest News &amp; Offers!
                        </h3>
                        <p className="mt-3 text-center md:text-left mb-4">
                            Subscribe to our newsletter for exclusive updates, business tips,
                            and special offers.
                        </p>
                        <div className="flex flex-col w-full mt-7 justify-center md:justify-start">
                            <div className="flex">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your Email"
                                    className="border-2 border-blue-500 placeholder-[black] rounded-full px-4 py-3 focus:outline-none w-44 md:w-full"
                                />
                                <button
                                    onClick={handleSubscribe}
                                    className="ml-3 bg-[#417DFF] text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
                                >
                                    Subscribe
                                </button>
                            </div>
                            {emailError && (
                                <span className="text-red-500 text-sm mt-2">{emailError}</span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Row 2: Company | Legal | Connect */}
                <div className={"flex lg:scale-125 justify-end  me-0 lg:me-32"}>
                    <div className=" w-full lg:w-5/12 grid grid-cols-2 px-4 md:grid-cols-3 gap-8 lg:gap-0 mt-10">
                        {/* Company */}
                        <div>
                            <h4 className="font-bold text-2xl mb-2">Company</h4>
                            <ul className="space-y-1 mt-3 text-sm">
                                {[
                                    {name: "About Us", path: "/about"},
                                    {name: "Plans", path: "/plans"},
                                    {name: "We Care", path: "/about#CARE"},
                                    {name: "Blog", path: "/blog"},
                                    {name: "FAQs", path: "/#FAQ"}
                                ].map(item => (
                                    <li key={item.name}>
                                        <Link
                                            to={item.path}
                                            className={`relative group transition duration-300 ${
                                                location.pathname === item.path ? "underline underline-offset-4" : ""
                                            }`}
                                        >
                                            {item.name}
                                            <span
                                                className="block h-[2px] w-0 bg-[#1e88e5] transition-all duration-300 group-hover:w-full"></span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h4 className="font-bold text-2xl mb-2">Legal</h4>
                            <ul className=" mt-3 text-sm">
                                {[
                                    {name: "Privacy Policy", path: "/privacy"},
                                    {name: "Terms of Services", path: "/terms"}
                                ].map(item => (
                                    <li key={item.name}>
                                        <Link
                                            to={item.path}
                                            className="relative group transition duration-300"
                                        >
                                            {item.name}
                                            <span
                                                className="block h-[2px] w-0 bg-[#1e88e5] transition-all duration-300 group-hover:w-full"></span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Connect */}
                        <div className={"col-span-2 md:col-span-1 "}>
                            <h4 className="font-bold text-2xl mb-2">Connect</h4>
                            <a
                                href="mailto:contact@pitchleapp.com"
                                className="text-md mt-3 mb-2 hover:underline"
                            >
                                contact@pitchleapp.com
                            </a>
                            <div className="flex mt-4 space-x-1">
                                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                    <div
                                        className="bg-[#01BF74] w-10 h-10 flex items-center justify-center rounded-full">
                                        <FaLinkedin size={22} className="text-white"/>
                                    </div>
                                </a>
                                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                                    <div
                                        className="bg-[#01BF74] w-10 h-10 flex items-center justify-center rounded-full">
                                        <FaYoutube size={22} className="text-white"/>
                                    </div>
                                </a>
                                <a href="https://apps.apple.com/us/app/pitchle/id6677026938" target="_blank"
                                   rel="noopener noreferrer">
                                    <div
                                        className="bg-[#01BF74] w-10 h-10 flex items-center justify-center rounded-full">
                                        <FaApple size={22} className="text-white"/>
                                    </div>
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=com.pitchle.pitchleApp"
                                   target="_blank" rel="noopener noreferrer">
                                    <div
                                        className="bg-[#01BF74] w-10 h-10 flex items-center justify-center rounded-full">
                                        <FaGooglePlay size={22} className="text-white"/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Copyright */}
                <div className="mt-10 lg:mt-24 text-center lg:text-lg text-sm">
                    © 2025 Pitchle. All rights reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;
