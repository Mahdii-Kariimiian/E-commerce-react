import React, { useContext } from "react";
import CartDetails from "./CartDetails";
import Payment from "./Payment";
import { productContext } from "../App";

function Cart() {
    const { addToCart } = useContext(productContext);
    return (
        <div className="bg-background text-text flex flex-col md:flex-row items-start justify-between pt-5 px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
                <CartDetails />
            </div>
            {addToCart.length === 0 ? null : (
                <div className="w-[30%] min-w-[400px] sticky top-0 right-0 h-full overflow-auto">
                    <Payment />
                </div>
            )}
        </div>
    );
}

export default Cart;
