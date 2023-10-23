import React, { useEffect, useState } from "react";
import useHandleForm from "../components/hooks/useHandleForm";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateProfile,
} from "firebase/auth";
import { auth } from "./firebase-config";
const FirebaseAuth = () => {
    const { value, handleChange } = useHandleForm({ email: "", password: "" });
    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUserInfo(currentUser);
        });
    }, []);

    const handleSignUp = async (e) => {
        e.preventDefault();
        await createUserWithEmailAndPassword(auth, value.email, value.password);
    };

    const handleSignOut = async (e) => {
        signOut(auth);
    };
    return (
        <div className="p-10">
            <div className="w-full max-w-[500px] mx-auto shadow-md p-5">
                <form action="submit">
                    <input
                        onChange={handleChange}
                        name="email"
                        type="text"
                        className="w-full p-3 mb-5 border border-gray-400 rounded outline-none"
                        placeholder="Enter Your Email Address"
                    />
                    <input
                        onChange={handleChange}
                        name="password"
                        type="password"
                        className="w-full p-3 mb-5 border border-gray-400 rounded outline-none"
                        placeholder="Enter Your Password"
                    />

                    <button
                        onClick={handleSignUp}
                        className="w-full p-3 text-white bg-blue-500 rounded">
                        Sign Up
                    </button>
                </form>
                <div className="flex items-center mt-5">
                    <button
                        onClick={handleSignOut}
                        className="p-3 text-white bg-purple-500 rounded ">
                        Sign Out
                    </button>
                    <span className="ml-3">{userInfo?.email}</span>
                </div>
            </div>
        </div>
    );
};

export default FirebaseAuth;
