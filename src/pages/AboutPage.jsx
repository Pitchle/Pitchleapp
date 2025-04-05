import React from 'react';
import { CheckCircleIcon, UsersIcon, SparklesIcon } from '@heroicons/react/24/solid';
import Feature from "../components/Feature";

const AboutPage = () => {

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-40">
            <section className="flex flex-col mx-auto lg:flex-row items-center mt-16 justify-between">
                <div className="lg:w-1/2 space-y-4">
                    <h1 className="text-4xl lg:text-8xl text-center lg:text-start font-bold text-[#417DFF]">About Company</h1>
                    <p className=" text-lg lg:text-xl text-center lg:text-start">
                        At Pitchle, we empower small businesses to thrive through short, impactful videos.
                        Unlike traditional social media, Pitchle is built for business, advocating for eco-friendly
                        practices
                        while providing all businesses a platform to grow equitably.
                    </p>
                </div>
                <div className="lg:w-1/2 mt-6 flex justify-center lg:mt-0">
                    <img src="img/banner/Home.jpg" alt="home" className="w-64 h-[450px] rounded-xl"/>
                </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                {[
                    {
                        title: 'Who We Are',
                        description: 'Pitchle is a social platform designed for commerce growth, offering small businesses a space to connect, thrive, and succeed equitably.'
                    },
                    {
                        title: 'What We Do',
                        description: 'We empower small businesses by providing a dedicated platform to drive commerce, promote products, find partners, and facilitate acquisitions or transfers.'
                    },
                    {
                        title: 'How We Do It',
                        description: 'Through short videos, AI-powered tools, and user-friendly design, Pitchle helps businesses promote products and drive growth.'
                    }
                ].map((section, index) => (
                    <div key={index} className="p-6 ">
                        <CheckCircleIcon className="w-12 h-12 text-green-500 mx-auto mb-4"/>
                        <h3 className="font-bold text-xl">{section.title}</h3>
                        <p className="text-gray-600">{section.description}</p>
                    </div>
                ))}
            </section>
            <section className="flex flex-col lg:flex-row items-center justify-between">
                <div className="lg:w-1/2 mt-6 flex justify-center lg:mt-0">
                    <img src="img/banner/Home.jpg" alt="home" className="w-64 h-[450px] rounded-xl"/>
                </div>
                <div className="lg:w-1/2 mt-10 lg:mt-0 space-y-4">
                    <h1 className="text-3xl lg:text-5xl font-bold text-blue-500">Pitchle: Made for Business</h1>
                    <p className="text-justify lg:text-start">
                        Social media today is largely focused on entertainment, leaving a gap in the business sector.
                        There's a clear
                        need for a platform that addresses business and commerce opportunities with a sophisticated,
                        contemporary
                        touch.
                    </p>
                    <br/>
                    <p className="text-justify lg:text-start">
                        That's how Pitchle was born – a unique social media platform dedicated exclusively to empowering
                        small businesses to grow and succeed equitably. Through short videos, Pitchle helps businesses
                        promote products,
                        find partners, and buy or transfer businesses.
                    </p>
                </div>
            </section>
            <section className="text-center">
                <h2 className="text-4xl font-bold mb-8">The values that drive us</h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6 ">
                    {[
                        {title: 'Innovation', icon: <SparklesIcon className="w-12 h-12 text-blue-500"/>},
                        {title: 'Collaboration', icon: <UsersIcon className="w-12 h-12 text-blue-500"/>},
                        {title: 'Diversity', icon: <UsersIcon className="w-12 h-12 text-blue-500"/>},
                        {title: 'Respect', icon: <UsersIcon className="w-12 h-12 text-blue-500"/>}
                    ].map((value, index) => (
                        <div key={index} className="p-6 bg-gray-100 rounded-xl text-center">
                            {value.icon}
                            <h3 className="font-bold mt-2">{value.title}</h3>
                        </div>
                    ))}
                </div>
            </section>
            <section className="flex my-10 flex-col lg:flex-row items-center justify-center">
                <div className="lg:w-1/2 mt-6  flex items-center flex-col justify-center text-center lg:mt-0">
                    <img src="img/new_images/profile.png" alt="john" className="w-44 h-44 lg:w-60 lg:h-60 border-8 border-black rounded-full"/>
                    <h1 className={"mt-4 text-xl font-semibold"}>Jhon Pillpe</h1>
                    <h1 className={"text-xl"}>Founder</h1>
                </div>
                <div className="lg:w-1/2 space-y-4 mt-8 lg:mt-0">
                    <p className=" text-xl text-center">
                        “ We are committed to progress!
                        <br/>
                        <br/>
                        Pitchle aims to be a game-changing tech leader
                        in business and commerce,
                        empowering small businesses and independent professionals to thrive responsibly.
                        ”
                    </p>
                </div>
            </section>
            <section className="lg:p-8 p-0">
                <div className="w-full mx-auto">
                    <div className="flex flex-col justify-between md:flex-row items-start gap-1 lg:gap-8 mb-12">
                        <div id="CARE"  className="w-full md:w-6/12">
                            <h1 className="text-4xl font-bold mb-4">We Care</h1>
                            <p className="text-lg mb-4">Pitchle is more than a platform. We're the partner your business
                                needs to grow. We innovate, collaborate, and empower success equitably, offering
                                accessible tools that help all businesses thrive.</p>
                            <p className="text-lg mb-8 lg:mb-0">Every business deserves the chance to shine, and we're here to make
                                that happen.</p>
                        </div>
                        <div className="w-full md:w-1/3 p-6 bg-blue-500 text-white rounded-2xl">
                            <img className={"w-10 h-10 mb-6"} src="img/icon/img.png" alt=""/>
                            <h2 className="text-2xl font-bold mb-2">Supporting Small Businesses</h2>
                            <p>We empower small businesses by connecting them with new opportunities, partners, and
                                customers.</p>
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 bg-gray-100 rounded-2xl">
                            <img className={"w-10 h-10 mb-6"} src="img/icon/img.png" alt=""/>
                            <h2 className="text-xl font-bold mb-2">Inclusivity & Equal Opportunities</h2>
                            <p>We support diversity, ensuring everyone has access to growth and success.</p>
                        </div>
                        <div className="p-6 bg-blue-500 text-white rounded-2xl">
                            <img className={"w-10 h-10 mb-6"} src="img/icon/img.png" alt=""/>

                            <h2 className="text-xl font-bold mb-2">Sustainability & Eco Trends</h2>
                            <p>We advocate for businesses that prioritize eco-friendly products and sustainable,
                                responsible practices.</p>
                        </div>
                        <div className="p-6 bg-gray-100 rounded-2xl">
                            <img className={"w-10 h-10 mb-6"} src="img/icon/img.png" alt=""/>
                            <h2 className="text-xl font-bold mb-2">Helping Businesses Grow</h2>
                            <p>Our platform provides tools for promotion, networking, and scaling businesses.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Feature/>
        </div>
    );
};

export default AboutPage;
