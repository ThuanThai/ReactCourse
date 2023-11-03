import { useState } from "react";
// import Portal from "./components/Portal";
// import { CSSTransition } from "react-transition-group";
// import "./index.css";
import ModalBase from "./components/modal/ModalBase.js";
import ToolTipsBase from "./components/modal/ToolTipsBase.js";

function AppPortal() {
    const [show, setShow] = useState(false);
    return (
        <div className="flex items-center justify-center h-screen p-5 gap-x-3">
            <button
                onClick={() => setShow(true)}
                className="px-4 py-3 text-white bg-blue-400 rounded">
                Show Modal
            </button>
            <ModalBase visible={show} onClose={() => setShow(false)}>
                Welcome Back
            </ModalBase>

            <ToolTipsBase title={"this is tooltips"}>Tooltips</ToolTipsBase>
        </div>
    );
}

export default AppPortal;
