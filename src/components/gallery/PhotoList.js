import React from "react";
import { useGallery } from "../context/gallery-context";
import PropTypes from "prop-types";

const PhotoList = () => {
    const { photos } = useGallery();
    console.log("🚀 ~ file: PhotoList.js:6 ~ PhotoList ~ photos :", photos);
    return (
        <div className="px-5 py-10">
            <div className="grid grid-cols-4 gap-5">
                {photos &&
                    photos.map((item) => (
                        <PhotoItem info={item} key={item.id}></PhotoItem>
                    ))}
            </div>
        </div>
    );
};

const PhotoItem = ({ info: { url, isFavorite, id } }) => {
    const { toggleFavorite, addToCart } = useGallery();
    return (
        <div className="relative h-[300px] group ">
            <img className="object-cover w-full h-full" src={url} alt="" />
            <span
                onClick={() => toggleFavorite(id)}
                className="absolute invisible transition-all opacity-0 top-5 right-5 group-hover:opacity-100 group-hover:visible">
                <svg
                    width="30"
                    height="30"
                    viewBox="0 0 42 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.166626 11.5C0.166108 8.47984 1.37993 5.58633 3.53499 3.47045C5.69005 1.35458 8.60534 0.19405 11.625 0.249979C15.2027 0.230979 18.6166 1.74826 21 4.41665C23.3833 1.74826 26.7972 0.230979 30.375 0.249979C33.3946 0.19405 36.3099 1.35458 38.4649 3.47045C40.62 5.58633 41.8338 8.47984 41.8333 11.5C41.8333 22.6583 28.5437 31.0833 21 37.75C13.4729 31.0271 0.166626 22.6666 0.166626 11.5Z"
                        fill={`${isFavorite ? "#FC2872" : "#FFF"}`}
                    />
                </svg>
            </span>
            <button
                className="absolute invisible px-6 py-2 font-medium text-black transition-all -translate-x-1/2 bg-white rounded opacity-0 bottom-5 left-1/2 text-md group-hover:opacity-100 group-hover:visible"
                onClick={() => addToCart({ id, url })}>
                Add To Cart
            </button>
        </div>
    );
};

PhotoItem.prototype = {
    url: PropTypes.string,
    isFavorite: PropTypes.bool,
    id: PropTypes.number,
};

export default PhotoList;
