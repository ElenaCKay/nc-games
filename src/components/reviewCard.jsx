import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchReviewById, patchReviewVotes } from "../api";

const ReviewCard = () => {
    const { review_id } = useParams();
    const [review, setReview] = useState({});
    const [reviewLoading, setreviewLoading] = useState(true);
    const [reviewVotes, setReviewVotes] = useState(0);
    const [incVotes, setIncVotes] = useState(0);

    useEffect(() => {
        fetchReviewById(review_id).then((data) => {
            setReview(data);
            setReviewVotes(data.votes);
            setreviewLoading(false);
        });
    }, [review_id]);

    useEffect(() => {
        patchReviewVotes(review_id, incVotes)
            .then((data) => {
                setReviewVotes(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [review_id, incVotes]);

    const upVoteHandler = (effect) => {
        setIncVotes(1);
    };
    const downVoteHandler = (effect) => {
        setIncVotes(-1);
    };

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
                    <h4>Votes: {reviewVotes}</h4>
                </section>
                <button onClick={upVoteHandler}>Up Vote</button>
                <button onClick={downVoteHandler}>Down Vote</button>
                <button>Comments</button>
            </div>
        );
    }
};

export default ReviewCard;
