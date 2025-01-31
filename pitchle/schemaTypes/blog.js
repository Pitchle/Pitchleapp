export default {
    name: "blog",
    title: "Blog",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "text",
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [{ type: "block" }], // Supports rich text (bold, italic, etc.)
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true, // Enables image cropping
            },
        },
        {
            name: "publishedAt",
            title: "Published At",
            type: "datetime",
        },
        {
            name: "status",
            title: "Status",
            type: "string",
            options: {
                list: [
                    { title: "Draft", value: "draft" },
                    { title: "Published", value: "published" },
                ],
            },
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title", // Automatically generates the slug based on the title
                maxLength: 96, // Optional: to limit the length of the slug
            },
        },
    ],
};
