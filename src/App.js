import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header.jsx";
import Reviews from "./components/reviews";
import ReviewCard from "./components/reviewCard";
import { Link } from "react-router-dom";
import Comments from "./components/comments";

function App() {
    return (
        <div>
            <Link to="/">
                <Header />
            </Link>
            <Routes>
                <Route path="/" element={<Reviews />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/reviews/:review_id" element={<ReviewCard />} />
                <Route path="/reviews/:review_id" element={<Comments />} />
                {/* <Route path="/reviews/:review_id/comments" element={<Comments />} /> */}
            </Routes>
        </div>
    );
}

export default App;
