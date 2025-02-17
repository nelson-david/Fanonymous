"use client";
import { useState } from "react";
import CustomInput from "@/app/components/form/CustomInput";
import clsx from "clsx";
import Link from "next/link";
import { ImSpinner8 } from "react-icons/im";

const SignInContent = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [processing, setProcessing] = useState(false);

    return (
        <div className="flex flex-row justify-center pt-16">
            <div className="w-[450px]">
                <form>
                    <div className="pb-5">
                        <legend className="text-center font-rebond text-[35px] font-bold tracking-tight">
                            Sign in
                        </legend>
                        <span className="p-3 text-center block font-rebond text-[16px] tracking-normal font-medium">
                            Welcome back old friend!
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
                                "flex items-center justify-center gap-2 bg-accentcolor w-full h-[52px] text-white rounded-full font-rebond font-bold text-[15px] tracking-normal spin",
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
                                "Proceed"
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
                Don't have an account?
            </p>
            <Link
                href="/auth/sign-up"
                className="text-[14px] font-inter text-white font-semibold tracking-tight underline"
            >
                Sign up now
            </Link>
        </div>
    );
};

export default SignInContent;
