import { forwardRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export const ERROR_INPUT_STYLE = "border-red-500 focus:ring-red-500 focus:ring-2 focus:border-transparent";
export const TextField = forwardRef(({ value, error, className = "", label, ...props }, ref) => {
    const [showError, setShowError] = useState(false);
    const inputStyle = twMerge(
        "w-full bg-white border-gray-200 p-2 rounded-md",
        error && showError && ERROR_INPUT_STYLE
    )

    // only show error if the user has visited the input
    const handleBlur = (e) => {
        if (props.onBlur) {
            props.onBlur(e);
        }
        setShowError(true);
    }

    return (
        <div>
            <label className="font-bold">{label}</label>
            <input
                ref={ref}
                onBlur={handleBlur}
                value={value ?? ''}
                {...props}
                className={twMerge(inputStyle, className)}
            />
            {error && showError && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
})

export const Select = forwardRef(({ selectRef, options, value, label, className, ...props }, ref) => {
    const inputStyle = "bg-white border-gray-200 p-2 rounded-md w-full";

    return (
        <div>
            <label className="font-bold">{label}</label>
            <select {...props} ref={ref} className={twMerge(inputStyle, className)} value={value}>
                {options.map((option) => (
                    <option key={option.key} value={option.key}>
                        {option.value}
                    </option>
                ))}
            </select>
        </div>
    );
});

export const SearchBar = forwardRef(({ value, onChange, className = "", ...props }, ref) => {
    const inputStyle = "bg-white border-gray-200 p-2 rounded-md w-full";

    return (
        <input
            ref={ref}
            {...props}
            className={twMerge(inputStyle, className)}
            type="search"
            value={value}
            onChange={onChange}
        />
    );
})

export const TextArea = forwardRef(({ error, value, className = "", label, ...props }, ref) => {
    const [showError, setShowError] = useState(false);
    const inputStyle = twMerge(
        "w-full bg-white border-gray-200 p-2 rounded-md",
        showError && error && ERROR_INPUT_STYLE
    )

    // only show error if the user has visited the input
    const handleBlur = (e) => {
        if (props.onBlur) {
            props.onBlur(e);
        }
        setShowError(true);
    }

    return (
        <div>
            <label className="font-bold">{label}</label>
            <textarea
                ref={ref}
                onBlur={handleBlur}
                {...props}
                className={twMerge(inputStyle, className)}
                value={value ?? ''}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
})