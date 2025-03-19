import SendMessageForm from "@/app/components/form/SendMessageForm";
import PageLayout from "@/app/layouts/PageLayout";

const MessageUser = async ({
    params,
}: {
    params: Promise<{ username: string }>;
}) => {
    const { username } = await params;

    return (
        <PageLayout>
            <div className="p-3 sm:p-10 md:p-20">
                <div className="flex justify-center items-center">
                    <div className="w-[100%] md:w-[550px] md:p-10">
                        <div className="mt-8">
                            <h2 className="font-inter font-medium tracking-tight text-[15px] mb-2">
                                Send an Anonymous Message to{" "}
                                <span className="font-semibold text-[14.5px]">
                                    {username}
                                </span>
                            </h2>
                            <SendMessageForm username={username} />
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default MessageUser;
