import axios, { strapi } from '../../axios';

// export const getCategories = async () => {
//     const { data } = await axios({
//         method: "GET",
//         url: `categories?token=1234`
//     });
//     return data;
// }

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