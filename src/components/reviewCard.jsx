import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchReviewById } from "../api";

const ReviewCard = () => {
    const { review_id } = useParams();
    const [review, setReview] = useState({});
    const [reviewLoading, setreviewLoading] = useState(true);

    useEffect(() => {
        fetchReviewById(review_id).then((data) => {
            setReview(data);
            setreviewLoading(false);
        });
    }, [review_id]);

    if (reviewLoading) {
        return <h3>Loading...</h3>;
    } else {
        return (
            <div>
                <section className="Review-section">
                    <h2 className="Review-title">{review.title}</h2>
                    <h3 className="Review-title">Created by: {review.designer}</h3>
                    <img src={`${review.review_img_url}`} alt="Game" />
                    <h4>Reviewer: {review.owner}</h4>
                    <p>
                        {review.review_body} <br></br>
                        {review.created_at}
                    </p>
                    <h4>Votes: {review.votes}</h4>
                </section>
                <button>Up Vote</button>
                <button>Down Vote</button>
                <button>Comments</button>
            </div>
        );
    }
};

export default ReviewCard;
