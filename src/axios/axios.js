import axios from "axios";
export const baseUrl = 'https://cidbi-backend.accoladesweb.com/api/client/';
// export const baseUrl = 'http://127.0.0.1:8000/api/client/';

const api = axios.create({
    baseURL: baseUrl,
    timeout: 8000,
    headers: {
        "Content-Type" : "application/json",
    }
});

// Request middleware
api.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);


// Responce middleware

api.interceptors.response.use(
    function (response) {
        return response
    },
    function (error) {
        // location.assign("/error")
        console.error("Error in response:", error);
        return Promise.reject(error)
    }
)

export {api};