import { useState, useEffect } from "react";
import { fetchReviews } from "../api";
import ReviewsHeader from "./reviewsHeader";
import ReviewItem from "./reviewCarousel";
import CategorySelector from "./categorySelector";
import { useSearchParams } from "react-router-dom";

const Reviews = ({ signedIn, user }) => {
    const [reviewsData, setReviews] = useState([]);
    const [reviewsLoading, setReviewsLoading] = useState(true);
    const [chosenCategory, setChosenCategory] = useState("all");
    const [searchParams, setSearchParams] = useSearchParams();
    const [chosenSortBy, setchosenSortBy] = useState();

    console.log(chosenSortBy);

    useEffect(() => {
        fetchReviews(chosenCategory, chosenSortBy).then((data) => {
            setReviews(data);
            setReviewsLoading(false);
        });
    }, [chosenCategory, chosenSortBy]);

    if (!reviewsLoading) {
        return (
            <div>
                <ReviewsHeader signedIn={signedIn} user={user} />

                <CategorySelector
                    className="category-menu"
                    setSearchParams={setSearchParams}
                    searchParams={searchParams}
                    setChosenCategory={setChosenCategory}
                    chosenCategory={chosenCategory}
                    setchosenSortBy={setchosenSortBy}
                />
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
