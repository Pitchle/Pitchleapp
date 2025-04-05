import React, { useState, useEffect, useRef } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = ['User', 'Business', 'Investor'];

const plans = {
    User: [
        ['Features', 'Free plan', '1 time publication', 'Explorer', 'Visionary'],
        ['max 30-sec pitches', true, true, true, true],
        ['max 60-sec pitches', false, false, true, true],
        ['Find Partners', true, true, true, true],
        ['Video Visibility: Public and Private', false, false, true, true],
        ['Create and join events worldwide', false, false, true, true],
        ['Renews', '', '', 'monthly', 'yearly'],
        ['Price', 'FREE', '$6.99', '$9.99/month', '$99.99/year']
    ],
    Business: [
        ['Features', 'Free plan', '1 time publication', 'Explorer', 'Visionary'],
        ['max 30-sec pitches', true, true, true, true],
        ['max 60-sec pitches', false, false, true, true],
        ['Promote Products', true, true, true, true],
        ['Sell or Transfer business', true, true, true, true],
        ['Find Partners', true, true, true, true],
        ['Video Visibility: Public and Private', false, false, true, true],
        ['Create and join events worldwide', false, false, true, true],
        ['Renews', '', '', 'monthly', 'yearly'],
        ['Price', 'FREE', '$9.99', '$14.99/month', '$149.99/year']
    ],
    Investor: [
        ['Features', 'Free plan', '1 time publication', 'Investor', 'Investor X'],
        ['max 30-sec pitches', true, true, true, true],
        ['max 60-sec pitches', false, false, true, true],
        ['Sell or Transfer business', true, true, true, true],
        ['Video Visibility: Public and Private', false, false, true, true],
        ['Create and join events worldwide', false, false, true, true],
        ['Renews', '', '', 'monthly', 'yearly'],
        ['Price', 'FREE', '$15.99', '$19.99/month', '$199.99/year']
    ]
};

const Pricing = () => {
    const [activeTab, setActiveTab] = useState('User');
    const tableRef = useRef(null);

    const renderCell = (cell, isHeader = false, isFirstHeader = false) => {
        if (typeof cell === 'boolean') {
            return (
                <div className="flex justify-center">
                    {cell ? <CheckCircleIcon className="w-8 h-8 text-[#01BF74]" /> : ''}
                </div>
            );
        }

        if (isHeader) {
            return (
                <div
                    className={`text-center text-lg p-3 ${
                        isFirstHeader ? 'font-bold text-black' : 'font-bold text-[#01BF74]'
                    }`}
                >
                    {cell}
                </div>
            );
        }

        if (typeof cell === 'string' && cell.startsWith('$')) {
            return <div className="text-[#01BF74] text-center">{cell}</div>;
        }

        return <div className="text-center p-3">{cell}</div>;
    };

    return (
        <div className="p-4 max-w-6xl mx-auto relative min-h-screen flex flex-col">
            <h2 className="text-3xl md:text-8xl text-center font-bold my-10">Find a Plan That’s <br/> Right For You!</h2>
            <p className="text-center text-xl lg:text-3xl mb-14">Select your role and explore <br/> the subscription plan.</p>

            <div className="relative">
                <div className="flex justify-center space-x-2 relative z-10">
                    {tabs.map((tab) => (
                        <motion.button
                            key={tab}
                            className={`px-6 lg:px-12 lg:py-5 py-2 font-bold transition-colors duration-300 rounded-t-lg ${
                                activeTab === tab ? 'bg-green-500 text-white rounded-t-xl -mb-1' : 'bg-gray-200 text-black'
                            }`}
                            onClick={() => setActiveTab(tab)}
                            initial={{ y: 0 }}
                            animate={{ y: activeTab === tab ? 4 : 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            {tab}
                        </motion.button>
                    ))}
                </div>
            </div>

            <div className="mt-2 border-4 border-green-500 h-full rounded-3xl shadow-lg overflow-hidden overflow-x-auto hide-scrollbar">
                <table className="min-w-full h-full rounded-3xl">
                    <thead>
                    <tr className="bg-gray-200  border-b border-gray-300">
                        {plans[activeTab][0].map((header, index) => (
                            <th
                                key={index}
                                className={`py-2 px-2 md:px-4 text-xl border-r last:border-r-0 border-gray-300 whitespace-nowrap ${index === 0 ? 'w-32 md:w-auto' : ''}`}
                            >
                                {renderCell(header, true, index === 0)}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <AnimatePresence mode="wait">
                        <motion.tbody
                            key={activeTab}
                            ref={tableRef}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="h-full"
                        >
                            {plans[activeTab].slice(1).map((row, rowIndex) => (
                                <tr
                                    key={rowIndex}
                                    className={`border-b border-gray-300 ${rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'} transition-colors`}
                                >
                                    {row.map((cell, cellIndex) => (
                                        <td
                                            key={cellIndex}
                                            className={`p-0 py-2 md:p-3 text-sm lg:text-md border-r last:border-r-0 border-gray-300 `}
                                        >
                                            {renderCell(cell)}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </motion.tbody>
                    </AnimatePresence>
                </table>
            </div>
        </div>
    );
};

export default Pricing;
