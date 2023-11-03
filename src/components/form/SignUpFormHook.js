import React from "react";

const SignUpFormHook = () => {
    return (
        <div className="p-10 w-full max-w-[500px] mx-auto">
            <form action="submit" autoComplete="off">
                <div className="flex flex-col gap-2 mb-5">
                    <label
                        className="text-base font-semibold cursor-pointer"
                        htmlFor="firstName">
                        First name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        placeholder="Enter your first name"
                        className="p-4 border border-gray-100 rounded-md"
                    />
                </div>
                <div className="flex flex-col gap-2 mb-5">
                    <label
                        className="font-semibold cursor-pointer"
                        htmlFor="lastName">
                        Last name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        placeholder="Enter your last name"
                        className="p-4 border border-gray-100 rounded-md"
                    />
                </div>
                <div className="flex flex-col gap-2 mb-5">
                    <label
                        className="font-semibold cursor-pointer"
                        htmlFor="email">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="p-4 border border-gray-100 rounded-md"
                    />
                </div>
                <button className="w-full p-3 text-white bg-blue-500 rounded-md">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default SignUpFormHook;
