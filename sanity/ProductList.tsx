import { defineField } from "sanity";

export const product = {
    name: "product", /// or ya name hum jub data get karay gay phir ay ga
    type: "document",
    title: "Product", /// ya title sanity kae studio kae liya han sanity kae studio par name likha ay ga
    fields: [
        {
            name: "name",
            title: "Product Name",
            type: "string",
        },
        {
            name: "price",
            title: "Product Price",
            type: "number",
        },
        {
            name: "subcat",
            title: "Product Subcatoray",
            type: "string",
        },
        {
            name: "quantity",
            title: "Product Quantity",
            type: "number",
        },
        {
            name: "tagline",
            title: "Product Tagling",
            type: "string",
        },
        {
            name: "image",
            title: "Product Image",
            type: "image",
        },
        {
            name: "category",
            title: "Product Category",
            type: "string"
        }
        // defineField({
        //     name: "category",
        //     title: "Product Category",
        //     type: "string"
        // }),
        // {
        //     name: "description",
        //     title: "Product Description",
        //     type: "array",
        //     of: [
        //         {
        //             type: "block"
        //         }
        //     ]
        // },
        // {
        //     name: "image",
        //     title: "Product Image",
        //     type: "array",
        //     of: [
        //         {
        //             type: "image",
        //             fields: [
        //                 {
        //                     name: "alt",
        //                     type: "text",
        //                     title: "Alternative text"
        //                 }
        //             ]
        //         }
        //     ]
        // },
        // {
        //     name: "productTypes",
        //     type: "array",
        //     title: "Product Type",
        //     of: [
        //         {
        //             type: "string"
        //         }
        //     ]
        // },
        // {
        //     name: "price",
        //     title: "Product Price",
        //     type: "number",
        // },
        // {
        //     name: "size",
        //     title: "Size",
        //     type: "array",
        //     of: [{ type: 'string' }]
        // },
        // {
        //     name: "quantity",
        //     title: "Quantity",
        //     type: "string"
        // }
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
