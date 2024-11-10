import React, { useEffect, useState, createContext, useMemo } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import CartDetails from "./components/CartDetails";
import About from "./components/About";
import Login from "./components/Login";
import Payment from "./components/Payment";
import SignUp from "./components/SignUp";

export const productContext = createContext();

function App() {
    const [productsArray, setProductsArray] = React.useState([]);
    const [categories, setCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [addToCart, setAddToCart] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        console.log("useEffect render");
        async function fetchProducts() {
            try {
                // Fetch Data from Fakestoreapi
                const response = await axios.get(
                    "https://fakestoreapi.com/products"
                );
                setProductsArray(response.data);

                // Export Categories
                const uniqueCategories = Array.from(
                    new Set(response.data.map((product) => product.category))
                );
                setCategories(uniqueCategories);
            } catch (error) {
                console.log(error);
                throw new Error("Error fetching products");
            }
        }

        fetchProducts();
    }, []);

    // categories.filter((category) => {
    //     if (!categories.includes(category)) {
    //         return category;
    //     }
    // });

    const contextValue = useMemo(() => {
        console.log("useMemo render");
        return {
            products: productsArray,
            categories: categories,
            searchTerm: searchTerm,
            setSearchTerm: setSearchTerm,
            addToCart: addToCart,
            setAddToCart: setAddToCart,
            quantity: quantity,
            setQuantity: setQuantity,
            darkMode: darkMode,
            setDarkMode: setDarkMode,
        };
    }, [productsArray, categories, searchTerm, addToCart, quantity, darkMode]);

    useEffect(() => {
        const savedMode = localStorage.getItem("darkMode");
        if (savedMode) {
            setDarkMode(savedMode === "true");
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    return (
        <productContext.Provider value={contextValue}>
            <div
                className={
                    darkMode
                        ? "dark font-poppins bg-background "
                        : "light font-poppins bg-background"
                }
            >
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="products" element={<Products />} />
                            <Route path="products/:id" element={<Product />} />
                            <Route path="about" element={<About />} />
                            <Route path="login" element={<Login />} />
                            <Route path="signup" element={<SignUp />} />
                            <Route path="cart" element={<Cart />}>
                                <Route element={<CartDetails />} />
                                <Route element={<Payment />} />
                            </Route>
                            <Route
                                path="*"
                                element={<h1>Page Not Found </h1>}
                            />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </productContext.Provider>
    );
}

export default App;
