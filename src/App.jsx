import React, { useEffect, useState, createContext } from "react";
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
export const productContext = createContext();

function App() {
    const [productsArray, setProductsArray] = React.useState([]);
    const [categories, setCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [addToCart, setAddToCart] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [darkMode , setDarkMode] = useState(false);

    const CartItems = [];

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await axios.get(
                    "https://fakestoreapi.com/products"
                );
                setProductsArray(response.data);

                const uniqueCategories = new Set(
                    response.data.map((product) => product.category)
                );
                setCategories([...uniqueCategories]);
            } catch (error) {
                console.log(error);
                throw new Error("Error fetching products");
            }
        }

        fetchProducts();
    }, []);

    categories.filter((category) => {
        if (!categories.includes(category)) {
            return category;
        }
    });

    const contextValue = {
        products: productsArray,
        categories: categories,
        searchTerm: searchTerm,
        setSearchTerm: setSearchTerm,
        addToCart: addToCart,
        setAddToCart: setAddToCart,
        quantity: quantity,
        setQuantity: setQuantity,
        CartItems: CartItems,
        darkMode: darkMode,
        setDarkMode: setDarkMode,
    };

    return (
        <productContext.Provider value={contextValue}>
            <div className="bg-neutral">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="products" element={<Products />} />
                            <Route path="products/:id" element={<Product />} />
                            <Route path="about" element={<About />} />
                            <Route path="login" element={<Login />} />
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
