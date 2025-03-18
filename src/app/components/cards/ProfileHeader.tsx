"use client";

import Image from "next/image";
import UserImg from "@/assets/images/sign-in.jpeg";
import { BiCopy } from "react-icons/bi";
import { useClipboard } from "next-clippy";
import { toast } from "react-toastify";
import { useEffect } from "react"; // Import useEffect

const ProfileHeader = ({ activeUser }: { activeUser: any }) => {
    const { copy, copied } = useClipboard();

    useEffect(() => {
        if (copied) {
            console.log("COPIED");
            toast.success("Copied username");
        }
    }, [copied]);

    return (
        <div className="flex flex-col items-center">
            <Image
                src={UserImg}
                className="w-[100px] h-[100px] rounded-full object-cover object-center"
                alt="UserImg"
            />
            <h3 className="p-2 font-inter font-bold tracking-tight text-[20px]">
                {activeUser.username}
            </h3>
            <div className="flex flex-row items-center gap-2">
                <button
                    className="flex items-center gap-2"
                    onClick={() => {
                        copy(
                            `https://fanonymous.xyz/anon/${activeUser.username}`
                        );
                        console.log("CALLING");
                    }}
                >
                    <p className="font-inter font-semibold tracking-tight text-[14px] text-white opacity-85">
                        https://fanonymous.xyz/anon/{activeUser.username}
                    </p>
                    <BiCopy />
                </button>
            </div>
            <div className="p-4">
                <p className="font-inter font-medium text-[14.4px] text-center">
                    Share your profile link ❤️ and let your friends send in
                    their responses! Tap "View Messages" to check them out. 👌
                </p>
            </div>
        </div>
    );
};

export default ProfileHeader;
