import { useState, useEffect } from "react";
import { fetchReviews } from "../api";
import ReviewsHeader from "./reviewsHeader";
import ReviewItem from "./reviewCarousel";
import CategorySelector from "./categorySelector";

const Reviews = ({ signedIn, user }) => {
    const [reviewsData, setReviews] = useState([]);
    const [reviewsLoading, setReviewsLoading] = useState(true);
    const [category, setCategory] = useState("");

    useEffect(() => {
        fetchReviews(category).then((data) => {
            setReviews(data);
            setReviewsLoading(false);
        });
    }, [category]);
    
    if (!reviewsLoading) {
        return (
            <div>
                <ReviewsHeader signedIn={signedIn} user={user} />

                <CategorySelector className="category-button" setCategory={setCategory} />

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
