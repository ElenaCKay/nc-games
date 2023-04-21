import { useState, useEffect } from "react";
import { fetchReviews } from "../api";
import ReviewsHeader from "./reviewsHeader";
import ReviewItem from "./reviewCarousel";
import CategorySelector from "./categorySelector";
import { useParams } from "react-router-dom";

const Reviews = ({ signedIn, user }) => {
    const [reviewsData, setReviews] = useState([]);
    const [reviewsLoading, setReviewsLoading] = useState(true);
    const [chosenCategory, setChosenCategory] = useState("all");

    let { category } = useParams();
    console.log(category);
    if (category && category !== chosenCategory) {
        setChosenCategory(category);
    }

    useEffect(() => {
        fetchReviews(chosenCategory).then((data) => {
            setReviews(data);
            setReviewsLoading(false);
        });
    }, [chosenCategory]);

    if (!reviewsLoading) {
        return (
            <div>
                <ReviewsHeader signedIn={signedIn} user={user} />

                <CategorySelector className="category-button" setChosenCategory={setChosenCategory} />

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
