import { useState } from "react";

export function useValidation(initialValue, validation) {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState(
        validation && !validation.regex.test(value)
    );

    const handleChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
        setError(validation && !validation.regex.test(newValue));
    };

    return [value, error, handleChange];
}
