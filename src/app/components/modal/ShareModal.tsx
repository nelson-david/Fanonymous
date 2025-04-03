"use client";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLine } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Dispatch, JSX, SetStateAction } from "react";
import { MdCancel } from "react-icons/md";
import { GLOBAL_URL } from "@/app/const";
import { getShareUrl } from "@/app/utils/getSocialPlatformLink";

interface ModalProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ShareModal = ({
    username,
    isOpen,
    setIsOpen,
}: { username: string } & ModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 w-full h-full bg-[#00000050] bg-opacity-50 backdrop-blur-[2.5px] flex justify-center items-center z-[50000] p-3 md:p-4 sm:p-7"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                >
                    <motion.div
                        onClick={(e: any) => {
                            e.stopPropagation();
                        }}
                        className="w-full sm:w-[460px] h-[auto] p-3 md:p-5 pb-7 md:pb-12 bg-[#f1f1f1] block z-[600] rounded-[20px]"
                    >
                        <div className="flex flex-row justify-between items-center p-2 mb-8">
                            <h3 className="text-[18px] font-inter tracking-tight font-semibold opacity-85 text-black">
                                Share your profile
                            </h3>
                            <span
                                onClick={() => setIsOpen(false)}
                                className="cursor-pointer"
                            >
                                <MdCancel size={22} />
                            </span>
                        </div>

                        <div className="content p-2 pt-0">
                            <div className="grid grid-cols-2 gap-5">
                                <SingleShareButton
                                    platform="whatsapp"
                                    title="Share on Whatsapp"
                                    username={username}
                                    icon={<FaWhatsapp color="white" />}
                                    className="bg-gradient-to-r from-[#075E54] to-[#064C44]"
                                />
                                <SingleShareButton
                                    platform="snapchat"
                                    title="Share on Snapchat"
                                    username={username}
                                    icon={<FaSnapchat color="white" />}
                                    className="bg-gradient-to-r from-[#FFAC33] to-[#C78B2D]"
                                />
                                <SingleShareButton
                                    platform="facebook"
                                    title="Share on Facebook"
                                    username={username}
                                    icon={<FaFacebook color="white" />}
                                    className="bg-gradient-to-r from-[#1C1E21] to-[#0E0F10]"
                                />
                                <SingleShareButton
                                    platform="instagram"
                                    title="Share to Instagram"
                                    username={username}
                                    icon={<FaInstagram color="white" />}
                                    className="bg-gradient-to-r from-[#833AB4] via-[#531485] to-[#320F5C]"
                                />
                                {/* <SingleShareButton
                                    platform="twitter"
                                    title="Share to Twitter"
                                    username={username}
                                    icon={<FaTwitter color="white" />}
                                    className="bg-gradient-to-r from-[#1DA1F2] to-[#16638E]"
                                />
                                <SingleShareButton
                                    platform="whatsapp"
                                    title="Share to Line"
                                    username={username}
                                    icon={<FaLine color="white" />}
                                    className="bg-gradient-to-r from-[#00B900] to-[#007A00]"
                                /> */}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

type SocialPlatform =
    | "whatsapp"
    | "facebook"
    | "twitter"
    | "instagram"
    | "snapchat"
    | "linkedin"
    | "telegram"
    | "reddit";

const SingleShareButton = ({
    platform,
    title,
    icon,
    username,
    className,
}: {
    platform: SocialPlatform;
    title: string;
    icon: JSX.Element;
    username: string;
    className: string;
}) => {
    return (
        <Link
            href={getShareUrl(
                `Write%20a%20*secret%20anonymous%20message*%20for%20me..%20%F0%9F%98%89%20I%20*won%27t%20know*%20who%20wrote%20it..%20%F0%9F%98%82%E2%9D%A4%20%F0%9F%91%89%20${GLOBAL_URL}/anon/${username}`,
                platform
            )}
            // href={`https://api.whatsapp.com/send?text=Write%20a%20*secret%20anonymous%20message*%20for%20me..%20%F0%9F%98%89%20I%20*won%27t%20know*%20who%20wrote%20it..%20%F0%9F%98%82%E2%9D%A4%20%F0%9F%91%89%20${GLOBAL_URL}/anon/${username}`}
            className={`w-[100%] h-[65px] flex flex-row justify-center items-center gap-1 rounded-[10px] md:rounded-[15px] p-2 md:p-3 ${className}  `}
        >
            <i
                className="flex justify-center"
                style={{ transform: "scale(0.85)" }}
            >
                {icon}
            </i>
            <p className="md:text-center text-white p-[2.3px] mt-[1.2px]  font-inter font-semibold tracking-tight text-[11px] md:text-[12.5px]">
                {title}
            </p>
        </Link>
    );
};

export default ShareModal;
