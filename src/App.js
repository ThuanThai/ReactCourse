import Switch from "./components/Switch";
import React, { useState } from "react";

function useToggle() {
    const [on, setOn] = useState(false);
    const handleToggle = () => {
        setOn((prev) => !prev);
    };

    const getToggleProps = ({ onClick, ...props } = {}) => {
        return {
            onClick: () => {
                onClick && onClick();
                handleToggle();
            },
            ...props,
        };
    };

    return { on, handleToggle, getToggleProps };
}

function App() {
    const { on, getToggleProps } = useToggle();
    return (
        <div>
            <Switch {...getToggleProps({ on })}></Switch>
        </div>
    );
}

export default App;
