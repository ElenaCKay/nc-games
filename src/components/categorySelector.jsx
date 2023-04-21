import { useState, useEffect } from "react";
import { fetchCategories } from "../api";

const CategorySelector = ({ setSearchParams, searchParams, setChosenCategory, chosenCategory, setchosenSortBy }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories().then((response) => {
            setCategories(response);
        });
    }, []);

    const categoryQuery = searchParams.get("category");
    if (categoryQuery && categoryQuery !== chosenCategory) {
        setChosenCategory(categoryQuery);
    }

    const searchByQuery = searchParams.get("sort_by");
    const setSortBy = (ev) => {
        const newSortByParams = new URLSearchParams(searchParams);
        newSortByParams.set("sort_by", ev.target.value);
        setSearchParams(newSortByParams);
    };
    
    setchosenSortBy(searchByQuery)

    return (
        <section>
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
            <select id="SortBy-selector" defaultValue="" onChange={setSortBy}>
                <option value="">Sort By</option>
                <option value="created_at">Date</option>
                <option value="votes">Votes</option>
                <option value="comment_count">Amount of comments</option>
            </select>
        </section>
    );
};

export default CategorySelector;
