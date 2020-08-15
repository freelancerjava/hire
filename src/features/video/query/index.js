const { strapi } = require("../../../axios")

export const getVideosByCategory = async (key, { suid }) => {
    const { data } = await strapi.request("POST", "graphql", {
        data: {
            query: `
            query {
                svideos(where: { category: { suid: ${suid} } }) {
                  name
                }
              }
            `
        }
    })
    return data.svideos;
}

export const getVideo = async (key, { id }) => {
    const { data } = await strapi.request("POST", "graphql", {
        data: {
            query: `
            query {
                svideo( id: ${id} ) {
                    name
                    video{
                      url
                    }
                    category{
                      name
                    }
                    thumbnail{
                        url
                    }
                    duration
                }
              }
            `
        }
    })
    return data.svideo;
}

export const getVideos = async () => {
    const { data } = await strapi.request("POST", "graphql", {
        data: {
            query: `
                query {
                    svideos {
                        id
                        name
                        description
                        category{
                            name
                            suid
                        }
                        language{
                            name
                        }
                        thumbnail {
                            url
                        }
                        views
                    }
                }
            `
        }
    })
    return data.svideos;
}