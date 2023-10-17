import { useRef } from "react";
import useClickOutSide from "../hooks/useClickOutSide";
import ReactDOM from "react-dom";
const DropDownPortal = () => {
    const { show, setShow, nodeRef } = useClickOutSide();
    const coorsRef = useRef();
    const handleClick = () => {
        const coors = nodeRef.current.getBoundingClientRect();
        console.log(
            "🚀 ~ file: DropdownPortal.js:7 ~ handleClic ~ coors:",
            coors
        );
        coorsRef.current = coors;
    };

    return (
        <div onClick={handleClick} className="p-5">
            <div ref={nodeRef} className="relative w-full max-w-sm">
                <div
                    onClick={() => setShow(!show)}
                    className="w-full p-5 border border-gray-300 rounded-lg cursor-pointer">
                    Selected
                </div>
                {show &&
                    ReactDOM.createPortal(
                        <div
                            className="absolute left-0 right-0 w-full border border-gray-300 rounded-lg top-full"
                            style={{
                                left: coorsRef.current.left,
                                right: coorsRef.current.right,
                                top:
                                    coorsRef.current.bottom +
                                    20 +
                                    window.scrollY,
                                width: coorsRef.current.width,
                            }}>
                            <div className="p-5 cursor-pointer">Javascript</div>
                            <div className="p-5 cursor-pointer">ReactJs</div>
                            <div className="p-5 cursor-pointer">NextJs</div>
                        </div>,
                        document.querySelector("body")
                    )}
            </div>
        </div>
    );
};

export default DropDownPortal;
