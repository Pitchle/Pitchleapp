import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { client } from "../sanityClient";
import { PortableText } from "@portabletext/react";
import Navbar from "../components/Navbar";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const BlogDetail = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [showIcons, setShowIcons] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        client
            .fetch(
                `*[_type == "blog" && slug.current == $slug][0]{
                    title,
                    description,
                    content,
                    image {
                        asset -> {
                            url
                        }
                    },
                    publishedAt
                }`,
                { slug }
            )
            .then((data) => {
                setPost(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching blog post:", error);
                setLoading(false);
            });
    }, [slug]);

    useEffect(() => {
        const handleScroll = () => {
            if (contentRef.current) {
                const content = contentRef.current;
                const contentTop = content.getBoundingClientRect().top + window.scrollY;
                const contentHeight = content.clientHeight;
                const scrollY = window.scrollY;
                const windowHeight = window.innerHeight;
                const documentHeight = document.documentElement.scrollHeight;

                // Calculate progress within the blog content
                if (scrollY > contentTop) {
                    const progress = ((scrollY - contentTop) / (contentHeight - windowHeight)) * 100;
                    setScrollProgress(progress);
                } else {
                    setScrollProgress(0);
                }

                // Show social media icons after scrolling 400px, but hide them near the bottom
                const isAtBottom = window.scrollY + windowHeight >= documentHeight - 700;
                setShowIcons(scrollY > 300 && !isAtBottom);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (loading) return <div className="text-center my-10 text-lg">
        <div>
            <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                <svg className="text-gray-300 animate-spin" viewBox="0 0 64 64" fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     width="24" height="24">
                    <path d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </div>
        </div>;
    </div>;
    if (!post) return <div className="text-center my-10 text-lg">Blog post not found.</div>;

    return (
        <>
            <Navbar />
            <div className="fixed top-0 left-0 h-1 bg-blue-500 transition-all duration-200" style={{ width: `${scrollProgress}%` }} />
            <div className="my-28 flex mx-auto space-x-8">
                <div className="w-full md:pl-16">

                    {/* Blog Header */}
                    <div className="flex flex-col-reverse md:flex-row justify-center  w-11/12 mx-auto">
                        <div className="md:w-6/12">
                            <p className="text-xl font-semibold mt-6 lg:mt-0 ms-1 text-[#b8b8c8]">Blog <span className="ms-3"> ></span></p>
                            <h1 className="text-3xl lg:text-5xl font-semibold my-2 lg:my-6 text-gray-900">{post.title}</h1>
                            <p className="text-lg my-6">{post.description}</p>

                            {/* Author & Date */}
                            <div className="flex items-center mt-4">
                                <img
                                    alt="Author"
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&h=1480&q=80"
                                    className="h-14 w-14 border-blue-600 border-4 rounded-full"
                                />
                                <div className="ml-3 text-sm">
                                    <span className="text-gray-800 font-semibold">Moon Khan</span>
                                    <p className="text-gray-500">{new Date(post.publishedAt).toLocaleDateString()}</p>
                                </div>
                            </div>
                        </div>
                        {post.image?.asset?.url && (
                            <div className="md:w-6/12">
                                <img
                                    className="w-full h-44 rounded-md lg:w-[600px] lg:h-[350px]"
                                    src={post.image.asset.url}
                                    alt={post.title}
                                />
                            </div>
                        )}
                    </div>

                    {/* Blog Content Section */}
                    <div ref={contentRef} className="relative flex max-w-4xl mx-auto px-6 py-10">

                        {/* Social Media Icons (Appear after scrolling 400px & Hide at Bottom) */}
                        <div className={`fixed hidden lg:block left-40 top-1/2 space-y-8 transition-opacity duration-300 ${showIcons ? 'opacity-100' : 'opacity-0'}`}>
                            <FaFacebookF className="text-gray-500 hover:text-blue-600 text-2xl cursor-pointer" />
                            <FaTwitter className="text-gray-500 hover:text-blue-400 text-2xl cursor-pointer" />
                            <FaLinkedinIn className="text-gray-500 hover:text-blue-700 text-2xl cursor-pointer" />
                        </div>

                        {/* Blog Content (Scrollable) */}
                        <div className="prose lg:prose-xl my-20 text-xl max-w-none">
                            <PortableText value={post.content} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetail;
