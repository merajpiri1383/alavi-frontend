import { memo, useState } from "react";
import ArrowDown from "@/icons/header/arrowDown";
import ArrowUp from "@/icons/header/arrowUp";

const WorkWithMe = () => {

    const [open, setOpen] = useState<true | false>(false);

    return (
        <>
            <div className="flex items-center justify-between bg-white py-3 rounded-[8px] my-3 md:my-0
            md:bg-inherit md:justify-end">
                <div className="size-6 md:hidden active:scale-95 hover:scale-115 transition cursor-pointer"
                    onClick={() => setOpen(!open)}>
                    {
                        open ? <ArrowUp /> : <ArrowDown />
                    }
                </div>
                <p className="text-[12px] font-[700] text-[#0D0E11]
                md:text-[14px]">فرصت همکاری با من</p>
            </div>
            <div className="rtl text-[14px] font-[400] text-[#8B8B9A] leading-6 hidden md:block">
                <p className="hover:text-[#373740] cursor-pointer transition duration-400">لورم صنعت اپیسوم </p>
                <p className="hover:text-[#373740] cursor-pointer transition duration-400">لورم صنعت اپیسوم </p>
                <p className="hover:text-[#373740] cursor-pointer transition duration-400">لورم صنعت اپیسوم </p>
                <p className="hover:text-[#373740] cursor-pointer transition duration-400">لورم صنعت اپیسوم </p>
            </div>
        </>
    )
}; export default memo(WorkWithMe);