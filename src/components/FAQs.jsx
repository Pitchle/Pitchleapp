import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

const FaQs = () => {
    const faqs = [
        {
            question: " What’s Pitchle?",
            answer: "Pitchle is a video commerce platform for sustainable products — with Impact+ verification.\n" +
                "Watch 30-second clips, look for the green Impact+ label when a brand’s evidence has been reviewed, and pay in one \n" +
                "tap.\n </br> </br>" +
                " Sustainable shopping has never been easier—or more trustworthy."
        },
        {
            question: "Who can use Pitchle?",
            answer: "Pitchle is for sustainable shoppers and responsible brands.\n </br>" +
                " Shoppers watch short videos, look for Impact+, and buy in one tap. </br> </br>" +
                " Brands sell with or without Impact+ and can apply for verification by submitting evidence for review.\n"
        },
        {
            question: "How does the subscription model work?",
            answer: "Pitchle offers a free 30-second video. For 60-second pitches and additional features, users can\n" +
                "choose from one-time, monthly, or annual paid subscriptions."
        },
        {
            question: " How does Impact+ verification work?",
            answer: "Sellers upload documentation (e.g., certifications, DPP, test reports, etc.). Our team reviews the \n" +
                "evidence; if it checks out, the product video shows the Impact+ label."
        },
        {
            question: "Is Impact+ a certification?",
            answer: "No. Impact+ is a verification review, not a certification. It aggregates and checks third\n" +
                "party proofs so shoppers can see evidence before buying."
        },
        {
            question: " Can I sell if I don’t have certifications?",
            answer: " Yes. You can list and sell; your video will simply appear without the Impact+ label until evidence is \n" +
                "provided and reviewed."
        },
        // {
        //     question: "Can Pitchle be used for networking beyond business purposes?",
        //     answer: "While primarily focused on business activities, Pitchle also offers networking opportunities that\n" +
        //         "extend beyond commercial matters. Its main goal, however, remains to facilitate business and\n" +
        //         "commerce connections, investments, business sales or transfers, and product promotions."
        // },
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
                                    <div className="py-8 px-4 lg:p-8 text-black">
                                        <p className="text-[14px] lg:text-xl leading-6 lg:text-start"
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
