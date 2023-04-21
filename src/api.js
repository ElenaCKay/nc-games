import axios from "axios";

const gamesAPI = axios.create({
    baseURL: "https://games-backend-project.onrender.com",
});

export const fetchReviews = (category, sortBy) => {
    return gamesAPI.get(`/api/reviews`, { params: { category: category, sort_by: sortBy } }).then((response) => {
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
        return response.data.comments;
    });
};

export const patchReviewVotes = (id, incVotes) => {
    return gamesAPI.patch(`/api/reviews/${id}`, { inc_votes: incVotes }).then((response) => {
        return response.data.review.votes;
    });
};

export const postComment = (id, { username, body }) => {
    return gamesAPI.post(`/api/reviews/${id}/comments`, { username: username, body: body }).then((response) => {
        return response.data.comment;
    });
};

export const fetchUsers = () => {
    return gamesAPI.get(`/api/users`).then((response) => {
        return response.data.users;
    });
};

export const fetchCategories = () => {
    return gamesAPI.get(`/api/categories`).then((response) => {
        return response.data.categories;
    });
};
