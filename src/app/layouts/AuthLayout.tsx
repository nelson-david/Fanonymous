"use client";

import { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
    return <div className="pageLayout">{children}</div>;
};

export default AuthLayout;
