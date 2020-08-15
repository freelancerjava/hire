import axios from 'axios';
import Strapi from 'strapi-sdk-javascript';

const apiUrl = 'https://admin.socket.uz/'
export const baseURL = 'https://admin.socket.uz';


export const strapi = new Strapi(apiUrl);

const myAxios = axios.create({
    baseURL: apiUrl
});


myAxios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

myAxios.interceptors.request.use(config => {
    config.params = {
        access_token: localStorage.getItem('token'),
    };
    return config;
});

export default myAxios
