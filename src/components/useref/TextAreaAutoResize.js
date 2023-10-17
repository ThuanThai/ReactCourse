import React, { useEffect, useRef, useState } from "react";

const TextAreaAutoResize = () => {
    const textRef = useRef();
    const [text, setText] = useState("");
    const [textHeight, setTextHeight] = useState("64px");

    const handleChange = () => {
        setText(textRef?.current?.value);
    };

    useEffect(() => {
        if (text === "") {
            setTextHeight("64px");
        } else {
            setTextHeight(`${textRef?.current?.scrollHeight}px`);
        }
    }, [text]);

    return (
        <div className="p-5">
            <textarea
                value={text}
                ref={textRef}
                placeholder="Enter text"
                className="w-full max-w-sm p-5 overflow-hidden transition-all border rounded resize-none border-grey-300 focus:border-blue-500"
                onChange={handleChange}
                style={{ height: textHeight }}></textarea>
        </div>
    );
};

export default TextAreaAutoResize;
