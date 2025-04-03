// components/MessageCarousel.tsx
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion";

type Message = {
    _id: string;
    user: string;
    message: string;
    dateSent: string;
    ipAddress: string;
};

export default function MessageCarousel({ messages }: { messages: Message[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState<"left" | "right">("right");

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            setDirection("left");
            setCurrentIndex((prev) => Math.min(prev + 1, messages.length - 1));
        },
        onSwipedRight: () => {
            setDirection("right");
            setCurrentIndex((prev) => Math.max(prev - 1, 0));
        },
        trackMouse: true,
        // preventDefaultTouchmoveEvent: true,
    });

    return (
        <div className="relative h-full w-full overflow-hidden">
            <div {...handlers} className="h-full w-full">
                {messages.map((message, index) => (
                    <motion.div
                        key={message._id}
                        className={`absolute inset-0 flex items-center justify-center p-4 ${
                            index === currentIndex ? "z-10" : "z-0"
                        }`}
                        initial={{
                            x: direction === "right" ? "100%" : "-100%",
                            opacity: 0,
                        }}
                        animate={{
                            x:
                                index === currentIndex
                                    ? 0
                                    : index < currentIndex
                                    ? "-100%"
                                    : "100%",
                            opacity: index === currentIndex ? 1 : 0,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                        }}
                    >
                        <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
                            <p className="text-gray-800 text-lg">
                                {message.message}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Navigation indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                {messages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setDirection(
                                index > currentIndex ? "left" : "right"
                            );
                            setCurrentIndex(index);
                        }}
                        className={`w-3 h-3 rounded-full ${
                            index === currentIndex
                                ? "bg-blue-500"
                                : "bg-gray-300"
                        }`}
                        aria-label={`Go to message ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
