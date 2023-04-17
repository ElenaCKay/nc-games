import axios from "axios";

const gamesAPI = axios.create({
    baseURL: "https://games-backend-project.onrender.com",
});

export const fetchReviews = () => {
    return gamesAPI.get(`/api/reviews`).then((response) => {
        return response.data.reviews;
    });
};
