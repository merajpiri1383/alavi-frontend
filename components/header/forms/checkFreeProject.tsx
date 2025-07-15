import React, { FC, useState } from "react";
import { Slide } from "react-awesome-reveal";
import DatePicker from "react-multi-date-picker"
import Persion from "react-date-object/calendars/persian";
import FaLocale from "react-date-object/locales/persian_fa"
import DropDownInput from "@/utils/hook/inputDropdown";
import CalendarIcon from "@/components/icons/header/calendar";
import CloseIcon from "@/icons/header/close";
import ClockIcon from "@/components/icons/header/clock";

interface CheckFreeProjectProps {
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>
}




const CheckFreeProject: FC<CheckFreeProjectProps> = ({ setShowForm }) => {

    const [meetingTopic, setMeetingTopic] = useState<string>("");

    return (
        <Slide direction="up" duration={400} triggerOnce>
            <div className="md:gap-32 flex items-center justify-between mt-12 md:my-0 mx-[30px] md:gap-32">
                <div>
                    <p className="text-[#2B2B2B] font-[600] text-[14px] mb-1 md:text-[16px]">
                        فرم درخواست بررسی رایگان پروژه، وبسایت
                    </p>
                    <p className="text-[#5A6166] font-[500] text-[12px] md:text-[14px]">
                        اگه میخواید سیستم فعلیتون بررسی بشه و پیشنهاد حرفه ای بگیرید.
                    </p>
                </div>

                <div className="size-[14px] cursor-pointer active:scale-110"
                    onClick={() => setShowForm(false)}>
                    <CloseIcon />
                </div>
            </div>
            <div className="w-full h-[2px] bg-[#EBEBEB] my-4 md:hidden"></div>

            <div className="grid grid-cols-2 mx-[30px] my-6 gap-[15px]">

                <div className="md:col-span-1 col-span-2 bg-[#F9F9F9] border-[1.3px] border-[#EFEFEF]
                    rounded-[10px]">
                    <input
                        type="text"
                        className="text-[#2F2F2F] font-semibold text-[12px] placeholder-[#B4B4BB]
                        w-full outline-none p-[20px]"
                        placeholder="* نام و نام خانوادگی خود را وارد نمایید"
                    />
                </div>

                <div className="md:col-span-1 col-span-2 bg-[#F9F9F9] border-[1.3px] border-[#EFEFEF]
                    rounded-[10px]">
                    <input
                        type="text"
                        className="text-[#2F2F2F] font-semibold text-[12px] placeholder-[#B4B4BB]
                        w-full outline-none p-[20px]"
                        placeholder="* شماره تماس خود را وارد نمایید"
                    />
                </div>

                <DropDownInput
                    items={["وبسایت شرکتی", "فروشگاه اینترنتی", "پنل مدیریت (CRM)",
                        "ربات تلگرام / پلتفرم خاص ", "پروژه برنامه نویسی سفارش"
                    ]}
                    placeholder="موضوع پروژه یا پروژه فعلی"
                    value={meetingTopic}
                    setValue={setMeetingTopic}
                />

                <div className="md:col-span-1 col-span-2 bg-[#F9F9F9] border-[1.3px] border-[#EFEFEF]
                    rounded-[10px]">
                    <input
                        type="text"
                        className="text-[#2F2F2F] font-semibold text-[12px] placeholder-[#B4B4BB]
                        w-full outline-none p-[20px]"
                        placeholder="آدرس پروژه یا لینک سایت (در صورت وجود)"
                    />
                </div>

                <div className="col-span-2 bg-[#F9F9F9] border-[1.3px] border-[#EFEFEF]
                    rounded-[10px]">

                    <textarea
                        className="text-[#2F2F2F] font-semibold text-[12px] placeholder-[#B4B4BB]
                        w-full outline-none p-[20px] resize-none h-[130px]"
                        placeholder="توضیح دلخواه (اختیاری)"></textarea>
                </div>


                <div className="col-span-2">
                    <div className=" bg-[#524CF2] p-[14px] rounded-[10px] cursor-pointer w-full md:w-fit">
                        <p className="text-center w-full text-[#FFFFFF] text-[14px] font-[500]
                        ">بفرست بررسی کنم</p>
                    </div>
                </div>
            </div>
        </Slide>
    )
}; export default CheckFreeProject;