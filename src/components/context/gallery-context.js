import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const fakeData = [
    {
        id: 1,
        url: "https://images.unsplash.com/photo-1645040643524-8971366b4f68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
        isFavorite: false,
    },
    {
        id: 2,
        url: "https://images.unsplash.com/photo-1645088520336-62d94324e869?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=800",
        isFavorite: false,
    },
    {
        id: 3,
        url: "https://images.unsplash.com/photo-1645104787913-aeb889b0e190?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        isFavorite: false,
    },
    {
        id: 4,
        url: "https://images.unsplash.com/photo-1645069258059-6f5a71256c4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
        isFavorite: false,
    },
    {
        id: 5,
        url: "https://images.unsplash.com/photo-1645105263866-ed2be8e07981?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1853&q=80",
        isFavorite: false,
    },
    {
        id: 6,
        url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        isFavorite: false,
    },
];

const GalleryContext = createContext();

const GalleryProvider = (props) => {
    const [photos, setPhotos] = useLocalStorage("photos", fakeData);
    const [cartItems, setCartItems] = useLocalStorage("cartItems", []);
    const [favoriteList, setFavoriteList] = useState([]);

    const toggleFavorite = (id) => {
        const updatedArray = photos.map((item) => {
            if (item.id === id) {
                return { ...item, isFavorite: !item.isFavorite };
            }
            return item;
        });
        setPhotos(updatedArray);
    };

    const addToCart = (photo) => {
        const existed = cartItems.some((item) => photo.id === item.id);
        if (!existed) {
            setCartItems((prev) => [...prev, photo]);
        } else {
            console.log("Existed");
        }
    };

    const removeFromCart = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const value = {
        photos,
        cartItems,
        favoriteList,
        setPhotos,
        setCartItems,
        setFavoriteList,
        toggleFavorite,
        addToCart,
        removeFromCart,
    };
    return (
        <GalleryContext.Provider
            value={value}
            {...props}></GalleryContext.Provider>
    );
};

function useGallery() {
    const context = useContext(GalleryContext);
    if (typeof context === "undefined")
        throw new Error("useGallery must be used within GalleryProvider");
    return context;
}

export { GalleryProvider, useGallery };
