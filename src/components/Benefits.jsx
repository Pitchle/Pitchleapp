import React from 'react';

const benefitsData = [
    {
        icon: '/img/icon/img_2.png',
        title: 'AI Recommendations',
        description: 'Pitchle uses AI to streamline and automate tasks, saving you time and effort.'
    },
    {
        icon: '/img/icon/img_3.png', // Replace with your image path
        title: 'Business Matchmaking',
        description: 'Instantly connect with the right people based on your goals and industry.'
    },
    {
        icon: '/img/icon/img_4.png', // Replace with your image path
        title: 'Business Events',
        description: 'Discover top networking events, workshops and conferences.'
    },
    {
        icon: '/img/icon/img_8.png', // Replace with your image path
        title: 'Video Pitches',
        description: 'Post your ideas, business offers, and product promotions with an attractive 30-sec video. Upgrade to a 60-sec premium video for more exposure.'
    },
    {
        icon: '/img/icon/img_6.png', // Replace with your image path
        title: 'Customer Support',
        description: 'Enjoy dedicated customer support to assist you every step of the way.'
    },
    {
        icon: '/img/icon/img_7.png', // Replace with your image path
        title: 'Privacy & Security',
        description: 'Control who can see your profile and pitches with customizable privacy settings.'
    }
];

const Benefits = () => {
    return (
        <div className="">
            <h1 className="text-4xl lg:text-6xl font-bold my-10 lg:my-32 text-center">
                Discover all the benefits of Pitchle!
            </h1>
            <div className="w-11/12 lg:w-9/12 mt-10 mx-auto">
                <div className="grid ms-0 lg:ms-20 grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-x-12 lg:gap-y-20">
                    {benefitsData.map((benefit, index) => (
                        <div
                            key={index}
                            className="space-y-2 rounded-lg px-2 py-2 lg:px-0 bg-[#F5F5F5] md:bg-transparent"
                        >
                            <img
                                className="w-12 h-12 lg:w-20 mb-4 lg:h-20"
                                src={benefit.icon}
                                alt={benefit.title}
                            />
                            <h1 className="text-sm lg:text-2xl font-semibold lg:font-bold text-start">
                                {benefit.title}
                            </h1>
                            <h1 className="text-sm text-[#767676] lg:text-lg text-start">
                                {benefit.description}
                            </h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Benefits;
