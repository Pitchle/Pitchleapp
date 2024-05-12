import React from 'react';

const Feature = () => {
    return (
        <>
            <h3 className={"text-center text-[#450073] mt-10 mb-10 text-3xl md:text-4xl lg:text-6xl font-bold"}>Key Features
                and <br/> Benefits</h3>
            <>
                <div className={"px-4 hidden lg:block md:px-10 lg:px-20"}>
                    <div className="relative wrap overflow-hidden p-10 h-full">
                        <div
                            className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
                            style={{left: "50%"}}
                        />
                        {/* right timeline */}
                        <div className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="order-1 w-5/12"/>
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
                            </div>
                            <div className="order-1 bg-gradient-to-r from-[#e76f7d] to-[#ff9000] text-white rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-white text-xl">Video Pitches</h3>
                                <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                                    Showcase your ideas, projects, or business offerings through engaging 30-second
                                    (free) or 60-second (paid) video pitches, showcasing your ideas, projects, or
                                    investment opportunities. With customizable backgrounds available for a fee
                                    (optional), your pitch will stand out from the crowd.
                                </p>
                            </div>
                        </div>
                        {/* left timeline */}
                        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div className="order-1 w-5/12"/>
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
                            </div>
                            <div className="order-1 bg-gradient-to-r from-[#450073] to-[#7200bf] rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-white text-xl">Subscription Plans:</h3>
                                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                                    The Mobile app is FREE, but you choose from flexible subscription plans to unlock
                                    premium features including one-time use, monthly, or annual plans. Subscribers
                                    unlock exclusive features such as access to other users' profiles, direct messaging
                                    capabilities, and enhanced visibility.
                                </p>
                            </div>
                        </div>
                        {/* right timeline */}
                        <div className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="order-1 w-5/12"/>
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
                            </div>
                            <div className="order-1 bg-gradient-to-r from-[#450073] to-[#7200bf] rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-white text-xl">Privacy and Security</h3>
                                <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                                    You have full control over your privacy settings, allowing you to manage who can
                                    view your profiles and pitches.
                                </p>
                            </div>
                        </div>
                        {/* left timeline */}
                        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                            <div className="order-1 w-5/12"/>
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
                            </div>
                            <div className="order-1 bg-gradient-to-r from-[#e76f7d] to-[#ff9000] rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-white text-xl">Global Accessibility</h3>
                                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                                    Access a global network of potential partners, investors, and buyers. Pitchle app is
                                    accessible globally, facilitating connections across borders and empowering users to
                                    explore business opportunities on a global scale.
                                    Enjoy dedicated customer support to assist you every step of the way.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"px-4 md:px-10 lg:px-20 block lg:hidden"}>
                    <div className="relative wrap overflow-hidden p-10 h-full">
                        {/* Timeline items */}
                        <div className="mb-8 flex justify-between items-start w-full flex-col md:flex-row">
                            {/* Timeline item 1 */}
                            <div className="order-1 w-full md:w-5/12 mb-4 md:mb-0 md:order-none md:mr-4">
                                <div className="z-20 flex items-center bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                    <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
                                </div>
                            </div>
                            <div className="order-2 md:order-none md:w-5/12">
                                <div className="bg-gradient-to-r from-[#e76f7d] to-[#ff9000] text-white rounded-lg shadow-xl px-6 py-4">
                                    <h3 className="mb-3 font-bold text-white text-xl">Video Pitches</h3>
                                    <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                                        Showcase your ideas, projects, or business offerings through engaging 30-second
                                        (free) or 60-second (paid) video pitches, showcasing your ideas, projects, or
                                        investment opportunities. With customizable backgrounds available for a fee
                                        (optional), your pitch will stand out from the crowd.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-8 flex justify-between items-start w-full flex-col md:flex-row">
                            {/* Timeline item 2 */}
                            <div className="order-1 w-full md:w-5/12 mb-4 md:mb-0 md:order-none md:mr-4">
                                <div className="z-20 flex items-center bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                    <h1 className="mx-auto font-semibold text-lg text-white">2</h1>
                                </div>
                            </div>
                            <div className="order-2 md:order-none md:w-5/12">
                                <div className="bg-gradient-to-r from-[#450073] to-[#7200bf] text-white rounded-lg shadow-xl px-6 py-4">
                                    <h3 className="mb-3 font-bold text-white text-xl">Subscription Plans:</h3>
                                    <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                                        The Mobile app is FREE, but you choose from flexible subscription plans to unlock
                                        premium features including one-time use, monthly, or annual plans. Subscribers
                                        unlock exclusive features such as access to other users' profiles, direct messaging
                                        capabilities, and enhanced visibility.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-8 flex justify-between items-start w-full flex-col md:flex-row">
                            {/* Timeline item 3 */}
                            <div className="order-1 w-full md:w-5/12 mb-4 md:mb-0 md:order-none md:mr-4">
                                <div className="z-20 flex items-center bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                    <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
                                </div>
                            </div>
                            <div className="order-2 md:order-none md:w-5/12">
                                <div className="bg-gradient-to-r from-[#450073] to-[#7200bf] text-white rounded-lg shadow-xl px-6 py-4">
                                    <h3 className="mb-3 font-bold text-white text-xl">Privacy and Security</h3>
                                    <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                                        You have full control over your privacy settings, allowing you to manage who can
                                        view your profiles and pitches.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-8 flex justify-between items-start w-full flex-col md:flex-row">
                            {/* Timeline item 4 */}
                            <div className="order-1 w-full md:w-5/12 mb-4 md:mb-0 md:order-none md:mr-4">
                                <div className="z-20 flex items-center bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                    <h1 className="mx-auto font-semibold text-lg text-white">4</h1>
                                </div>
                            </div>
                            <div className="order-2 md:order-none md:w-5/12">
                                <div className="bg-gradient-to-r from-[#e76f7d] to-[#ff9000] text-white rounded-lg shadow-xl px-6 py-4">
                                    <h3 className="mb-3 font-bold text-white text-xl">Global Accessibility</h3>
                                    <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                                        Access a global network of potential partners, investors, and buyers. Pitchle app is
                                        accessible globally, facilitating connections across borders and empowering users to
                                        explore business opportunities on a global scale.
                                        Enjoy dedicated customer support to assist you every step of the way.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </>
    );
};

export default Feature;