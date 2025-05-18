"use client"

import LogoIcon from "@/icons/header/logo";
import ArrowUp from "@/icons/footer/arrowUp";
import { FC } from "react";

interface Props {
    is_mobile : boolean
}

const About : FC<Props> = ({ is_mobile }) => {

    const scrollTop = () => {
        window?.scrollTo({
            top : 0,
            behavior : "smooth"
        })
    };

    return (
        <div>
            <div className="flex items-center justify-between">

                <div className="bg-white flex items-center justify-center py-4 px-2 rounded-[10px]
                    cursor-pointer gap-2"
                    onClick={scrollTop}>
                    <div className="size-5">
                        <ArrowUp />
                    </div>
                    {
                        !is_mobile && <p className="hidden md:block text-[#2B2B2B]
                        text-[14px]">پرش به بالا</p>
                    }
                </div>

                <div className="flex items-center justify-end gap-4 bg-white p-2 pl-12 rounded-[10px]">
                    <div className="rtl">
                        <p className="text-xs font-bold">علیرضا علوی</p>
                        <p className="text-xs font-bold">Alireza Alavi</p>
                    </div>
                    <div className="size-10">
                        <LogoIcon />
                    </div>
                </div>
            </div>
            <p className="text-justify text-[12px] rtl leading-6 my-2 text-[#69696F] font-[600]">
                لورم ایپسوم متنساختگی با تولید سادگی نامفهوم از صنعت چاپ
                و با استفاده از طراحان گرافیک است. لورم ایپسوم متن
                ساختگی با تولید سادگی
                نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم
                متن ساختگی با تولید
                سادگی نامفهوم از صنعت چاپ است نامفهوم از صنعت چاپ و با استفاده میباشد.</p>
        </div>
    )
}; export default About;