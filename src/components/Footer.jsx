import React from 'react';
import {Link} from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Get the current year
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <>
            <div className={"text-white py-20 bg-[#450073]"}>
                <div className={"w-8/12 "}>
                    <div className={"w-7/12 ms-8 py-8 flex justify-center items-center space-x-1"}>
                        <img src="/img/logo/logo.png" className={"w-16 h-16"} alt="lgoo"/>
                        <h3 className={"text-3xl font-bold"}>Pitchle</h3>
                    </div>
                </div>
                <div className={"w-8/12 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-auto"}>
                    <div className={"flex flex-col space-y-4"}>
                        <h3 className={"text-2xl font-bold c-underline  cursor-pointer"}> LEGAL</h3>
                        <h3 className={"text-md font-bold c-underline  cursor-pointer"}><Link onClick={scrollToTop} to={"/terms"}> Term of
                            Services </Link></h3>
                        <h3 className={"text-md font-bold c-underline  cursor-pointer"}><Link onClick={scrollToTop} to={"/privacy"}> Privacy
                            Policy </Link></h3>
                    </div>
                    <div className={"flex flex-col  space-y-4"}>
                        <a className="relative group">
                            <div className="c-underline text-2xl font-bold cursor-pointer">COMPANY</div>
                        </a>
                        <h3 className={"text-md font-bold c-underline  cursor-pointer"}><Link onClick={scrollToTop} to={"/about"}> About
                            Us</Link></h3>
                        <h3 className={"text-md font-bold  c-underline  cursor-pointer"}><Link onClick={scrollToTop} to={"/faq"}> FAQs</Link>
                        </h3>
                    </div>
                    <div className={"flex flex-col lg:ms-20 ms-0 space-y-4"}>
                        <a className="relative group">
                            <div className="c-underline text-2xl font-bold cursor-pointer">CONTACT US</div>
                        </a>
                        <h3 className={"text-md font-bold"}> contact@pitchle.com</h3>
                        <div className={"flex w-full flex items-center space-x-1"}>
                            <a target={"_blank"} href="https://www.linkedin.com/company/pitchle?trk=blended-typeahead">
                                <img src="/img/logo/link.svg" className={"w-12 scale-ani h-12"} alt="link"/></a>
                            <a target={"_blank"} href="https://play.google.com/store/games?hl=en&gl=US&pli=1">
                                <div className={"w-10 flex justify-center items-center scale-ani h-10 rounded-full bg-[#0288d1]"}>
                                    <img src="/img/logo/playstore.png" className={"w-5 scale-ani h-5"} alt="link"/>
                                </div>
                            </a>
                            <div className={"w-10 flex justify-center items-center h-10 rounded-full bg-[#0288d1]"}>
                                <a
                                    href="https://www.apple.com/app-store/"
                                    target="_blank"
                                    className="flex scale-ani items-center justify-center w-8/12  md:w-full text-center text-white bg-[#0288d1] rounded-2xl"
                                    rel="noreferrer"
                                >
                                    <svg
                                        className="w-6"
                                        viewBox="0 0 40 45"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0)">
                                            <path
                                                d="M32.6226 23.7016C32.6026 20.0267 34.2591 17.253 37.6118 15.2103C35.7359 12.5167 32.902 11.0347 29.1601 10.7443C25.6177 10.464 21.7461 12.8171 20.3292 12.8171C18.8324 12.8171 15.3998 10.8445 12.7057 10.8445C7.13769 10.9346 1.22048 15.3004 1.22048 24.1822C1.22048 26.8057 1.69945 29.516 2.65738 32.3131C3.93461 35.988 8.54465 45 13.3542 44.8498C15.8688 44.7897 17.645 43.0574 20.9179 43.0574C24.091 43.0574 25.7375 44.8498 28.5414 44.8498C33.3909 44.7797 37.5619 36.5888 38.7793 32.9039C32.2733 29.8298 32.6226 23.8919 32.6226 23.7016ZM26.9748 7.25968C29.6989 4.01535 29.4494 1.06142 29.3696 0C26.9648 0.140187 24.1808 1.64219 22.5943 3.49466C20.848 5.4773 19.8203 7.93058 20.0398 10.6943C22.6442 10.8945 25.019 9.55274 26.9748 7.25968Z"
                                                fill="white"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <rect width={40} height={45} fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <p className={"text-center py-2"}>© {currentYear} Pitchle. All rights reserved</p>
        </>
    );
};

export default Footer;