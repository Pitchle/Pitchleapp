import React, { useEffect, useRef, useState } from "react";
import { client } from "../sanityClient";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import CategoryTabs from "../components/CategoryTabs";

const categories = [
    { title: "Latest Updates", value: "latest updates" },
    { title: "Sell & Transfer", value: "sell & transfer" },
    { title: "Partners & Investors", value: "partners & investors" },
    { title: "Promote", value: "promote" },
    { title: "Events & Networking", value: "events & networking" },
];

const MajorBlogCard = ({ post }) => (
    <div
        className="w-full lg:w-6/12 p-6 rounded-xl"
        style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
    >
        <img
            src={post.image?.asset?.url}
            alt="Main Article"
            className="w-full h-auto mx-auto rounded-xl mb-4"
        />
        <p className="text-blue-500 font-semibold mb-1">{post.category}</p>
        <Link to={`/blog/${post.slug.current}`}>
            <h2 className="text-xl lg:text-2xl font-bold mb-2 hover:underline">
                {post.title}
            </h2>
        </Link>
        <p className="mb-4 line-clamp-2 lg:line-clamp-2">{post.description}</p>
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <img
                    src="/img/logo/logo.png"
                    alt="Author"
                    className="w-6 h-6 rounded-full"
                />
                <span className="text-sm font-semibold">Pitchle Team</span>
            </div>
            <span className="text-gray-800">
        {new Date(post.publishedAt).toLocaleDateString()}
      </span>
        </div>
    </div>
);

const BlogCard = ({ post }) => (
    <div
        className="bg-white p-2 rounded-xl"
        style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
    >
        <img
            src={post.image?.asset?.url}
            alt="Post"
            className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <p className="text-blue-500 font-semibold mb-1">{post.category}</p>
        <Link to={`/blog/${post.slug.current}`}>
            <h3 className="text-lg font-bold mb-2 hover:underline">{post.title}</h3>
            <p className="text-md line-clamp-3 mb-2 hover:underline">
                {post.description}
            </p>
        </Link>
        <div className="flex justify-between items-center text-sm">
            <div className="flex items-center mt-2 gap-2">
                <img
                    src="/img/logo/logo.png"
                    alt="Author"
                    className="w-6 h-6 rounded-full"
                />
                <span className="text-sm font-semibold">Pitchle Team</span>
            </div>
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
        </div>
    </div>
);

