import React, { useContext , useState } from "react";
import { productContext } from "../App";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Search() {
    const { categories , searchTerm , setSearchTerm , darkMode } = useContext(productContext);
    const [searchParams, setSearchParams] = useSearchParams();
    let navigate = useNavigate()

    function handleClick(e) {
        e.preventDefault();
        setSearchParams({
            searchTerm: searchTerm,
        });
        navigate("/products"); // Navigate to the products page
    }
    
    return (
        <div>
            <div className={darkMode ? "bg-darkSecondary px-10 py-4 sm:flex items-center" : "bg-secondary px-10 py-4 sm:flex items-center"}>
                <div className="sm:w-[500px] flex items-center">
                    <label htmlFor="product"></label>
                    <input
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}
                        className="flex-1 rounded-md p-2 sm:max-w-[500px]"
                        type="text"
                        name="product"
                        id="product"
                        placeholder="Search for a product"
                    />
                    <button onClick={(e)=> handleClick(e)} className={darkMode ? "bg-darkPrimary text-white rounded-md py-2 px-4 text-bold ml-3" : "bg-primary text-white rounded-md py-2 px-4 text-bold ml-3"}>
                        Search
                    </button>
                </div>

                <div className="sm:ml-10 mt-4 sm:mt-0 sm:flex items-center ">
                    <button
                        className={
                            searchParams.get("category") === null
                                ? `whitespace-nowrap ${darkMode ? "bg-darkPrimary" : " bg-neutral" } 
                                ${darkMode ? "text-neutral" : "text-primary" } rounded-md py-1 px-2 my-1 text-sm ml-2`
                                : `whitespace-nowrap ${darkMode ? "text-neutral" : "text-primary" } text-white rounded-md py-1 px-2 my-1 text-sm ml-2`
                        }
                        onClick={() => setSearchParams({})}
                    >
                        All products
                    </button>
                    {categories.map((category) => {
                        const largeFirstLetter = category[0].toUpperCase() + category.slice(1);
                        return (
                            <button
                                onClick={() =>
                                    setSearchParams({ category: category })
                                }
                                key={category}
                                className={
                                    searchParams.get("category") === category
                                    ? `whitespace-nowrap ${darkMode ? "bg-darkPrimary" : " bg-neutral" } 
                                    ${darkMode ? "text-neutral" : "text-primary" } rounded-md py-1 px-2 my-1 text-sm ml-2`
                                    : `whitespace-nowrap ${darkMode ? "text-neutral" : "text-primary" } text-white rounded-md py-1 px-2 my-1 text-sm ml-2`
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
