import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleCategoryChange = (catValue) => {
        setSelectedCategory(catValue);
        // Redirect to the BlogData page with the chosen category
        navigate(`/blog-data?category=${encodeURIComponent(catValue)}`);
        setIsDrawerOpen(false);
    };

    return (
        <div className="relative">
            {/* Mobile: Toggle Button + Drawer */}
            <div className="md:hidden w-10/12 rounded-full text-center mx-auto">
                <h1 className="text-xl my-4 font-bold">
                    Choose a topic that fits your interests!
                </h1>
                <button
                    onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                    className="px-4 py-2 rounded w-8/12 mx-auto text-left flex items-center justify-between"
                >
                    <span>Topics</span>
                    <FaChevronDown
                        className={`transition-transform duration-300 ${
                            isDrawerOpen ? "rotate-180" : "rotate-0"
                        }`}
                    />
                </button>
                {isDrawerOpen && (
                    <div className="absolute left-16 right-0 w-8/12 bg-white z-10 mt-1 rounded shadow">
                        {categories.map((cat) => (
                            <button
                                key={cat.value}
                                onClick={() => handleCategoryChange(cat.value)}
                                className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                                    selectedCategory === cat.value ? "font-bold" : ""
                                }`}
                            >
                                {cat.title}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Desktop: Horizontal Category Tabs */}
            <div
                id="category-section"
                className="hidden md:flex justify-center mb-6 px-4"
            >
                {categories.map((cat) => (
                    <button
                        key={cat.value}
                        className={`px-4 py-2 mx-2 ${
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
