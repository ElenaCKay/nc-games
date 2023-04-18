import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchReviewById } from "../api";
import ReviewSection from "./reviewSection";
import ReviewCardButtons from "./ReviewCardButtons";

const ReviewCard = () => {
    const { review_id } = useParams();
    const [review, setReview] = useState({});
    const [reviewLoading, setreviewLoading] = useState(true);
    const [reviewVotes, setReviewVotes] = useState(0);

    useEffect(() => {
        fetchReviewById(review_id).then((data) => {
            setReview(data);
            setReviewVotes(data.votes);
            setreviewLoading(false);
        });
    }, [review_id]);

    if (reviewLoading) {
        return <h3>Loading...</h3>;
    } else {
        return (
            <div>
                <ReviewSection review={review} reviewVotes={reviewVotes} />
                <ReviewCardButtons review_id={review_id} setReviewVotes={setReviewVotes} />
                <button>Comments</button>
            </div>
        );
    }
};

export default ReviewCard;
