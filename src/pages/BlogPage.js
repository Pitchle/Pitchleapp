import React, { useEffect, useState } from 'react';
import { client } from '../sanityClient'; // Adjust the path if needed
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";

const BlogPage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch blog posts from Sanity
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
                    }
                }`
            )
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>
            <div
                className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                <svg className="text-gray-300 animate-spin" viewBox="0 0 64 64" fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     width="24" height="24">
                    <path
                        d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                        stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path
                        d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                        stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"
                        className="text-gray-900">
                    </path>
                </svg>
            </div>
        </div>;
    }

    return (
        <>
            <Navbar/>
            <div className="flex flex-wrap space-x-4 justify-center">
                {posts.length === 0 && <p>No blog posts available.</p>}

                {posts.map((post) => (
                    <Link to={`/blog/${post.slug?.current}`} key={post._id}> {/* Ensure slug is passed */}
                        <div
                            className="relative flex flex-col space-x-4 my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
                            {/* Image */}
                            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                                <img
                                    src={post.image?.asset?.url || 'https://via.placeholder.com/400'}
                                    alt={post.title || 'No title available'}
                                />
                            </div>

                            {/* Card Content */}
                            <div className="p-4">
                                <div className="flex justify-between">
                                    <div
                                        className="mb-4 text-cyan-600 py-0.5 px-2.5 border border-transparent text-xs transition-all shadow-sm w-20 text-center">
                                        {post.status?.toUpperCase() || 'UNKNOWN'}
                                    </div>
                                    <div
                                        className="mb-4 text-black py-0.5 px-2.5 border border-transparent text-xs transition-all shadow-sm w-20 text-center">
                                        {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Date not available'}
                                    </div>
                                </div>

                                {/* Title */}
                                <h6 className="mb-2 text-slate-800 text-xl text-center font-semibold">{post.title || 'No title available'}</h6>

                                {/* Description */}
                                <p className="text-slate-600 leading-normal text-center font-light">{post.description || 'No description available'}</p>
                            </div>

                            {/* Author & Date */}
                            <div className="flex items-center justify-between p-4">
                                <div className="flex items-center">
                                    <img
                                        alt="Author"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&h=1480&q=80"
                                        className="relative inline-block h-8 w-8 rounded-full"
                                    />
                                    <div className="flex flex-col ml-3 text-sm">
                                        <span className="text-slate-800 font-semibold">Author Name</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default BlogPage;
