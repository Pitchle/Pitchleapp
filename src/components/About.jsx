import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const featureSections = [
    {
        title: 'Promote',
        description: 'Get your product in front of the right audience.',
        bgColor: 'bg-[#417DFF]',
        videoId: '/video/promote.mp4',
        layout: 'right', // Video on the right, Text on the left
    },
    {
        title: 'Sell Business',
        description: 'List your business for sale or transfer and connect with serious buyers.',
        bgColor: 'bg-[#01BF74]',
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

const FeatureCard = ({ section, index, scrollYProgress, scrollRange, viewportHeight }) => {
    // Calculate the start and end values for this section's scroll range
    const start = index * scrollRange;
    const end = (index + 5) * scrollRange;
    // Use the hook at the top level of the component
    const y = useTransform(scrollYProgress, [start, end], [50, -viewportHeight]);

    return (
        <motion.div
            className={`sticky top-10 w-11/12 lg:w-10/12 mx-auto mb-10 ${section.bgColor} text-white rounded-2xl shadow-lg`}
            style={{
                zIndex: index + 1,
                y, // vertical translation based on scroll progress
            }}
        >
            <div className={`flex flex-col-reverse md:flex-row rounded-xl overflow-hidden shadow-lg ${section.layout === 'right' ? 'md:flex-row-reverse' : ''}`}>
                {/* Video Section */}
                <div className="w-11/12 bg-white m-2 px-1 rounded-lg md:w-1/2">
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
                <div className="p-5 lg:p-16 w-full flex justify-center items-start flex-col md:w-1/2">
                    <h3 className="text-2xl my-2 lg:my-5 lg:text-7xl font-bold">
                        {section.title}
                    </h3>
                    <p className="mt-2 text-lg lg:text-4xl">
                        {section.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

const About = () => {
    // Ref for the scroll container
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    const sectionCount = featureSections.length;
    const scrollRange = 0 / sectionCount;
    // You might want to adjust viewportHeight based on your design
    const viewportHeight = 0;

    return (
        // The container height forces scrolling (e.g., 300vh for 3 sections)
        <div ref={containerRef} className="relative" style={{ height: `${sectionCount * 100}vh` }}>
            <h2 className="text-center text-4xl lg:text-7xl font-bold mb-12 lg:mb-32">
                With Pitchle you can
            </h2>
            {featureSections.map((section, index) => (
                <FeatureCard
                    key={index}
                    section={section}
                    index={index}
                    scrollYProgress={scrollYProgress}
                    scrollRange={scrollRange}
                    viewportHeight={viewportHeight}
                />
            ))}
        </div>
    );
};

export default About;
