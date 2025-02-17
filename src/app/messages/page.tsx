import SingleMessageCard from "../components/cards/SingleMessageCard";

const dummyMessages = [
    {
        message: "Hey, I love your content! Keep it up! 😊",
        time: "17-02-2025 10:45 GMT",
    },
    {
        message: "I think you're really talented, just wanted to say that!",
        time: "17-02-2025 11:30 GMT",
    },
    {
        message: "What's your biggest dream in life? 🤔",
        time: "17-02-2025 12:15 GMT",
    },
    {
        message:
            "If you could have dinner with anyone, dead or alive, who would it be?",
        time: "17-02-2025 13:20 GMT",
    },
    { message: "Your style is 🔥🔥🔥", time: "17-02-2025 14:05 GMT" },
    {
        message: "I admire your confidence! How do you stay so positive?",
        time: "17-02-2025 15:40 GMT",
    },
    {
        message:
            "Just wanted to remind you that you're awesome. Have a great day! 😊",
        time: "17-02-2025 16:10 GMT",
    },
    {
        message: "What's your favorite memory from childhood?",
        time: "17-02-2025 17:55 GMT",
    },
    {
        message: "Would you rather travel to the past or the future? 🌍",
        time: "17-02-2025 18:25 GMT",
    },
    {
        message:
            "Lowkey, I think you're really cool but I'm too shy to say it in person. 😳",
        time: "17-02-2025 19:50 GMT",
    },
    {
        message: "Describe your perfect day in three words!",
        time: "17-02-2025 20:15 GMT",
    },
    {
        message: "I dare you to post your most embarrassing moment! 😆",
        time: "17-02-2025 21:00 GMT",
    },
    {
        message: "If you had one superpower, what would it be?",
        time: "17-02-2025 22:20 GMT",
    },
    {
        message: "You inspire me more than you know. Thank you! ❤️",
        time: "17-02-2025 23:45 GMT",
    },
];

const Messages = () => {
    return (
        <div className="p-20">
            <div className="flex justify-center items-center">
                <div className="w-[850px] p-10">
                    <div>
                        <h2 className="text-center text-[24px] font-rebond font-semibold tracking-tight">
                            Messages: ({dummyMessages.length})
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 gap-10 justify-items-center pt-12 pb-12">
                        {dummyMessages.map((message, index) => (
                            <SingleMessageCard message={message} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Messages;
