import React from 'react';

const Feature = () => {
    return (
        <>

            <h3 className="text-center text-[#450073] mt-10 text-3xl md:text-4xl lg:text-6xl font-bold"
                data-aos="fade-down"
                data-aos-offset="100"
                data-aos-duration="500"
                data-aos-easing="ease-in-sine"
            >Key Features and <br/> Benefits</h3>
            <div className="w-full my-16">
                <div className="lg:w-8/12 w-full mx-auto flex flex-col space-y-8 justify-center ps-1">
                    <div
                        className="w-11/12 flex flex-col md:flex-row items-center space-y-4 px-2 md:px-8 lg:px-0 justify-between">
                        <div
                            data-aos="fade-right"
                            data-aos-offset="100"
                            data-aos-duration="500"
                            data-aos-easing="ease-in-sine"
                            className="w-4/12 zoom-effect flex justify-center item-center z-10 flex-col rounded-full bg-[#3d0e6d] text-white h-56 w-56 relative group transition duration-300 ease-in-out">
                            <h3 className="w-full text-4xl font-bold my-4 text-center">Video Pitches</h3>
                            <div
                                className="absolute rounded-2xl inset-0 bg-[#3d0e6d] transition duration-500 ease-in-out h-[24rem] lg:h-[16rem] lg:w-[30rem] w-[18rem] text-white opacity-0 group-hover:opacity-100 flex justify-center items-center duration-2000 ease-in-out">
                                <p className="text-lg p-4">Showcase your ideas, projects, or business <br/> offerings through
                                    engaging 30-second (free) <br/> or 60-second (paid) video pitches, showcasing your <br/> ideas,
                                    projects, or investment opportunities. <br/> With customizable backgrounds available for a <br/>
                                    fee (optional), your pitch will stand out from the crowd.</p>
                            </div>
                        </div>
                        <div className={"dotted-line hidden lg:block"}></div>
                        <div
                            data-aos="fade-right"
                            data-aos-offset="100"
                            data-aos-duration="500"
                            data-aos-easing="ease-in-sine"
                            className="w-4/12 flex zoom-effect justify-center item-center p-4 flex-col rounded-full bg-[#3d0e6d] text-white h-64 w-64 relative group transition duration-300 ease-in-out">
                            <h3 className="w-full text-4xl font-bold  text-center my-4"> Global Accessibility</h3>
                            <div
                                className="absolute rounded-2xl inset-0 bg-[#3d0e6d] h-[20rem] lg:w-[30rem] w-[20rem]  text-white opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                                <p className="text-lg  p-4">Access a global network of potential partners, investors,
                                    and buyers. <br/> Pitchle app is accessible globally, facilitating connections across
                                    borders and empowering users to explore business opportunities on a global scale.
                                    Enjoy dedicated customer support to assist you every step of the way.</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-down"
                         data-aos-offset="100"
                         data-aos-duration="500"
                         data-aos-easing="ease-in-sine"
                         className="w-full justify-center zoom-effect items-center">
                    </div>
                    <div
                        className="w-11/12 flex justify-between zoom-effect px-2 md:px-8 lg:px-0 items-center space-y-4 flex-col md:flex-row">
                        <div
                            className="w-4/12 flex justify-center item-center flex-col text-center rounded-full bg-[#3d0e6d] text-white h-[15rem] w-[15rem] relative group transition duration-300 ease-in-out">
                            <h3 className="w-full text-4xl font-bold my-4">Customer Support</h3>
                            <div
                                className="absolute rounded-2xl inset-0 bg-[#3d0e6d] text-white opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                                <p className="text-lg  p-4">Enjoy dedicated customer support to assist you every step of
                                    the way.</p>
                            </div>
                        </div>
                        <div className={"dotted-line hidden lg:block"}></div>
                        <div
                            className="w-4/12 flex justify-center item-center zoom-effect flex-col text-center rounded-full bg-[#3d0e6d] text-white h-[15rem] w-[15rem] relative group transition duration-300 ease-in-out">
                            <h3 className="w-full text-4xl font-bold my-4">Privacy and Security</h3>
                            <div
                                className="absolute rounded-2xl inset-0 bg-[#3d0e6d] text-white opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                                <p className="text-lg  p-4">You have full control over your privacy settings, allowing
                                    you to manage who can view your profiles and pitches.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Feature;
