import React from 'react';
import {Link} from "react-router-dom";

const plansData = [

    {
        title: 'Paid Plan',
        description: 'Unlock 60-Second Videos to present your business and access extra benefits.',
        image: '/img/icon/img_9.png', // Replace with your image path
    },
    {
        title: 'Free Plan',
        description: 'Access to the platform with a 30-second video model for pitching your business.',
        image: '/img/icon/img_10.png', // Replace with your image path
    },
    {
        title: 'Flexible Options',
        description: 'Choose a one-time, monthly, or annual subscription based on your needs.',
        image: '/img/icon/img_11.png', // Replace with your image path
    }
];
const mobileData = [
    {
        title: 'Flexible Options',
        description: 'Choose a one-time, monthly, or annual subscription based on your needs.',
        image: '/img/icon/img_11.png', // Replace with your image path
    },
    ,
    {
        title: 'Free Plan',
        description: 'Access to the platform with a 30-second video model for pitching your business.',
        image: '/img/icon/img_10.png', // Replace with your image path
    },
    {
        title: 'Paid Plan',
        description: 'Unlock 60-Second Videos to present your business and access extra benefits.',
        image: '/img/icon/img_9.png', // Replace with your image path
    }

];

const PlansSection = () => {
    return (
        <section className=" py-16 lg:py-40 space-y-10 lg:space-y-24 px-0 md:px-16 lg:px-24 text-center">
            {/* Title */}
            <h2 className="text-3xl lg:text-5xl font-bold mb-12">Choose your path to success</h2>

            {/* Plans Container */}
            <div className="w-full lg:w-10/12 mx-auto mb-12">

                {/* For Mobile View - Triangle Layout */}
                <div className="flex flex-col  items-center justify-center space-y-4 lg:hidden">
                    {/* Top Card */}
                    <div
                        className="bg-gray-100 p-4 rounded-2xl shadow-sm transition-transform transform hover:scale-105 cursor-pointer w-56 md:w-80">
                        <div className="flex justify-center mb-4">
                            <img src={mobileData[0].image} alt={mobileData[0].title}
                                 className="w-12 h-12 lg:w-20 lg:h-20"/>
                        </div>
                        <h3 className="font-bold text-xl mb-2">{mobileData[0].title}</h3>
                        <p className="text-gray-600 text-sm">{mobileData[0].description}</p>
                    </div>

                    {/* Bottom Two Cards */}
                    <div className="grid grid-cols-2 gap-1">
                        {mobileData.slice(1).map((plan, index) => (
                            <div
                                key={index}
                                className="bg-gray-100 p-2 rounded-2xl shadow-sm transition-transform transform hover:scale-105 cursor-pointer w-44 md:w-80"
                            >
                                <div className="flex justify-center mb-4">
                                    <img src={plan.image} alt={plan.title} className="w-12 h-12 lg:w-20 lg:h-20"/>
                                </div>
                                <h3 className="font-bold text-xl mb-2">{plan.title}</h3>
                                <p className="text-gray-600 text-sm">{plan.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* For Desktop View - All Cards in Row */}
                <div className="hidden lg:grid grid-cols-3 gap-8">
                    {plansData.map((plan, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 space-y-5 p-14 rounded-2xl shadow-sm transition-transform transform hover:scale-105 cursor-pointer"
                        >
                            <div className="flex justify-center py-4 mb-4">
                                <img src={plan.image} alt={plan.title} className="w-12 h-12 lg:w-20 lg:h-20"/>
                            </div>
                            <h3 className="font-bold text-2xl mb-2">{plan.title}</h3>
                            <p className="text-md">{plan.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={"mt-24"}>
                <Link to={"/plans"}>
                    <button
                        className="bg-[#417DFF] px-20 text-white py-2 lg:px-6 rounded-full shadow-md hover:bg-blue-600 transition flex items-center mx-auto">
                        Learn more <span className="ml-2">→</span>
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default PlansSection;
