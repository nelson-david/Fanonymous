import { Fragment } from "react";
import Marquee from "react-marquee-slider";

const prompts = [
    "send me your confessions",
    "ask me anything",
    "not gonna lie",
    "send me a never have I ever",
    "describe me in 3 words",
    "share an opinion that'll get you cancelled",
    "tell me who your crush is",
    "send me your confessions",
    "ask me anything",
    "not gonna lie",
    "send me a never have I ever",
    "describe me in 3 words",
    "share an opinion that'll get you cancelled",
    "tell me who your crush is",
    "send me your confessions",
];

const Navbar = () => {
    return (
        <nav>
            <div className="p-3">
                <Marquee
                    velocity={30}
                    direction="rtl"
                    scatterRandomly={false}
                    resetAfterTries={1}
                    onInit={() => {}}
                    onFinish={() => {}}
                >
                    <div className="flex items-center">
                        {prompts.map((text: string, index: number) => {
                            return (
                                <Fragment key={index}>
                                    <p
                                        className="font-inter font-semibold text-[13.5px] tracking-tight"
                                        key={index}
                                    >
                                        {text}
                                    </p>
                                    <span className="bg-white lg:w-[4.5px] lg:h-[4.5px] rounded-full ml-2 mr-2"></span>
                                </Fragment>
                            );
                        })}
                    </div>
                    <></>
                </Marquee>
            </div>
        </nav>
    );
};

export default Navbar;
