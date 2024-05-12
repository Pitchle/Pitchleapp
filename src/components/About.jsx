import React from 'react';

const About = () => {
    return (
        <>
            <div className={"flex mt-10 justify-center py-16"}>
                <div className={"lg:w-10/12 w-11/12 flex-col lg:flex-row flex text-white justify-evenly lg:px-20 px-4 py-16 lg:py-32 rounded-2xl bg-[#c62828]"}>
                    <div className={"lg:w-7/12 w-full "}>
                        <h3 className={"text-4xl font-bold"}> Pitchle</h3>
                        <p className={"text-md mt-10 font-bold"}> Whether you're an entrepreneur with a groundbreaking idea, a startup seeking funding, or a business owner looking to expand through strategic partnerships, Pitchle provides the ideal environment to make your vision a reality. Our platform is also ideal for individuals interested in selling or transferring their businesses, connecting them with potential buyers or successors.</p>
                    </div>
                    <div className={"lg:w-4/12 w-11/12 mt-8 lg:mt-0 bg-[#450073] rounded-xl flex justify-center items-center text-center"}>
                        <p className={"my-auto "}>A unique and innovate social media that facilitates connections through short video pitches of 30 seconds or up to 60 seconds.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;