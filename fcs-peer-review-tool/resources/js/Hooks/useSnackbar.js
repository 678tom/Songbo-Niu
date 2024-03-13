import { SnackBarContext } from "@/Providers/SnackbarProvider";
import { useContext } from "react";

export const useSnackBar = () => {
    const snackbar = useContext(SnackBarContext);
    return snackbar;
};
