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

const getBlogsApi = (page,page_limit) => {
    return api.get(`blogs/?page=${page}&&page_limit=${page_limit}`, {
        withCredentials: true,
    });
};

const getBlogDetailsApi = (slug) => {
    return api.get(`blog/${slug}/`, {
        withCredentials: true,
    });
};

const getTestimonialApi = () => {
    return api.get(`testimonials/`, {
        withCredentials: true,
    });
};

const getFaqApi = () => {
    return api.get(`faq/`, {
        withCredentials: true,
    });
};

const getAchievementsApi = (page,page_limit) => {
    return api.get(`achievements/?page=${page}&&page_limit=${page_limit}`, {
        withCredentials: true,
    });
};

const getGalaryApi = (page,page_limit) => {
    return api.get(`galary/?page=${page}&&page_limit=${page_limit}`, {
        withCredentials: true,
    });
};

const getGalleryDetailsApi = (slug) => {
    return api.get(`galary/${slug}/`, {
        withCredentials: true,
    });
};

// Porjects
const getFeaturedProject = (page,page_limit) =>{
    return api.get(`projects/?promot=True&&page=${page}&&page_limit=${page_limit}`, {
        withCredentials: true,
    });;
}

const getOngoingProject = (page,page_limit) =>{
    return api.get(`projects/?status=ongoing&&page=${page}&&page_limit=${page_limit}`, {
        withCredentials: true,
    });;
}

const getUpcomingProject = (page,page_limit) =>{
    return api.get(`projects/?status=upcoming&&page=${page}&&page_limit=${page_limit}`, {
        withCredentials: true,
    });;
}

const getCompletedProject = (page,page_limit) =>{
    return api.get(`projects/?status=completed&&page=${page}&&page_limit=${page_limit}`, {
        withCredentials: true,
    });;
}

const getReadyToOccupyProject = (page,page_limit) =>{
    return api.get(`projects/?status=ready to occupy&&page=${page}&&page_limit=${page_limit}`, {
        withCredentials: true,
    });;
}

// Job api
const getCareersApi = (page,page_limit) => {
    return api.get(`careers/?page=${page}&&page_limit=${page_limit}`, {
        withCredentials: true,
    });
};

const getCareersSuggestionApi = () => {
    return api.get(`careers-suggestion/`, {
        withCredentials: true,
    });
};


export{
    getSeoApi,
    getBlogsApi,
    getBlogDetailsApi,
    getTestimonialApi,
    getFaqApi,
    getAchievementsApi,
    getGalaryApi,
    getGalleryDetailsApi,
    getFeaturedProject,
    getOngoingProject,
    getUpcomingProject,
    getCompletedProject,
    getReadyToOccupyProject,
    getCareersApi,
    getCareersSuggestionApi,
}