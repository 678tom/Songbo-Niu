import React, { useEffect, useRef, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { twMerge } from "tailwind-merge";

// interface DropDownProps {
//     onClick?: () => void;
//     href?: string;
//     action?: string;
//     children: React.ReactNode;
// }

const GetDropDownOption = ({ children, onClick, className }) => {
    return (
        <div
            onClick={onClick}
            className={twMerge(
                "w-full cursor-pointer hover:bg-gray-100 px-4 py-2 rounded-sm",
                className
            )}
        >
            <div>{children}</div>
        </div>
    );
};

export function DropDownOption({ children, onClick, href, action }) {
    return <GetDropDownOption {...{ children, onClick, href, action }} />;
}

// interface DropDownGroupProps {
//     children: React.ReactNode;
//     title: string;
//     icon?: string;
//     href?: string;
// }

export function DropDownGroupOption({ icon, children, title, href }) {
    return (
        <div className="w-max mt-1">
            <div
                className={twMerge(
                    "flex items-center",
                    href ? "cursor-pointer" : ""
                )}
            >
                {icon && (
                    <img
                        src={icon}
                        className="ml-2 mb-2 w-8 h-8 rounded-full object-cover cursor-pointer"
                    ></img>
                )}
                <p className="text-sm ml-3 font-semibold text-gray-500">
                    {title}
                </p>
            </div>
            <div className="">{children}</div>
        </div>
    );
}

// interface DropDownProps {
//     children: React.ReactNode;
//     icon?: React.ReactNode;
// }

export function DropDown({ children, icon }) {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [left, setLeft] = useState(0);

    useEffect(() => {
        if (open) {
            const rect = dropdownRef.current.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            if (rect.x + rect.width > viewportWidth) {
                // Adjust the position of the dropdown to the left
                const padding = 8;
                const offset = -rect.width + (viewportWidth - rect.x) - padding;
                setLeft((left) => left + offset);
                dropdownRef.current.style.right = rect.width;
                //dropdownRef.current.style.left = "auto";
            }

            if (rect.bottom > viewportHeight) {
                // Adjust the position of the dropdown upwards
                dropdownRef.current.style.bottom = "100%";
                dropdownRef.current.style.top = "auto";
            }
        }
    }, [open]);

    return (
        <>
            <ClickAwayListener onClickAway={() => setOpen(false)}>
                <div
                    className="relative select-none "

                >
                    <div onClick={() => setOpen(!open)}>
                        {icon ?? null}
                    </div>
                    <div
                        ref={dropdownRef}
                        style={{
                            left,
                        }}
                        className={twMerge(
                            "absolute top-full z-[1000] min-w-max drop-shadow-md bg-white py-4 px-2 rounded-md w-max",
                            open ? "" : "hidden"
                        )}
                    >
                        {children}
                    </div>
                </div>
            </ClickAwayListener>
        </>
    );
}
