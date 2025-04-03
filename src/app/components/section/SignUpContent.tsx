"use client";

import { useState } from "react";
import CustomInput from "@/app/components/form/CustomInput";
import clsx from "clsx";
import Link from "next/link";
import { ImSpinner8 } from "react-icons/im";
import axios from "axios";
import { API_URL, errorToast, successToast } from "@/app/const";
import { useRouter } from "next/navigation";

const SignUpContent = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [processing, setProcessing] = useState(false);
    const router = useRouter();

    const signUp = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setProcessing(true);
        axios
            .post(`${API_URL}/sign-up`, {
                username,
                password,
            })
            .then(function () {
                successToast("Account successfully created; Login now");
                router.push("/auth/sign-in");
            })
            .catch(function (error: any) {
                if (error.response) {
                    errorToast(error.response.data);
                } else {
                    errorToast("An error occured");
                }
            })
            .finally(() => {
                setProcessing(false);
            });
    };

    return (
        <div className="flex flex-row justify-center pt-16">
            <div className="w-[450px]">
                <form onSubmit={signUp}>
                    <div className="pb-5">
                        <legend className="text-center w-full font-rebond text-[35px] font-bold tracking-tight">
                            Sign up
                        </legend>
                        <span className="p-3 text-center block font-inter text-[15px] tracking-normal font-medium">
                            Recieve anonymous compliments from your friends and
                            send anonymous messages to your friends for free.
                        </span>
                    </div>
                    <div className="pt-2 pb-2">
                        <CustomInput
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e: string) => setUsername(e)}
                            useLabel
                            label="Your Username"
                        />
                    </div>
                    <div className="pt-2 pb-2">
                        <CustomInput
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e: string) => setPassword(e)}
                            useLabel
                            label="Password"
                        />
                    </div>

                    <div className="pt-10 pb-5">
                        <button
                            type="submit"
                            disabled={processing}
                            className={clsx(
                                "flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full h-[52px] text-white font-inter font-semibold text-[14px] tracking-normal spin",
                                processing && "opacity-60"
                            )}
                        >
                            {processing ? (
                                <>
                                    <i style={{ transform: "scale(0.8)" }}>
                                        <ImSpinner8 />
                                    </i>{" "}
                                    Logging in...
                                </>
                            ) : (
                                "Next"
                            )}
                        </button>
                    </div>

                    <AuthQuestion />
                </form>
            </div>
        </div>
    );
};

const AuthQuestion = () => {
    return (
        <div className="flex flex-row gap-1 p-2">
            <p className="text-[13px] font-inter text-white opacity-75 font-medium tracking-tight">
                Already have an account?
            </p>
            <Link
                href="/auth/sign-in"
                className="text-[14px] font-inter text-white font-semibold tracking-tight underline"
            >
                Sign in now
            </Link>
        </div>
    );
};

export default SignUpContent;
