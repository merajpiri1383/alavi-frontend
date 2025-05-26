"use client"
import Image from "next/image";
import AlaviEmoji2 from "@/public/images/alavi-emoji-2.svg";
import FormBg from "@/public/images/bg-form.svg";
import FourIcon from "@/components/icons/home/four";
import { useState } from "react";
import { ToastContainer , toast } from "react-toastify";
import ToastSuccess from "@/components/toast/success";
import ToastError from "@/components/toast/error";

const Form = () => {

    const [phone,setPhone] = useState<string | null>(null);
    const [text,setText] = useState<string | null>(null);

    const clickHandler = () => {
        if (phone && text) {
            toast.info(<ToastSuccess message="پیام شما با موفقیت به جناب علیرضا علوی ارسال شد." />)
        } else if (!phone) {
            toast.info(<ToastError message="مشتری گرامی فیلد (شماره تلفن) خالی میباشد." />)
        } else if (!text) {
            toast.info(<ToastError message="مشتری گرامی فیلد (محتوا) خالی میباشد." />)
        }
    };

    return (
        <div className="grid grid-cols-7 px-6 md:px-20 select-none">

            <div className="col-span-7 md:col-span-3">
                <div className="h-[265px] md:h-[340px] w-full relative">
                    <Image
                        src={FormBg}
                        alt="form bg"
                        fill={true}
                        sizes="100%"
                        priority={true}
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        className="rounded-t-[12px] md:rounded-t-[0px] md:rounded-l-[30px]"
                    />
                </div>
            </div>
            <div className="col-span-7 md:col-span-4 bg-[#F3F3F3] py-4 px-5 md:px-10 rtl relative
                rounded-b-[12px] md:rounded-ee-[0px] md:rounded-r-[30px]">
                <div className="size-20 absolute z-[1] right-2 md:right-5 top-0 md:top-2">
                    <FourIcon color="#E8E8E8" />
                </div>
                <div className="flex items-center justify-start z-[2] relative mt-6">
                    <p className="text-[#0D0E11] text-[18px] md:text-[20px] font-sheed">
                        پیام مدنظرتون برای من ارسال کنید</p>
                    <div className="size-[45px] md:size-[65px] relative">
                        <Image
                            src={AlaviEmoji2}
                            alt="alavi emoji 2"
                            fill={true}
                            sizes="100%"

                        />
                    </div>
                </div>
                <p className="text-[#515151] text-[12px]  font-[600] text-justify leading-6">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                    از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید
                    سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="col-span-1 grid grid-cols-1 gap-3">
                        <div className="col-span-1">
                            <input
                                className="bg-[#E8E8E8] rounded-[8px] p-3 text-[12px]
                                font-[600] text-[#2F2F2F] w-full outline-none"
                                defaultValue={"علیرضا علوی"}
                                readOnly={true}
                            />
                        </div>
                        <div className="col-span-1">
                            <input
                                className="bg-[#E8E8E8] rounded-[8px] p-3 text-[12px]
                                font-[600] text-[#878787] w-full outline-none"
                                placeholder="* شماره همراه خود را وارد نمایید"
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-span-1">
                        <textarea className="bg-[#E8E8E8] rounded-[8px] p-3 text-[12px]
                        font-[600] text-[#878787] h-48 md:h-full w-full outline-none"
                        placeholder="* محتوا مورد نظر خود را وارد نمایید..."
                        onChange={(e) => setText(e.target.value)}
                        ></textarea>
                    </div>
                </div>
                <div className="bg-[#524CF2] w-fit text-[#FFFFFF] text-[12px] font-[600]
                my-4 p-3 rounded-[6px]" onClick={clickHandler}>ارسال دیدگاه</div>
            </div>
            <ToastContainer
                draggable={true}
                theme="light"
                position="bottom-left"
                closeButton={false}
                icon={false}
                hideProgressBar={true}
                closeOnClick={true}
            />
        </div>
    )
}; export default Form