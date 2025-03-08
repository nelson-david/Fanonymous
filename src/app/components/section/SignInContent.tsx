"use client";

import { useState, useTransition } from "react";
import CustomInput from "@/app/components/form/CustomInput";
import clsx from "clsx";
import Link from "next/link";
import { ImSpinner8 } from "react-icons/im";
import { useRouter } from "next/navigation";
import { signInUser } from "@/app/actions/auth";

const SignInContent = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");

        startTransition(async () => {
            const res = await signInUser(username, password);

            if (res.error) {
                console.log("RES: ", res);
                setError(res.error);
            } else {
                router.push("/app"); // Redirect to dashboard
            }
        });
    };

    return (
        <div className="flex flex-row justify-center pt-16">
            <div className="w-[450px]">
                <form onSubmit={handleSubmit}>
                    <div className="pb-5">
                        <legend className="text-center font-rebond text-[35px] font-bold tracking-tight">
                            Sign in
                        </legend>
                        <span className="p-3 text-center block font-inter text-[15px] tracking-normal font-medium">
                            Welcome back old friend!
                        </span>
                    </div>

                    {error && (
                        <p className="text-red-500 text-sm text-center pb-2">
                            {error}
                        </p>
                    )}

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
                            type="password"
                        />
                    </div>

                    <div className="pt-10 pb-5">
                        <button
                            type="submit"
                            disabled={isPending}
                            className={clsx(
                                "flex items-center justify-center gap-2 bg-accentcolor w-full h-[52px] text-white rounded-full font-rebond font-bold text-[15px] tracking-normal",
                                isPending && "opacity-60"
                            )}
                        >
                            {isPending ? (
                                <>
                                    <i style={{ transform: "scale(0.8)" }}>
                                        <ImSpinner8 className="animate-spin" />
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

const AuthQuestion = () => (
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

export default SignInContent;
