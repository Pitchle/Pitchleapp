import React from 'react';
import { FaLinkedin, FaYoutube, FaApple, FaGooglePlay } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-10 px-4 color-[#343434] md:px-8 m-0 lg:m-2 lg:m-4 lg:px-16  rounded-xl mt-10">
            <div className="max-w-7xl mx-auto">
                {/* Row 1: Brand (left) + Newsletter (right) */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
                    {/* Brand */}
                    <div className="flex flex-col gap-3">
                        <div className={"flex justify-center items-center space-x-2"}>
                            <img
                                src="/img/logo/logo.png"
                                alt="Pitchle Logo"
                                className="w-12 h-12 rounded-full"
                            />
                            <h2 className="text-2xl font-bold">Pitchle</h2>
                        </div>
                        <div>
                            <p className="text-sm text-center">
                                The Social Network for Business & Commerce
                            </p>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="w-full lg:w-2/5">
                        <h3 className="text-2xl text-center lato-font lg:text-start font-bold mb-2">
                            Stay Updated with Our Latest News &amp; Offers!
                        </h3>
                        <p className=" sub-lato mt-3 text-center lg:text-start  mb-4">
                            Subscribe to our newsletter for exclusive updates, business tips,
                            and special offers.
                        </p>
                        <div className="flex mt-7  justify-center">
                            <input
                                type="email"
                                placeholder="Enter your Email"
                                className=" border sub-lato w-44 lg:w-full border-blue-500 placeholder-[#7A7A7A] rounded-full px-2 lg:px-4 py-3 focus:outline-none"
                            />
                            <button className="ml-3 bg-[#417DFF] text-white px-4 lg:px-6 py-2 rounded-full hover:bg-blue-600 transition">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Row 2: Company | Legal | Connect */}
                <div className={"flex justify-end"}>
                    <div className=" w-full lg:w-2/5  grid grid-cols-1 md:grid-cols-1 gap-0 mt-10">
                        <div className={"flex flex-col lg:flex-row justify-between w-full"}>
                            <div className={"flex w-full px-4 lg:px-0 lg:w-7/12 flex-row justify-between"}>
                                <div>
                                    <h4 className="font-bold text-2xl color-[#343434] mb-2">Company</h4>
                                    <ul className="space-y-1 mt-3 text-sm">
                                        <li>About Us</li>
                                        <li>Plans</li>
                                        <li>We Care</li>
                                        <li>Blog</li>
                                        <li>FAQs</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-2xl color-[#343434] mb-2">Legal</h4>
                                    <ul className="space-y-1 mt-3 text-sm">
                                        <li>Privacy Policy</li>
                                        <li>Terms of Services</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={"mt-6 ms-3 lg:ms-0 w-7/12 lg:w-4/12 lg:mt-0"}>
                                <h4 className="font-bold text-2xl color-[#343434] mb-2">Connect</h4>
                                <p className="text-md mt-3 mb-2">contact@pitchleapp.com</p>
                                <div className="flex mt-4 space-x-1">
                                    {/* Social icons in green circles with white icons */}
                                    <div
                                        className="bg-green-600 w-10 h-10 flex items-center justify-center rounded-full">
                                        <FaLinkedin size={16} className="text-white"/>
                                    </div>
                                    <div
                                        className="bg-green-600 w-10 h-10 flex items-center justify-center rounded-full">
                                        <FaYoutube size={16} className="text-white"/>
                                    </div>
                                    <div
                                        className="bg-green-600 w-10 h-10 flex items-center justify-center rounded-full">
                                        <FaApple size={16} className="text-white"/>
                                    </div>
                                    <div
                                        className="bg-green-600 w-10 h-10 flex items-center justify-center rounded-full">
                                        <FaGooglePlay size={16} className="text-white"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Bottom line: Copyright */}
                <div className="mt-28 text-center text-sm ">
                    © 2025 Pitchle. All rights reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;
