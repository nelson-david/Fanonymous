import { Fragment } from "react";

const CanDoSection = () => {
    return (
        <Fragment>
            <div className="relative">
                <svg
                    className="absolute inset-x-0 bottom-0 w-full h-16"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#00bec9"
                        d="M0,256L120,229.3C240,203,480,149,720,154.7C960,160,1200,224,1320,256L1440,288V320H0Z"
                    ></path>
                </svg>
            </div>

            <section className="pt-3 pb-5 bg-gradient-to-b from-[#00bec9] to-[#0894c3]">
                <div className="flex flex-row justify-center">
                    <p className="font-rebond font-bold tracking-tight text-[20px]">
                        Scroll for more
                    </p>
                </div>
                <div className="pt-14 pb-14">
                    <h3 className="text-center font-rebond font-black text-[150px] tracking-tight leading-none">
                        flood your<span className="block">inbox</span>
                    </h3>
                </div>
            </section>
        </Fragment>
    );
};

export default CanDoSection;
