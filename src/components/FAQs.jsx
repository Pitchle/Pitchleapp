import React, { useState } from 'react';
import NavbarBar from "./NavbarBar";

const FaQs = () => {
    const faqs = [
        {
            question: "What is Pitchle app and what is its purpose?",
            answer: "Pitchle is a business-oriented platform designed for individuals seeking partners for new projects or startups, as well as entrepreneurs and startups looking for investors. It also provides an option for those interested in selling or transferring their businesses. The app facilitates connections through short video pitches of 30 seconds (free) or up to 60 seconds (paid), with the option to add a different background behind the video for a fee."
        },
        {
            question: "Who can use Pitchle app?",
            answer: "Pitchle is designed for individuals, entrepreneurs, startups, and businesses of all sizes and sectors who are seeking partnerships, investments, or opportunities to sell or transfer their businesses."
        },
        {
            question: "How does the subscription model work?",
            answer: "Users can choose from different subscription options, including one-time use, monthly, or annual plans. Subscribers gain access to additional features such as viewing other users' profiles, contacting them, and managing messages. Private profiles of investors can be accessed with a paid subscription."
        },
        {
            question: "What types of videos are allowed on Pitchle app?",
            answer: "Pitchle is strictly business-oriented, and only videos related to pitches, partnership opportunities, investment proposals, or business sales are permitted. Any other types of videos that do not align with the app's purpose should be reported and will be subject to removal."
        },
        {
            question: "How can I report inappropriate content or behavior?",
            answer: "Users can report inappropriate content or behavior by using the reporting feature within the app. Our moderation team will review reports promptly and take appropriate action to ensure the platform remains professional and business-focused."
        },
        {
            question: "What security measures are in place to protect user information?",
            answer: "Pitchle prioritizes the security and privacy of user information. Users have control over their privacy settings and can choose who can view their profiles and pitches."
        },
        {
            question: "Can I use Pitchle app for networking purposes outside of business?",
            answer: "While Pitche app is primarily focused on business-related activities, users may also find networking opportunities and connections that extend beyond strictly business matters. However, the primary purpose of the app is to facilitate professional partnerships, investments, and business transactions."
        },
        {
            question: "How can I contact customer support?",
            answer: "For any inquiries, technical issues, or assistance, users can contact our customer support team through the app's support feature or via email at contact@pitchle.com"
        },
        {
            question: "What are the benefits of upgrading to a paid subscription?",
            answer: "Paid subscribers gain access to exclusive features, including viewing other users' profiles, contacting them directly, and accessing private profiles of investors. Additionally, paid subscribers have enhanced visibility and control over their pitches and messages."
        },
        {
            question: "Is Pitchle app available worldwide?",
            answer: "Yes, Pitchle app is accessible globally, allowing users from different countries and regions to connect and explore business opportunities on a global scale."
        }
    ];

    const [expandedItems, setExpandedItems] = useState(Array(faqs.length).fill(false));

    const toggleExpand = (index) => {
        const updatedExpandedItems = [...expandedItems];
        updatedExpandedItems[index] = !updatedExpandedItems[index];
        setExpandedItems(updatedExpandedItems);
    };

    return (
        <>
            <NavbarBar/>
            <div className="container md:px-24 px-4 lg:px-64 py-12 mx-auto">
                <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">
                    Frequently Asked Questions
                </h1>

                <div className="mt-8 space-y-8 lg:mt-12">
                    {faqs.map((faq, index) => (
                        <div key={index} className="p-8 bg-[#01be74] rounded-lg dark:bg-gray-800">
                            <button
                                className="flex items-center justify-between w-full"
                                onClick={() => toggleExpand(index)}
                            >
                                <h1 className="font-semibold text-xl text-white dark:text-white">
                                    {faq.question}
                                </h1>
                                <span className="text-gray-400 bg-gray-200 rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`w-6 h-6 transform ${expandedItems[index] ? 'rotate-180' : 'rotate-0'}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>
                            {expandedItems[index] && (
                                <p className="mt-6 text-lg text-justify text-white dark:text-gray-300">
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default FaQs;
