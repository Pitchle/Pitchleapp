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

        // Content

        {
            name: "content",
            title: "Content",
            type: "array",
            of: [
                {
                    type: "block",
                    marks: {
                        annotations: [
                            {
                                name: "color",
                                title: "Text Color",
                                type: "object",
                                fields: [
                                    {
                                        name: "hex",
                                        title: "Hex Code",
                                        type: "string",
                                        description: "Enter a hex color (e.g., #ff5733)",
                                        validation: (Rule) =>
                                            Rule.regex(/^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/, {
                                                name: "hex color",
                                            }).error("Enter a valid hex color"),
                                    },
                                ],
                            },
                            {
                                name: "link",
                                title: "Hyperlink",
                                type: "object",
                                fields: [
                                    {
                                        name: "href",
                                        title: "URL",
                                        type: "url",
                                        validation: (Rule) => Rule.uri({ allowRelative: false }),
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "image",
                    options: { hotspot: true }, // Enable cropping
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
        {
            name: "category",
            title: "Category",
            type: "string",
            options: {
                list: [
                    { title: "Latest Updates", value: "latest updates" },
                    { title: "Sell & Transfer", value: "sell & transfer" },
                    { title: "Partners & Investors", value: "partners & investors" },
                    { title: "Promote", value: "Promote" },
                    { title: "Events & Networking", value: "events & networking" },
                ],
            },
        },
    ],
};
