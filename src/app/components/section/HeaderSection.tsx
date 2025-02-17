import Link from "next/link";
import { Fragment } from "react";

const HeaderSection = () => {
    return (
        <Fragment>
            <div className="p-4 pt-0">
                <section className="p-20 rounded-t-[45px] bg-gradient-to-r from-[#00bec9] via-[#058e96] to-[#0894c3]">
                    <div className="">
                        <h1 className="text-center font-rebond font-black text-[150px] tracking-tight leading-none">
                            real <span className="block">friends</span>
                            <span className="block">real fun</span>
                        </h1>

                        <div className="flex flex-row justify-center pt-10 pb-6">
                            <Link
                                href="/auth/sign-in"
                                className="h-[75px] w-[280px] flex flex-row items-center justify-center rounded-full font-rebond font-bold tracking-tight text-[22px] bg-white text-black"
                            >
                                Get Started!
                            </Link>
                        </div>
                    </div>
                </section>
                <div className="relative">
                    <svg
                        className="absolute inset-x-0 bottom-0 w-full h-16"
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="#000000"
                            d="M0,256L120,229.3C240,203,480,149,720,154.7C960,160,1200,224,1320,256L1440,288V320H0Z"
                        ></path>
                    </svg>
                </div>
            </div>
        </Fragment>
    );
};

export default HeaderSection;
