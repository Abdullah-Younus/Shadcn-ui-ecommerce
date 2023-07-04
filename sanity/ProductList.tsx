import { defineField } from "sanity";

export const product = {
    name: "product",
    type: "document",
    title: "Product",
    fields: [
        {
            name: "title",
            title: "Product Title",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 200,
                slugify: (input: string) => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        },
        {
            name: "description",
            title: "Product Description",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: "image",
            title: "Product Image",
            type: "array",
            of: [
                {
                    type: "image",
                    fields: [
                        {
                            name: "alt",
                            type: "text",
                            title: "Alternative text"
                        }
                    ]
                }
            ]
        },
        {
            name: "productTypes",
            type: "array",
            title: "Product Type",
            of: [
                {
                    type: "string"
                }
            ]
        },
        {
            name: "price",
            title: "Product Price",
            type: "number",
        },
        {
            name: "quantity",
            title: "Quantity",
            type: "string"
        }

        // defineField({
        //     name: "category",
        //     title: "Product Category",  
        //     to: [
        //         {
        //           type: "category",
        //         },
        //         /// other document type
        //       ],
        // }),
    ],
};
