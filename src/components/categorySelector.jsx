import { useState, useEffect } from "react";
import { fetchCategories } from "../api";

const CategorySelector = ({ setSearchParams, searchParams }) => {
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
                const newParams = new URLSearchParams(searchParams);
                newParams.set("category", ev.target.value);
                setSearchParams(newParams);
            }}
        >
            <option value="all">Choose a category</option>
            {categories.map((category) => {
                return <option key={`${category.slug}`} value={`${category.slug}`}>{`${category.slug}`}</option>;
            })}
        </select>
    );
};

export default CategorySelector;
