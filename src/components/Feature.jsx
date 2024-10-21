import React from 'react';

const Feature = () => {
    return (
        <>
            <div className="max-w-4xl mx-auto px-5 mt-16">
                <div className="text-center">
                    <h2 className="font-semibold text-3xl">Key Features and Benefits</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-10 mt-10">
                    <div className="flex gap-4 items-start" data-aos="fade-right" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-sine">
                        <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
                            <svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                                <path d="..." fill="currentColor" />
                            </svg>
                        </span>
                        <div>
                            <h3 className="font-semibold text-xl">Video Pitches</h3>
                            <p className="mt-1 text-black">
                                Post your ideas, business offers, and product promotions through attractive 30-second (free) or 60-second (paid) videos.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start" data-aos="fade-right" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-sine">
                        <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
                            <svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                                <path d="..." fill="currentColor" />
                            </svg>
                        </span>
                        <div>
                            <h3 className="font-semibold text-xl">AI Integration</h3>
                            <p className="mt-1 text-black">
                                Pitchle uses AI to automate tasks efficiently, saving you time and effort.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start" data-aos="fade-right" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-sine">
                        <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
                            <svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                                <path d="..." fill="currentColor" />
                            </svg>
                        </span>
                        <div>
                            <h3 className="font-semibold text-xl">Customer Support</h3>
                            <p className="mt-1 text-black">
                                Enjoy dedicated customer support to assist you every step of the way.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start" data-aos="fade-right" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-sine">
                        <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
                            <svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                                <path d="..." fill="currentColor" />
                            </svg>
                        </span>
                        <div>
                            <h3 className="font-semibold text-xl">Privacy & Security</h3>
                            <p className="mt-1 text-black">
                                Manage your privacy settings to control who can view your profile and pitches.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start" data-aos="fade-right" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-sine">
                        <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
                            <svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                                <path d="..." fill="currentColor" />
                            </svg>
                        </span>
                        <div>
                            <h3 className="font-semibold text-xl">Subscription Plans</h3>
                            <p className="mt-1 text-black">
                                Choose flexible subscription plans to unlock premium features like access to other users' profiles, direct messaging, and enhanced visibility.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Feature;
