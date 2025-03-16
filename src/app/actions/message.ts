"use server";

import { cookies } from "next/headers";
import axios from "axios";
import { API_URL } from "@/app/const";

export async function sendMessage(username: string, message: string) {
    try {
        const res = await axios.post(`${API_URL}/message/${username}`, {
            message,
            ipAddress: "192.168.245:5000",
        });
        const data = res.data;
        return { success: true, message: data.message };
    } catch (error: any) {
        console.log("ERR: ", error?.response?.data || error);

        return {
            error:
                error?.response?.data?.message ||
                "An error occurred. Please try again.",
        };
    }
}
