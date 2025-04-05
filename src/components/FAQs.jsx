import React, {useState} from 'react';
import NavbarBar from "./NavbarBar";
import Navbar from "./Navbar";

const FaQs = () => {
    const faqs = [
        {
            question: "What is <span translate='no'>Pitchle</span> app and what is its purpose?",
            answer: "<span translate=\"no\">Pitchle</span> is a pioneering social network focused on business, while also serving as a platform for promoting products through short 30 or 60-second videos. <span translate=\"no\">Pitchle</span> facilitates finding partners, investors, buying or transferring businesses, and promoting products with a sophisticated and contemporary touch. <br/> <br/> With <span translate=\"no\"> Pitchle </span>, connecting and promoting has never been more efficient and impactful."
        },
        {
            question: "Who can use <span translate='no'>Pitchle</span> app?",
            answer: "<span translate=\"no\">Pitchle </span> is designed for individuals, entrepreneurs, startups, and businesses of all sizes and industries looking to find partners, investors, business sales or transfers, and product promotion."
        },
        {
            question: "How does the subscription model work?",
            answer: "<span translate=\"no\">Pitchle </span> is free for all users under its 30-second video model. <br/> <br/>For additional features like posting 60-second pitches, users can opt for a paid subscription. Subscription options include one-time use, monthly, or annual plans."
        },
        {
            question: "What types of videos are allowed on <span translate='no'><span translate=\"no\"> Pitchle </span></span> app?",
            answer: "<span translate=\"no\">Pitchle </span> exclusively hosts business-focused content, including videos for seeking partners, investors, business sales or transfers, and product promotions. Any content not aligned with these purposes should be reported and may be removed."
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
            answer: `For any inquiries, technical issues, or assistance, users can contact our support team via email at 
             <a class=" underline" href="mailto:contact@pitchleapp.com" translate="no">contact@pitchleapp.com</a>`
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
            <h1 className="text-xl ms-32 mt-20 font-semibold text-gray-800 lg:text-5xl dark:text-white">
                <span className={"text-[#01BF74]"}> Got any questions?</span> <br/> <span className={"text-[#DFDFDF]"}>We’ve got answers.</span>
            </h1>

            <div className="container md:px-24 px-4 lg:px-64 py-12 mx-auto">
                <div className="mt-8 space-y-8 lg:mt-12">
                    {faqs.map((faq, index) => (
                        <div key={index} className="rounded-lg overflow-hidden transition-all duration-500">
                            {/* Question and toggle button div with blue background */}
                            <div
                                className={`p-8 bg-[#417DFF] text-white flex items-center justify-between cursor-pointer transition-all duration-300 ${expandedItems[index] ? 'shadow-lg' : ''}`}
                                onClick={() => toggleExpand(index)}
                            >
                                <h1 className="font-semibold text-xl" dangerouslySetInnerHTML={{__html: faq.question}}/>
                                <span className="text-white transition-transform duration-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`w-6 h-6 transform transition-transform duration-300 ${expandedItems[index] ? 'rotate-180' : 'rotate-0'}`}
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
                                        <p className="text-lg text-justify"
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
