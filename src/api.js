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
