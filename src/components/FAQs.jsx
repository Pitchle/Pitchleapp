import React, { useState } from 'react';

const FaQs = () => {
    const [expandedItems, setExpandedItems] = useState(Array(5).fill(false)); // Assuming you have 5 FAQ items

    const toggleExpand = (index) => {
        const updatedExpandedItems = [...expandedItems];
        updatedExpandedItems[index] = !updatedExpandedItems[index];
        setExpandedItems(updatedExpandedItems);
    };

    return (
        <>
                <div className="container px-6 py-12 mx-auto">
                    <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">
                        Frequently asked questions
                    </h1>

                    <div className="mt-8 space-y-8 lg:mt-12">
                        {expandedItems.map((isExpanded, index) => (
                            <div key={index} className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800">
                                <button
                                    className="flex items-center justify-between w-full"
                                    onClick={() => toggleExpand(index)}
                                >
                                    <h1 className="font-semibold text-gray-700 dark:text-white">
                                        FAQ {index + 1}
                                    </h1>
                                    <span className="text-gray-400 bg-gray-200 rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`w-6 h-6 transform ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </button>
                                {isExpanded && (
                                    <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                                        illo ducimus?
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
