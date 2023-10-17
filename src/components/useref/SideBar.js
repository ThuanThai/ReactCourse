import React, { forwardRef } from "react";

const SideBar = forwardRef(({ show }, ref) => {
    return (
        <div
            ref={ref}
            className={`w-[300px] bg-gray-300 bottom-0 fixed top-0 left-0 transition-all ${
                show ? "" : "-translate-x-full"
            }`}></div>
    );
});

export default SideBar;
