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
                        "font-inter font-medium opacity-100 text-[12px] tracking-normal bg-[#ffffff] z-100",
                        focused ? "text-indigo-500" : "text-black"
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
                className="w-full h-[55px] px-[15px] border-[1.5px] border-[#00000030] bg-white rounded-[10px] outline-none focus:ring-0 focus:border-indigo-600 shadow-none text-[13.5px] font-medium mt-1 tracking-tight resize-none font-inter placeholder-[rgba(0,0,0,0.3)] text-black"
                style={{
                    marginTop: "-10px",
                    transition: "border-color 0.2s ease-in-out",
                }}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            />
        </div>
    );
};

export default CustomInput;
