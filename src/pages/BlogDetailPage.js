import React, { useEffect, useState, useRef } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { client } from "../sanityClient";
import { PortableText } from "@portabletext/react";
import { Spinner } from "@material-tailwind/react";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineShare } from "react-icons/hi";
import { urlFor } from "../sanityClient";

const BlogDetail = () => {
    const { slug } = useParams();
    const location = useLocation();

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [showIcons, setShowIcons] = useState(false);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const [visibleBlogs, setVisibleBlogs] = useState(6);
    const [isLinkCopied, setIsLinkCopied] = useState(false);

    const contentRef = useRef(null);
    const [timeSpent, setTimeSpent] = useState(0); // Time spent in minutes

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeSpent(prevTime => prevTime + 1);
        }, 60000); // Increment time every 60 seconds (1 minute)

        return () => clearInterval(timer); // Cleanup the timer when the component unmounts
    }, []);

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    // Fetch the blog post and related blogs
    useEffect(() => {
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
          category
        }`,
                { slug }
            )
            .then((data) => {
                setPost(data);
                setLoading(false);

                // Fetch related blogs (same category, excluding current slug)
                if (data?.category) {
                    client
                        .fetch(
                            `*[_type == "blog" && category == $category && slug.current != $slug]{
                title,
                slug,
                image {
                  asset -> { url }
                },
                description,
                publishedAt,
                category
              }[0...6]`,
                            { category: data.category, slug }
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

    // Scroll progress & show/hide social icons
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

                // Show icons after scrolling 300px, hide near bottom
                const isAtBottom = scrollY + windowHeight >= documentHeight - 2000;
                setShowIcons(scrollY > 300 && !isAtBottom);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // "Load more" related blogs
    const loadMoreBlogs = () => {
        setVisibleBlogs((prevVisible) => prevVisible + 6);
    };

    // Copy link to clipboard
    const handleCopyLink = () => {
        const currentUrl = window.location.href;
        navigator.clipboard.writeText(currentUrl)
            .then(() => {
                setIsLinkCopied(true);
                setTimeout(() => setIsLinkCopied(false), 2000);
            })
            .catch((error) => console.error("Error copying link:", error));
    };

    // Social sharing
    const handleShare = (platform) => {
        const postUrl = encodeURIComponent(window.location.href);
        const postTitle = encodeURIComponent(post?.title || "Check out this blog!");
        let shareUrl = "";

        switch (platform) {
            case "facebook":
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${postUrl}`;
                break;
            case "twitter":
                shareUrl = `https://twitter.com/intent/tweet?url=${postUrl}&text=${postTitle}`;
                break;
            case "whatsapp":
                shareUrl = `https://wa.me/?text=${postTitle}%20${postUrl}`;
                break;
            default:
                return;
        }
        window.open(shareUrl, "_blank", "noopener,noreferrer");
    };

    // Loading state
    if (loading) {
        return (
            <div className="text-center w-full flex justify-center my-10 text-lg">
                <Spinner className="h-12 w-12" color="blue" />
            </div>
        );
    }

    // If no post found
    if (!post) {
        return <div className="text-center my-10 text-lg">Blog post not found.</div>;
    }

    return (
        <>
            <div
                className="fixed top-0 left-0 h-1 bg-blue-500 transition-all duration-200"
                style={{ width: `${scrollProgress}%` }}
            />

            <div className={"flex justify-center"}>
                <div className="w-full lg:w-8/12 mx-auto">
                    <nav className="absolute top-24 left-5 lg:top-32 lg:left-24 text-sm">
                        <Link to="/blog"
                              className="hover:underline text-sm lg:text-xl font-semibold  text-[#bcb4b4] mb-4 text-left w-full">
                            Blog
                        </Link>
                        <span className="lg:mx-3 text-sm lg:text-xl lg:font-bold text-[#bcb4b4]">&gt;</span>
                        {post.category ? (
                            <Link
                                to={`/blog-data?category=${encodeURIComponent(post.category)}`}
                                className="capitalize text-sm lg:text-xl font-semibold  text-[#bcb4b4] mb-4 text-left w-full hover:underline"
                            >
                                {post.category}
                            </Link>
                        ) : (
                            <span className="text-gray-800">Uncategorized</span>
                        )}
                        <span className="lg:mx-2 text-sm lg:text-xl lg:font-bold text-[#bcb4b4]">&gt;</span>
                        <span
                            className="text-sm lg:text-xl font-semibold text-[#417dff] mb-4 text-left w-full">{post.title.split(' ').slice(0, 6).join(' ')}...</span>

                    </nav>

                    <div className={"mt-28 lg:mt-40 flex justify-center"}>
                        <h1 className="text-md  mx-auto text-white bg-[#417dff] rounded-full py-1 px-3 mb-7 lg:text-md text-center ">
                            {post.category}
                        </h1>
                    </div>
                    <h1 className="text-[24px] px-[5px] lg:text-7xl font-semibold py-5 text-center mb-4 ">
                        {post.title}

                    </h1>
                    <h3 className="text-lg w-full px-2 lg:px-0 lg:w-9/12 flex justify-self-center lg:text-2xl  text-center mb-4 ">
                        {post.description}

                    </h3>
                    <div className="flex  text-center space-x-2 lg:space-x-16 my-20 items-center justify-center gap-4 ">
                        <div className={"flex justify-center flex-col space-y-2"}>
                            <span className="text-xl lg:text-3xl font-semibold">Date</span>{" "}
                            <span
                                className={"text-lg lg:text-2xl"}> {new Date(post.publishedAt).toLocaleDateString()}</span>
                        </div>
                        <div className={"flex justify-center flex-col space-y-2"}>
                            <span className="text-xl lg:text-3xl font-semibold">Author</span> <span
                            className={"text-lg lg:text-2xl"}>Pitchle Team</span>
                        </div>
                        <div className={"flex justify-center flex-col space-y-2"}>
                            <span className="text-xl lg:text-3xl font-semibold">Read</span>
                            <span className="text-lg lg:text-2xl">{timeSpent} minute{timeSpent !== 1 ? 's' : ''}</span>
                        </div>
                    </div>

                    {post.image?.asset?.url && (
                        <img
                            className="w-11/12 lg:w-full h-[170px] mx-auto lg:h-[500px] object-fill rounded-2xl lg:rounded-3xl mb-6"
                            src={post.image.asset.url}
                            alt={post.title}
                        />
                    )}
                    {post.description && (
                        <p className="text-start text-md w-full lg:text-2xl lg:w-8/12 mx-auto mt-16 px-3 lg:px-0 lg:mt-32 mb-10">
                            {post.description}
                        </p>
                    )}
                    <div ref={contentRef}
                         className="prose w-full px-3 lg:px-0 lg:w-9/12 lg:prose-xl poppins-regular text-md lg:text-2xl mx-auto">
                        <PortableText
                            value={post.content}
                            components={{
                                block: {
                                    h1: ({children}) => <h1 className="text-5xl w-9/12 mx-automx-auto font-bold mt-4">{children}</h1>,
                                    h2: ({children}) => <h2 className="text-2xl lg:text-4xl py-5 text-center w-full font-bold mt-3">{children}</h2>,
                                    h3: ({children}) => <h3 className="text-xl lg:text-3xl mt-3">{children}</h3>,
                                    h4: ({children}) => <h4 className="text-xl  mt-3">{children}</h4>,
                                    h5: ({children}) => <h5 className="text-lg  mt-3">{children}</h5>,

                                    normal: ({children}) => (
                                        <p className="mt-0 lg:mt-2 whitespace-pre-wrap" style={{lineHeight: "1.5em"}}>
                                            {children}
                                        </p>
                                    ),
                                    blockquote: ({children}) => (
                                        <blockquote className="border-l-4 mt-2 border-gray-500 pl-4 italic my-4">
                                            {children}
                                        </blockquote>
                                    ),
                                },
                                list: {
                                    bullet: ({children}) => <ul
                                        className="list-disc mt-2 pl-5 space-y-2">{children}</ul>,
                                    number: ({children}) => <ol
                                        className="list-decimal mt-2 pl-5 space-y-2">{children}</ol>,
                                },
                                marks: {
                                    strong: ({children}) => <strong>{children}</strong>,
                                    em: ({children}) => <em>{children}</em>,
                                    underline: ({children}) => <u>{children}</u>,
                                    link: ({children, value}) => (
                                        <a href={value.href} target="_blank" rel="noopener noreferrer"
                                           className="text-blue-600 underline">
                                            {children}
                                        </a>
                                    ),
                                },
                                types: {
                                    image: ({value}) =>
                                        value?.asset ? (
                                            <img
                                                src={urlFor(value).auto("format").fit("max").width(800)}
                                                alt={value.alt || "Blog Content"}
                                                className="lg:w-auto w-52 lg:h-[400px] mx-auto rounded-md shadow-sm my-6"
                                            />
                                        ) : null,
                                },
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className={"w-full flex justify-end"}>
                <div className={"flex w-6/12 justify-center items-center space-x-5"}>
                    <FaFacebookF
                        className="hover:text-blue-600 text-2xl cursor-pointer"
                        onClick={() => handleShare("facebook")}
                    />
                    <FaXTwitter
                        className="hover:text-blue-400 text-2xl cursor-pointer"
                        onClick={() => handleShare("twitter")}
                    />
                    <FaWhatsapp
                        className="hover:text-blue-700 text-2xl cursor-pointer"
                        onClick={() => handleShare("whatsapp")}
                    />
                    <div className="relative">
                        <HiOutlineShare
                            className="hover:text-blue-700 text-2xl cursor-pointer"
                            onClick={handleCopyLink}
                        />
                        {isLinkCopied && (
                            <div
                                className="absolute top-[-2rem] left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                                Link copied!
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* Related Blogs Section */}
            {relatedBlogs.length > 0 && (
                <div className=" w-10/12 mx-auto py-32">
                    <h2 className="text-3xl lg:text-7xl text-[#222222] font-bold text-center my-32">
                        Related Articles
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-20">
                        {relatedBlogs.slice(0, visibleBlogs).map((blog) => (
                            <Link
                                key={blog.slug.current}
                                to={`/blog/${blog.slug.current}`}
                                className="bg-white rounded-lg overflow-hidden transition"
                            >
                                <img
                                    src={blog.image?.asset?.url || "https://via.placeholder.com/400"}
                                    alt={blog.title}
                                    className="w-full h-80 transition-transform duration-300 group-hover:scale-110 object-cover rounded mb-2"
                                />
                                <div className="p-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <p className="text-md text-[#2c6aff] capitalize">
                                            {blog.category || "Uncategorized"}
                                        </p>
                                        <p className="text-md text-gray-700">
                                            {blog.publishedAt
                                                ? new Date(blog.publishedAt).toLocaleDateString()
                                                : "Date not available"}
                                        </p>
                                    </div>
                                    <h3 className="text-md lg:text-xl font-bold text-gray-900 line-clamp-2 mb-2">
                                        {blog.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 line-clamp-3">
                                        {blog.description}
                                    </p>
                                    <div className="flex items-center mt-4">
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
                        <div className="flex justify-center mt-6">
                            <button
                                onClick={loadMoreBlogs}
                                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-800"
                            >
                                Load more
                            </button>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default BlogDetail;
