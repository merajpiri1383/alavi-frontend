import React, { FC, useState } from "react";
import CloseIcon from "@/icons/header/close";
import { Slide } from "react-awesome-reveal";
import DropDownInput from "@/utils/hook/inputDropdown";
import ArrowUpIcon from "@/components/icons/footer/arrowUp";
import ArrowDown from "@/components/icons/header/arrowDown";


interface OnlineFormProps {
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>
}




const OnlineForm: FC<OnlineFormProps> = ({ setShowForm }) => {

    const [meetingTopic, setMeetingTopic] = useState<string>("");
    const [businessType, setBusinessType] = useState<string>("");
    const [meetingTime,setMeetingTime] = useState<string>("");

    return (
        <Slide direction="up" duration={400}>
            <div className="flex items-center justify-between mt-12 md:my-0 mx-[30px]">
                <div>
                    <p className="text-[#2B2B2B] font-[600] text-[14px] mb-1 md:text-[16px]">
                        فرم درخواستی جلسه حضوری، آنلاین
                    </p>
                    <p className="text-[#5A6166] font-[500] text-[12px] md:text-[14px]">
                        برای آشنایی، گفت و گوی اولیه یا بررسی کلیه پروژه
                    </p>
                </div>

                <div className="size-[14px] cursor-pointer active:scale-110"
                    onClick={() => setShowForm(false)}>
                    <CloseIcon />
                </div>
            </div>
            <div className="w-full h-[2px] bg-[#EBEBEB] my-4 md:hidden"></div>

            <div className="grid grid-cols-2 mx-[30px] my-6 gap-[15px]">

                <div className="col-span-2 bg-[#F9F9F9] border-[1.3px] border-[#EFEFEF]
                    rounded-[10px]">
                    <input
                        type="text"
                        className="text-[#2F2F2F] font-semibold text-[12px] placeholder-[#B4B4BB]
                        w-full outline-none p-[20px]"
                        placeholder="نام و نام خانوادگی خود را وارد نمایید"
                    />
                </div>

                <div className="col-span-2 bg-[#F9F9F9] border-[1.3px] border-[#EFEFEF]
                    rounded-[10px]">
                    <input
                        type="text"
                        className="text-[#2F2F2F] font-semibold text-[12px] placeholder-[#B4B4BB]
                        w-full outline-none p-[20px]"
                        placeholder="شماره تماس خود را وارد نمایید"
                    />
                </div>

                <DropDownInput
                    items={["مشاوره اولیه", "بررسی ایده", "بررسی پروژه جاری",
                        "طراحی یا توسعه وبسایت", "طراحی اپلیکیشن", "همکاری یا دعوت به تیم"
                    ]}
                    placeholder="موضوع جلسه"
                    value={meetingTopic}
                    setValue={setMeetingTopic}
                />

                <DropDownInput
                    items={["فروشگاهی","خدماتی","آموزشی","استارتاپی","شخصی"]}
                    placeholder="زمینه فعالیت، نوع کسب و کار"
                    setValue={setBusinessType}
                    value={businessType}
                />

                <DropDownInput 
                    items={["ساعت ۹:۰۰ تا ۱۰:۰۰","ساعت ۱۰:۰۰ تا ۱۱:۰۰","ساعت ۱۱:۰۰ تا ۱۲:۰۰",
                        "ساعت ۱۲:۰۰ تا ۱۳:۰۰","ساعت ۱۳:۰۰ تا ۱۴:۰۰","ساعت ۱۴:۰۰ تا ۱۵:۰۰"
                    ]}
                    placeholder="ساعت مناسب برای جلسه"
                    setValue={setMeetingTime}
                    value={meetingTime}
                />

            </div>
        </Slide>
    )
}; export default OnlineForm;