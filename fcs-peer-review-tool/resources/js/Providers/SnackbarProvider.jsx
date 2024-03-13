import { twMerge } from "tailwind-merge";
import { RxCross1 } from "react-icons/rx";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";
import React, { useState, useEffect, createContext } from "react";
import { v4 as uuidv4 } from "uuid"; // For generating unique IDs

export const SnackBarContext = createContext();

const SnackBarSeverity = {
    SUCCESS: "success",
    ERROR: "error",
    WARNING: "warning",
    INFO: "info",
};

const SnackBarData = {
    [SnackBarSeverity.SUCCESS]: {
        icon: <FaRegCheckCircle color="white" />,
        color: "bg-green-500",
    },
    [SnackBarSeverity.ERROR]: {
        icon: <MdError color="white" />,
        color: "bg-red-500",
    },
    [SnackBarSeverity.WARNING]: {
        icon: "warning",
        color: "bg-yellow-500",
    },
    [SnackBarSeverity.INFO]: {
        icon: "info",
        color: "bg-blue-300",
    },
};

export const SnackBarProvider = ({ children }) => {
    const [snackbars, setSnackbars] = useState([]);

    const openSnackbar = (message, severity) => {
        const newSnackbar = {
            id: uuidv4(),
            isOpen: true,
            message,
            severity,
        };
        setSnackbars((snackbars) => [...snackbars, newSnackbar]);
        // close the snackbar after 3 seconds
        setTimeout(() => {
            closeSnackbar(newSnackbar.id);
        }, 3000);

    };

    const closeSnackbar = (id) => {
        setSnackbars((snackbars) =>
            snackbars.map((snackbar) =>
                snackbar.id === id ? { ...snackbar, isOpen: false } : snackbar
            )
        );
        // remove from snackbar list after the animation is done
        setTimeout(() => {
            setSnackbars((snackbars) => snackbars.filter((snackbar) => snackbar.id !== id));
        }, 500);
    };

    const showSuccessNotification = (message) => {
        openSnackbar(message, SnackBarSeverity.SUCCESS);
    };

    const showErrorNotification = (message) => {
        openSnackbar(message, SnackBarSeverity.ERROR);
    };

    const showWarningNotification = (message) => {
        openSnackbar(message, SnackBarSeverity.WARNING);
    };

    return (
        <SnackBarContext.Provider
            value={{
                showSuccessNotification,
                showErrorNotification,
                showWarningNotification,
                closeSnackbar,
            }}
        >
            {snackbars.map((snackbar, index) => {
                const { color, icon } = SnackBarData[snackbar.severity];
                return (
                    <div
                        key={snackbar.id}
                        className={twMerge(
                            "top-2 right-2 rounded-md flex fixed duration-500 transition-all gap-2 items-center px-2 py-4 z-[1000]",
                            snackbar.isOpen
                                ? "translate-y-0"
                                : "-translate-y-16",
                            color
                        )}
                        style={{
                            top: snackbar.isOpen && `${1 + index * 4}rem`,
                        }}
                    >
                        {icon}
                        <p className="text-sm text-white">{snackbar.message}</p>
                        <RxCross1
                            className="cursor-pointer"
                            onClick={() => closeSnackbar(snackbar.id)}
                            color="white"
                        />
                    </div>
                );
            })}
            {children}
        </SnackBarContext.Provider>
    );
};
