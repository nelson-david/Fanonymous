"use server";

import { cookies } from "next/headers";

export async function logoutUser() {
    try {
        // ✅ Fix: Await cookies() before using set()
        const cookieStore = await cookies();
        cookieStore.delete("token");
        cookieStore.delete("user");
        cookieStore.delete("messages");
        return { success: true };
    } catch (error: any) {
        console.log("ERR: ", error?.response?.data || error);
        return {
            error:
                error?.response?.data?.message ||
                "An error occurred. Please try again.",
        };
    }
}
