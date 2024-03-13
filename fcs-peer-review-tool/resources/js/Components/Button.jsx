import { ButtonHTMLAttributes } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosAdd } from "react-icons/io";
import { twMerge } from "tailwind-merge";

const defaultButtonClassName = "py-1 rounded-md";

const buttonVariants = (disabled) => ({
    primary: twMerge(
        "shadow-inner hover:bg-gray-500 bg-gray-600",
        "text-white",
        disabled && "bg-gray-300 hover:bg-gray-300"
    ),
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-800",
    cancel: twMerge(
        "bg-gray-200 text-black hover:bg-gray-300 shadow-inner",
        disabled && "bg-gray-100 hover:bg-gray-100 text-white"
    ),
    accent: twMerge(
        "bg-teal-500 text-white hover:bg-teal-600 text-white",
        disabled && "bg-teal-200"
    ),
    error: twMerge(
        "bg-red-600 text-white hover:bg-red-700 text-white",
        disabled && "bg-red-200"
    ),
    nav: twMerge(
        "text-xs 2xs:text-sm md:text-xl bg-gray-100 h-10 rounded-md text-gray-700 font-semibold hover:bg-gray-400 focus:bg-gray-700 active:bg-gray-500 tracking-wide",
        disabled && "bg-gray-300"
    ),
    logout: twMerge(
        "text-xl bg-gray-800 text-white  rounded-md hover:bg-gray-600 tracking-wide h-10",
        disabled && "bg-gray-300"
    ),
});

export default function Button({
    href,
    variant = "primary",
    disabled = false,
    dropDown = false,
    add = false,
    type = "button", // "submit" | "reset" | "button
    widthClassName = "w-max",
    children,
    className,
    ...buttonProps
}) {
    const button = (
        <button
            type={type}
            {...buttonProps}
            disabled={disabled}
            className={twMerge(
                className,
                widthClassName,
                defaultButtonClassName,
                buttonVariants(disabled)[variant],
                dropDown
                    ? "flex items-center pl-2 pr-1 py-1.5"
                    : add
                        ? "flex items-center pr-2 pl-1 py-1"
                        : "px-2 py-1 rounded-md"
            )}
        >
            {add && <IoIosAdd className="w-6 h-6 text-white" />}
            {children}
            {dropDown && <RiArrowDropDownLine className="w-6 h-6" />}
        </button>
    );

    return href ? <a href={href}>{button}</a> : button;
}
