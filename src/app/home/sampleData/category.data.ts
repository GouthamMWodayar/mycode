import { Category } from "../types/category.type";

export const categories :Category []=[
    {
        id :1,
        category:'Men'
    },
    {
        id :2,
        category:'Women'
    },
    {
        id :3,
        category:'Kids'
    },
    {
        id :4,
        category:'Shoes',
        parent_category_id:2
    },
    {
        id :5,
        category:'Party Wear',
        parent_category_id:1
    },
    {
        id :6,
        category:'Accessory',
        parent_category_id:3
    },

    {
        id :7,
        category:'Foot ware',
        parent_category_id:2
    },
]