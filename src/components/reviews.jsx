import { useState, useEffect } from "react";
import { fetchReviews } from "../api";

const Reviews = () => {
    const [reviewsData, setReviews] = useState([]);
    const [reviewsLoading, setReviewsLoading] = useState(true);

    useEffect(() => {
        fetchReviews().then((data) => {
            setReviews(data);
            setReviewsLoading(false);
        });
    }, []);

    if (!reviewsLoading) {
        return (
            <div>
                <header>
                    <h2>Reviews</h2>
                </header>
                <form>
                    <select>
                        <option value="">Choose a category</option>
                        <option value="euro game">euro game</option>
                        <option value="social deduction">social deduction</option>
                        <option value="dexterity">dexterity</option>
                        <option value="children's games">children's games</option>
                    </select>
                </form>
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
    } else {
        return (
            <div>
                <h3>Loading...</h3>
            </div>
        );
    }
};

export default Reviews;
