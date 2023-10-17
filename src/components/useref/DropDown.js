import React, { useEffect, useRef, useState } from "react";

const DropDown = () => {
    const [dropDown, setDropDown] = useState(false);
    const dropDownRef = useRef();
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                dropDownRef.current &&
                !dropDownRef.current.contains(e.target)
            ) {
                setDropDown(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className="p-5">
            <div ref={dropDownRef} className="relative w-full max-w-sm">
                <div
                    onClick={() => setDropDown(!dropDown)}
                    className="w-full p-5 border border-gray-300 rounded-lg cursor-pointer">
                    Selected
                </div>
                {dropDown && (
                    <div className="absolute left-0 right-0 w-full border border-gray-300 rounded-lg top-full">
                        <div className="p-5 cursor-pointer">Javascript</div>
                        <div className="p-5 cursor-pointer">ReactJs</div>
                        <div className="p-5 cursor-pointer">NextJs</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DropDown;
