import { useEffect, useRef, useState } from "react";

export default function useClickOutside(dom = "button") {
    const nodeRef = useRef();
    const [show, setShow] = useState(false);
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                nodeRef.current &&
                !nodeRef.current.contains(e.target) &&
                !e.target.matches(dom)
            ) {
                setShow(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [dom]);

    return {
        show,
        setShow,
        nodeRef,
    };
}
