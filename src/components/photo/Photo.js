import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
const getPhotos = (page) => {
    return axios
        .get(`https://picsum.photos/v2/list?page=${page}&limit=8`)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.log(error);
        });
};
const Photo = () => {
    const [images, setImages] = useState([]);
    const [nextPage, setNextPage] = useState(1);

    const handleMorePhoto = useRef({});

    handleMorePhoto.current = () => {
        getPhotos(nextPage).then((newImages) => {
            const newPhotos = [...images, ...newImages];
            setImages(newPhotos);
        });
        setNextPage((prev) => prev + 1);
    };

    useEffect(() => {
        handleMorePhoto.current();
    }, []);
    return (
        <div>
            <div>
                {images && images.length === 0 ? (
                    <p>Loading...</p>
                ) : (
                    <div className="grid grid-cols-4 p-5 gap-4">
                        {images.map((item) => (
                            <div className="bg-white shadow-md rounded p-3">
                                <img
                                    className="w-full h-full object-cover rounded"
                                    src={item.download_url}
                                    alt={item.author}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="text-center">
                <button
                    onClick={handleMorePhoto.current}
                    className="inline-block px-8 py-4 rounded text-white bg-purple-600">
                    Load More
                </button>
            </div>
        </div>
    );
};

export default Photo;
