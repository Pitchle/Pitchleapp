import React, {useState, useRef} from 'react';
import {CheckCircleIcon} from '@heroicons/react/24/solid';
import {motion, AnimatePresence} from 'framer-motion';
import Feature from "../components/Feature";
import {Helmet} from "react-helmet";

// const tabs = ['User', 'Business', 'Investor'];
const tabs = ['Business'];

const plan = {
    // User: [
    //     ['Features', 'Free plan', '1 time publication', 'Explorer', 'Visionary'],
    //     ['max 30-sec pitches', true, true, true, true],
    //     ['max 60-sec pitches', false, true, true, true],
    //     ['Find Partners', true, true, true, true],
    //     ['Video Visibility: Public and Private', false, false, true, true],
    //     ['Watermark/Copyright in videos', false, false, true, true],
    //     ['Create and join events worldwide', false, false, true, true],
    //     ['Renews', '', '', 'monthly', 'yearly'],
    //     ['Price', 'FREE', '$6.99', '$9.99/month', {
    //         mainPrice: '$99.99/year',
    //         subPrice: '12 months at $8.33/mo.\nSave 16.6%'
    //     }]
    // ],
    Business: [
        ['Features', 'Free plan', '1 time publication', 'Explorer', 'Visionary'],
        ['max 30-sec pitches', true, true, true, true],
        ['max 60-sec pitches', false, true, true, true],
        ['Promote Products', true, true, true, true],
        // ['Sell or Transfer business', true, true, true, true],
        // ['Find Partners', true, true, true, true],
        ['Video Visibility: Public and Private', false, false, true, true],
        ['Watermark/Copyright in videos', false, false, true, true],
        // ['Create and join events worldwide', false, false, true, true],
        ['Renews', '', '', 'monthly', 'yearly'],
        ['Price', 'FREE', '$9.99', '$14.99/month', {
            mainPrice: '$149.99/year',
            subPrice: '12 months at $8.33/mo.\nSave 16.6%'
        }]
    ]
    // Investor: [
    //     ['Features', 'Free plan', '1 time publication', 'Investor', 'Investor X'],
    //     ['max 30-sec pitches', true, true, true, true],
    //     ['max 60-sec pitches', false, true, true, true],
    //     ['Sell or Transfer business', true, true, true, true],
    //     ['Video Visibility: Public and Private', false, false, true, true],
    //     ['Watermark/Copyright in videos', false, false, true, true],
    //     ['Create and join events worldwide', false, false, true, true],
    //     ['Renews', '', '', 'monthly', 'yearly'],
    //     ['Price', 'FREE', '$15.99', '$19.99/month', {
    //         mainPrice: '$199.99/year',
    //         subPrice: '12 months at $9.9/mo.\nSave 16.6%'
    //     }]
    // ]
};

const Plan = () => {
    const [activeTab, setActiveTab] = useState('Business');
    const tableRef = useRef(null);

    const renderCell = (cell, isHeader = false, isPriceRow = false, cellIndex = 0) => {
        if (typeof cell === 'boolean') {
            return (
                <div className="flex justify-center">
                    {cell ? <CheckCircleIcon className="w-10 h-10 text-[#01BF74]"/> : ''}
                </div>
            );
        }

        if (isHeader) {
            return (
                <div
                    className={`text-center text-sm lg:text-2xl p-2 lg:p-5 font-bold ${cellIndex === 0 ? 'text-black' : 'text-[#01BF74]'}`}>
                    {cell}
                </div>
            );
        }

        if (typeof cell === 'object' && cell.mainPrice) {
            return (
                <div
                    className={`text-center p-3 ${cellIndex === 0 ? 'text-black font-bold' : 'text-[#417dff] font-bold'} text-lg lg:text-xl`}>
                    <div>{cell.mainPrice}</div>
                    <div className="text-[#01BF74] text-xs lg:text-sm mt-1 whitespace-pre-line">{cell.subPrice}</div>
                </div>
            );
        }

        if (isPriceRow) {
            return (
                <div
                    className={`text-center p-3 ${cellIndex === 0 ? 'text-black font-bold' : 'text-[#417dff] font-bold'} text-lg lg:text-xl`}>
                    {cell}
                </div>
            );
        }

        return <div className="text-center p-2 lg:p-3 text-sm lg:text-xl">{cell}</div>;
    };

    return (
        <>
            <Helmet>
                <title>Plans & Pricing - Pitchle — Social Media for Business</title>
                <meta name="description" content="Pitchle have cheapest price and planing in all social media industry" />
                <meta name="keywords" content="pitchle plans,pricing, cheap pricing, competative pricing, pitchle, bussines, social media, video app, 30-60 second videos, pitchleapp" />
            </Helmet>
            <div className="p-4 max-w-8xl mx-auto relative min-h-screen flex flex-col">
                <h2 className="text-4xl md:text-8xl text-center font-[700] my-16">Find a Plan That’s <br/> Right For
                    You!</h2>
                {/*<p className="text-center text-xl lg:text-3xl mb-20">Select your role and explore <br/> the subscription*/}
                {/*    plan.</p>*/}
                <div className="relative">
                    <div className="flex justify-center space-x-2 relative z-10">
                        {tabs.map((tab) => (
                            <motion.button
                                key={tab}
                                className={`px-6 py-3 mb-6 lg:mb-0 lg:px-20 lg:py-10 lg:text-4xl  font-bold transition-colors rounded-md lg:rounded-none duration-300 lg:rounded-t-lg ${
                                    activeTab === tab ? 'bg-[#01BF74] text-white lg:rounded-t-xl -mb-1' : 'bg-gray-200 text-black'
                                }`}
                                onClick={() => setActiveTab(tab)}
                                initial={{y: 0}}
                                animate={{y: activeTab === tab ? 4 : 0}}
                                transition={{type: "spring", stiffness: 300, damping: 20}}
                            >
                                {tab}
                            </motion.button>
                        ))}
                    </div>
                </div>
                <div
                    className="mt-1 border-2 lg:border-4  border-[#01BF74] rounded-3xl shadow-lg overflow-x-auto hide-scrollbar w-full lg:w-11/12 mx-auto">
                    <table className="w-full rounded-3xl table-fixed min-w-[800px] lg:min-w-full">
                        <thead>
                        <tr className="bg-gray-200 border-b border-gray-300">
                            {plan[activeTab][0].map((header, index) => (
                                <th key={index}
                                    className="py-8 px-2 text-sm lg:text-xl border-r last:border-r-0 border-gray-300">
                                    {renderCell(header, true, false, index)}
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <AnimatePresence mode="wait">
                            <motion.tbody
                                key={activeTab}
                                ref={tableRef}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{duration: 0.4}}
                            >
                                {plan[activeTab].slice(1).map((row, rowIndex) => (
                                    <tr key={rowIndex}
                                        className={`border-b border-gray-300 ${rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'}`}>
                                        {row.map((cell, cellIndex) => (
                                            <td key={cellIndex}
                                                className="p-0 py-2 md:p-5 border-r last:border-r-0 border-gray-300">
                                                {renderCell(cell, false, rowIndex === plan[activeTab].length - 2, cellIndex)}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </motion.tbody>
                        </AnimatePresence>
                    </table>
                </div>

            </div>
            <Feature/>
        </>

    );
};

export default Plan;
