import React, { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Portal from "../Portal";
const ToolTipsBase = ({ children, title }) => {
    const [visible, setVisible] = useState(false);
    const [coords, setCoords] = useState({
        top: 0,
        left: 0,
        height: 0,
        width: 0,
    });
    const handleMouseEnter = (e) => {
        setCoords(e.target.getBoundingClientRect());
        setVisible(true);
    };
    const handleMouseLeave = () => {
        setVisible(false);
    };
    return (
        <>
            <CSSTransition
                classNames={"fade"}
                in={visible}
                timeout={300}
                unmountOnExit>
                {(status) => (
                    <Portal visible={status !== "exited"} overlay={false}>
                        <p
                            className="p-3 bg-black text-white rounded-xl inline-block absolute transition-all z-[9999] -translate-y-full tooltip "
                            style={{
                                top:
                                    coords.top - coords.height + window.scrollY,
                                left: coords.left - coords.width / 2,
                            }}>
                            {title}
                        </p>
                    </Portal>
                )}
            </CSSTransition>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                {children}
            </div>
        </>
    );
};

export default ToolTipsBase;
