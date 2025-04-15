"use client";
import { logoutUser } from "@/app/actions/logout";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
    const router = useRouter();
    const [loggingOut, setLoggingOut] = useState(false);

    const logout = async () => {
        setLoggingOut(true);
        const res = await logoutUser();

        if (res.error) {
            console.log("ERROR LOGGING OUT: ", res);
        } else {
            console.log("RES: ", res);
            router.push("/auth/sign-in"); // Redirect to auth page
        }
    };

    return (
        <div className="flex justify-center pt-5 pb-4">
            <button
                onClick={logout}
                className="w-[65%] h-12 rounded-[16px] text-[12px] font-inter font-medium tracking-tight bg-black text-white border"
                disabled={loggingOut}
            >
                {loggingOut ? "Logging out..." : " Logout"}
            </button>
        </div>
    );
};

export default LogoutButton;
