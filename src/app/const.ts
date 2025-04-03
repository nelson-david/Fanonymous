import { toast } from "react-toastify";

const style = {
    fontFamily: "var(--font-inter)",
    fontWeight: "400 !important",
    letterSpacing: "-0.5px",
    fontSize: "0.8rem",
};
export const API_URL = "https://faithanonymous.vercel.app";
export const GLOBAL_URL = "https://fanonymous.vercel.app";

export const successToast = (success: string, theme?: string) =>
    toast.success(`${success}`, {
        position: "top-right",
        theme: theme ? theme : "light",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: style,
    });

export const errorToast = (error: string, theme?: string) =>
    toast.error(`${error}`, {
        position: "top-right",
        theme: theme ? theme : "light",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: style,
    });

export const warningToast = (warning: string, theme?: string) =>
    toast.warning(`${warning}`, {
        position: "top-right",
        theme: theme ? theme : "light",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: style,
    });
