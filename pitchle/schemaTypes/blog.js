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
            of: [
                { type: "block" }, // Supports rich text (bold, italic, etc.)
                {
                    type: "image",  // ✅ Allow images inside the content array
                    options: { hotspot: true }
                },
            ],
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
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
            options: { source: "title", maxLength: 96 },
        },
        {
            name: "isMajorBlog",
            title: "Make this the major blog",
            type: "boolean",
            description: "Check this to display this blog as the major blog on top.",
        },
    ],
};
