import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <>
            <div className={"w-full sticky top-0 z-30 flex justify-center items-center text-white"} >
                <div className={"w-11/12 my-2 bg-[#450073] grid grid-cols-3 px-8 py-2 md:py3 rounded-full"}>
                    <ul className="hidden lg:flex space-x-10 items-center"> {/* Show only in desktop view */}
                        <li className="relative group">
                            <div className="c-underline text-2xl font-bold cursor-pointer">Company</div>
                            <ul className="absolute left-[0.2] mt-1 w-48 bg-white shadow-md rounded-md p-2 space-y-2 hidden group-hover:block">
                                <li className="text-black cursor-pointer"><Link onClick={scrollToTop} to={"/about"}>About Us</Link></li>
                                <li className="text-black cursor-pointer"><Link onClick={scrollToTop} to={"/faq"}>FAQs</Link></li>
                            </ul>
                        </li>
                        <li className="c-underline text-2xl font-bold cursor-pointer"><Link onClick={scrollToTop} to={"/plans"}>Plans</Link></li>
                    </ul>
                    <div className="lg:hidden my-auto font-bold"> {/* Show only in mobile view */}
                        <button onClick={toggleDrawer} className="focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                        {/* Mobile view submenu */}
                        {isDrawerOpen && (
                            <ul className="absolute left-0 w-48 bg-white shadow-md rounded-md p-2 space-y-2">
                                <li className="text-black cursor-pointer"><Link onClick={scrollToTop} to={"/plans"}>Plans</Link></li>
                                <li className="text-black cursor-pointer"><Link onClick={scrollToTop} to={"/about"}>About Us</Link></li>
                                <li className="text-black cursor-pointer"><Link onClick={scrollToTop} to={"/faq"}>FAQs</Link></li>
                            </ul>
                        )}
                    </div>
                    <div className={"text-center my-auto text-4xl md:text-5xl -ms-4 md:ms-0 font-bold cursor-pointer"}> <Link onClick={scrollToTop} to={"/"}> Pitchle </Link></div>
                    <div className={"flex justify-end"}><img src="/img/logo/logo.png" className={"md:w-16 rotate-image md:h-16 h-12 w-12"} alt="logo"/></div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
