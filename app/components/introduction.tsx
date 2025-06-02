"use client"
import { FC, memo } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import AlirezaEmoji from "@/public/images/alireza-emoji.svg";
import FourIcon from "@/components/icons/home/four";
import ArrowLeftIcon from "@/components/icons/home/arrowLeft";
import { useDeviceType } from "@/utils/hook/deviceType";

const IntroductionImages = dynamic(() => import("@/app/components/introductionImages"),{ssr : false});

const Introduction: FC = () => {

    const deviceType = useDeviceType();

    return (
        <section className="grid grid-cols-5 relative z-0 bg-[#F8F8F8] rtl overflow-hidden 
             pt-6 md:px-10 gap-24 pb-16">
            <section className="col-span-5 md:col-span-3 px-6">
                {/* Watermark Icon Positioned Absolutely */}
                <div className="absolute top-0 size-24 -right-5 md:size-32 z-0 pointer-events-none">
                    <FourIcon />
                </div>

                {/* Main Content */}
                <div className="flex items-center justify-start gap-1 rtl relative z-10">
                    <h1 className="text-[#0D0E11] font-[900] text-[17.24px] md:text-3xl font-sheed
                    md:text-[40px]">علیرضا علوی هستم!</h1>
                    <div className="size-12 md:size-16 relative">
                        <Image
                            src={AlirezaEmoji}
                            alt="Alireza emoji"
                            sizes="100%"
                            loading="lazy"
                            quality={100}
                            fill={true}
                            priority={false}
                        />
                    </div>
                </div>
                <p className="text-[13.91px] md:text-[30px] z-10 relative text-[#4B5BCE] font-[600] 
                font-sheed "
                >راهبر پروژه های دیجیتال و طراح تجربه فنی برای کسب و کار ها</p>
                <p className="text-xs md:text-sm text-justify my-2 text-[#69696F] leading-6 z-10">لورم ایپسوم
                    متن ساختگی با تولید
                    سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم
                    ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                    از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                    از صنعت چاپ است نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>

                <div className="flex items-center justify-start my-6 gap-4">
                    <div className="flex items-center justify-center rounded-lg p-3 px-4 bg-[#252525]
                        cursor-pointer hover:shadow-2xl transition duration-500">
                        <p className="text-white text-xs md:text-sm">رزومه کاری من</p>
                    </div>

                    <div className="border border-[#E7E7E7] rounded-lg flex items-center justify-center p-3 gap-2
                        transition duration-500 cursor-pointer hover:shadow-2xl">
                        <p className="text-xs md:text-sm text-[#2B2B2B]">به سمت کایرو حرکت کن</p>
                        <div className="size-4 md:size-5">
                            <ArrowLeftIcon />
                        </div>
                    </div>
                </div>
            </section>

            {
                deviceType === "desktop" &&
                <section className="col-span-2">
                    <IntroductionImages />
                </section>
            }
        </section>
    );
};

export default memo(Introduction);