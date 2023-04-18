import axios from "axios";

const gamesAPI = axios.create({
    baseURL: "https://games-backend-project.onrender.com",
});

export const fetchReviews = () => {
    return gamesAPI.get(`/api/reviews`).then((response) => {
        return response.data.reviews;
    });
};

export const fetchReviewById = (id) => {
    return gamesAPI.get(`/api/reviews/${id}`).then((response) => {
        return response.data.review;
    });
};

export const fetchComments = (review_id) => {
    return gamesAPI.get(`/api/reviews/${review_id}/comments`).then((response) => {
        console.log(response);
        return response.data.comments;
    });
};
