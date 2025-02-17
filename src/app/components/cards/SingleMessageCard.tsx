const SingleMessageCard = ({
    message,
}: {
    message: { message: string; time: string };
}) => {
    return (
        <div className="w-[100%] p-5 rounded-[20px] border-[2px] border-accentcolor">
            <div>
                <h3 className="font-rebond font-bold text-[19px] tracking-tight text-accentcolor">
                    Messages:{" "}
                </h3>
                <p className="font-inter font-semibold tracking-tight mt-1 mb-1 text-[14.5px] p-1">
                    {message.message}
                </p>

                <p className="p-1 font-inter font-medium tracking-tight text-[13.5px]">
                    - Anonymous [{message.time}]
                </p>
            </div>
            <div className="p-1 mt-4">
                <button className="text-center h-[43px] bg-accentcolor w-[100%] rounded-full font-inter text-[13.5px] font-medium tracking-tight">
                    Share response
                </button>
            </div>
        </div>
    );
};

export default SingleMessageCard;
