import { PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const AppLayout = async ({ children }: PropsWithChildren) => {
    const cookieStore = await cookies();
    const token = cookieStore.get("token");

    if (!token) {
        redirect("/auth/sign-in");
    }

    return (
        <div>
            <ToastContainer />
            <div>{children}</div>
        </div>
    );
};

export default AppLayout;
