import React from 'react';

const featureSections = [
    {
        title: 'Promote',
        description: 'Get your product in front of the right audience.',
        bgColor: 'bg-blue-500',
        videoId: 'VIDEO_ID',
        reverse: false
    },
    {
        title: 'Sell Business',
        description: 'List your business for sale or transfer and connect with serious buyers.',
        bgColor: 'bg-green-500',
        videoId: 'VIDEO_ID',
        reverse: true
    },
    {
        title: 'Find Partners',
        description: 'Connect with potential partners to scale your business or start a new venture.',
        bgColor: 'bg-[#343434]',
        videoId: 'VIDEO_ID',
        reverse: false
    }
];

const PitchleFeatures = () => {
    return (
        <div className="w-8/12   mx-auto my-64 space-y-20">
            <h2 className="text-center text-3xl lg:text-5xl font-bold mb-8">With Pitchle you can</h2>

            {featureSections.map((section, index) => (
                <div
                    key={index}
                    className={`flex flex-col ${section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} ${section.bgColor} text-white rounded-xl overflow-hidden shadow-lg`}>
                    <div className="p-16 w-full flex justify-center items-start flex-col md:w-1/2">
                        <h3 className="text-xl font-bold">{section.title}</h3>
                        <p className="mt-2">{section.description}</p>
                    </div>
                    <div className={" flex justify-center md:w-1/2"}>
                        <div className="w-11/12 bg-white my-4 py-4 rounded-lg ">
                            <iframe
                                className="w-10/12 mx-auto h-64"
                                src={`https://www.youtube.com/embed/${section.videoId}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PitchleFeatures;
