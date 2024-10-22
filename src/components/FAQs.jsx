import React, {useState} from 'react';
import NavbarBar from "./NavbarBar";

const FaQs = () => {
    const faqs = [
        {
            question: "What is <span translate='no'>Pitchle</span> app and what is its purpose?",
            answer: "<span translate=\"no\">Pitchle</span> is a pioneering social network focused on business, while also serving as a platform for promoting products through short 30 or 60-second videos. <span translate=\"no\">Pitchle</span> facilitates finding partners, investors, buying or transferring businesses, and promoting products with a sophisticated and contemporary touch. <br/> <br/> With <span translate=\"no\"> Pitchle </span>, connecting and promoting has never been more efficient and impactful."
        },
        {
            question: "Who can use <span translate='no'>Pitchle</span> app?",
            answer: "<span translate=\"no\">Pitchle </span> is designed for individuals, entrepreneurs, startups, and businesses of all sizes and industries looking to find partners, investments, business sales or transfers, and product promotion."
        },
        {
            question: "How does the subscription model work?",
            answer: "<span translate=\"no\">Pitchle </span> is free for all users under its 30-second video model. <br/> <br/>For additional features like posting 60-second pitches, users can opt for a paid subscription. Subscription options include one-time use, monthly, or annual plans."
        },
        {
            question: "What types of videos are allowed on <span translate='no'><span translate=\"no\"> Pitchle </span></span> app?",
            answer: "<span translate=\"no\">Pitchle </span> exclusively hosts business-focused content, including videos for seeking partners, investments, business sales or transfers, and product promotions. Any content not aligned with these purposes should be reported and may be removed."
        },
        {
            question: "What security measures protect user information?",
            answer: "<span translate=\"no\">Pitchle </span> prioritizes user data security and privacy. User information is securely stored and protected by Google's Firebase. Users have control over their privacy settings and can manage who can view their profiles and pitches."
        },
        {
            question: "What are the benefits of upgrading to a paid subscription?",
            answer: "Upgrading unlocks features such as posting 60-second videos, managing content visibility (public or private), viewing other users' profiles, watermarking/copyrighting videos, and accessing multiple locations (available for investors) <br/><br/> <span translate=\"no\">Pitchle </span> includes supplementary features and employs artificial intelligence."
        },
        {
            question: "Can <span translate=\"no\"> Pitchle </span>be used for networking beyond business purposes? ",
            answer: "While primarily focused on business activities, <span translate=\"no\"> Pitchle </span> also fosters networking opportunities that extend beyond commercial matters. Its main goal, however, remains facilitating professional connections, investments, business sales or transfers, and product promotions."
        },
        {
            question: "How can users report inappropriate content or behavior? ",
            answer: "Users can report such content or behavior using the reporting feature within the app. Our moderation team promptly reviews reports and takes necessary actions to maintain a professional and business-oriented platform."
        },
        {
            question: "Is <span translate=\"no\">Pitchle</span> available worldwide? ",
            answer: "Yes, <span translate=\"no\"> Pitchle </span> is accessible globally, allowing users from various countries and regions to connect and explore business opportunities on an international scale."
        },
        {
            question: "How can users contact customer support? ",
            answer: "For any inquiries, technical issues, or assistance, users can contact our support team via email at <span translate=\"no\">contact@pitchleapp.com</span>"
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
                                <h1 className="font-semibold text-xl text-white dark:text-white"
                                    dangerouslySetInnerHTML={{__html: faq.question}}/>
                                <span className="text-gray-400 bg-gray-200 rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`w-6 h-6 transform ${expandedItems[index] ? 'rotate-180' : 'rotate-0'}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M19 9l-7 7-7-7"/>
                                    </svg>
                                </span>
                            </button>
                            {expandedItems[index] && (
                                <p className="mt-6 text-lg text-start text-white dark:text-gray-300"
                                   dangerouslySetInnerHTML={{__html: faq.answer}}/>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default FaQs;
