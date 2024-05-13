

import React from 'react';

const About = () => {
    return (
        <>

            <div className={"lg:mt-60 mt-28 md:mt-36 mb-32"}>
                <h3 className={"text-center mb-10 text-[#450073] text-3xl md:text-4xl lg:text-6xl font-bold"}
                    data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-sine">About
                    Pitchle</h3>
                <div className="w-full flex justify-center flex-col  px-2 lg:px-20 lg:flex-row lg:space-x-8">
                    <div><div
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-sine"
                        className="relative scale-ani w-full h-full lg:h-48 my-8 bg-[#d5f8b4] md:my-16 flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 px-4 py-8 border-2 border-dashed border-gray-400 dark:border-gray-400 shadow-lg rounded-2xl">
    <span className="absolute text-xs font-medium top-0 left-0 rounded-br-lg rounded-tl-lg px-2 py-1 bg-primary-100 dark:bg-gray-900 dark:text-gray-300 border-gray-400 dark:border-gray-400 border-b-2 border-r-2 border-dashed ">
      Pitchle
    </span>
                            <div className="w-full sm:w-auto flex flex-col items-center sm:items-start">
                                <p
                                    className="font-display mb-2 text-2xl font-semibold text-[#450073]"
                                    itemProp="author"
                                >
                                    Pitchle
                                </p>
                                <div className="mb-4 md:text-lg text-[#450073]">
                                    <p>
                                        A unique and innovate social media that facilitates connections through short video
                                        pitches of 30 seconds or up to 60 seconds.
                                    </p>
                                </div>
                            </div>
                            <img className={"v-animation hidden md:block scale-ani"} src="/img/logo/top-arrow.png" alt=""/>
                        </div>
                    </div>
                    <div
                        data-aos="fade-down"
                        data-aos-offset="300"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-sine"
                        className="relative scale-ani w-full h-full lg:h-80 flex justify-center items-center text-justify my-8 bg-[#f5d2f0] md:my-16 flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 px-4 py-8 border-2 border-dashed border-gray-400 dark:border-gray-400 shadow-lg rounded-2xl">
    <span className="absolute text-xs font-medium top-0 left-0 rounded-br-lg rounded-tl-lg px-2 py-1 bg-primary-100 dark:bg-gray-900 dark:text-gray-300 border-gray-400 dark:border-gray-400 border-b-2 border-r-2 border-dashed ">
      Detail
    </span>
                        <div className="w-full sm:w-auto flex flex-col items-center sm:items-start">
                            <div className="mb-4 md:text-lg text-[#450073]">
                                <p className={"text-xl text-center text-justify  px-4"}>
                                    Whether you're an entrepreneur with a groundbreaking idea, a startup seeking
                                    funding, or a business owner looking to expand through strategic partnerships,
                                    Pitchle provides the ideal environment to make your vision a reality. Our platform
                                    is also ideal for individuals interested in selling or transferring their
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