import React, { useEffect, useState, useRef } from "react";
import { Link, useParams, useLocation } from "react-router-dom"; // import useLocation hook
import { client } from "../sanityClient";
import { PortableText } from "@portabletext/react";
import Navbar from "../components/Navbar";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {Spinner} from "@material-tailwind/react";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineShare } from "react-icons/hi";


const BlogDetail = () => {
    const { slug } = useParams();
    const location = useLocation(); // Get the current location
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [showIcons, setShowIcons] = useState(false);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const [visibleBlogs, setVisibleBlogs] = useState(6); // To control the number of blogs shown
    const contentRef = useRef(null);
    const [isLinkCopied, setIsLinkCopied] = useState(false);


    useEffect(() => {
        // Scroll to the top whenever the route changes
        window.scrollTo(0, 0);
    }, [location]); // This will trigger when the location (route) changes

    useEffect(() => {
        // Fetch the blog post data
        client
            .fetch(
                `*[_type == "blog" && slug.current == $slug][0]{
                    title,
                    description,
                    content[] {
                        ...,
                        _type == "image" => {
                            "url": asset->url
                        }
                    },
                    image {
                        asset -> { url }
                    },
                    publishedAt,
                    category // Fetch the category for the current post
                }`,
                { slug }
            )
            .then((data) => {
                setPost(data);
                setLoading(false);
                // Fetch related blogs based on category
                if (data.category) {
                    const category = data.category;
                    client
                        .fetch(
                            `*[_type == "blog" && category == $category && slug.current != $slug]{
                                title,
                                slug,
                                image {
                                    asset -> { url }
                                },
                                description
                            }[0...6]`, // Fetch the first 6 related blogs based on the category
                            { category, slug }
                        )
                        .then((relatedData) => setRelatedBlogs(relatedData))
                        .catch((error) => console.error("Error fetching related blogs:", error));
                }
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
                const isAtBottom = window.scrollY + windowHeight >= documentHeight - 2000;
                setShowIcons(scrollY > 300 && !isAtBottom);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const loadMoreBlogs = () => {
        // Load more blogs when "Load More" is clicked
        setVisibleBlogs((prevVisible) => prevVisible + 6);
    };

    if (loading) return <div className="text-center w-full flex justify-center my-10 text-lg"><Spinner className="h-12 w-12" color="blue" /></div>;
    if (!post) return <div className="text-center my-10 text-lg">Blog post not found.</div>;

    const handleCopyLink = () => {
        // Get the current URL
        const currentUrl = window.location.href;

        // Copy the URL to clipboard
        navigator.clipboard.writeText(currentUrl)
            .then(() => {
                setIsLinkCopied(true);
                // Hide the notification after 2 seconds
                setTimeout(() => setIsLinkCopied(false), 2000);
            })
            .catch((error) => {
                console.error("Error copying link to clipboard:", error);
            });
    };

    return (
        <>
            <Navbar />
            <div className="fixed top-0 left-0 h-1 bg-blue-500 transition-all duration-200" style={{ width: `${scrollProgress}%` }} />
            <div className="my-20 lg:my-28 flex mx-auto space-x-8">
                <div className="w-full md:pl-16">
                    {/* Blog Header */}
                    <div className="flex flex-col-reverse md:flex-row justify-center w-11/12 mx-auto">
                        <div className="md:w-6/12">
                            <p className="text-xl font-semibold mt-6 lg:mt-0 ms-1 text-[#b8b8c8]"> <Link to={"/blog"}> <span>Blog</span></Link> <span className="ms-3"> > <span className={"capitalize text-blue-500 ms-2"}>{post.category}</span></span>
                            </p>
                            <h1 className="text-3xl lg:text-5xl font-semibold my-2 lg:my-6 text-gray-900">{post.title}</h1>
                            <p className="text-lg my-6">{post.description}</p>

                            {/* Author & Date */}
                            <div className="flex items-center mt-4">
                                <img
                                    alt="Author"
                                    src="/img/logo/logo.png"
                                    className="h-14 w-14 border-blue-600 border-4 rounded-full"
                                />
                                <div className="ml-3 text-sm">
                                    <span className="text-gray-800 font-semibold">Pitchle Team</span>
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
                        {/* Social Media Icons */}
                        <div
                            className={`fixed hidden lg:block left-40 top-1/2 space-y-8 transition-opacity duration-300 ${showIcons ? 'opacity-100' : 'opacity-0'}`}>
                            <FaFacebookF className="text-gray-500 hover:text-blue-600 text-2xl cursor-pointer"/>
                            <FaXTwitter className="text-gray-500 hover:text-blue-400 text-2xl cursor-pointer"/>
                            <FaWhatsapp className="text-gray-500 hover:text-blue-700 text-2xl cursor-pointer"/>
                            <div>
                                <HiOutlineShare
                                    className="text-gray-500 hover:text-blue-700 text-2xl cursor-pointer"
                                    onClick={handleCopyLink}
                                />

                                {/* Display a notification when the link is copied */}
                                {isLinkCopied && (
                                    <div
                                        className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
                                        Link copied!
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Blog Content (Scrollable) */}
                        <div className="prose lg:prose-xl my-20 text-md">
                            <PortableText
                                value={post.content}
                                components={{
                                    marks: {
                                        color: ({children, value}) => (
                                            <span style={{color: value.hex}}>{children}</span>
                                        ),
                                    },
                                    types: {
                                        image: ({ value }) =>
                                            value.url ? (
                                                <img
                                                    src={value.url}
                                                    alt="Blog Content"
                                                    className="w-full h-auto rounded-lg shadow-md my-6"
                                                />
                                            ) : null,
                                    },
                                }}
                            />
                        </div>
                    </div>

                    {/* Related Blogs Section */}
                    {relatedBlogs.length > 0 && (
                        <div className="my-16">
                            <h2 className=" text-3xl lg:text-5xl font-semibold text-center  my-20">Related Articles</h2>
                            <div className="grid grid-cols-1 w-full lg:w-10/12 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {relatedBlogs.slice(0, visibleBlogs).map((blog) => (
                                    <Link to={`/blog/${blog.slug.current}`}>
                                        <div className="bg-white mx-4 lg:mx-0 shadow-md border border-gray-200 rounded-lg">
                                            <img
                                                src={post.image?.asset?.url || "https://via.placeholder.com/400"}
                                                alt={post.title}
                                                className="w-full h-52 object-fit "
                                            />
                                            <div className="flex justify-between p-4 my-4">
                                                <p className="text-md text-blue-500 capitalize">{post.category || "Uncategorized"}</p>
                                                <p className="text-md text-gray-400">
                                                    {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : "Date not available"}
                                                </p>
                                            </div>
                                            <h3 className="text-xl font-bold mt-4 line-clamp-2 px-4">{post.title}</h3>
                                            <p className="text-lg text-gray-600 mt-4 line-clamp-3 px-4">{post.description}</p>
                                            <div className="flex items-center mt-2 p-4">
                                                <img
                                                    src="/img/logo/logo.png"
                                                    alt="Pitchle Team"
                                                    className="w-6 h-6 rounded-full mr-2"
                                                />
                                                <span className="text-sm font-medium">Pitchle Team</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            {/* Load More Button */}
                            {relatedBlogs.length > visibleBlogs && (
                                <button
                                    onClick={loadMoreBlogs}
                                    className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-800"
                                >
                                    Load more
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default BlogDetail;
