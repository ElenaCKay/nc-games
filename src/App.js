import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header.jsx";
import Reviews from "./components/reviews";
import ReviewCard from "./components/reviewCard";
import { Link } from "react-router-dom";
import Comments from "./components/comments";
import SignInPage from "./components/signInPage";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [user, setUser] = useState({});
    const [signedIn, setSignedIn] = useState(false);
    return (
        <div>
            <Link to="/">
                <Header user={user} />
            </Link>
            <Routes>
                <Route
                    path="/signIn"
                    element={<SignInPage user={user} setUser={setUser} signedIn={signedIn} setSignedIn={setSignedIn} />}
                />
                <Route path="/" element={<Reviews />} />
                <Route path="/reviews" element={<Reviews signedIn={signedIn} user={user}/>} />
                <Route path="/reviews/:review_id" element={<ReviewCard user={user} signedIn={signedIn} />} />
                <Route path="/reviews/:review_id" element={<Comments user={user} signedIn={signedIn}/>} />
            </Routes>
        </div>
    );
}

export default App;
