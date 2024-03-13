import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { RiArrowDropDownLine } from "react-icons/ri";

// interface CollapsableProps {
//     children: React.ReactNode;
//     component: (open: boolean) => React.ReactNode;
//     defaultOpen?: boolean;
//     className?: string;
// }

export function Collapsable({
    className,
    children,
    component,
    show,
    defaultOpen = false,
}) {
    const [open, setOpen] = useState(defaultOpen);
    const [height, setHeight] = useState(open ? "auto" : "0px");
    const contentRef = useRef(null);
    const [updateHeight, setUpdateHeight] = useState(0);

    useEffect(() => {
        if (show !== undefined) {
            setOpen(show);
        }
    }, [show]);

    useEffect(() => {
        const contentInner =
            contentRef.current?.querySelector(".content-inner");
        if (contentInner) {
            const resizeObserver = new ResizeObserver((entries) => {
                setUpdateHeight((prev) => prev + 1);
            });

            resizeObserver.observe(contentInner);

            return () => {
                resizeObserver.unobserve(contentInner);
            };
        }
    }, []);

    useEffect(() => {
        if (contentRef.current) {
            const measuredHeight = `${contentRef.current.scrollHeight + 10}px`;
            setHeight(open ? measuredHeight : "0px");
        }
    }, [open, updateHeight]);

    return (
        <div className={twMerge(className)}>
            {component && (
                <div
                    onClick={() => setOpen((open) => !open)}
                    className={twMerge("cursor-pointer select-none w-max")}
                >
                    {component(open)}
                </div>
            )}

            <div
                ref={contentRef}
                style={{ height: height }}
                className={twMerge(
                    "transition-all duration-200 ",
                    open ? "" : "overflow-y-hidden"
                )}
            >
                <div className="content-inner">{children}</div>
            </div>
        </div>
    );
}

// interface CollapsableTitleProps {
//     children: React.ReactNode;
//     title: string;
//     defaultOpen?: boolean;
//     className?: string;
// }

export function CollapsableTitle({
    children,
    title,
    defaultOpen = false,
    textClassName = "text-2xl",
    className,
}) {
    return (
        <Collapsable
            className={twMerge(className)}
            component={(open) => (
                <div className={twMerge(textClassName, "flex")}>
                    <p>{title}</p>
                    {open ? (
                        <RiArrowDropDownLine className="w-8 h-8 transform rotate-180" />
                    ) : (
                        <RiArrowDropDownLine className="w-8 h-8" />
                    )}
                </div>
            )}
            defaultOpen={defaultOpen}
        >
            {children}
        </Collapsable>
    );
}
