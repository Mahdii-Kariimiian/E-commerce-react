import React, { useContext } from "react";
import { productContext } from "../App";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ImStarFull } from "react-icons/im";

function Products() {
    const { products, searchTerm, addToCart, setAddToCart, setQuantity , quantity , darkMode } =
        useContext(productContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryFilter = searchParams.get("category") || "all";

    const searchedProducts = products.filter((product) => {
        if (searchTerm === "") {
            return product;
        } else if (
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
            return product;
        }
    });

    const filteredProducts =
        categoryFilter === "all"
            ? products
            : products.filter((product) => {
                  return (
                      product.category.toLowerCase() ===
                      categoryFilter.toLowerCase()
                  );
              });

    const showedProducts =
        searchedProducts !== ""
            ? searchedProducts.filter((searchedProduct) =>
                  filteredProducts.some(
                      (filteredProduct) =>
                          filteredProduct.id === searchedProduct.id
                  )
              )
            : filteredProducts;

    if (showedProducts.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center mt-10">
                <h1 className="text-2xl text-primary">No product found</h1>
            </div>
        );
    }

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
        <div className= {darkMode ? "bg-darkBase text-neutral grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5" : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5"}>
            {showedProducts.map((product) => {
                return (
                    <Link key={product.id} to={`/products/${product.id}`}>
                        <div className= {darkMode ? " bg-white text-DarkNeutral max-w-[400px] sm:max-w-full rounded-md p-4 m-2 flex flex-col items-start gap-6" : "max-w-[400px] sm:max-w-full rounded-md p-4 m-2 flex flex-col items-start gap-6"}>
                            <div className="h-[300px] overflow-hidden rounded-md flex items-center justify-center">
                                <img
                                    className="object-contain max-h-full max-w-full"
                                    src={product.image}
                                    alt={product.title}
                                />
                            </div>
                            <h1 className="text-xl line-clamp-1">
                                {product.title}
                            </h1>
                            <p className="line-clamp-3">
                                {product.description}
                            </p>
                            <div className="text-neutral flex flex-col gap-3 items-start ">
                                <div className="whitespace-nowrap text-black text-sm">
                                    <div className="flex gap-2">
                                        <p className="text-lg">
                                            <ImStarFull />
                                        </p>
                                        <p>{product.rating.rate}</p>
                                    </div>
                                    <p>{product.rating.count} vote</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <p className=" w-[85px]  text-center whitespace-nowrap bg-primary py-2 px-3 rounded-md ">
                                        {product.price} $
                                    </p>
                                    <button
                                        onClick={(e) =>
                                            handleAddToCart(
                                                e,
                                                product.id,
                                                product
                                            )
                                        }
                                        className="bg-secondary py-2 px-3 rounded-md whitespace-nowrap"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default Products;
