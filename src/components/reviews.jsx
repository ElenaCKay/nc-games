import { useState, useEffect } from "react";
import { fetchReviews } from "../api";

const Reviews = () => {
    const [reviewsData, setReviews] = useState([]);

    useEffect(() => {
        fetchReviews().then((data) => {
            setReviews(data);
        });
    });

    return (
        <div>
            <header>
                <h2>Reviews</h2>
            </header>
            <ul className="review-items">
                {reviewsData.map((review) => {
                    return (
                        <li className="review in list" key={review.review_id}>
                            <h3>{review.title}</h3>
                            <h4>{review.designer}</h4>
                            <p>{review.owner}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Reviews;
