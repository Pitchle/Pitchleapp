import React from 'react';

const About = () => {
    return (
        <>

            <div className={"lg:mt-60 mt-28 md:mt-36 bg-[#e8fed3] py-10 mb-32"} id={"about-us"}>
                <h3 className={"text-center mb-10 text-[#450073] text-3xl md:text-4xl lg:text-6xl font-bold"}>About Pitchle</h3>
                <div className="w-full flex justify-center flex-col  px-2 lg:px-20 lg:flex-row lg:space-x-8">
                        <div className="relative scale-ani w-full justify-center items-center my-8 bg-[#d5f8b4] md:my-16 flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 px-4 py-8 border-2 border-dashed border-gray-400 dark:border-gray-400 shadow-lg rounded-2xl">
                            <div className="w-ful sm:w-auto flex flex-col items-center sm:items-start">
                                <div className="mb-4 text-xl text-justify md:text-2xl lg:text-4xl text-[#450073]">
                                    <p>
                                        A unique and innovate social media that facilitates connections through short video
                                        pitches of 30 seconds or up to 60 seconds.
                                    </p>
                                </div>
                            </div>
                        </div>
                    <div className="relative scale-ani w-full h-full lg:h-80 flex justify-center items-center text-justify my-8 bg-[#f5d2f0] md:my-16 flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 px-4 py-8 border-2 border-dashed border-gray-400 dark:border-gray-400 shadow-lg rounded-2xl">
                        <div className="w-full sm:w-auto flex flex-col items-center sm:items-start">
                            <div className="mb-4 md:text-lg text-[#450073]">
                                <p className={"text-2xl text-center md:text-center "}>
                                    Whether you're an entrepreneur with a groundbreaking <br/> idea, a startup seeking
                                    funding, or a business owner <br/> looking to expand through strategic partnerships, <br/>
                                    Pitchle provides the ideal environment to make your vision a reality. <br/> <br/>Our platform
                                    is also ideal for individuals interested in <br/> selling or transferring their
                                    businesses, connecting them with potential buyers or successors.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default About;