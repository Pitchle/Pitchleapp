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

            <div className="max-w-4xl mx-auto px-4 my-20 lg:my-28">
                <nav className="absolute top-24 left-5 lg:top-32 lg:left-40 text-sm text-gray-800">
                    <Link to="/blog" className="hover:underline text-blue-500">
                        Blog
                    </Link>
                    <span className="mx-2">&gt;</span>
                    {post.category ? (
                        <Link
                            to={`/blog-data?category=${encodeURIComponent(post.category)}`}
                            className="capitalize hover:underline"
                        >
                            {post.category}
                        </Link>
                    ) : (
                        <span className="text-gray-800">Uncategorized</span>
                    )}
                    <span className="mx-2">&gt;</span>
                    <span className="text-blue-500">{post.title}</span>
                </nav>

                <h1 className="text-md w-7/12 lg:w-3/12 my-6 mx-auto text-white bg-blue-500 rounded-full p-3 lg:text-xl font-semibold text-center mb-4 ">
                    {post.category}
                </h1>
                <h1 className="text-3xl lg:text-5xl font-bold py-5 text-center mb-4 ">
                    {post.title}

                </h1>
                <h3 className="text-md lg:text-lg  text-center mb-4 ">
                    {post.description}

                </h3>
                <div className="flex text-center items-center justify-center gap-4 mb-6 ">
                    <div>
                        <span className="font-semibold">Date:</span>{" "}
                        {new Date(post.publishedAt).toLocaleDateString()}
                    </div>
                    <div>
                        <span className="font-semibold">Publisher:</span> Pitchle Team
                    </div>
                    <div>
                        <span className="font-semibold">Reading Time:</span> 12 minutes
                    </div>
                </div>

                {post.image?.asset?.url && (
                    <img
                        className="w-full h-auto object-cover rounded-md mb-6"
                        src={post.image.asset.url}
                        alt={post.title}
                    />
                )}
                {post.description && (
                    <p className="text-center text-lg text-gray-700 mb-10">
                        {post.description}
                    </p>
                )}
                <div ref={contentRef} className="prose lg:prose-xl poppins-regular text-[18px] mx-auto">
                    <PortableText
                        value={post.content}
                        components={{
                            block: {
                                h1: ({children}) => <h1 className="text-5xl font-bold mt-4">{children}</h1>,
                                h2: ({children}) => <h2 className="text-4xl font-bold mt-3">{children}</h2>,
                                h3: ({children}) => <h3 className="text-3xl font-semibold mt-3">{children}</h3>,
                                h4: ({children}) => <h4 className="text-2xl font-semibold mt-3">{children}</h4>,
                                h5: ({children}) => <h5 className="text-xl font-medium mt-3">{children}</h5>,

                                normal: ({children}) => (
                                    <p className="leading-8 mt-4 whitespace-pre-wrap">
                                        {children}
                                    </p>
                                ),
                                blockquote: ({children}) => (
                                    <blockquote className="border-l-4 border-gray-500 pl-4 italic my-4">
                                        {children}
                                    </blockquote>
                                ),
                            },
                            list: {
                                bullet: ({children}) => <ul className="list-disc pl-5 space-y-2">{children}</ul>,
                                number: ({children}) => <ol className="list-decimal pl-5 space-y-2">{children}</ol>,
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
                                            src={urlFor(value).auto("format").fit("max").width(1000)}
                                            alt={value.alt || "Blog Content"}
                                            className="w-auto h-auto lg:h-[400px] mx-auto rounded-md shadow-sm my-6"
                                        />
                                    ) : null,
                            },
                        }}
                    />
                </div>
            </div>
            <div className={"w-full flex justify-end"}>
            <div className={"flex w-6/12 justify-center items-center space-x-5"}>
                <FaFacebookF
                    className="text-gray-500 hover:text-blue-600 text-2xl cursor-pointer"
                    onClick={() => handleShare("facebook")}
                />
                <FaXTwitter
                    className="text-gray-500 hover:text-blue-400 text-2xl cursor-pointer"
                    onClick={() => handleShare("twitter")}
                />
                <FaWhatsapp
                    className="text-gray-500 hover:text-blue-700 text-2xl cursor-pointer"
                    onClick={() => handleShare("whatsapp")}
                />
                <div className="relative">
                    <HiOutlineShare
                        className="text-gray-500 hover:text-blue-700 text-2xl cursor-pointer"
                        onClick={handleCopyLink}
                    />
                    {isLinkCopied && (
                        <div className="absolute top-[-2rem] left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                            Link copied!
                        </div>
                    )}
                </div>
            </div>
            </div>
            {/* Related Blogs Section */}
            {relatedBlogs.length > 0 && (
                <div className="max-w-6xl mx-auto px-4 mb-16">
                    <h2 className="text-3xl lg:text-5xl font-semibold text-center my-10">
                        Related Articles
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {relatedBlogs.slice(0, visibleBlogs).map((blog) => (
                            <Link
                                key={blog.slug.current}
                                to={`/blog/${blog.slug.current}`}
                                className="bg-white shadow-md border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition"
                            >
                                <img
                                    src={blog.image?.asset?.url || "https://via.placeholder.com/400"}
                                    alt={blog.title}
                                    className="w-full h-52 object-cover"
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
