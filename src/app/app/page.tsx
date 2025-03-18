import { profileActions } from "../data/profileAction";
import { ProfileActionsProps } from "@/app/types";
import SingleLink from "@/app/components/cards/SingleLink";
import { cookies } from "next/headers";
import AppLayout from "../layouts/AppLayout";
import ProfileHeader from "../components/cards/ProfileHeader";

const App = async () => {
    const cookieStore = await cookies();
    const user: any = cookieStore.get("user");
    const activeUser = JSON.parse(user.value);

    return (
        <AppLayout>
            <div className="p-20">
                <div className="flex justify-center items-center">
                    <div className="w-[550px] p-10">
                        <ProfileHeader activeUser={activeUser} />

                        <div className="grid grid-cols-3 gap-4 justify-items-center pt-6 pb-6">
                            {profileActions.map(
                                (
                                    action: ProfileActionsProps,
                                    index: number
                                ) => {
                                    return (
                                        <SingleLink
                                            key={index}
                                            action={action}
                                            username={activeUser.username}
                                        />
                                    );
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default App;
