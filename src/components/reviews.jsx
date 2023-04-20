import { useState, useEffect } from "react";
import { fetchReviews } from "../api";
import ReviewsHeader from "./reviewsHeader";
import ReviewItem from "./reviewCarousel";

const Reviews = ({ signedIn, user }) => {
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
                <ReviewsHeader signedIn={signedIn} user={user} />
                <form>
                    <select>
                        <option value="">Choose a category</option>
                        <option value="euro game">euro game</option>
                        <option value="social deduction">social deduction</option>
                        <option value="dexterity">dexterity</option>
                        <option value="children's games">children's games</option>
                    </select>
                </form>
                <div>
                    <ReviewItem reviewsData={reviewsData} />
                </div>
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
