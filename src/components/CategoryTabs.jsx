import React, { useState } from "react";
import {useLocation, useNavigate} from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

// Define your categories array (can also be imported from a separate file)
const categories = [
    { title: "Latest Updates", value: "latest updates" },
    { title: "Sell & Transfer", value: "sell & transfer" },
    { title: "Partners & Investors", value: "partners & investors" },
    { title: "Promote", value: "promote" },
    { title: "Events & Networking", value: "events & networking" },
];

const CategoryTabs = ({ selectedCategory, setSelectedCategory }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const bgColor = location.pathname === '/blog' ? "bg-white" : "bg-[#f6f6f6]";
    const handleCategoryChange = (catValue) => {
        setSelectedCategory(catValue);
        // Redirect to the BlogData page with the chosen category
        navigate(`/blog-data?category=${encodeURIComponent(catValue)}`);
        setIsDrawerOpen(false);
    };



    return (
        <div className="relative">
            <div className="lg:hidden w-full rounded-full text-center mx-auto">
                <h1 className="text-xl scale-115 my-4 font-bold">
                    Choose a topic that fits your interests!
                </h1>
                <button
                    onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                    className={`px-6 py-5 ${bgColor} rounded-full text-xl font-semibold  mt-8 w-full mx-auto text-left flex items-center justify-between`}
                >
                    <span>Topics</span>
                    <FaChevronDown
                        className={`transition-transform duration-300 ${
                            isDrawerOpen ? "rotate-180" : "rotate-0"
                        }`}
                    />
                </button>
                {isDrawerOpen && (
                    <div className="absolute left-0 right-0 w-full bg-white z-10 mt-1 rounded shadow">
                        {categories.map((cat) => (
                            <button
                                key={cat.value}
                                onClick={() => handleCategoryChange(cat.value)}
                                className={`block w-full text-xl text-center px-4 py-2 hover:bg-gray-100 ${
                                    selectedCategory === cat.value ? "font-bold" : ""
                                }`}
                            >
                                {cat.title}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            <div id="category-section" className={`hidden  space-x-10 lg:flex w-full py-5 rounded-full ${bgColor} justify-center mb-6 px-10`}>
                {categories.map((cat) => (
                    <button
                        key={cat.value}
                        className={`px-2 py-2 hover:text-[#417dff] text-2xl mx-2 ${
                            selectedCategory === cat.value
                                ? " font-bold"
                                : ""
                        }`}
                        onClick={() => handleCategoryChange(cat.value)}
                    >
                        {cat.title}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryTabs;
