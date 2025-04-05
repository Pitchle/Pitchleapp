import React from 'react';
import {SiTicktick} from "react-icons/si";
import Navbar from "../components/Navbar";

const AboutPage = () => {
    return (<>
            <Navbar/>

            <div className="px-2 py-10">
                <div id="features" className="mx-auto w-11/12 lg:w-6/12">
                    <h2 className="font-display text-center lg:text-start text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                        About Us
                    </h2>
                    <h2 className="text-center font-display text-xl lg:text-justify my-4 tracking-tight text-slate-900 md:text-xl">
                        Nowadays, social media have taken on a primarily entertainment role
                        and have left a void in the business sector. There is a need for a platform
                        that
                        address business opportunities with a sophisticated and
                        contemporary touch.

                        <br/><br/>
                        This is how <span translate="no"> Pitchle</span> was born out of a need in the business world to
                        develop a unique and innovative social media platform that allows users
                        to post their business ideas through virtual pitches, facilitating the search
                        for partners and investors, buying or transferring businesses, and
                        promoting products.
                    </h2>
                </div>
                <div id="features" className="mx-auto my-20 w-full lg:w-8/12">
                    <div className={"flex flex-col lg:flex-row justify-evenly my-10 space-y-10 lg:space-y-0 items-center space-x-0 lg:space-x-10"}>
                        <div className={"w-full text-center lg:text-start lg:w-6/12"}> <h3 className={"text-4xl italic"}>
                            “ Empowering Connections, Driving Success “
                        </h3> </div>
                        <div className={"w-full lg:w-6/12 rounded-md "}>
                            <img src="/img/logo/about-2.png" className={"rounded-md object-cover w-[40rem] h-[15rem] lg:h-[20rem]"} alt="about"/>
                        </div>
                    </div>
                </div>
                <div id="features" className="mx-auto w-11/12 lg:w-6/12 my-20">
                    <h2 className="font-display text-center lg:text-start text-3xl font-bold tracking-tight text-slate-900 md:text-3xl">
                        Fully business-oriented App
                    </h2>
                    <h2 className="text-center font-display text-xl  lg:text-justify mb-4 tracking-tight text-slate-900 md:text-xl">
                        Defining a pioneering app for business opportunities.
                    </h2>
                    <h2 className="font-display text-center lg:text-start text-3xl font-bold tracking-tight text-slate-900 md:text-3xl">
                        Innovative Social Media App
                    </h2>
                    <h2 className="text-center font-display text-xl lg:text-justify mb-4 tracking-tight text-slate-900 md:text-xl">
                        Unique application in its kind.
                    </h2>
                    <h2 className="font-display text-center lg:text-start text-3xl font-bold tracking-tight text-slate-900 md:text-3xl">
                        User-Friendly App
                    </h2>
                    <h2 className="text-center font-display text-xl lg:text-justify mb-4 tracking-tight text-slate-900 md:text-xl">
                        <div className="flex items-start mb-2"> {/* Flex container for the first line */}
                            <SiTicktick className="text-blue-700 w-5 md:w-10 "/> {/* Icon with margin-right and slight top margin */}
                            <span className="leading-tight ms-[4.3px] md:ms-[2px]"> {/* Adjusted line height for better spacing */}The app is designed to be simple and easy to use.
        </span>
                        </div>

                        <div className="flex items-start"> {/* Flex container for the second line */}
                            <SiTicktick className="text-blue-700 ms-0 md:ms-1.5 w-12 md:w-10 mt-1"/> {/* Icon with margin-right and slight top margin */}
                            <span className="leading-tight md:ms-2 "> {/* Adjusted line height for better spacing */}The app includes additional features and employs artificial intelligence to automate tasks and enhance content.
        </span>
                        </div>
                    </h2>

                    <h2 className="font-display text-center lg:text-start text-3xl font-bold tracking-tight text-slate-900 md:text-3xl">
                        First-hand connections
                    </h2>
                    <h2 className="text-center font-display text-xl text-center lg:text-justify mb-4 tracking-tight text-slate-900 md:text-xl">
                        <span translate="no"> Pitchle </span> makes it easy to find partners and investors,
                        enabling seamless business acquisitions and transfers,
                        along with effective product promotion.</h2>
                </div>

                <div className={"flex flex-col lg:flex-row justify-evenly items-center lg:space-x-10"}>
                    <div className={"w-full flex justify-evenly py-8 lg:w-6/12"}>
                        <>
                            <div className="max-w-2xl ms-5 lg:ms-96 mx-4 ">
                                <div
                                    className="mx-auto w-44 h-44 relative -mt-2 border-4 border-white rounded-full overflow-hidden">
                                    <img
                                        className="object-cover object-fit h-52"
                                        src="/img/new_images/profile.png"
                                        alt="Woman looking front"
                                    />
                                </div>
                                <div className="text-center mt-2">
                                    <h2 className="font-semibold"><span translate="no">Jhon Pillpe</span></h2>
                                    <p className="text-gray-500">Founder</p>
                                </div>
                            </div>
                        </>

                    </div>
                    <div id="features" className="mx-auto w-11/12 lg:w-8/12">
                        <h2 className="font-display text-center lg:text-start text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                            Our Mission
                        </h2>
                        <h2 className="text-center font-display text-xl text-center lg:text-justify mb-4 tracking-tight text-slate-900 md:text-xl">
                            At <span translate="no">Pitchle</span>, your success is our mission.
                        </h2>
                        <h2 className="font-display text-center lg:text-start text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                            Our Vision
                        </h2>
                        <h2 className="text-center font-display text-xl text-center lg:text-justify mb-4 tracking-tight text-slate-900 md:text-xl">
                            A business starts with an idea. An idea
                            thrives through execution.   <br/> <br/>
                            <span translate="no">Pitchle</span> aims to be the most important
                            business platform in the world <br/> regardless
                            of its size, sector or geographic location.
                        </h2>
                        <h2 className="font-display text-center lg:text-start text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                          Values
                        </h2>
                        <h2 className="text-center font-display text-xl text-center lg:text-justify mb-4 tracking-tight text-slate-900 md:text-xl">
                            Innovation, Collaboration, Diversity, Respect.
                        </h2>
                    </div>
                </div>

            </div>

        </>);
};

export default AboutPage;
