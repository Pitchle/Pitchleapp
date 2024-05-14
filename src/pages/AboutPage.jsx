import React from 'react';
import NavbarBar from "../components/NavbarBar";

const AboutPage = () => {
    return (<>
            <NavbarBar/>

            <div className="px-2 py-10">
                <div id="features" className="mx-auto w-11/12 lg:w-6/12">
                    <h2 className="font-display text-center lg:text-start text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                        About Us
                    </h2>
                    <h2 className="text-center font-display text-xl text-center lg:text-justify my-4 tracking-tight text-slate-900 md:text-xl">
                        Nowadays, social media have taken on a primarily entertainment role and have
                        left a void in the business sector. There is a need for a platform that address
                        business opportunities with a sophisticated and contemporary touch.
                        <br/><br/>
                        This is how Pitchle was born out of a need in the business world in order to
                        develop a unique an innovate social media that allows users to post their
                        business ideas through virtual elevator pitches and connect with potential
                        investors, future partners, buyers or successors.
                    </h2>
                </div>
                <div className={"border-2 w-11/12 lg:w-7/12 mx-auto rounded-md border-gray-300 my-24 shadow-md"}>
                    <img src="/img/logo/about.png" className={"rounded-md h-[13rem] lg:h-full"} alt="about"/>
                </div>
                <div id="features" className="mx-auto my-20 w-full lg:w-8/12">
                    <div className={"flex flex-col lg:flex-row justify-evenly my-10 items-center space-y-10 lg:space-y-0 items-center space-x-0 lg:space-x-10"}>
                        <div className={"w-full text-center lg:text-start lg:w-6/12"}> <h3 className={"text-4xl italic"}>
                            “ Empowering Connections, Driving Success “
                        </h3> </div>
                        <div className={"w-full lg:w-6/12 border-2 rounded-md border-gray-300  shadow-md"}>
                            <img src="/img/logo/about-2.png" className={"rounded-md object-cover w-[40rem] h-[15rem] lg:h-[20rem]"} alt="about"/>
                        </div>
                    </div>
                    <div className={"flex flex-col lg:flex-row justify-evenly mt-28 items-center space-y-10 space-x-0 lg:space-y-0 lg:space-x-10"}>
                        <div className={"w-full lg:w-6/12 border-2 rounded-md border-gray-300 p-8 shadow-md"}>
                            <p className={" tracking-wide text-md  text-justify"}>
                                Welcome to Pitchle, where opportunities in the
                                business world come to life. Pitchle is more than
                                just an app; it's a dynamic platform meticulously
                                crafted for individuals and businesses alike,
                                connecting dreamers, innovators, partners and
                                investors worldwide. <br/><br/>

                                Pitchle facilitates the sharing of business ideas
                                and opportunities.
                            </p>
                        </div>
                        <div className={"w-full lg:w-6/12 border-2 rounded-md border-gray-300 p-8 shadow-md"}>
                            <p className={" tracking-wide text-md"}>
                               <li><span className={"text-md font-bold me-4"}>Fully business-oriented App:</span>
                                   Defining a pioneering
                                   app for business opportunities.
                               </li>
                                <li><span className={"text-md font-bold me-4"}>User-Friendly App: </span>
                                    Creating and sharing easy
                                    professional pitches.
                                    • Some tools you will easily use are: Visual timer,
                                    watermark, app messaging, template for pitches,
                                    music background, changing location, pitches
                                    categorized by sectors and location.
                                </li>
                                <li><span className={"text-md font-bold me-4"}>Innovative Social Media App: </span>
                                    Unique application in
                                    its kind.
                                </li>
                                <li><span className={"text-md font-bold me-4"}>First-hand connections:  </span>
                                    Facilitates connections
                                    between idea people, existing business and partners,
                                    investors, future buyers or successors.
                                </li>
                            </p>
                        </div>
                    </div>
                    <div className={"flex flex-col lg:flex-row justify-evenly items-center space-x-10"}>
                        <div className={"w-full lg:w-6/12"}>
                            <div className="py-16 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-md border-2 border-gray-200 rounded-lg text-black">
                                <div className="mx-auto w-28 h-28 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                                    <img
                                        className="object-cover object-center h-32"
                                        src="/img/logo/avatar.png"
                                        alt="Woman looking front"
                                    />
                                </div>
                                <div className="text-center mt-2">
                                    <h2 className="font-semibold">Jhon Pillpe</h2>
                                    <p className="text-gray-500">CEO & Founder</p>
                                </div>
                            </div>
                        </div>
                        <div className={"w-11/12 lg:w-6/12 mt-28 "}>
                            <h2 className="font-display py-4 text-xl font-bold tracking-tight text-slate-900 md:text-3xl">
                                Our Mission
                            </h2>
                            <p className={" tracking-wide text-md text-justify"}>
                                At Pitchle, your success is our mission.
                            </p>
                            <h2 className="font-display py-4 text-xl font-bold tracking-tight text-slate-900 md:text-3xl">
                                Our Vision
                            </h2>
                            <p className={" tracking-wide text-md text-start "}>
                                A business starts from an idea. <br/>
                                Pitchle aims to be the most important business  platform in the world regardless of its
                                size, sector or geographic location.
                            </p>
                            <h2 className="font-display py-4 text-xl font-bold tracking-tight text-slate-900 md:text-3xl">
                                Values
                            </h2>
                            <p className={" tracking-wide text-md text-justify"}>
                                Innovation, Collaboration, Diversity, Respect.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>);
};

export default AboutPage;
