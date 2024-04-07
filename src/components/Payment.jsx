import React, { useContext } from "react";
import { productContext } from "../App";

function Payment() {
    const { addToCart } = useContext(productContext);

    const shoppingList = addToCart.map((product) => {
        return (
            <div key={product.product.id}>
                <h1 className="mt-2">
                    {product.product.title}{" "}
                    <span className="text-text">x</span> {product.quantity}{" "}
                    <span className="text-text">/ </span>
                    <span className="font-bold ">
                        {(product.product.price * product.quantity).toFixed(2)}{" "}
                        $
                    </span>
                </h1>
            </div>
        );
    });

    function handleTotal(prev, next) {
        return prev + next.product.price * next.quantity;
    }

    const total = addToCart.reduce(handleTotal, 0);

    return (
        <div className=" top-0 mx-3 flex flex-col gap-3">
            <div className="sm:min-h-[400px] border-2 border-secondary rounded-md p-4 w-full h-[70%]">
                <h1 className="text-xl font-bold">Your shopping List: </h1>
                {shoppingList}
            </div>
            <div className="flex justify-between w-full border-2 border-secondary rounded-md p-4">
                <div>
                    <h1>Total:{total.toFixed(2)}</h1>
                </div>
                <div>
                    <button className="w-[85px] text-white text-center whitespace-nowrap bg-primary py-2 px-3 rounded-md text-2xl ">
                        Pay
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Payment;
