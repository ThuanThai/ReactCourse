import React from "react";
import { useGallery } from "../context/gallery-context";

const CartList = () => {
    const { cartItems, removeFromCart } = useGallery();
    return (
        <div className="flex flex-col px-5 py-10 gap-y-4">
            {cartItems.length > 0 &&
                cartItems.map((item) => (
                    <div className="flex items-center gap-x-3">
                        <img
                            className="object-cover w-12 h-12 rounded-full"
                            src={item.url}
                            alt=""
                        />
                        <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-3 font-medium text-white bg-red-500 rounded text-md">
                            Remove
                        </button>
                    </div>
                ))}
        </div>
    );
};

export default CartList;
