import React , { useContext } from "react";
import { productContext } from "../App";
import { Link } from "react-router-dom";
import { CiSquareRemove } from "react-icons/ci";

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
                        className="sm:max-w-[280px] max-w-[350px] rounded-md p-4 m-2 flex flex-col items-start gap-6"
                    >
                        <div
                            key={product.product.id}
                            className="bg-white h-[300px] overflow-hidden rounded-md flex "
                        >
                            <img
                                className="object-contain w-full object-center"
                                src={product.product.image}
                                alt={product.product.title}
                            />
                        </div>
                        <h1 className="text-xl line-clamp-1">
                            {product.product.title}
                        </h1>
                        <div className="text-neutral flex flex-col gap-3 items-start">
                            <div className=" space-y-3 sm:flex gap-2 items-center justify-center">
                                <p className=" w-[85px]  text-center whitespace-nowrap bg-primary py-2 px-3 rounded-md ">
                                    {product.product.price * product.quantity} $
                                </p>
                                <div className="flex gap-2">
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
                                </div>
                                <button
                                    className="bg-red-500 text-xl py-2 px-3 rounded-md whitespace-nowrap"
                                    onClick={() => handleRemove(product.id)}
                                >
                                    <CiSquareRemove />
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })
        ) : (
            <div className="flex flex-col w-full items-center justify-center h-[80vh] gap-7">
                <h1 className="text-3xl m-5 text-text">
                    No Products in Cart
                </h1>
                <Link to="/products">
                    <button className="text-text text-center whitespace-nowrap bg-primary py-2 px-5 text-lg rounded-md">
                        Back
                    </button>
                </Link>
            </div>
        );
    return renderProducts;
}

export default CartDetails;
