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
                {
                    type: "block",
                    marks: {
                        decorators: [
                            { title: "Strong", value: "strong" },
                            { title: "Emphasis", value: "em" },
                            { title: "Underline", value: "underline" },
                        ],

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
                            {
                                name: "lineBreak", // Keep the lineBreak annotation
                                title: "Line Break",
                                type: "object",
                                fields: [
                                    {
                                        name: "enabled",
                                        title: "Enabled",
                                        type: "boolean",
                                        initialValue: false,
                                        hidden: true, // Hide the field from UI
                                    },
                                ],
                            },
                            {
                                name: "alignment",
                                title: "Text Alignment",
                                type: "object",
                                fields: [
                                    {
                                        name: "style",
                                        title: "Alignment",
                                        type: "string",
                                        options: {
                                            list: [
                                                { title: "Left", value: "left" },
                                                { title: "Center", value: "center" },
                                                { title: "Right", value: "right" },
                                                { title: "Justify", value: "justify" },
                                            ],
                                        },
                                    },
                                ],
                            },
                            {
                                name: "fontFamily",
                                title: "Font Family",
                                type: "object",
                                fields: [
                                    {
                                        name: "family",
                                        title: "Choose Font",
                                        type: "string",
                                        options: {
                                            list: [
                                                { title: "Arial", value: "Arial, sans-serif" },
                                                { title: "Times New Roman", value: "Times New Roman, serif" },
                                                { title: "Poppins", value: "Poppins, sans-serif" },
                                                { title: "Courier New", value: "Courier New, monospace" },
                                                { title: "Georgia", value: "Georgia, serif" },
                                                { title: "Verdana", value: "Verdana, sans-serif" },
                                            ],
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "image",
                    options: { hotspot: true },
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
