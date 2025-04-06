import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { client } from "../sanityClient";

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
                    { cat: category }
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
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Header Section */}
            <div className="flex flex-col items-center mb-8">
                {headerImage ? (
                    <img
                        src={headerImage}
                        alt={category}
                        className="w-24 h-24 object-cover rounded-full mb-4"
                    />
                ) : (
                    <div className="w-24 h-24 rounded-full bg-gray-300 mb-4" />
                )}
                <h1 className="text-3xl lg:text-4xl font-bold text-center">
                    {category || "All Blogs"}
                </h1>
            </div>

            {/* Loading State */}
            {loading && <p className="text-center">Loading posts...</p>}

            {/* Posts Grid */}
            {!loading && posts.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.slice(0, limit).map((post) => (
                        <div
                            key={post._id}
                            className="bg-white p-4 shadow-lg rounded-lg flex flex-col"
                        >
                            {/* Post Image */}
                            <img
                                src={post.image?.asset?.url}
                                alt={post.title}
                                className="w-full h-48 object-cover rounded mb-2"
                            />
                            {/* Title */}
                            <h3 className="text-lg font-semibold mb-1 line-clamp-2">
                                {post.title}
                            </h3>
                            {/* Description */}
                            <p className="text-gray-500 text-sm line-clamp-3 mb-2">
                                {post.description}
                            </p>
                            {/* Footer */}
                            <div className="mt-auto flex justify-between items-center pt-2">
                                <p className="text-sm font-semibold">Pitchle Team</p>
                                <p className="text-sm">
                                    {new Date(post.publishedAt).toLocaleDateString()}
                                </p>
                            </div>
                            {/* Link to Blog Detail Page */}
                            <Link
                                to={`/blog/${post.slug.current}`}
                                className="mt-2 text-blue-600 hover:underline"
                            >
                                Read More
                            </Link>
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
    );
};

export default BlogData;
