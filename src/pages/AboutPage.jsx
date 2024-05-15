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
                <div id="features" className="mx-auto my-20 w-full lg:w-8/12">
                    <div className={"flex flex-col lg:flex-row justify-evenly my-10 items-center space-y-10 lg:space-y-0 items-center space-x-0 lg:space-x-10"}>
                        <div className={"w-full text-center lg:text-start lg:w-6/12"}> <h3 className={"text-4xl italic"}>
                            “ Empowering Connections, Driving Success “
                        </h3> </div>
                        <div className={"w-full lg:w-6/12 rounded-md "}>
                            <img src="/img/logo/about-2.png" className={"rounded-md object-cover w-[40rem] h-[15rem] lg:h-[20rem]"} alt="about"/>
                        </div>
                    </div>
                </div>
                <div id="features" className="mx-auto w-11/12 lg:w-6/12 my-20">
                    <h2 className="font-display text-center lg:text-start text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                        Fully business-oriented App
                    </h2>
                    <h2 className="text-center font-display text-xl text-center lg:text-justify mb-4 tracking-tight text-slate-900 md:text-xl">
                        Defining a pioneering app for business opportunities.
                    </h2>
                    <h2 className="font-display text-center lg:text-start text-3xl font-bold tracking-tight text-slate-900 md:text-3xl">
                        Innovative Social Media App
                    </h2>
                    <h2 className="text-center font-display text-xl text-center lg:text-justify mb-4 tracking-tight text-slate-900 md:text-xl">
                        Unique application in its kind.
                    </h2>
                    <h2 className="font-display text-center lg:text-start text-3xl font-bold tracking-tight text-slate-900 md:text-3xl">
                        User-Friendly App
                    </h2>
                    <h2 className="text-center font-display text-xl text-center lg:text-justify mb-4 tracking-tight text-slate-900 md:text-xl">
                        * Creating and sharing easy
                        professional pitches. <br/>
                        * Some tools you will easily use are: Visual timer,
                        watermark, app messaging, template for pitches,
                        music background, changing location, pitches
                        categorized by sectors and location.
                    </h2>
                    <h2 className="font-display text-center lg:text-start text-3xl font-bold tracking-tight text-slate-900 md:text-3xl">
                        First-hand connections
                    </h2>
                    <h2 className="text-center font-display text-xl text-center lg:text-justify mb-4 tracking-tight text-slate-900 md:text-xl">
                        Facilitates connections between idea people, existing business and partners, investors, future buyers or successors.
                    </h2>
                </div>

                <div className={"flex flex-col lg:flex-row justify-evenly items-center lg:space-x-10"}>
                    <div className={"w-full flex justify-evenly py-8 lg:w-6/12"}>
                        <>
                            <div className="max-w-2xl ms-5 lg:ms-40 mx-4 ">
                                <div className="mx-auto w-44 h-44s relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                                    <img
                                        className="object-cover object-center h-40"
                                        src="/img/logo/admin.jpg"
                                        alt="Woman looking front"
                                    />
                                </div>
                                <div className="text-center mt-2">
                                    <h2 className="font-semibold">Jhon Pillpe</h2>
                                    <p className="text-gray-500">CEO & Founder</p>
                                </div>
                            </div>
                        </>

                    </div>
                    <div id="features" className="mx-auto w-11/12 lg:w-8/12">
                        <h2 className="font-display text-center lg:text-start text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                            Our Mission
                        </h2>
                        <h2 className="text-center font-display text-xl text-center lg:text-justify mb-4 tracking-tight text-slate-900 md:text-xl">
                            At Pitchle, your success is our mission.
                        </h2>
                        <h2 className="font-display text-center lg:text-start text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                            Our Vision
                        </h2>
                        <h2 className="text-center font-display text-xl text-center lg:text-justify mb-4 tracking-tight text-slate-900 md:text-xl">
                            A business starts from an idea. <br/>
                            Pitchle aims to be the most important business <br/> platform in the world regardless of its
                            size, sector or geographic location.
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
