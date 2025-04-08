import React, {useEffect, useState} from "react";
import {useLocation, Link} from "react-router-dom";
import {client} from "../sanityClient";
import {Spinner} from "@material-tailwind/react";
import CategoryTabs from "../components/CategoryTabs";

const BlogData = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const category = decodeURIComponent(queryParams.get("category") || "");

    // State to hold the fetched posts and the limit for "Load more"
    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(9);
    const [loading, setLoading] = useState(true);

    // Fetch the posts from Sanity filtered by category
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await client.fetch(
                    `*[_type == "blog" && lower(category) == lower($cat)]
            | order(publishedAt desc) {
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
              slug {
                current
              },
              category
            }`,
                    {cat: category}
                );
                setPosts(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [category]);

    // Handler to load 9 more posts
    const handleLoadMore = () => {
        setLimit((prev) => prev + 9);
    };

    // Use the image from the most recent blog of this category as header image, if available
    const headerImage = posts[0]?.image?.asset?.url;

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Breadcrumb */}
                <nav className="text-xl font-semibold  text-[#bcb4b4] mb-4 text-left w-full">
                    <Link to="/blog" className="hover:underline text-[#bcb4b4]">
                        Blog
                    </Link>
                    <span className="mx-1">&gt;</span>
                    <span className="capitalize font-semibold text-xl text-[#417dff]">{category || "All Blogs"}</span>
                </nav>

                {/* Header Section */}
                <div className="flex flex-col items-center mt-16 mb-8">
                    {headerImage ? (
                        <img
                            src={headerImage}
                            alt={category}
                            className="w-40 h-40 object-cover rounded-full mb-4"
                        />
                    ) : (
                        <div className="w-24 h-24 rounded-full bg-gray-300 mb-4"/>
                    )}
                    <h1 className="text-3xl text-[#343434] capitalize lg:text-7xl my-8 font-bold text-center">
                        {category || "All Blogs"}
                    </h1>
                    <div className="w-6/12 my-6">
                        <svg
                            className="w-full"
                            height="2"
                            viewBox="0 0 841 2"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 1H840"
                                stroke="#A1A1A1"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                </div>

                {/* Loading State */}
                {loading && <div className="text-center w-full flex justify-center my-10 text-lg">
                    <Spinner className="h-12 w-12" color="blue"/>
                </div>}

                {/* Posts Grid */}
                {!loading && posts.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {posts.slice(0, limit).map((post) => (
                            <div
                                key={post._id}
                                className="bg-white space-y-4  p-2 rounded-lg flex flex-col"
                            >
                                <div className={"overflow-hidden group rounded-xl"}>
                                    <img
                                        src={post.image?.asset?.url}
                                        alt={post.title}
                                        className="w-full h-60 transition-transform duration-300 group-hover:scale-110 object-cover rounded mb-2"
                                    />
                                </div>
                                <p className="text-[#4d85ff] mb-1">
                                    {post.category}
                                </p>
                                <Link
                                    to={`/blog/${post.slug.current}`}
                                    className="mt-2 hover:underline"
                                >
                                    <h3 className="text-lg font-semibold mb-1 line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-[#808080] line-clamp-2 mb-2">
                                        {post.description}
                                    </p>
                                </Link>
                                {/* Footer */}
                                <div className="mt-auto flex justify-between items-center pt-2">
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
                                    <p className="text-sm">
                                        {new Date(post.publishedAt).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* No Posts Found */}
                {!loading && posts.length === 0 && (
                    <p className="text-center text-gray-500 mt-8">
                        No posts found for <strong>{category}</strong>.
                    </p>
                )}

                {/* Load More Button */}
                {!loading && limit < posts.length && (
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={handleLoadMore}
                            className="px-6 py-3 bg-green-600 text-white rounded-full shadow-lg"
                        >
                            Load more
                        </button>
                    </div>
                )}
            </div>
            <div className={"h-screen flex justify-center items-center flex-col"}>
                <div className="w-11/12 mb-32  mx-auto lg:w-10/12 my-12 scale-100 lg:scale-110 flex flex-col justify-center items-center">
                    <h3 className="text-2xl flex flex-col  justify-center items-center text-center lg:text-5xl font-bold md:text-center mb-2"
                        style={{lineHeight: "1.2em"}}>
                        Not interested in anything? <br/>
                        Maybe you're just in the wrong category.
                        <br/><span className={"text-[#01bf74]"}>Try another one!</span>
                    </h3>
                </div>
                <div className={"w-9/12"}>
                    <CategoryTabs/>
                </div>
            </div>
        </>
    );

};

export default BlogData;
