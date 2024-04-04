import React from "react";
import { productContext } from "../App";
import { useContext } from "react";
import { Link } from "react-router-dom";

function CartDetails() {
    const { addToCart, setAddToCart } = useContext(productContext);

    const handleDecrement = (id) => {
        const updatedCart = addToCart.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: Math.max(1, item.quantity - 1) };
            }
            return item;
        });
        setAddToCart(updatedCart);
    };

    const handleIncrement = (id) => {
        const updatedCart = addToCart.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setAddToCart(updatedCart);
    };

    const handleRemove = (id) => {
        const updatedCart = addToCart.filter((item) => item.id !== id);
        setAddToCart(updatedCart);
    };

    const renderProducts =
        addToCart.length > 0 ? (
            addToCart.map((product) => {
                return (
                    <div
                        key={product.product.id}
                        className="sm:max-w-full rounded-md p-4 m-2 flex flex-col items-start gap-6"
                    >
                        <div
                            key={product.product.id}
                            className="h-[300px] overflow-hidden rounded-md flex items-center justify-center"
                        >
                            <img
                                className="object-contain max-h-full max-w-full"
                                src={product.product.image}
                                alt={product.product.title}
                            />
                        </div>
                        <h1 className="text-xl line-clamp-1">
                            {product.product.title}
                        </h1>
                        <div className="text-neutral flex flex-col gap-3 items-start ">
                            <div className="flex gap-2 items-center">
                                <p className=" w-[85px]  text-center whitespace-nowrap bg-primary py-2 px-3 rounded-md ">
                                    {product.product.price * product.quantity} $
                                </p>
                                <button
                                    onClick={() => {
                                        handleDecrement(product.id);
                                    }}
                                    className="bg-secondary py-2 px-3 rounded-md whitespace-nowrap"
                                >
                                    -
                                </button>
                                <div className="border-2 border-secondary py-2 px-3 rounded-md text-secondary">
                                    {product.quantity}
                                </div>
                                <button
                                    onClick={() => {
                                        handleIncrement(product.id);
                                    }}
                                    className="bg-secondary py-2 px-3 rounded-md whitespace-nowrap"
                                >
                                    +
                                </button>
                                <button
                                    className="bg-red-500 py-2 px-3 rounded-md whitespace-nowrap"
                                    onClick={() => handleRemove(product.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })
        ) : (
            <div className="flex items-center justify-center gap-10">
                <h1 className="text-3xl m-5 text-secondary">
                    {" "}
                    No Products in Cart{" "}
                </h1>
                <button className="text-white text-center whitespace-nowrap bg-primary py-2 px-3 rounded-md">
                    {" "}
                    <Link to="/products">Back </Link>{" "}
                </button>
            </div>
        );
    return renderProducts;
}

export default CartDetails;
