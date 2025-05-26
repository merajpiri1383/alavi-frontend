import { memo } from "react";
import CallIcon from "@/icons/footer/call";
import MessageIcon from "@/icons/footer/message";
import LocationIcon from "@/icons/footer/location";


const Contact = () => {
    return (
        <div className="rtl md:flex items-center justify-between my-4">
            <p className="font-[600] text-[12px] md:text-[14px]">
                <span className="text-[#DADADA] mx-1">من همیشه در</span>
                <span className="text-[#2B2B2B]">کنار شما دوستان عزیز هستم :)</span>
            </p>
            <div className="md:flex items-center justify-between my-2 gap-8 flex-row-reverse">
                <div className="my-2 flex items-center justify-start gap-2">
                    <div className="size-6">
                        <LocationIcon />
                    </div>
                    <p className="text-[#2B2B2B] font-[700] text-[12px] md:text-[14px]">
                        گرگان، گلستان خیابان مطهری، رو به رو بانک پارسیان</p>
                </div>
                <div className="my-2 flex items-center justify-start gap-2">
                    <div className="size-6">
                        <MessageIcon />
                    </div>
                    <p className="text-[#2B2B2B] font-[700] text-[12px] md:text-[14px]">
                        info@alirezaalavi.com</p>
                </div>
                <div className="my-2 flex items-center justify-start gap-2">
                    <div className="size-6">
                        <CallIcon />
                    </div>
                    <p className="text-[#2B2B2B] font-[700] text-[12px] md:text-[14px] [direction:ltr]">
                        +۹۸ - ۹۱۲۳۴۷۸۶۵</p>
                </div>
            </div>
        </div>
    )
}; export default memo(Contact)