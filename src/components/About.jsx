import React from 'react';

const About = () => {
    return (
        <>

            <div className={"lg:mt-32 mt-28 md:mt-36 py-10 mb-32"} id={"about-us"}>
                <h3 className={"text-center mb-0 md:mb-10 text-black text-3xl md:text-4xl lg:text-6xl  font-bold"}>ABOUT <span translate="no"> PITCHLE</span>
                </h3>
                <div className="w-full flex justify-center flex-col  px-2 lg:px-20 lg:flex-row lg:space-x-8">
                    <>
                        <div className="pt-32 md:py-12 xl:container m-auto px-6 md:px-12">
                            <div aria-hidden="true"
                                 className="absolute inset-0 my-auto w-96 h-32 rotate-45 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl opacity-50 dark:opacity-20"
                            />
                            <div className="relative lg:flex lg:items-center lg:gap-12">
                                <div
                                    className="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
                                    <h1 className="text-blue-700 font-bold text-4xl md:text-6xl lg:text-5xl dark:text-white">
                                        Business Social Network{" "}
                                    </h1>
                                    <p className="mt-8 text-xl md:text-3xl">
                                        A pioneering social network focused on
                                        business, while also serving as a
                                        platform for promoting products
                                        through short 30 or 60-second videos.
                                    </p>
                                </div>
                                <div className="overflow-hidden mt-5 md:mt-0 w-full lg:w-3/12">
                                    <img
                                        src="/img/about/Business%20Social%20Network.png"
                                        alt="project illustration"
                                        height=""
                                        width=""
                                    />
                                </div>
                            </div>
                        </div>
                    </>

                </div>
                <div className="w-full flex justify-center flex-col  px-2 lg:px-20 lg:flex-row lg:space-x-8">
                    <>
                        <div className="pt-32 md:py-12 xl:container m-auto px-6 md:px-12">
                            <div aria-hidden="true"
                                 className="absolute inset-0 my-auto w-96 h-32 rotate-45 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl opacity-50 dark:opacity-20"
                            />
                            <div className="relative lg:flex lg:items-center lg:gap-12">
                                <div className="overflow-hidden mb-5 md:mb-0 w-full lg:w-4/12">
                                    <img
                                        src="/img/about/Connecting%20and%20Promoting.png"
                                        alt="project illustration"
                                        height=""
                                        width=""
                                    />
                                </div>

                                <div
                                    className="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-7/12">
                                    <h1 className="text-blue-700 font-bold text-4xl md:text-6xl lg:text-5xl">
                                        Connecting and Promoting
                                    </h1>
                                    <p className="mt-8 text-xl md:text-3xl">
                                        <span translate="no"> Pitchle</span> facilitates finding partners,
                                        investors,
                                        buying or transferring businesses, and
                                        promo ng products with a sophisticated and
                                        <br/>contemporary touch.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>

                </div>

            </div>
        </>
    );
};

export default About;