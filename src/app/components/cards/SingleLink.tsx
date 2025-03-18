"use client";

import { ProfileActionsProps } from "@/app/types";
import Link from "next/link";
import { MouseEvent, useState } from "react";
import ShareModal from "../modal/ShareModal";

const SingleLink = ({
    username,
    action,
}: {
    username: string;
    action: ProfileActionsProps;
}) => {
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);

    const linkAction = (e: MouseEvent<HTMLAnchorElement>) => {
        switch (action.link) {
            case "/share-profile":
                e.preventDefault();
                setIsShareModalOpen(true);
                break;
            case "/share-on-whatsapp":
                e.preventDefault();
                alert("Share on Whatsapp");
                break;
            case "/share-on-instagram":
                e.preventDefault();
                alert("Share on Instagram");
                break;
        }
    };

    return (
        <>
            <Link
                href={action.link}
                style={{
                    transition: "0.3s all ease-in-out",
                }}
                onClick={linkAction}
                className={`border-[1.5px] border-black hover:border-accentcolor w-[130px] h-[130px] flex flex-col justify-center items-center rounded-full p-4 ${action.gradient} mt-2 mb-2`}
            >
                <i
                    className="flex justify-center"
                    style={{ transform: "scale(0.85)" }}
                >
                    {action.icon}
                </i>
                <p
                    className="text-center p-[2.3px] mt-[1.2px]  font-inter font-semibold tracking-tight text-[13px]"
                    style={{ transform: "scale(0.9)" }}
                >
                    {action.title}
                </p>
            </Link>
            <ShareModal
                isOpen={isShareModalOpen}
                setIsOpen={setIsShareModalOpen}
                username={username}
            />
        </>
    );
};

export default SingleLink;
