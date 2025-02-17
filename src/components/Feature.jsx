import React from 'react';

const Feature = () => {
    return (
        <>
            <h3 className="text-center text-[#450073] mt-10 text-3xl md:text-4xl lg:text-6xl font-bold"
                data-aos="fade-down"
                data-aos-offset="100"
                data-aos-duration="500"
                data-aos-easing="ease-in-sine">Key Features and <br/> Benefits</h3>
            <div className="w-full my-16">
                <div className="lg:w-8/12 w-full mx-auto flex flex-col space-y-8 justify-center ps-1">
                    <div className="w-11/12 flex flex-col md:flex-row space-x-5 lg:space-x-72  px-2 md:px-8 lg:px-0 justify-center">
                        <div
                            data-aos="fade-right"
                            data-aos-offset="100"
                            data-aos-duration="500"
                            data-aos-easing="ease-in-sine"
                            className="w-4/12 zoom-effect flex z-30 ms-24 lg:ms-32 justify-center item-center z-10 flex-col rounded-full bg-[#3d0e6d] text-white h-40 w-40 lg:h-56 lg:w-56 relative group transition duration-300 ease-in-out">
                            <h3 className="w-full text-xl lg:text-4xl font-bold my-4 text-center">Video Pitches</h3>
                            <div className="absolute rounded-2xl inset-0 bg-[#3d0e6d] transition duration-500 ease-in-out h-[24rem] lg:h-[16rem] lg:w-[30rem] w-[18rem] text-white opacity-0 group-hover:opacity-100 flex justify-center items-center duration-2000 ease-in-out">
                                <p className="text-lg p-4 text-center tracking-wide">Showcase your ideas, projects, or business <br/> offerings
                                    through
                                    engaging 30-second (free) <br/> or 60-second (paid) video pitches, showcasing
                                    your ideas,
                                    projects, or investment opportunities. <br/> <br/> With customizable backgrounds available
                                    for a <br/>
                                    fee (optional), your pitch will stand out from the crowd.</p>
                            </div>
                        </div>
                        <div
                            data-aos="fade-right"
                            data-aos-offset="100"
                            data-aos-duration="500"
                            data-aos-easing="ease-in-sine"
                            className="w-4/12 flex zoom-effect justify-center z-20 item-center p-4 flex-col rounded-full bg-[#3d0e6d] text-white w-40 h-40 lg:h-64 lg:w-64 relative group transition duration-300 ease-in-out">
                            <h3 className="w-full text-xl lg:text-4xl font-bold  text-center my-4"> Global Accessibility</h3>
                            <div
                                className="absolute rounded-2xl inset-0 bg-[#3d0e6d] h-[15rem] lg:w-[28rem] w-[22rem]  text-white opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                                <p className="text-lg p-4 text-center tracking-wide">Access a global network of potential partners, investors,
                                    and buyers. <br/> <br/> Pitchle app is accessible globally, facilitating connections
                                    across
                                    borders and empowering users to explore business opportunities on a global scale.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-down"
                         data-aos-offset="100"
                         data-aos-duration="500"
                         data-aos-easing="ease-in-sine"
                         className="w-full justify-center zoom-effect">
                    </div>
                    <div className="w-fullS flex justify-between my-10 zoom-effect px-2 md:px-8 lg:px-0 flex-col md:flex-row">
                        <div className="w-4/12 flex -mt-16 lg:-mt-20 ms-44 lg:-ms-10 justify-center item-center flex-col text-center rounded-full bg-[#3d0e6d] text-white h-40 w-40 lg:h-[15rem] lg:w-[15rem] relative group transition duration-300 ease-in-out">
                            <h3 className="w-full text-xl lg:text-4xl font-bold my-4">Customer Support</h3>
                            <div
                                className="absolute rounded-2xl inset-0 bg-[#3d0e6d] h-[12rem] lg:h-[15rem] lg:w-[15rem] w-[12rem] text-white opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                                <p className="text-lg tracking-wide p-4">Enjoy dedicated customer support to assist you every step of
                                    the way.</p>
                            </div>
                        </div>
                        <div className="w-4/12 flex justify-center ms-5 lg:ms-20 -mt-10 lg:-mt-8 item-center zoom-effect flex-col text-center rounded-full bg-[#3d0e6d] text-white w-40 h-40  lg:h-[15rem] lg:w-[15rem] relative group transition duration-300 ease-in-out">
                            <h3 className="w-full text-xl lg:text-4xl font-bold my-4">Privacy <br/> & <br/> Security</h3>
                            <div className="absolute rounded-2xl h-[10rem] lg:h-[15rem] lg:w-[15rem] w-[18rem] inset-0 bg-[#3d0e6d] text-white opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                                <p className="text-lg  p-4 tracking-wide">You have full control over your privacy settings, allowing
                                    you to manage who can view your profiles and pitches.</p>
                            </div>
                        </div>
                        <div className="w-4/12 flex justify-center ms-24 mt-0 lg:-mt-5 lg:ms-20 item-center zoom-effect flex-col text-center rounded-full bg-[#3d0e6d] text-white h-40 w-40 lg:h-[18rem] lg:w-[18rem] relative group transition duration-300 ease-in-out">
                            <h3 className="w-full text-xl lg:text-4xl font-bold my-4"> Subscription Plans </h3>
                            <div className="absolute rounded-2xl inset-0 bg-[#3d0e6d] text-white opacity-0  h-[25rem] group-hover:opacity-100 w-[17rem]  flex justify-center items-center transition-opacity duration-300">
                                <p className="text-lg tracking-wide p-4">The Mobile app is FREE, but you choose from
                                    flexible subscription plans to unlock premium
                                    features including one-time use, monthly, or
                                    annual plans. <br/> <br/>
                                    Subscribers unlock exclusive features such as
                                    access to other users' profiles, direct messaging
                                    capabilities, and enhanced visibility. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Feature;
