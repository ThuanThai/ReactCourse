import { useState } from "react";

export default function useHandleForm(init) {
    const [value, setValue] = useState(init);
    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]:
                e.target.type === "text" ? e.target.value : e.target.checked,
        });
    };

    return {
        value,
        handleChange,
    };
}
