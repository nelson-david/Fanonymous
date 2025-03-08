import { cookies } from "next/headers";
import AppLayout from "../layouts/AppLayout";
import MessagesContent from "./Messages";

const Messages = async () => {
    const cookieStore = await cookies();
    const messagesStore: any = cookieStore.get("messages");
    const messages = JSON.parse(messagesStore.value);

    return (
        <AppLayout>
            <MessagesContent messages={messages} />
        </AppLayout>
    );
};

export default Messages;
