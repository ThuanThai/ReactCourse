import React from "react";
import useHandleForm from "../hooks/useHandleForm";

const Form = () => {
    const { handleChange } = useHandleForm({
        fullname: "",
        email: "",
        hobby: false,
    });
    return (
        <div className="flex items-center m-5 gap-x-3">
            <input
                onChange={handleChange}
                name="fullname"
                type="text"
                className="w-full max-w-xs p-4 border border-gray-300 rounded "
                placeholder="Enter Full Name"
            />

            <input
                onChange={handleChange}
                name="email"
                type="text"
                className="w-full max-w-xs p-4 border border-gray-300 rounded "
                placeholder="Enter Email"
            />

            <input onChange={handleChange} type="checkbox" name="hobby" />
        </div>
    );
};

export default Form;
