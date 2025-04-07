import { cookies } from "next/headers";
import AppLayout from "../layouts/AppLayout";
import MessagesContent from "./Messages";

const Messages = async () => {
    const cookieStore = await cookies();
    const userStore: any = cookieStore.get("user");
    const messagesStore: any = cookieStore.get("messages");
    const messages = JSON.parse(messagesStore.value);
    const user = JSON.parse(userStore.value);

    return (
        <AppLayout>
            <MessagesContent messages={messages} username={user.username} />
        </AppLayout>
    );
};

export default Messages;
