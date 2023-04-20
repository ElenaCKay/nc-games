import { useState, useEffect } from "react";
import { fetchCategories } from "../api";

const CategorySelector = ({ setCategory }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories().then((response) => {
            setCategories(response);
        });
    }, []);

    return (
        <select
            id="category-selector"
            defaultValue=""
            onChange={(ev) => {
                setCategory(ev.target.value);
            }}
        >
            <option value="">Choose a category</option>
            {categories.map((category) => {
                return <option key={`${category.slug}`} value={`${category.slug}`}>{`${category.slug}`}</option>;
            })}
        </select>
    );
};

export default CategorySelector;
