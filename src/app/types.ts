import { JSX } from "react";

export type IconProps = {
    color?: string;
    size?: {
        width: string;
        height: string;
    };
};

export type CustomInputProps = {
    value: string | number;
    onChange: (data: string) => void;
    placeholder: string;
    type?: string;
    useLabel?: boolean;
    label?: string;
};

export type ProfileActionsProps = {
    link: string;
    icon: JSX.Element;
    title: string;
    gradient: string;
};

export type SignInTabTypes = "email-phonenumber" | "sub-account" | "qr-code";
