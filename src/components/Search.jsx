import React, { useContext } from "react";
import { productContext } from "../App";
import { useSearchParams, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function Search() {
    const { categories, searchTerm, setSearchTerm } =
        useContext(productContext);
    const [searchParams, setSearchParams] = useSearchParams();
    let navigate = useNavigate();

    function handleClick(e) {
        e.preventDefault();
        setSearchParams({
            searchTerm: searchTerm,
        });
        navigate("/products");
    }

    function handleCategoryClick(category) {
        navigate(`/products?category=${category}`);
    }

    return (
        <div>
            <div className="bg-secondary text-text sm:flex px-10 py-3">
                <div className="flex">
                    <input
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}
                        className="mr-3 flex-1 bg-background text-text rounded-md p-2"
                        type="text"
                        name="product"
                        id="product"
                        placeholder="Search for a product"
                    />
                    <button
                        onClick={(e) => handleClick(e)}
                        className="bg-primary text-text rounded-md py-2 px-4 text-2xl text-bold"
                    >
                        <FaSearch />
                    </button>
                </div>

                <div>
                    <select
                        className="bg-background text-text rounded-md py-2 px-3 mt-2 sm:hidden"
                        name="categories"
                        id="categories"
                    >
                        <option
                            onClick={() => navigate(`/products`)}
                            value="all"
                        >
                            All Products
                        </option>
                        {categories.map((category) => {
                            return (
                                <option
                                    key={category}
                                    onClick={() =>
                                        handleCategoryClick(category)
                                    }
                                    value={category}
                                >
                                    {category}
                                </option>
                            );
                        })}
                    </select>
                </div>

                <div className="hidden sm:ml-10 sm:mt-0 sm:flex items-center ">
                    <button
                        className={
                            searchParams.get("category") === null
                                ? `whitespace-nowrap bg-background text-text rounded-md py-1 px-2 my-1 text-sm ml-2`
                                : `whitespace-nowrap  text-white rounded-md py-1 px-2 my-1 text-sm ml-2`
                        }
                        onClick={() => setSearchParams({})}
                    >
                        All products
                    </button>
                    {categories.map((category) => {
                        const largeFirstLetter =
                            category[0].toUpperCase() + category.slice(1);
                        return (
                            <button
                                onClick={() => {
                                    handleCategoryClick(category);
                                }}
                                key={category}
                                className={
                                    searchParams.get("category") === category
                                        ? `whitespace-nowrap bg-background text-text rounded-md py-1 px-2 my-1 text-sm ml-2`
                                        : `whitespace-nowrap text-white rounded-md py-1 px-2 my-1 text-sm ml-2`
                                }
                            >
                                {largeFirstLetter}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Search;
