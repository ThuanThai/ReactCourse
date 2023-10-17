import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const AuthProvider = (props) => {
    const [user, setUser] = useState({
        userId: 1,
        fullname: "Jasper",
        email: "thaithuan@gmail.com",
    });
    const value = { user, setUser };
    return (
        <AuthContext.Provider value={value} {...props}></AuthContext.Provider>
    );
};

function useAuth() {
    const context = useContext(AuthContext);
    if (typeof context === "undefined")
        throw new Error("useAuth must be used within a AuthProvider");
    return context;
}

export { AuthProvider, useAuth };
