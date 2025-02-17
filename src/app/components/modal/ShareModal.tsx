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

interface ModalProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ShareModal = ({ isOpen, setIsOpen }: ModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 w-full h-full bg-[#00000050] bg-opacity-50 backdrop-blur-[2.5px] flex justify-center items-center z-[50000] p-4 sm:p-7"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                >
                    <motion.div
                        onClick={(e: any) => {
                            e.stopPropagation();
                        }}
                        className="w-full sm:w-[460px] h-[auto] p-5 pb-12 bg-[#1c1b1b] block z-[600] rounded-[20px]"
                    >
                        <div className="flex flex-row justify-between items-center p-2 mb-8">
                            <h3 className="text-[18px] font-inter tracking-tight font-semibold opacity-85 text-white">
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
                                    title="Share on Whatsapp"
                                    icon={<FaWhatsapp color="white" />}
                                    className="bg-gradient-to-r from-[#075E54] to-[#064C44]"
                                />
                                <SingleShareButton
                                    title="Share on Snapchat"
                                    icon={<FaSnapchat color="white" />}
                                    className="bg-gradient-to-r from-[#FFAC33] to-[#C78B2D]"
                                />
                                <SingleShareButton
                                    title="Share on Facebook"
                                    icon={<FaFacebook color="white" />}
                                    className="bg-gradient-to-r from-[#1C1E21] to-[#0E0F10]"
                                />
                                <SingleShareButton
                                    title="Share to Instagram"
                                    icon={<FaInstagram color="white" />}
                                    className="bg-gradient-to-r from-[#833AB4] via-[#531485] to-[#320F5C]"
                                />
                                <SingleShareButton
                                    title="Share to Twitter"
                                    icon={<FaTwitter color="white" />}
                                    className="bg-gradient-to-r from-[#1DA1F2] to-[#16638E]"
                                />
                                <SingleShareButton
                                    title="Share to Line"
                                    icon={<FaLine color="white" />}
                                    className="bg-gradient-to-r from-[#00B900] to-[#007A00]"
                                />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const SingleShareButton = ({
    title,
    icon,
    className,
}: {
    title: string;
    icon: JSX.Element;
    className: string;
}) => {
    return (
        <Link
            href={`https://api.whatsapp.com/send?text=Write%20a%20*secret%20anonymous%20message*%20for%20me..%20%F0%9F%98%89%20I%20*won%27t%20know*%20who%20wrote%20it..%20%F0%9F%98%82%E2%9D%A4%20%F0%9F%91%89%20https://fanonymous.xyz/urban_dev`}
            className={`w-[100%] h-[65px] flex flex-row justify-center items-center gap-1 rounded-[15px] p-3 ${className}  `}
        >
            <i
                className="flex justify-center"
                style={{ transform: "scale(0.85)" }}
            >
                {icon}
            </i>
            <p className="text-center p-[2.3px] mt-[1.2px]  font-inter font-semibold tracking-tight text-[12.5px]">
                {title}
            </p>
        </Link>
    );
};

export default ShareModal;
