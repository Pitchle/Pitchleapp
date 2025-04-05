import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const cards = [
    {
        title: 'Promote',
        description: 'Get your product in front of the right audience.',
        bgColor: 'bg-blue-500',
        borderColor: 'border-blue-500',
        videoEmbed: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" frameborder="0" allowfullscreen></iframe>`
    },
    {
        title: 'Sell Business',
        description: 'List your business for sale or transfer and connect with serious buyers.',
        bgColor: 'bg-green-500',
        borderColor: 'border-green-500',
        videoEmbed: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" frameborder="0" allowfullscreen></iframe>`
    },
    {
        title: 'Find Partners',
        description: 'Connect with potential partners to scale your business or start a new venture.',
        bgColor: 'bg-gray-800',
        borderColor: 'border-gray-800',
        videoEmbed: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" frameborder="0" allowfullscreen></iframe>`
    }
];

const InteractiveCards = () => {
    return (
        <div className="relative space-y-12 py-24">
            <h2 className="text-3xl text-center font-bold mb-12">With Pitchle you can</h2>

            <div className="relative h-[300vh] w-full">
                {cards.map((card, index) => (
                    <Card key={index} index={index} card={card} />
                ))}
            </div>
        </div>
    );
};

const Card = ({ index, card }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { threshold: 0.5 });
    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({ y: 0, opacity: 1, zIndex: index + 1 });
        } else {
            animation.start({ y: 200, opacity: 0, zIndex: index });
        }
    }, [inView, animation, index]);

    return (
        <motion.div
            ref={ref}
            animate={animation}
            initial={{ y: 200, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className={`absolute w-full px-4 md:px-16 lg:px-24`}
            style={{ top: `${index * 80}vh` }}
        >
            <div className={`flex justify-between items-center p-8 rounded-xl border ${card.borderColor} ${card.bgColor} text-white shadow-lg space-y-4 lg:space-y-0 lg:flex-row flex-col`}>

                {/* Description Side */}
                <div className="lg:w-1/2 space-y-4">
                    <h3 className="text-2xl font-bold">{card.title}</h3>
                    <p className="text-white text-lg">{card.description}</p>
                </div>

                {/* Video Side */}
                <div className="lg:w-1/2 mt-6 lg:mt-0">
                    <div dangerouslySetInnerHTML={{ __html: card.videoEmbed }} />
                </div>
            </div>
        </motion.div>
    );
};

export default InteractiveCards;
