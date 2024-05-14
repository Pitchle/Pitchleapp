import React from 'react';

const Story = () => {
    return (
        <>
            <div className="bg-gray-100 banner-bg">
                <div className="container mx-auto py-8">
                    <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                        <div className="col-span-4 sm:col-span-3">
                            <div className="bg-[#d5f8b4] shadow rounded-lg p-6">
                                <div className="flex flex-col items-center">
                                    <img
                                        src="/img/logo/avatar.png"
                                        className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                                    />
                                    <h1 className="text-3xl font-bold">John Pillpe</h1>
                                    <p className="text-gray-700 text-xl">Founder & CEO</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 sm:col-span-9">
                            <div className="bg-[#f5d2f0] text-xl shadow rounded-lg p-6 ">
                                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                                <p className="text-gray-700">
                                    Nowadays, social media have taken on a primarily entertainment role and have left a void in the business sector. There is a need for a platform that address business opportunities with a sophisticated and contemporary touch. This is how Pitchle was born out of a need in the business world in order to develop a unique and innovate social media that allows users to post their business ideas through virtual elevator pitches and connect with potential investors, future partners, buyers or successors.
                                </p>
                                <h3 className="font-semibold text-center mt-6 mb-2">Empowering Connections, Driving Success</h3>
                                <p className="text-gray-700">
                                    Welcome to Pitchle, where opportunities in the business world come to life. Pitchle is more than just an app; it's a dynamic platform meticulously crafted for individuals and businesses alike, connecting dreamers, innovators, partners and investors worldwide. Pitchle facilitates the sharing of business ideas and opportunities.
                                </p>
                                <h3 className="font-semibold text-center mt-6 mb-2">Here's what sets us apart:</h3>
                                <ul className="list-disc pl-6 mt-4">
                                    <li><span className={"font-bold"}>Fully business-oriented App</span>: Defining a pioneering app for business opportunities.</li>
                                    <li><span className={"font-bold"}>User-Friendly App</span>: Creating and sharing easy professional pitches. Some tools you will easily use are: Visual timer, watermark, app messaging, template for pitches, music background, changing location, pitches categorized by sectors and location.</li>
                                    <li><span className={"font-bold"}>Innovative Social Media App:</span> Unique application in its kind.</li>
                                    <li><span className={"font-bold"}>First-hand connections:</span> Facilitates connections between idea people, existing business and partners, investors, future buyers or successors.</li>
                                </ul>
                                <h2 className="text-xl font-bold mt-6">Our Mission:</h2>
                                <p className="text-gray-700">
                                    At Pitchle, your success is our mission.
                                </p>
                                <h2 className="text-xl font-bold mt-6">Our Vision:</h2>
                                <p className="text-gray-700">
                                    A business starts from an idea. Pitchle aims to be the most important business platform in the world regardless of its size, sector or geographic location.
                                </p>
                                <h2 className="text-xl font-bold mt-6">Values:</h2>
                                <ul className="list-disc pl-6 mt-4">
                                    <li>Innovation</li>
                                    <li>Collaboration</li>
                                    <li>Diversity</li>
                                    <li>Respect</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Story;