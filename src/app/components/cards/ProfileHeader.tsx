"use client";

import Image from "next/image";
import UserImg from "@/assets/images/sign-in.jpeg";
import { BiCopy } from "react-icons/bi";
import { useClipboard } from "next-clippy";
import { toast } from "react-toastify";
import { useEffect } from "react"; // Import useEffect
import { GLOBAL_URL, successToast } from "@/app/const";

const ProfileHeader = ({ activeUser }: { activeUser: any }) => {
    const { copy, copied } = useClipboard();

    useEffect(() => {
        if (copied) {
            console.log("COPIED");
            successToast("Copied username");
        }
    }, [copied]);

    return (
        <div className="flex flex-col items-center">
            <Image
                src={UserImg}
                className="w-[80px] md:w-[100px] h-[80px] md:h-[100px] rounded-full object-cover object-center"
                alt="UserImg"
            />
            <h3 className="p-2 font-inter font-bold tracking-tight text-[16px] md:text-[19px]">
                {activeUser.username}
            </h3>
            <div className="flex flex-row items-center gap-2">
                <button
                    className="flex items-center gap-2"
                    onClick={() => {
                        copy(`${GLOBAL_URL}/anon/${activeUser.username}`);
                        console.log("CALLING");
                    }}
                >
                    <p className="font-inter font-semibold tracking-tight text-[12.5px] md:text-[13px] text-black opacity-85">
                        {GLOBAL_URL}/anon/{activeUser.username}
                    </p>
                    <BiCopy />
                </button>
            </div>
            <div className="mt-3 md:mt-0 p-0 md:p-4">
                <p className="font-inter font-medium text-[13px] md:text-[14px] tracking-tight text-center text-black">
                    Share your profile link ❤️ and let your friends send in
                    their responses! Tap "View Messages" to check them out. 👌
                </p>
            </div>
        </div>
    );
};

export default ProfileHeader;
