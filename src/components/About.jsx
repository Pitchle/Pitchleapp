import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const featureSections = [
    {
        title: 'Promote',
        description: 'Get your product in front of the right audience.',
        bgColor: 'bg-blue-500',
        videoId: '/video/promote.mp4',
        layout: 'right', // Video on the right, Text on the left
    },
    {
        title: 'Sell Business',
        description: 'List your business for sale or transfer and connect with serious buyers.',
        bgColor: 'bg-green-500',
        videoId: '/video/sell.mp4',
        layout: 'left', // Video on the left, Text on the right
    },
    {
        title: 'Find Partners',
        description: 'Connect with potential partners to scale your business or start a new venture.',
        bgColor: 'bg-[#343434]',
        videoId: '/video/partners.mp4',
        layout: 'right', // Video on the right, Text on the left
    }
];

const About = () => {
    // Create refs for each section manually
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    // Call useInView for each section ref
    const inView1 = useInView(ref1, { margin: '0px 0px -30% 0px', triggerOnce: false });
    const inView2 = useInView(ref2, { margin: '0px 0px -30% 0px', triggerOnce: false });
    const inView3 = useInView(ref3, { margin: '0px 0px -30% 0px', triggerOnce: false });

    // Put all refs and inView states into arrays for mapping
    const refs = [ref1, ref2, ref3];
    const inViews = [inView1, inView2, inView3];

    return (
        <div className="w-8/12 mx-auto my-64 relative space-y-20">
            <h2 className="text-center text-3xl lg:text-5xl font-bold mb-8">With Pitchle you can</h2>

            <div className="relative">
                {featureSections.map((section, index) => {
                    const isInView = inViews[index];
                    const isVideoRight = section.layout === 'right';

                    return (
                        <motion.div
                            ref={refs[index]}
                            key={index}
                            initial={{ y: 100, opacity: 0 }}
                            animate={{
                                y: isInView ? 0 : 100,
                                opacity: isInView ? 1 : 0,
                                zIndex: isInView ? 10 - index : 0,
                            }}
                            transition={{ type: 'spring', stiffness: 60, damping: 15 }}
                            className={`relative w-full ${section.bgColor} text-white rounded-xl shadow-lg mb-10`}
                        >
                            <div className={`flex flex-col md:flex-row rounded-xl overflow-hidden shadow-lg ${isVideoRight ? 'md:flex-row-reverse' : ''}`}>

                                {/* Video Section */}
                                <div className="w-11/12 bg-white m-4 p-4 rounded-lg md:w-1/2">
                                    <video
                                        src={section.videoId}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full mx-auto h-full rounded-lg"
                                    />
                                </div>

                                {/* Text Section */}
                                <div className="p-16 w-full flex justify-center items-start flex-col md:w-1/2">
                                    <h3 className="text-xl font-bold">{section.title}</h3>
                                    <p className="mt-2">{section.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default About;
