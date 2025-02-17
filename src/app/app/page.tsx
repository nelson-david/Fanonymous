import UserImg from "@/assets/images/sign-in.jpeg";
import Image from "next/image";
import { BiCopy } from "react-icons/bi";
import { profileActions } from "../data/profileAction";
import { ProfileActionsProps } from "@/app/types";
import SingleLink from "@/app/components/cards/SingleLink";

const App = () => {
    return (
        <div className="p-20">
            <div className="flex justify-center items-center">
                <div className="w-[550px] p-10">
                    <div className="flex flex-col items-center">
                        <Image
                            src={UserImg}
                            className="w-[100px] h-[100px] rounded-full object-cover object-center"
                            alt="UserImg"
                        />
                        <h3 className="p-2 font-inter font-bold tracking-tight text-[20px]">
                            urbandev__
                        </h3>
                        <div className="flex flex-row items-center gap-2">
                            <p className="font-inter font-semibold tracking-tight text-[14px] text-white opacity-85">
                                https://gdpd.xyz/urbandev__
                            </p>
                            <BiCopy />
                        </div>
                        <div className="p-4">
                            <p className="font-inter font-medium text-[14.4px] text-center">
                                Share your profile link ❤️ and let your friends
                                send in their responses! Tap "View Messages" to
                                check them out. 👌
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 justify-items-center pt-6 pb-6">
                        {profileActions.map(
                            (action: ProfileActionsProps, index: number) => {
                                return (
                                    <SingleLink key={index} action={action} />
                                );
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
