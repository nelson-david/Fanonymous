const list = ["ask me anything", "never have i ever", "confessions", "3 words"];

const MoreSection = () => {
    return (
        <section className="pt-3">
            <div className="flex flex-row justify-center">
                <p className="font-rebond font-bold tracking-tight text-[20px]">
                    Scroll for more
                </p>
            </div>
            <div className="pt-14 pb-14">
                <h3 className="text-center font-rebond font-black text-[150px] tracking-tight leading-none">
                    play q&a<span className="block">games</span>
                </h3>

                <div className="flex flex-row justify-center p-14">
                    <ul>
                        {list.map((word: string, index: number) => {
                            return (
                                <li
                                    key={index}
                                    style={{
                                        transition: "0.4s all ease-in-out",
                                    }}
                                    className="text-center pt-4 pb-4 font-rebond font-black text-[75px] cursor-pointer leading-[68px] tracking-tight text-white hover:text-[#00bec9]"
                                >
                                    {word}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default MoreSection;
