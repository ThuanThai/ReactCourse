import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

const Tip = ({ coors, children }) => {
    const nodeRef = useRef();
    const coorsRef = useRef(0);
    useEffect(() => {
        if (nodeRef.current) {
            const refWidth = nodeRef.current.getBoundingClientRect();
            coorsRef.current = refWidth;
        }
    }, []);
    return ReactDOM.createPortal(
        <span
            ref={nodeRef}
            className="absolute px-4 py-3 text-base text-white bg-black rounded-full"
            style={{
                top: coors.top - 3 * coors.height,
                left: coors?.left - coors?.width / 2,
            }}>
            {children}
        </span>,
        document.querySelector("body")
    );
};

const Tooltips = ({ children, text }) => {
    const nodeRef = useRef();
    const coorsRef = useRef();
    const [show, setShow] = useState(false);
    const handleMouseOver = () => {
        coorsRef.current = nodeRef?.current.getBoundingClientRect();
        setShow(true);
    };
    const handleMouseLeave = () => {
        coorsRef.current = null;
        setShow(false);
    };
    return (
        <div className="p-5 text-center">
            <span
                onMouseLeave={handleMouseLeave}
                onMouseOver={handleMouseOver}
                ref={nodeRef}
                className="inline-block mt-12 text-sm font-semibold cursor-pointer">
                {children}
            </span>
            {show && <Tip coors={coorsRef.current}>{text}</Tip>}
        </div>
    );
};

export default Tooltips;
