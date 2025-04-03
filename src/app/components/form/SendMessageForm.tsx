"use client";
import { sendMessage } from "@/app/actions/message";
import { successToast } from "@/app/const";
import { FormEvent, useState } from "react";
import { ImSpinner8 } from "react-icons/im";

const SendMessageForm = ({ username }: { username: string }) => {
    const [message, setMessage] = useState("");
    const [processing, setProcessing] = useState(false);

    const submitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setProcessing(true);
        try {
            const res = await sendMessage(username, message);
            console.log("RES: ", res);
            if (res.success) {
                setMessage("");
                successToast("Message successfully sent");
            }
        } catch (error) {
            console.log("ERROR: ", error);
        } finally {
            setProcessing(false);
        }
    };

    return (
        <form onSubmit={submitForm}>
            <div className="pb-1 pt-1">
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="p-4 font-inter text-[13px] resize-none font-medium mt-1 block w-full px-3 py-2 border-[1.5px] outline-none border-gray-400/10 transition-all shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                    placeholder="Write your message here..."
                    required
                ></textarea>
            </div>
            <div className="mt-5">
                <button
                    type="submit"
                    className="h-[50px] flex items-center justify-center font-inter text-[13px] font-semibold w-full bg-indigo-600 text-white py-2 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 spin"
                >
                    {processing ? <ImSpinner8 /> : "Send Message"}
                </button>
            </div>
        </form>
    );
};

export default SendMessageForm;
