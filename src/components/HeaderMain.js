import React from "react";
import { useAuth } from "./context/auth-context";

const HeaderMain = () => {
    const { user } = useAuth();
    return (
        <div className="flex items-center justify-between p-5 bg-white shadow-md">
            <div className="flex items-center gap-2">
                <img
                    className="object-cover w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1695133389296-fdd6c49d422c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=900&q=60"
                    alt=""
                />
                <p className="text-base font-semibold">{user.fullname}</p>
            </div>
            <button className="p-4 text-sm text-white bg-red-500 rounded-md">
                Sign Out
            </button>
        </div>
    );
};

export default HeaderMain;
