import React, { useEffect, useRef, useState } from "react";
import { client } from "../sanityClient";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CategoryTabs from "../components/CategoryTabs";
import {Spinner} from "@material-tailwind/react";


const MajorBlogCard = ({ post }) => (
    <div
        className="w-full lg:w-6/12 p-6 rounded-xl flex flex-col-reverse lg:flex-col"
        style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}
    >
        <img
            src={post.image?.asset?.url}
            alt="Main Article"
            className="w-full hover:scale-105 transition-transform duration-300 h-auto mx-auto  rounded-xl mb-4"
        />
        <p className="text-[#417dff] text-sm hidden lg:block font-semibold mb-1">{post.category}</p>
        <p className="mb-4 line-clamp-2 visible lg:hidden text-sm mt-4 lg:line-clamp-1">{post.description}</p>
        <Link to={`/blog/${post.slug.current}`}>
            <h2 className="text-xl   lg:mt-3 lg:text-xl font-bold mb-2 hover:underline">
                {post.title}
            </h2>
        </Link>
        <p className="mb-4 line-clamp-1 invisible lg:visible  text-sm">{post.description}</p>
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

const BlogCard = ({post}) => (
    <div
        className="bg-white p-2 rounded-xl"
        style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
    >
        <div className={"overflow-hidden group rounded-xl"}>
        <img
            src={post.image?.asset?.url}
            alt="Post"
            className="w-full transition-transform duration-300 group-hover:scale-110 h-56 object-cover rounded-lg mb-4"
        />
        </div>
        <p className="text-[#709dff] text-sm font-semibold mb-1">{post.category}</p>
        <Link to={`/blog/${post.slug.current}`}>
            <h3 className="text-lg font-bold line-clamp-2 mb-2 hover:underline">{post.title}</h3>
            <p className="text-sm line-clamp-2 mb-2 hover:underline">
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
        return <div className="text-center w-full flex justify-center my-10 text-lg">
            <Spinner className="h-12 w-12" color="blue"/>
        </div>
    }

    return (
        <>
            {majorBlog && (<div
                className="flex flex-col lg:flex-row justify-between w-11/12 space-y-4 lg:space-y-0 lg:w-10/12 mx-auto lg:space-x-6 my-16">
                <MajorBlogCard post={majorBlog}/>
                <div
                    className="w-full lg:w-6/12 bg-white p-6 rounded-xl"
                    style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}
                >
                    <h3 className="text-3xl font-bold mb-8">Popular Articles</h3>
                    <div className="space-y-4 ">
                        {currentPosts.map((post, index) => (
                            <div key={index}>
                                <div className="flex hover:bg-[#f5f8ff] flex-col lg:flex-row items-center">
                                    <div className="w-full my-3 lg:w-6/12">
                                        <div className="flex  justify-between items-center">
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
                                            <h4 className="font-bold text-xl lg:text-lg  mt-2 line-clamp-3 my-2 hover:underline">
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
                                <div className="text-gray-500 border-2 my-2"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>)}
            <h1 className="text-3xl text-[#343434] ms-24 mt-40 hidden lg:block my-4 font-bold">
                Choose a topic that fits <br/> your interests!
            </h1>
            <div className={"w-9/12 flex justify-self-end me-10 pb-10"}>
                <CategoryTabs
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
            </div>

            <div className="my-12 w-10/12 mx-auto">
                <h2 className="lg:text-5xl text-3xl text-center lg:text-start font-bold">Promote</h2>
                <div className="border-gray-400 mt-4 lg:mb-16 border-2 mb-6"></div>
                <div
                    className="flex flex-col lg:flex-row justify-center lg:justify-between space-y-5 lg:space-y-0 lg:space-x-10">
                    <div className="w-full  lg:w-6/12">
                        {promotePosts.length > 0 && (
                            <div
                                className="bg-white rounded-xl p-2 "
                                style={{
                                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                }}
                            >
                                <div className={"overflow-hidden group rounded-xl"}>
                                    <img
                                        src={promotePosts[0].image?.asset?.url}
                                        alt="Promote Blog"
                                        className="w-full object-cover transition-transform duration-300 group-hover:scale-110 rounded-lg mb-4"
                                    />
                                </div>
                                <p className="text-[#417dff] font-sm mb-3">
                                    {promotePosts[0].category}
                                </p>
                                <Link to={`/blog/${promotePosts[0].slug.current}`}>
                                    <h3 className="text-xl font-bold mb-2 hover:underline">
                                        {promotePosts[0].title}
                                    </h3>
                                </Link>
                                <p className="mb-4 text-sm line-clamp-2">
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
                    <div
                        className="flex flex-col lg:flex-row h-auto space-y-5 lg:space-y-0 lg:h-[430px] lg:space-x-5 w-full lg:w-6/12">
                        {promotePosts.slice(1).map((post) => (
                            <BlogCard key={post._id} post={post}/>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center mt-20">
                    <Link to={`/blog-data?category=${encodeURIComponent("promote")}`}>
                        <button
                            className="px-8 font-semibold py-3 bg-[#01BF74]  text-white rounded-full shadow-lg transition">
                            View All →
                        </button>
                    </Link>
                </div>
            </div>
            <div className="my-12 w-10/12 mx-auto">
                <h2 className="text-3xl text-center lg:text-start font-bold">Sell & Transfer</h2>
                <div className="border-gray-400 border-2 mt-4 lg:mb-16"></div>
                <div
                    className="flex flex-col lg:flex-row justify-center lg:justify-between space-y-5 lg:space-y-0 lg:space-x-10">
                    <div className="w-full lg:w-6/12">
                        {sellPosts.length > 0 && (
                            <div
                                className="bg-white p-2 rounded-xl"
                                style={{
                                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                }}
                            >
                                <div className={"overflow-hidden group rounded-xl"}>
                                    <img
                                        src={sellPosts[0].image?.asset?.url}
                                        alt="Sell & Transfer Blog"
                                        className="w-full transition-transform duration-300 group-hover:scale-110 rounded-lg mb-4"
                                    />
                                </div>
                                <p className="text-[#417dff] mb-3">
                                    {sellPosts[0].category}
                                </p>
                                <Link to={`/blog/${sellPosts[0].slug.current}`}>
                                    <h3 className="text-xl font-bold mb-2 hover:underline">
                                        {sellPosts[0].title}
                                    </h3>
                                </Link>
                                <p className="mb-4 text-sm line-clamp-2">
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
                    <div
                        className="flex flex-col lg:flex-row h-auto space-y-5 lg:space-y-0 lg:h-[430px] lg:space-x-5 w-full lg:w-6/12">
                        {sellPosts.slice(1).map((post) => (
                            <BlogCard key={post._id} post={post}/>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center mt-20">
                    <Link to={`/blog-data?category=${encodeURIComponent("sell & transfer")}`}>
                        <button
                            className="font-semibold px-8 py-3 bg-[#417DFF] text-white rounded-full shadow-lg transition">
                            View All →
                        </button>
                    </Link>
                </div>
            </div>

            <div className="my-12 w-10/12 mx-auto">
                <h2 className="text-3xl text-center lg:text-start font-bold">Partners</h2>
                <div className="border-gray-400 border-2 mt-4 lg:mb-16"></div>
                <div
                    className="flex flex-col lg:flex-row justify-center lg:justify-between space-y-5 lg:space-y-0 lg:space-x-10">
                    <div className="w-full lg:w-6/12">
                        {partnerPosts.length > 0 && (
                            <div
                                className="bg-white p-2 rounded-xl"
                                style={{
                                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                }}
                            >
                                <div className={"overflow-hidden group rounded-xl"}>
                                    <img
                                        src={partnerPosts[0].image?.asset?.url}
                                        alt="Partner Blog"
                                        className="w-full transition-transform duration-300 group-hover:scale-110 rounded-lg mb-4"
                                    />
                                </div>
                                <p className="text-[#417dff] mb-3">
                                    {partnerPosts[0].category}
                                </p>
                                <Link to={`/blog/${partnerPosts[0].slug.current}`}>
                                    <h3 className="text-xl font-bold mb-2 hover:underline">
                                        {partnerPosts[0].title}
                                    </h3>
                                </Link>
                                <p className="mb-4 text-sm line-clamp-2">
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
                    <div
                        className="flex flex-col lg:flex-row h-auto space-y-5 lg:space-y-0 lg:h-[430px] lg:space-x-5 w-full lg:w-6/12">
                        {partnerPosts.slice(1).map((post) => (
                            <BlogCard key={post._id} post={post}/>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center mt-20">
                    <Link to={`/blog-data?category=${encodeURIComponent("partners & investors")}`}>
                        <button
                            className="font-semibold px-8 py-3 bg-[#01BF74] text-white rounded-full shadow-lg transition">
                            View All →
                        </button>
                    </Link>
                </div>
            </div>

            <div
                className="w-11/12 mx-auto lg:w-8/12 my-24 lg:h-screen scale-100 lg:scale-125 flex flex-col justify-center items-center">
                <h3 className="text-2xl flex justify-center items-center text-center lg:text-6xl lato-font md:text-center mb-2">
                    Stay Updated with Our Latest <br/> News &amp; Offers!
                </h3>
                <p className="mt-6 text-center md:text-left mb-4">
                    Subscribe to our newsletter for exclusive updates, business tips,
                    and special offers.
                </p>
                <div className="flex mt-7 lg:mt-16 justify-center md:justify-start">
                    <input
                        type="email"
                        placeholder="Enter your Email"
                        className="border-2 border-[#417dff] placeholder-[#7A7A7A] rounded-full px-5 lg:px-12 py-2 focus:outline-none w-44 md:w-full"
                    />
                    <button
                        className="ml-3 bg-[#417dff] text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">
                        Subscribe
                    </button>
                </div>
            </div>
        </>
    );
};

export default BlogPage;
