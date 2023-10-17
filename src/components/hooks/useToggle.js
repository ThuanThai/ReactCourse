import { useState } from "react";

export default function useToggle() {
    const [on, setOn] = useState(false);
    const handleToggle = () => {
        setOn((prev) => !prev);
    };

    return { on, handleToggle };
}
