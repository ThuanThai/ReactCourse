import React, { useState } from "react";

const RenderInput = () => {
    return (
        <>
            <Input>
                {(value) => <DisplayName value={value}></DisplayName>}
            </Input>
        </>
    );
};

const Input = (props) => {
    const [value, setValue] = useState("");
    return (
        <>
            <input
                onChange={(e) => setValue(e.target.value)}
                value={value}
                type="text"
                className="border border-gray-300 p-4 rounded max-w-[320px] w-full "
            />
            {props.children(value)}
        </>
    );
};

const DisplayName = ({ value }) => {
    return <p className="text-sm font-medium text-cyan-400">{value}</p>;
};

export default RenderInput;
