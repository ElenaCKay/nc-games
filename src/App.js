import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header.jsx";
import Reviews from "./components/reviews";
import ReviewCard from "./components/reviewCard";
import GoToTopButton from "./components/go-to-top-button";
import { Link } from "react-router-dom";

function App() {
    return (
        <div>
            <Link to="/">
                <Header />
            </Link>
            <GoToTopButton />
            <Routes>
                <Route path="/" element={<Reviews />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/reviews/:review_id" element={<ReviewCard />} />
            </Routes>
        </div>
    );
}

export default App;
