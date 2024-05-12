import React from 'react';

const About = () => {
    return (
        <>
            <div className="relative mt-64 mb-24 w-full px-4 lg:px-0 lg:w-9/12 mx-auto">
                <div className="rounded-3xl bg-gradient-to-r from-[#e76f7d] to-[#ff9000] text-white overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                        <div className="h-32 w-32">
                            <img
                                src="/img/logo/logo.png"
                                className="rounded-full object-cover h-full w-full shadow-sm"
                            />
                        </div>
                    </div>
                    <div className="px-6 my-24 ">
                        <h1 className="font-bold text-6xl my-4 text-center ">PITCHLE</h1>
                        <p className="text-white text-xl text-center">
                            A unique and innovate social media that facilitates connections through short video pitches
                            of 30 seconds or up to 60 seconds.
                        </p>
                        <p className="text-center text-md text-white text-base pt-3 font-normal">
                            Whether you're an entrepreneur with a groundbreaking idea, a startup seeking funding, or a
                            business owner looking to expand through strategic partnerships, Pitchle provides the ideal
                            environment to make your vision a reality. Our platform is also ideal for individuals
                            interested in selling or transferring their businesses, connecting them with potential
                            buyers or successors.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;