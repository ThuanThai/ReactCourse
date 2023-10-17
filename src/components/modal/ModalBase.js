import React from "react";
import { CSSTransition } from "react-transition-group";
import Portal from "../Portal";

const ModalBase = ({ visible, onClose, children }) => {
    return (
        <>
            <CSSTransition
                classNames={"zoom"}
                in={visible}
                timeout={250}
                unmountOnExit>
                {(status) => {
                    return (
                        <Portal
                            onClose={onClose}
                            visible={status !== "exited"}
                            containerClassName={`fixed z-[999] inset-0 flex items-center justify-center`}
                            bodyClassName={`p-5 max-w-[320px] w-full bg-white rounded z-[20] content`}>
                            {children}
                        </Portal>
                    );
                }}
            </CSSTransition>
        </>
    );
};

export default ModalBase;
