import React, {useEffect, useRef, useState} from "react";
import { client } from "../sanityClient";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

const categories = [
    { title: "Latest Updates", value: "latest updates" },
    { title: "Sell & Transfer", value: "sell & transfer" },
    { title: "Partners & Investors", value: "partners & investors" },
    { title: "Promote", value: "Promote" },
    { title: "Events & Networking", value: "events & networking" },
];

const BlogPage = () => {
    const [posts, setPosts] = useState([]);
    const [majorBlog, setMajorBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [currentPage, setCurrentPage] = useState(1);  // New state for pagination
    const [postsPerPage] = useState(6);  // Posts per page
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const category = decodeURIComponent(queryParams.get("category") || "");
    const [selectedCategory, setSelectedCategory] = useState("latest updates");
    const categorySectionRef = useRef(null);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const category = queryParams.get("category");

        if (category) {
            setSelectedCategory(decodeURIComponent(category)); // Proper decoding
        }
    }, [location]);

    useEffect(() => {
        if (category) {
            setTimeout(() => {
                const categorySection = document.getElementById("category-section");
                if (categorySection) {
                    categorySection.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }, 300); // Delay to allow content to load
        }
    }, [category]);

    useEffect(() => {
        client
            .fetch(
                `*[_type == "blog"] | order(publishedAt desc) {
                  _id,
                  title,
                  description,
                  image {
                    asset -> {
                      _id,
                      url
                    }
                  },
                  publishedAt,
                  status,
                  slug {
                    current
                  },
                  category,
                  isMajorBlog
                }`
            )
            .then((data) => {
                const major = data.find((post) => post.isMajorBlog);
                setMajorBlog(major);
                setPosts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
                setLoading(false);
            });
    }, []);

    const filteredPosts = posts
        .filter(
            (post) =>
                selectedCategory === "latest updates" ||
                post.category?.toLowerCase() === selectedCategory.toLowerCase()
        );

    // Get current posts based on pagination
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);  // Reset to page 1 when category changes
        navigate({
            pathname: "/blog",
            search: `?category=${encodeURIComponent(category)}`,
        });
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);

        // Scroll to the category section after the page change
        setTimeout(() => {
            const categorySection = document.getElementById("category-section");
            if (categorySection) {
                categorySection.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }, 100); // Adding a small delay to ensure the page change happens first
    };


    // Calculate total pages
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const handleSubscribe = () => {
        // Email validation regex pattern
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!email) {
            setEmailError("Email is required.");
            return;
        }

        if (!emailRegex.test(email)) {
            setEmailError("Please enter a valid email address.");
            return;
        }

        setSubscribed(true);
        setEmail(""); // Clear input
        setEmailError(""); // Clear error message

        // Ask for notification permission
        requestNotificationPermission();
    };

    const requestNotificationPermission = () => {
        if ("Notification" in window && Notification.permission !== "granted") {
            Notification.requestPermission().then((permission) => {
                if (permission === "granted") {
                    new Notification("Subscription Successful!", {
                        body: "You will receive updates for new blogs.",
                        icon: "/img/logo/logo.png",
                    });
                }
            });
        }
    };

    return (
        <>
            <Navbar/>

            {majorBlog && (
                <div className="flex justify-center mt-20 mb-10 lg:mb-20">
                    <div className="flex w-11/12 lg:w-10/12 flex-col md:flex-row items-center justify-evenly mb-6">
                        <div className="md:w-6/12">
                            <img
                                src={majorBlog.image?.asset?.url || "https://via.placeholder.com/400"}
                                alt={majorBlog.title}
                                className="w-full h-full lg:w-[600px] lg:h-[450px]"
                            />
                        </div>
                        <div className="md:w-6/12 py-4 px-4 lg:px-0">
                            <p className="text-xl font-semibold text-[#b8b8c8] my-2">
                                Blog{" "}
                                <span className="ms-3">
                  <span className={"text-sm"}>></span>{" "}
                                    <Link to={`/blog?category=${encodeURIComponent(majorBlog.category)}`}>
    <span
        onClick={() => {
            // Trigger the scroll
            setTimeout(() => {
                if (categorySectionRef.current) {
                    categorySectionRef.current.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }, 100);  // Delay to ensure page navigation happens first
        }}
        className={"ms-2 text-md font-display tracking-tight text-[#2c4bff] capitalize"}
    >
        {majorBlog.category || "Uncategorized"}
    </span>
</Link>

                </span>
                            </p>

                            <Link to={`/blog/${majorBlog.slug?.current}`}>
                                <h2 className="text-2xl lg:text-5xl hover:underline tracking-normal font-semibold text-gray-900">
                                    {majorBlog.title}
                                </h2>
                            </Link>
                            <p className="text-xl my-6 lg:my-12">{majorBlog.description}</p>
                            <div className="flex items-center mt-4">
                                <img alt="Author" src="/img/logo/logo.png"
                                     className="h-14 w-14 border-blue-600 border-4 rounded-full"/>
                                <div className="ml-3 text-sm">
                                    <span className="text-[#2c4bff] text-xl font-semibold">Pitchle Team</span>
                                    <p className="text-gray-500">{new Date(majorBlog.publishedAt).toLocaleDateString()}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Categories Tabs - Scrollable on Mobile */}
            <div id="category-section" ref={categorySectionRef}
                 className="overflow-x-auto whitespace-nowrap flex justify-start md:justify-center mb-6 px-4">
                {categories.map((cat) => (
                    <button
                        key={cat.value}
                        className={`px-4 py-2 mx-2 ${selectedCategory === cat.value ? "border-b-4 border-blue-500 font-bold" : ""}`}
                        onClick={() => handleCategoryChange(cat.value)}
                    >
                        {cat.title}
                    </button>
                ))}
            </div>


            {/* Category Blogs - Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 my-4 md:grid-cols-3 gap-6 w-10/12 mx-auto">
                {currentPosts.map((post) => (
                    <Link to={`/blog/${post.slug?.current}`} key={post._id}>
                        <div className="bg-white shadow-md border border-gray-200 rounded-lg">
                            <img
                                src={post.image?.asset?.url || "https://via.placeholder.com/400"}
                                alt={post.title}
                                className="w-full h-52 object-fit "
                            />
                            <div className="flex justify-between p-4 my-4">
                                <p className="text-md text-[#2c4bff] font-bold capitalize">{post.category || "Uncategorized"}</p>
                                <p className="text-md text-gray-400">{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : "Date not available"}</p>
                            </div>
                            <h3 className="text-xl font-bold mt-4 line-clamp-2 px-4">{post.title}</h3>
                            <p className="text-lg text-gray-600 mt-4 line-clamp-3 px-4">{post.description}</p>
                            <div className="flex items-center mt-2 p-4">
                                <img src="/img/logo/logo.png" alt="Pitchle Team" className="w-6 h-6 rounded-full mr-2"/>
                                <span className="text-sm font-medium">Pitchle Team</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-6 space-x-4">
                {Array.from({length: totalPages}, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-4 py-2 rounded-full ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>

            <div className="mb-40 mt-10 lg:mt-40">
                <div
                    className="mt-4 md:mt-32 lg:mt-12 w-full lg:w-2/5 m-auto flex flex-col items-center p-3 space-y-12">
                    <h3 className="text-4xl font-semibold text-center">Subscribe to our newsletter</h3>

                    {subscribed ? (
                        <p className="text-green-500 text-lg font-semibold">Thanks for subscribing! 🎉</p>
                    ) : (
                        <div className="mt-6 flex flex-col md:flex-row w-full md:px-14">
                            <input
                                className={`flex flex-grow px-4 py-4 rounded-full border ${emailError ? "border-red-500" : "border-black"}`}
                                placeholder="Enter Your Email Address"
                                value={email}
                                type={"email"}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button
                                className="mt-2 md:mt-0 rounded-full md:ml-2 bg-[#450073] shadow-lg text-white px-6 py-4"
                                onClick={handleSubscribe}
                            >
                                Subscribe
                            </button>
                        </div>
                    )}

                    {emailError && <p className="text-red-500 text-lg mt-4">{emailError}</p>}
                </div>
            </div>
        </>
    );
};

export default BlogPage;
