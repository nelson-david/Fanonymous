const SingleMessageCard = ({
    message,
}: {
    message: { message: string; dateSent: string };
}) => {
    return (
        <div className="w-[100%] p-4 sm:p-5 rounded-[20px] bg-[#f1f1f2]">
            <div>
                <h3 className="font-inter font-semibold text-[16px] tracking-tighter text-accentcolor">
                    Messages:{" "}
                </h3>
                <p className="font-inter font-medium tracking-tight mt-1 mb-1 text-[13px] p-1">
                    {message.message}
                </p>

                <p className="p-1 font-inter font-medium tracking-tight text-[11.5px]">
                    - Anonymous [{message.dateSent}]
                </p>
            </div>
            <div className="p-1 mt-4">
                <button className="text-center h-[40px] bg-accentcolor w-[100%] rounded-full font-inter text-[11.5px] sm:text-[12px] font-medium tracking-tight">
                    Share response
                </button>
            </div>
        </div>
    );
};

export default SingleMessageCard;
