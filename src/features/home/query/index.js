import React from 'react'
import { strapi } from '../../../axios';

export const fetchCats = async () => {
    const { data } = await strapi.request(`post`, 'graphql', {
        data: {
            query: `
            query{
                categories{
                    name
                    thumbnail{
                        url
                    }
                }
            }`
        }
    });
    return data.categories;
}