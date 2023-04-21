import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

const ReviewItem = ({ reviewsData }) => {
    return (
        <div className="carousel">
            <Carousel variant="dark" fade>
                {reviewsData.map((review) => {
                    return (
                        <Carousel.Item key={`${review.review_id}`}>
                            <img
                                className="d-block w-100 img-caro"
                                src={`${review.review_img_url}`}
                                alt="First slide"
                            />
                            <Carousel.Caption className="caro-caption">
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
