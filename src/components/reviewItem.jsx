import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

const ReviewItem = ({ reviewsData }) => {
    return (
        // <ul className="review-items">
        //     {reviewsData.map((review) => {
        //         return (
        //             <li className="review in list" key={review.review_id}>
        //                 <Link to={`/reviews/${review.review_id}`}>
        //                     <h3>{review.title}</h3>
        //                 </Link>
        //                 <h4>Designer: {review.designer}</h4>
        //                 <img src={`${review.review_img_url}`} alt="Game" />
        //                 <p>Reviewer: {review.owner}</p>
        //             </li>
        //         );
        //     })}
        // </ul>
        <div className="carousel">
            <Carousel variant="dark">
                {reviewsData.map((review) => {
                    return (
                        <Carousel.Item>
                            <img className="d-block w-100" src={`${review.review_img_url}`} alt="First slide" />
                            <Carousel.Caption>
                                <Link to={`/reviews/${review.review_id}`}>
                                    <h5>{review.title}</h5>
                                </Link>
                                <p>Reviewer: {review.owner}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default ReviewItem;