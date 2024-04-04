import React from "react";
import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { productContext } from "../App";
import { ImStarFull } from "react-icons/im";

function Product() {
    const { products , addToCart , setAddToCart , darkMode } = useContext(productContext);

    const params = useParams();

    const clickedProduct = products.find(
        (product) => product.id === parseInt(params.id)
    );

    function handleAddToCart(e, id, product) {
        e.preventDefault();
        e.stopPropagation();
        const productToAdd = products.find((prod) => prod.id === id);

        if (productToAdd) {
            const existingCartItemIndex = addToCart.findIndex(
                (item) => item.id === id
            );

            if (existingCartItemIndex === -1) {
                // If the product is not already in the cart, add it with quantity 1
                setAddToCart([
                    ...addToCart,
                    {
                        id: productToAdd.id,
                        quantity: 1,
                        product,
                    },
                ]);
            } else {
                const updatedCart = [...addToCart];
                updatedCart[existingCartItemIndex].quantity++;
                setAddToCart(updatedCart);
            }
        }
    }

    return (
        <div className={darkMode ? "bg-DarkNeutral p-4" : "bg-white p-4"}>
            <div className="bg-white max-w-[400px] sm:max-w-lg rounded-md p-4 flex flex-col items-start gap-6">
                <div className="h-[400px] overflow-hidden rounded-md flex items-center justify-center">
                    <img
                        className="object-contain max-h-full max-w-full"
                        src={clickedProduct.image}
                        alt={clickedProduct.title}
                    />
                </div>
                <h1 className="text-xl line-clamp-1">{clickedProduct.title}</h1>
                <p className="line-clamp-3">{clickedProduct.description}</p>
                <div className="text-neutral flex flex-col gap-3 items-start ">
                    <div className="whitespace-nowrap text-black text-sm">
                        <div className="flex gap-2">
                            <p className="text-lg">
                                <ImStarFull />
                            </p>
                            <p>{clickedProduct.rating.rate}</p>
                        </div>
                        <p>{clickedProduct.rating.count} vote</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <p className=" w-[85px]  text-center whitespace-nowrap bg-primary py-2 px-3 rounded-md ">
                            {clickedProduct.price} $
                        </p>
                        <button
                            onClick={(e) =>
                                handleAddToCart(e, clickedProduct.id, clickedProduct)
                            }
                            className="bg-secondary py-2 px-3 rounded-md whitespace-nowrap"
                        >
                            Add to Cart
                        </button>
                        <button className="p-4 m-2 bg-secondary py-2 px-3 rounded-md whitespace-nowrap">
                            <Link to="#" onClick={() => window.history.back()}>
                                Go Back
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
