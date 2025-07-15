

import React, { FC, useState } from "react";
import { Slide } from "react-awesome-reveal";
import DatePicker from "react-multi-date-picker"
import Persion from "react-date-object/calendars/persian";
import FaLocale from "react-date-object/locales/persian_fa"
import DropDownInput from "@/utils/hook/inputDropdown";
import CalendarIcon from "@/components/icons/header/calendar";
import CloseIcon from "@/icons/header/close";
import ClockIcon from "@/components/icons/header/clock";
import DocumentUpload from "@/components/icons/header/documentUpload";

interface ExplainProjectProps {
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>
}




const ExplainProject: FC<ExplainProjectProps> = ({ setShowForm }) => {

    const [meetingTime, setMeetingTime] = useState<string>("");

    return (
        <Slide direction="up" duration={400} triggerOnce>
            <div className="md:gap-32 flex items-center justify-between mt-12 md:my-0 mx-[30px]">
                <div>
                    <p className="text-[#2B2B2B] font-[600] text-[14px] mb-1 md:text-[16px]">
                        توضیح پروژه، دریافت مشاوره تخصصی
                    </p>
                    <p className="text-[#5A6166] font-[500] text-[12px] md:text-[14px]">
                        فرصتی برای بررسی نیاز ها و دریافت دیدگاه حرفه ای
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

                <div className="md:col-span-1 col-span-2 bg-[#F9F9F9] border-[1.3px] border-[#EFEFEF]
                    rounded-[10px]">
                    <input
                        type="text"
                        className="text-[#2F2F2F] font-semibold text-[12px] placeholder-[#B4B4BB]
                        w-full outline-none p-[20px]"
                        placeholder="* عنوان پروژه"
                    />
                </div>

                <div className="md:col-span-1 col-span-2 bg-[#F9F9F9] border-[1.3px] border-[#EFEFEF] gap-6
                    rounded-[10px] flex items-center justify-between p-[16px] relative cursor-pointer">
                    <p className=" font-semibold text-[12px] text-[#B4B4BB] w-fit outline-none ">
                        ارسال فایل
                    </p>
                    <input type="file"
                        className="absolute opacity-[0%]"
                    />

                    <div className="bg-[#524CF21A] flex items-center gap-[7px] justify-center p-[6px]
                        rounded-[5px]">
                        <div className="size-[14px]">
                            <DocumentUpload />
                        </div>
                        <p className="text-[10px] text-[#524CF2] font-[500]">انتخاب فایل مدنظر</p>
                    </div>
                </div>

                <div className="md:col-span-1 col-span-2 bg-[#F9F9F9] border-[1.3px] border-[#EFEFEF]
                    rounded-[10px] flex items-center justify-between">
                    <DatePicker
                        locale={FaLocale}
                        calendar={Persion}
                        inputClass="text-[#2F2F2F] font-semibold text-[12px] placeholder-[#B4B4BB]
                        w-full outline-none p-[20px]"
                        placeholder="تاریخ مناسب برای جلسه (اختیاری)"
                    />
                    <div className="size-[20px] mx-[20px]">
                        <CalendarIcon />
                    </div>
                </div>

                <DropDownInput
                    items={["ساعت ۹:۰۰ تا ۱۰:۰۰", "ساعت ۱۰:۰۰ تا ۱۱:۰۰", "ساعت ۱۱:۰۰ تا ۱۲:۰۰",
                        "ساعت ۱۲:۰۰ تا ۱۳:۰۰", "ساعت ۱۳:۰۰ تا ۱۴:۰۰", "ساعت ۱۴:۰۰ تا ۱۵:۰۰"
                    ]}
                    placeholder="ساعت مناسب برای جلسه (اختیاری)"
                    setValue={setMeetingTime}
                    value={meetingTime}
                    icon={<div className="size-[20px]"><ClockIcon /></div>}
                />

                <div className="col-span-2 bg-[#F9F9F9] border-[1.3px] border-[#EFEFEF]
                    rounded-[10px]">

                    <textarea
                        className="text-[#2F2F2F] font-semibold text-[12px] placeholder-[#B4B4BB]
                        w-full outline-none p-[20px] resize-none h-[130px]"
                        placeholder="* جزییات پروژه شامل (چه چیزی در ذهن دارید؟
                         / چه مشکلی قراره حل بشه؟ / بودجه حدودی؟)"></textarea>
                </div>


                <div className="col-span-2">
                    <div className=" bg-[#524CF2] p-[14px] rounded-[10px] cursor-pointer w-full md:w-fit">
                        <p className="text-center w-full text-[#FFFFFF] text-[14px] font-[500]
                        ">درخواست جلسه ثبت کن!</p>
                    </div>
                </div>
            </div>
        </Slide>
    )
}; export default ExplainProject;