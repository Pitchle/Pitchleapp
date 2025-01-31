import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../sanityClient';
import { PortableText } from '@portabletext/react';
import Navbar from "../components/Navbar"; // Import PortableText for rich text rendering

const BlogDetail = () => {
    const { slug } = useParams(); // Get slug from URL
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

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

    if (loading) return <div>Loading...</div>;
    if (!post) return <div>Blog post not found.</div>;

    return (
        <>
            <Navbar/>
            <div className="max-w-3xl mx-auto p-4">
                <h1 className="text-3xl font-bold text-center">{post.title}</h1>
                <p className="text-gray-600 text-center">{new Date(post.publishedAt).toLocaleDateString()}</p>

                {/* Blog Image */}
                {post.image?.asset?.url && (
                    <img className="w-full h-64 object-cover my-4 rounded-lg" src={post.image.asset.url}
                         alt={post.title}/>
                )}

                {/* Blog Content with PortableText */}
                <div className="prose max-w-none">
                    <PortableText value={post.content}/>
                </div>
            </div>
        </>
    );
};

export default BlogDetail;
