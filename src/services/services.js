import { api } from "../axios/axios";


// ----------------------------Post methods-------------------------------------//

const PostEnquiryApi = (values) => {
    return api.post('enquiry/', values, {
        withCredentials: true,
    });
};

// ----------------------------Get methods-------------------------------------//

const getSeoApi = (path) => {
    return api.get(`seo/?path=${path}`, {
        withCredentials: true,
    });
};


export{
    getSeoApi
}