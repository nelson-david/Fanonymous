import MessageIcon from "@/app/icons/MessageIcon";
import ProfileIcon from "../icons/ProfileIcon";
import WhatsappIcon from "../icons/WhatsappIcon";
import InstagramIcon from "../icons/InstagramIcon";
import CogIcon from "../icons/CogIcon";
import { ProfileActionsProps } from "@/app/types";

const iconStyle = { size: { width: "30px", height: "30px" }, color: "#ffffff" };

const profileActions: ProfileActionsProps[] = [
    {
        title: "View messages",
        icon: <MessageIcon {...iconStyle} />,
        gradient: "bg-gradient-to-r from-blue-900 to-blue-700",
        link: "/messages",
    },
    {
        title: "Share my profile",
        icon: <ProfileIcon {...iconStyle} />,
        gradient: "bg-gradient-to-r from-green-900 to-green-700",
        link: "/share-profile",
    },
    {
        title: "Share on Whatsapp",
        icon: <WhatsappIcon {...iconStyle} />,
        gradient: "bg-gradient-to-r from-[#0F5F34] to-[#064E3B]",
        link: "/share-on-whatsapp",
    },
    {
        title: "Share on Instagram",
        icon: <InstagramIcon {...iconStyle} />,
        gradient: "bg-gradient-to-r from-[#6D1D3C] via-[#4B1136] to-[#2E0B33]",
        link: "/share-on-instagram",
    },
    {
        title: "Settings",
        icon: <CogIcon {...iconStyle} />,
        gradient: "bg-gradient-to-r from-gray-900 to-gray-700",
        link: "/settings",
    },
];

export { profileActions };
