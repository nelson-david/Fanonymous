"use client";
import Image from "next/image";
import LadyImage from "@/assets/images/sign-in.jpeg";

const AuthImage = () => {
    return (
        <div
            className="hidden lg:block h-[100%]"
            style={{ border: "2px solid green" }}
        >
            <Image
                src={LadyImage}
                alt="AuthLoginImage"
                className="w-[100%] h-[100%] object-cover object-center"
            />
        </div>
    );
};

export default AuthImage;