const BlogPage = () => {
    const [posts, setPosts] = useState([]);
    const [majorBlog, setMajorBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const categoryFromQuery = decodeURIComponent(queryParams.get("category") || "");
    const [selectedCategory, setSelectedCategory] = useState("latest updates");
    const categorySectionRef = useRef(null);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const category = queryParams.get("category");
        if (category) {
            setSelectedCategory(decodeURIComponent(category));
        }
    }, [location]);

    useEffect(() => {
        if (categoryFromQuery) {
            setTimeout(() => {
                const categorySection = document.getElementById("category-section");
                if (categorySection) {
                    categorySection.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }, 300);
        }
    }, [categoryFromQuery]);

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

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
        navigate({
            pathname: "/blog",
            search: `?category=${encodeURIComponent(category)}`,
        });
    };

    const promotePosts = posts
        .filter((post) => post.category?.toLowerCase() === "promote")
        .slice(0, 3);
    const currentPosts = posts.filter((post) => !post.isMajorBlog).slice(0, 3);
    const sellPosts = posts
        .filter((post) => post.category?.toLowerCase() === "sell & transfer")
        .slice(0, 3);
    const partnerPosts = posts
        .filter((post) => post.category?.toLowerCase() === "partners & investors")
        .slice(0, 3);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {majorBlog && (<div className="flex flex-col lg:flex-row justify-between w-11/12 space-y-4 lg:space-y-0 lg:w-10/12 mx-auto lg:space-x-6 my-16">
                    <MajorBlogCard post={majorBlog} />
                    <div
                        className="w-full lg:w-6/12 bg-white p-6 rounded-xl"
                        style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
                    >
                        <h3 className="text-3xl font-bold mb-4">Popular Articles</h3>
                        <div className="space-y-4">
                            {currentPosts.map((post, index) => (
                                <div key={index}>
                                    <div className="flex flex-col lg:flex-row items-center">
                                        <div className="w-full my-3 lg:w-6/12">
                                            <div className="flex justify-between items-center">
                                                <div className="flex my-2 lg:hidden items-center gap-2">
                                                    <img
                                                        className="w-8 h-8"
                                                        src="/img/logo/logo.png"
                                                        alt="logo"
                                                    />
                                                    <p className="text-sm font-semibold">Pitchle Team</p>
                                                </div>
                                                <p className="text-gray-500 text-sm mb-1">
                                                    {new Date(post.publishedAt).toLocaleDateString()}
                                                </p>
                                            </div>
                                            <Link to={`/blog/${post.slug.current}`}>
                                                <h4 className="font-bold line-clamp-2 my-2 hover:underline">
                                                    {post.title}
                                                </h4>
                                            </Link>
                                            <div className="hidden my-2 lg:flex items-center gap-2">
                                                <img
                                                    className="w-8 h-8"
                                                    src="/img/logo/logo.png"
                                                    alt="logo"
                                                />
                                                <p className="text-sm font-semibold">Pitchle Team</p>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-6/12">
                                            <img
                                                src={post.image?.asset?.url}
                                                alt="Latest Post"
                                                className="w-full lg:w-9/12 mx-auto h-32 rounded-lg"
                                            />
                                        </div>
                                    </div>
                                    <div className="text-gray-500 border-2 my-4"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>)}

            <CategoryTabs
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />

            <div className="my-12 w-10/12 mx-auto">
                <h2 className="text-3xl font-bold">Promote</h2>
                <div className="border-gray-400 border-2 mb-6"></div>
                <div className="flex flex-col lg:flex-row justify-center lg:justify-between space-y-5 lg:space-y-0 lg:space-x-10">
                    <div className="w-full lg:w-6/12">
                        {promotePosts.length > 0 && (
                            <div
                                className="bg-white p-2 rounded-xl"
                                style={{
                                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                }}
                            >
                                <img
                                    src={promotePosts[0].image?.asset?.url}
                                    alt="Promote Blog"
                                    className="w-full rounded-lg mb-4"
                                />
                                <p className="text-blue-500 font-semibold mb-1">
                                    {promotePosts[0].category}
                                </p>
                                <Link to={`/blog/${promotePosts[0].slug.current}`}>
                                    <h3 className="text-xl font-bold mb-2 hover:underline">
                                        {promotePosts[0].title}
                                    </h3>
                                </Link>
                                <p className="mb-4 line-clamp-3">
                                    {promotePosts[0].description}
                                </p>
                                <div className="flex justify-between items-center text-sm">
                                    <div className="flex items-center gap-2">
                                        <img
                                            src="/img/logo/logo.png"
                                            alt="Author"
                                            className="w-6 h-6 rounded-full"
                                        />
                                        <span className="text-sm font-semibold">Pitchle Team</span>
                                    </div>
                                    <span>
                    {new Date(promotePosts[0].publishedAt).toLocaleDateString()}
                  </span>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col lg:flex-row h-auto space-y-5 lg:space-y-0 lg:h-[430px] lg:space-x-5 w-full lg:w-6/12">
                        {promotePosts.slice(1).map((post) => (
                            <BlogCard key={post._id} post={post} />
                        ))}
                    </div>
                </div>
                <div className="flex justify-center mt-20">
                    <Link to={`/blog-data?category=${encodeURIComponent("promote")}`}>
                    <button className="px-6 py-3 bg-[#01BF74] text-white rounded-full shadow-lg transition">
                        View All →
                    </button>
                    </Link>
                </div>
            </div>
            <div className="my-12 w-10/12 mx-auto">
                <h2 className="text-3xl font-bold">Sell & Transfer</h2>
                <div className="border-gray-400 border-2 mb-6"></div>
                <div className="flex flex-col lg:flex-row justify-center lg:justify-between space-y-5 lg:space-y-0 lg:space-x-10">
                    <div className="w-full lg:w-6/12">
                        {sellPosts.length > 0 && (
                            <div
                                className="bg-white p-2 rounded-xl"
                                style={{
                                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                }}
                            >
                                <img
                                    src={sellPosts[0].image?.asset?.url}
                                    alt="Sell & Transfer Blog"
                                    className="w-full rounded-lg mb-4"
                                />
                                <p className="text-blue-500 font-semibold mb-1">
                                    {sellPosts[0].category}
                                </p>
                                <Link to={`/blog/${sellPosts[0].slug.current}`}>
                                    <h3 className="text-xl font-bold mb-2 hover:underline">
                                        {sellPosts[0].title}
                                    </h3>
                                </Link>
                                <p className="mb-4 line-clamp-3">
                                    {sellPosts[0].description}
                                </p>
                                <div className="flex justify-between items-center text-sm">
                                    <div className="flex items-center gap-2">
                                        <img
                                            src="/img/logo/logo.png"
                                            alt="Author"
                                            className="w-6 h-6 rounded-full"
                                        />
                                        <span className="text-sm font-semibold">
                      Pitchle Team
                    </span>
                                    </div>
                                    <span>
                    {new Date(sellPosts[0].publishedAt).toLocaleDateString()}
                  </span>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col lg:flex-row h-auto space-y-5 lg:space-y-0 lg:h-[430px] lg:space-x-5 w-full lg:w-6/12">
                        {sellPosts.slice(1).map((post) => (
                            <BlogCard key={post._id} post={post} />
                        ))}
                    </div>
                </div>
                <div className="flex justify-center mt-20">
                    <Link to={`/blog-data?category=${encodeURIComponent("sell & transfer")}`}>
                    <button className="px-6 py-3 bg-[#417DFF] text-white rounded-full shadow-lg transition">
                        View All →
                    </button>
                    </Link>
                </div>
            </div>

            <div className="my-12 w-10/12 mx-auto">
                <h2 className="text-3xl font-bold">Partners</h2>
                <div className="border-gray-400 border-2 mb-6"></div>
                <div className="flex flex-col lg:flex-row justify-center lg:justify-between space-y-5 lg:space-y-0 lg:space-x-10">
                    <div className="w-full lg:w-6/12">
                        {partnerPosts.length > 0 && (
                            <div
                                className="bg-white p-2 rounded-xl"
                                style={{
                                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                }}
                            >
                                <img
                                    src={partnerPosts[0].image?.asset?.url}
                                    alt="Partner Blog"
                                    className="w-full rounded-lg mb-4"
                                />
                                <p className="text-blue-500 font-semibold mb-1">
                                    {partnerPosts[0].category}
                                </p>
                                <Link to={`/blog/${partnerPosts[0].slug.current}`}>
                                    <h3 className="text-xl font-bold mb-2 hover:underline">
                                        {partnerPosts[0].title}
                                    </h3>
                                </Link>
                                <p className="mb-4 line-clamp-3">
                                    {partnerPosts[0].description}
                                </p>
                                <div className="flex justify-between items-center text-sm">
                                    <div className="flex items-center gap-2">
                                        <img
                                            src="/img/logo/logo.png"
                                            alt="Author"
                                            className="w-6 h-6 rounded-full"
                                        />
                                        <span className="text-sm font-semibold">
                      Pitchle Team
                    </span>
                                    </div>
                                    <span>
                    {new Date(partnerPosts[0].publishedAt).toLocaleDateString()}
                  </span>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col lg:flex-row h-auto space-y-5 lg:space-y-0 lg:h-[430px] lg:space-x-5 w-full lg:w-6/12">
                        {partnerPosts.slice(1).map((post) => (
                            <BlogCard key={post._id} post={post} />
                        ))}
                    </div>
                </div>
                <div className="flex justify-center mt-20">
                    <Link to={`/blog-data?category=${encodeURIComponent("partners & investors")}`}>
                    <button className="px-6 py-3 bg-[#01BF74] text-white rounded-full shadow-lg transition">
                        View All →
                    </button>
                    </Link>
                </div>
            </div>

            <div className="w-11/12 mx-auto lg:w-10/12 my-24 flex flex-col justify-center items-center">
                <h3 className="text-2xl flex justify-center items-center text-center lg:text-5xl lato-font md:text-center mb-2">
                    Stay Updated with Our Latest <br /> News &amp; Offers!
                </h3>
                <p className="mt-3 text-center md:text-left mb-4">
                    Subscribe to our newsletter for exclusive updates, business tips,
                    and special offers.
                </p>
                <div className="flex mt-7 justify-center md:justify-start">
                    <input
                        type="email"
                        placeholder="Enter your Email"
                        className="border border-blue-500 placeholder-[#7A7A7A] rounded-full px-4 py-3 focus:outline-none w-44 md:w-full"
                    />
                    <button className="ml-3 bg-[#417DFF] text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">
                        Subscribe
                    </button>
                </div>
            </div>
        </>
    );
};

export default BlogPage;
