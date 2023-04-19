import { Link } from "react-router-dom";

const ReviewsHeader = ({ signedIn, user }) => {
    console.log(signedIn);

    if (!signedIn) {
        return (
            <header className="reviews-header">
                <h2>Reviews</h2>
                <Link to="/signIn">
                    <h3>Sign in</h3>
                </Link>
            </header>
        );
    }

    if (signedIn) {
        return (
            <header className="reviews-header">
                <h2>Welcome {user.name}! <br></br>Here are some reviews...</h2>
            </header>
        );
    }
};

export default ReviewsHeader;
