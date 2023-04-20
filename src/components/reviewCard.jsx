import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchReviewById } from "../api";
import ReviewSection from "./reviewSection";
import ReviewCardButtons from "./ReviewCardButtons";
import Comments from "./commentsSection";

const ReviewCard = ({ user, signedIn }) => {
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
                <br></br>
                <Comments review_id={review_id} user={user} signedIn={signedIn} />
            </div>
        );
    }
};

export default ReviewCard;
