import { PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const AuthLayout = async ({ children }: PropsWithChildren) => {
    const cookieStore = await cookies();
    const token = cookieStore.get("token");

    if (token) {
        redirect("/app");
    }

    return (
        <div className="pageLayout p-3 md:p-0">
            <ToastContainer />
            <div>{children}</div>
        </div>
    );
};

export default AuthLayout;
