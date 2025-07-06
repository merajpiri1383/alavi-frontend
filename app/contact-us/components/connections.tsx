import React, { FC } from "react";
import CallCallingIcon from "@/components/icons/contact-us/callCalling";
import ImportIcon from "@/components/icons/contact-us/import";
import SmsIcon from "@/components/icons/contact-us/sms";

interface ConnectionType {
    icon : React.ReactElement,
    title : string,
    text : string,
    context : string | React.ReactElement,
}

const Connection : FC<ConnectionType> = (props) => {
    return (
        <div className="border border-[1.5px] border-[#EDEDED] rounded-[14px]
            grid grid-cols-5 p-4 md:grid-cols-1">
                <div className="col-span-1">
                    <div className="size-[40px] bg-[#EDEDED] rounded-[8px] flex items-center justify-center
                        md:size-[60px] md:mx-auto">
                        <div className="size-[18px] md:size-[35px]">
                            {props.icon}
                        </div>
                    </div>
                </div>
                <div className="col-span-4 md:col-span-1 md:text-center">
                    <p className="font-[600] text-[#2B2B2B] md:my-2 text-[12px] md:text-[18px]">
                        {props.title}</p>
                    <p className="text-[#5F5F6C] text-[12px] my-1 h-4 overflow-hidden
                    font-[500] md:text-[16px] md:h-6">{props.text}</p>
                    {props.context}
                </div>
            </div>
    )
}

const Connections: FC = () => {

    const connections : ConnectionType[] = [
        {
            icon : <CallCallingIcon />,
            title : "شماره تماس واتساپ",
            text : "اگر سوالی داشتی با شماره زیر تماس بگیر!",
            context : <p className="text-[#2B2B2B] text-[12px] font-[500] my-2
                md:text-[16px]">021 - ۹۱۲۴۳۷۶۷۸۴</p>
        },{
            icon : <SmsIcon />,
            title : "آدرس ایمیل ",
            text : "اگر مطلب یا سخنی داشتی به ایمیل زیر پیام بده",
            context : <p className="text-[#2B2B2B] text-[12px] font-[500] my-2
                md:text-[16px]">info@alirezaalavi.com</p>
        },{
            icon : <ImportIcon />,
            title : "دانلود رزومه",
            text : "رزومه من را میتونید از لینک پایین دانلود کنید",
            context : <div className="text-[#FFFFFF] bg-[#524CF2] w-fit md:mx-auto
            text-[10px] font-semibold px-[10px] py-[7px] rounded-[6px] my-2
            md:text-[12px]">دانلود رزرومه</div>
        },
    ]

    return (

        <div className="mx-6 md:mx-20 mb-12 md:my-12">
            <div>
                <p className="text-[#2B2B2B] font-[600] text-[12px] md:text-[24px]
                ">راه ارتباطی با من</p>
                <p className="text-[#727379] font-[500] text-[12px] text-justify my-2 
                    md:text-[18px] leading-[160%]">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                    استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                    از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با
                    تولید سادگی نامفهوم از صنعت چاپ است نامفهوم از صنعت چاپ و با استفاده میباشد.</p>
            </div>

            <div className="my-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
                    {
                        connections.map((connection,index) => {
                            return (
                                <Connection key={index} {...connection} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};export default Connections;