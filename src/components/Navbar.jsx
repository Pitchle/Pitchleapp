import React, { useState } from 'react';

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <>
            <div className={"w-full sticky top-0 z-30 flex justify-center items-center text-white"}>
                <div className={"w-11/12 my-2 bg-[#450073] grid grid-cols-3 px-8 py-2 md:py3 rounded-full"}>
                    <ul className="hidden md:flex space-x-10 items-center"> {/* Show only in desktop view */}
                        <li className="relative group">
                            <div className="c-underline text-2xl font-bold cursor-pointer">Company</div>
                            {/* Desktop view submenu */}
                            <ul className="absolute left-0 w-48 bg-white shadow-md rounded-md p-2 space-y-2 hidden group-hover:block">
                                <li className="text-black">About Us</li>
                                <li className="text-black">Our Story</li>
                                <li className="text-black">FAQs</li>
                            </ul>
                        </li>
                        <li className="c-underline text-2xl font-bold">Plans</li>
                    </ul>
                    <div className="md:hidden my-auto font-bold"> {/* Show only in mobile view */}
                        <button onClick={toggleDrawer} className="focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                        {/* Mobile view submenu */}
                        {isDrawerOpen && (
                            <ul className="absolute left-0 w-48 bg-white shadow-md rounded-md p-2 space-y-2">
                                <li className="text-black">About Us</li>
                                <li className="text-black">Our Story</li>
                                <li className="text-black">FAQs</li>
                            </ul>
                        )}
                    </div>
                    <div className={"text-center my-auto text-4xl -ms-4 md:ms-0 font-bold"}>Pitchle</div>
                    <div className={"flex justify-end"}><img src="/img/logo/logo.png" className={"w-12 h-12"} alt="logo"/></div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
