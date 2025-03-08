"use server";

import { cookies } from "next/headers";
import axios from "axios";
import { API_URL } from "@/app/const";

export async function signInUser(username: string, password: string) {
    try {
        const res = await axios.post(`${API_URL}/sign-in`, {
            username,
            password,
        });
        const data = res.data;
        const userString = JSON.stringify(data.user);
        const messagesString = JSON.stringify(data.messages);

        // ✅ Fix: Await cookies() before using set()
        const cookieStore = await cookies();
        cookieStore.set("token", data.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24, // 1 day
        });
        cookieStore.set("user", userString, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24, // 1 day
        });
        cookieStore.set("messages", messagesString, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24, // 1 day
        });

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
