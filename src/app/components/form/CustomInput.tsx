import { CustomInputProps } from "@/app/types";
import clsx from "clsx";
import { useState } from "react";

const CustomInput = ({
    value,
    onChange,
    placeholder,
    type,
    useLabel,
    label,
}: CustomInputProps) => {
    const [focused, setFocused] = useState(false);

    return (
        <div>
            {useLabel && (
                <label
                    className={clsx(
                        "font-inter font-medium opacity-100 text-[12px] tracking-normal bg-[#000000] z-100",
                        focused ? "text-accentcolor" : "text-white"
                    )}
                    style={{
                        display: "inline-flex",
                        marginLeft: "13px",
                        paddingLeft: "3.5px",
                        paddingRight: "3.5px",
                        position: "relative",
                        transition: "color 0.2s ease-in-out",
                    }}
                >
                    {label}
                </label>
            )}
            <input
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required
                type={type ? type : "text"}
                className="w-full h-[55px] px-[15px] border border-[#ffffff55] bg-black rounded-[10px] outline-none focus:ring-0 focus:border-accentcolor shadow-none text-[13.5px] font-medium mt-1 tracking-tighter resize-none font-inter placeholder-[rgba(255,255,255,0.3)] text-white"
                style={{
                    marginTop: "-10px",
                    transition: "border-color 0.2s ease-in-out",
                    borderWidth: "1.1px",
                }}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            />
        </div>
    );
};

export default CustomInput;
