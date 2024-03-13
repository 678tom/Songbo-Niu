import { useState, useRef, useEffect } from "react";

const notExpandedStyle = {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
};

const expandedStyle = {
    overflow: "visible",
    whiteSpace: "normal",
    height: "auto",
};

const getIsOverflowing = (element) => {
    return (
        element.scrollHeight > element.clientHeight ||
        element.scrollWidth > element.clientWidth ||
        element.offsetHeight < element.scrollHeight ||
        element.offsetWidth < element.scrollWidth
    );
};

export const ReadMoreText = ({ children, className = "" }) => {
    const [isExpanded, setExpanded] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        const handleOverflow = () => {
            if (textRef.current) {
                setIsOverflowing(getIsOverflowing(textRef.current));
            }
        };
        handleOverflow();
        window.addEventListener("resize", handleOverflow);
        return () => window.removeEventListener("resize", handleOverflow);
    }, []);

    const handleToggleExpand = (e) => {
        e.stopPropagation();
        setExpanded(!isExpanded);
    };

    return (
        <div className="flex flex-col">
            <p
                ref={textRef}
                className={className}
                onClick={handleToggleExpand}
                style={isExpanded ? expandedStyle : notExpandedStyle}
            >
                {children}
            </p>
            {isOverflowing && (
                <p
                    className="text-blue-500 select-none text-left cursor-pointer underline"
                    onClick={handleToggleExpand}
                >
                    {isExpanded ? "Close" : "Read more"}
                </p>
            )}
        </div>
    );
};
