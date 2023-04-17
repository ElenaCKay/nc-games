import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header.jsx";
import Reviews from "./components/reviews";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Reviews />} />
                <Route path="/reviews" element={<Reviews />} />
            </Routes>
        </div>
    );
}

export default App;
