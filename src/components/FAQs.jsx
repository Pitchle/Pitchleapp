import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

const FaQs = () => {
    const faqs = [
        {
            question: "What is Pitchle and what is its purpose?",
            answer: "Pitchle is a pioneering social network for business and commerce, empowering small\n" +
                "businesses to grow and succeed equitably. It is designed to promote products through short 30\n" +
                "or 60-second videos. Pitchle also serves as a platform to find partners, sell or transfer\n" +
                "businesses, and build meaningful connections with a sophisticated and contemporary touch.\n </br> </br>" +
                "With Pitchle, connecting and promoting has never been more efficient and impactful."
        },
        {
            question: "Who can use Pitchle?",
            answer: "Pitchle is for all businesses — no matter the size, location, or industry. It's mainly designed to\n" +
                "help small businesses promote their products, find partners, sell or transfer their business, and\n" +
                "connect with customers.\n </br> </br>" +
                "Pitchle gives every business the opportunity to grow and succeed."
        },
        {
            question: "How does the subscription model work?",
            answer: "Pitchle offers a free 30-second video. For 60-second pitches and additional features, users can\n" +
                "choose from one-time, monthly, or annual paid subscriptions."
        },
        {
            question: "What types of videos are allowed on Pitchle?",
            answer: "Pitchle exclusively hosts content focused on business and commerce, including product\n" +
                "promotions, videos for seeking partners, and business sales or transfers. Any content that does\n" +
                "not align with these purposes should be reported and may be removed."
        },
        {
            question: "What security measures protect user information?",
            answer: "Pitchle prioritizes user data security and privacy. User information is securely stored and\n" +
                "protected using Google Firebase. Users have full control over their privacy settings and can\n" +
                "manage who can view their profiles and pitches."
        },
        ,
        {
            question: "What are the benefits of upgrading to a paid\n" +
                "subscription?",
            answer: "Upgrading unlocks features like posting 60-second videos, managing content visibility, and\n" +
                "watermarking videos. Certain accounts can access multiple locations to view pitches from other\n" +
                "countries and create or participate in global events.\n </br> </br>" +
                "Pitchle includes supplementary features and employs artificial intelligence."
        },
        {
            question: "Can Pitchle be used for networking beyond business purposes?",
            answer: "While primarily focused on business activities, Pitchle also offers networking opportunities that\n" +
                "extend beyond commercial matters. Its main goal, however, remains to facilitate business and\n" +
                "commerce connections, investments, business sales or transfers, and product promotions."
        },
        {
            question: "How can users report inappropriate content or behavior?",
            answer: "Users can report such content or behavior using the reporting feature within the app. Our\n" +
                "moderation team promptly reviews reports and takes necessary actions to maintain a\n" +
                "professional and business-oriented platform."
        },
        {
            question: "Is Pitchle available worldwide?",
            answer: "Yes, Pitchle is available in all countries."
        },
        {
            question: "How can users contact customer support?",
            answer: "For any inquiries, technical issues, or assistance, users can contact our support team via email\n" +
                "at <span class='underline'>contact@pitchleapp.com</span>"
        }
    ];

    const [expandedItems, setExpandedItems] = useState(Array(faqs.length).fill(false));

    const toggleExpand = (index) => {
        const updatedExpandedItems = [...expandedItems];
        updatedExpandedItems[index] = !updatedExpandedItems[index];
        setExpandedItems(updatedExpandedItems);
    };
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);
    return (
        <>
            <h1 id="FAQ" className="text-4xl ms-0 text-center lg:text-start lg:ms-32 mt-10 lg:mt-20 font-semibold  text-gray-800 lg:text-6xl dark:text-white">
                <span className={"text-[#01BF74]"}> Got any questions?</span> <br/> <span className={"text-[#DFDFDF]"}>We’ve got answers.</span>
            </h1>

            <div className="container md:px-24 px-4 lg:px-48 py-6 lg:py-12 mx-auto">
                <div className="mt-8 space-y-4 lg:mt-12">
                    {faqs.map((faq, index) => (
                        <div key={index} className="rounded-lg overflow-hidden transition-all duration-500">
                            {/* Question and toggle button div with blue background */}
                            <div
                                className={`px-8 py-6 lg:py-7 bg-[#417DFF] text-white flex items-center justify-between cursor-pointer transition-all duration-300 ${expandedItems[index] ? 'shadow-lg' : ''}`}
                                onClick={() => toggleExpand(index)}
                            >
                                <h1 className="text-lg lg:text-3xl" dangerouslySetInnerHTML={{__html: faq.question}}/>
                                <span className="text-white transition-transform duration-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`w-10 h-10 transform transition-transform duration-300 ${expandedItems[index] ? 'rotate-180' : 'rotate-0'}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M19 9l-7 7-7-7"/>
                                </svg>
                            </span>
                            </div>

                            {/* Expanded answer div with white background */}
                            <div
                                className={`overflow-hidden transition-all duration-500 ${expandedItems[index] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                                style={{backgroundColor: expandedItems[index] ? 'rgba(255, 255, 255, 0.9)' : 'transparent'}}
                            >
                                {expandedItems[index] && (
                                    <div className="p-8 text-black">
                                        <p className="text-lg text-justify leading-6 lg:text-start"
                                           dangerouslySetInnerHTML={{__html: faq.answer}}/>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default FaQs;
