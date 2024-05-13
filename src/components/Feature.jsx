import React from 'react';

const Feature = () => {
    return (
        <>

            <h3 className="text-center text-[#450073] mt-10 text-3xl md:text-4xl lg:text-6xl font-bold">Key Features and <br/> Benefits</h3>
            <div className="w-full my-16">
                <div className="lg:w-8/12 w-full mx-auto flex flex-col justify-center ps-1">
                    <div className="w-11/12 flex flex-col md:flex-row items-center space-y-4 justify-between">
                        <div className="w-4/12 flex justify-center item-center z-10 flex-col text-center rounded-full bg-gradient-to-r from-[#450073] to-[#7200bf] text-white h-56 w-56 relative group transition duration-300 ease-in-out">
                            <h3 className="w-full text-4xl font-bold my-4">Video Pitches</h3>
                            <div className="absolute rounded-2xl inset-0 bg-gradient-to-r from-[#450073] to-[#7200bf] h-[20rem] w-[18rem] text-white opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                                <p className="text-lg  p-4">Showcase your ideas, projects, or business offerings through engaging 30-second (free) or 60-second (paid) video pitches, showcasing your ideas, projects, or investment opportunities. With customizable backgrounds available for a fee (optional), your pitch will stand out from the crowd.</p>
                            </div>
                        </div>
                        <div className="w-4/12 flex justify-center item-center p-4 flex-col text-center rounded-full bg-gradient-to-r from-[#7200bf] to-[#450073] text-white h-64 w-64 relative group transition duration-300 ease-in-out">
                            <h3 className="w-full text-4xl font-bold my-4"> Global Accessibility</h3>
                            <div className="absolute rounded-2xl inset-0 bg-gradient-to-r from-[#450073] to-[#7200bf] h-[20rem] w-[20rem] text-white opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                                <p className="text-lg  p-4">Access a global network of potential partners, investors, and buyers. Pitchle app is accessible globally, facilitating connections across borders and empowering users to explore business opportunities on a global scale. Enjoy dedicated customer support to assist you every step of the way.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full justify-center items-center">
                        <div className="w-4/12 flex mx-auto justify-center item-center flex-col text-center rounded-full text-white h-[15rem] w-[15rem]">
                            <img src="/img/logo/logo.png" alt="logo"/>
                        </div>
                    </div>
                    <div className="w-11/12 flex justify-between items-center space-y-4 flex-col md:flex-row">
                        <div className="w-4/12 flex justify-center item-center flex-col text-center rounded-full bg-gradient-to-r from-[#450073] to-[#7200bf] text-white h-[15rem] w-[15rem] relative group transition duration-300 ease-in-out">
                            <h3 className="w-full text-4xl font-bold my-4">Customer Support</h3>
                            <div className="absolute rounded-2xl inset-0 bg-gradient-to-r from-[#450073] to-[#7200bf] text-white opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                                <p className="text-lg  p-4">Enjoy dedicated customer support to assist you every step of the way.</p>
                            </div>
                        </div>
                        <div className="w-4/12 flex justify-center item-center flex-col text-center rounded-full bg-gradient-to-r from-[#450073] to-[#7200bf] text-white h-[15rem] w-[15rem] relative group transition duration-300 ease-in-out">
                            <h3 className="w-full text-4xl font-bold my-4">Privacy and Security</h3>
                            <div className="absolute rounded-2xl inset-0 bg-gradient-to-r from-[#450073] to-[#7200bf] text-white opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                                <p className="text-lg  p-4">You have full control over your privacy settings, allowing you to manage who can view your profiles and pitches.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Feature;
