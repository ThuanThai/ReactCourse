import { useEffect, useRef } from "react";

export default function useLinkNewTab() {
    const nodeRef = useRef();
    useEffect(() => {
        const dom = nodeRef?.current;
        if (dom) {
            const links = [...dom.querySelectorAll("a")];
            links.forEach((link) => {
                link.setAttribute("target", "_blank");
            });
        }
    }, []);
    return { nodeRef };
}
