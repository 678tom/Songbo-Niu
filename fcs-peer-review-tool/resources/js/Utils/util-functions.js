import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Takes a snake case name and returns a formatted name. Has the first letter capitalized and replaces underscores with spaces.
 * @param {*} name snake case name
 */
export const getFormmatedSnakeCase = (name) => {
    let formattedName = name.split("_").join(" ");
    return formattedName.charAt(0).toUpperCase() + formattedName.slice(1);
};

export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
};
