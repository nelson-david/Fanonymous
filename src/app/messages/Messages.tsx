"use client";

import { useEffect, useState } from "react";
import SingleMessageCard from "../components/cards/SingleMessageCard";
import axios from "axios";
import { API_URL } from "../const";

const MessagesContent = ({ messages }: { messages: string[] }) => {
    const [messagesData, setMessagesData] = useState(messages);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${API_URL}/messages/faith-njah`);
            setMessagesData(response.data.messages);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="p-0 sm:p-15 md:p-10 lg:p-20">
            <div className="flex justify-center items-center">
                <div className="w-[850px] p-4 sm:p-5 lg:p-10">
                    {messagesData.length === 0 ? (
                        <div>
                            <p className="font-inter font-medium tracking-tight text-center">
                                You do not have any message 😔
                            </p>
                        </div>
                    ) : (
                        <>
                            <div>
                                <h2 className="text-center text-[22px] md:text-[24px] font-rebond font-semibold tracking-tight">
                                    Messages: ({messagesData.length})
                                </h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6 lg:gap-10 justify-items-center py-9 lg:py-12">
                                {messagesData.map(
                                    (message: any, index: number) => (
                                        <SingleMessageCard
                                            message={message}
                                            key={index}
                                        />
                                    )
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MessagesContent;
