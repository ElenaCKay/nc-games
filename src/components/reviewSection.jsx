const ReviewSection = ({ review, reviewVotes }) => {
    return (
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
    );
};

export default ReviewSection;
