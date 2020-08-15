const { strapi } = require("../../../axios")

export const getVideosByCategory = async (key, { id }) => {
    console.log(id);
    const { data } = await strapi.request("POST", "graphql", {
        data: {
            query: `
                    query {
                        category(id:"${id}"){
                            id
                            svideos{
                                name
                            }
                        }
                    }
            `
        }
    })
    return data.category.svideos;
}