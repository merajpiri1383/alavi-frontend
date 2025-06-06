"use client"
import Image from "next/image";
import CupIcon from "@/components/icons/home/cup";
import EllipseIcon from "@/components/icons/home/ellipse";
import VerticalLineIcon from "@/components/icons/home/verticalLine";
import BrowserIcon from "@/components/icons/home/browser";
import ZaravanIcon from "@/public/images/zaravan.svg";
import ArrowDownIcon2 from "@/components/icons/home/arrowDown2";
import { FC, memo, useRef, useState } from "react";
import { Slide } from "react-awesome-reveal";



const Experience = () => {

    const [showLink, setShowlink] = useState(false);
    const linkRef = useRef<HTMLDivElement>(null);


    return (
        <Slide direction="up" duration={400} triggerOnce>
            <div className="flex items-center justify-start gap-4">
                <div className="size-[55px] bg-[#F3F3F3] rounded-[8px] flex items-center justify-center">
                    <div className="size-[33px] relative">
                        <Image
                            src={ZaravanIcon}
                            alt="zaravan icon"
                            fill={true}
                            sizes="100%"
                            priority={false}
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                </div>
                <div className="text-[#2B2B2B] text-[12px]">
                    <p className="font-[700]">تیم لید بک اند زروان تریپ</p>
                    <p className="font-[400] mt-2">Team Lead backend Zarvantrip</p>
                </div>
            </div>
            <p className="text-[12px] text-[#727379] my-2 text-justify font-[600] leading-6">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی
                نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی
                با تولید سادگی نامفهوم از صنعت چاپ است نامفهوم از صنعت چاپ و با استفاده میباشد.</p>
            <div className="flex items-center justify-start gap-3">
                <div className="text-[#2B2B2B] font-[600] text-[10px] bg-[#E7E7E7] p-3
                rounded-[6px]">مطالعه بیشتر</div>

                <div className="flex items-center justify-center bg-[#E7E7E7] rounded-[8px] p-3
                    cursor-pointer  hover:bg-[#524CF21A] transition duration-500 group/browser"
                    onMouseLeave={() => setShowlink(false)}
                    onMouseEnter={() => setShowlink(true)}>
                    <div className="size-[15px]">
                        <BrowserIcon hoverColor="#524CF2" />
                    </div>
                    <p 
                        ref={linkRef}
                        style={{
                            "--link-width" : linkRef.current?.getBoundingClientRect().width + "px"
                        } as React.CSSProperties}
                        className={`text-[#524CF2] text-[12px] font-[600]
                            transition duration-500 ${showLink ? "show-link" : "hide-link"}`}>
                            https://zarvantrip.com
                        </p>
                </div>
            </div>
        </Slide>
    )
};

interface ItemProps {
    index: number,
}

const Item: FC<ItemProps> = ({ index }) => {
    return (
        <div className={`grid grid-cols-10 gap-2 group ${index % 2 === 0 && "md:[direction:ltr]"}
            md:flex justify-between`}>

            <p className={`hidden md:block w-[45vw] ${index % 2 === 0 ? "text-right" : "text-left"}
            text-[16px] font-[600] text-[#2B2B2B]`}>دی ماه ۱۴۰۲ - اسفند ماه ۱۴۰۳</p>
            <div className="h-full col-span-1">
                <div className="size-[20px] mx-auto mt-15 md:mt-0">
                    <EllipseIcon color="#A5A5A5" hoverColor="#524CF2" />
                </div>
                <div className="w-2 h-64 mx-auto">
                    <VerticalLineIcon />
                </div>
            </div>
            <div className="col-span-9 md:w-[45vw] rtl">
                <p className="text-[12px] mb-6 md:hidden">دی ماه ۱۴۰۲ - اسفند ماه ۱۴۰۳</p>
                <Experience />
            </div>
        </div>
    )
};

const MyExperience = () => {

    const items = [1, 2, 3, 4, 5];
    const [showMore, setShowMore] = useState<true | false>(false);

    return (
        <div className="rtl mb-12 px-6 md:px-20 relative" id="my_experience">
            <div className="flex items-center gap-4 justify-start mb-10">
                <div className="bg-[#524CF21A] size-12 md:size-14 rounded-lg flex items-center justify-center">
                    <div className="size-6 md:size-8">
                        <CupIcon color={"#524CF2"} />
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-sm md:text-base">تجربیات کاری من</p>
                    <p className="text-xs md:text-sm mt-2 text-[#696973]">
                        شروع قوی، ادامه بی انتها در عمق کهکشان!
                    </p>
                </div>
            </div>

            <div
                style={{"--show-height" : items.length * 270 + "px"} as React.CSSProperties} 
                className={`grid grid-cols-1 
                ${!showMore ? "experience-hide " : "experience-show"} overflow-hidden`}>
                    {
                        items.map((item, index) => {
                            return (
                                <Item
                                    key={index}
                                    index={index}
                                />
                            )
                        })
                    }
                </div>
            <div className="flex items-center justify-start z-[2] md:justify-center">
                <div className="flex items-center justify-start gap-4 md:flex-col cursor-pointer"
                    onClick={() => setShowMore(!showMore)}>
                    <div className="bg-[#524CF2] rounded-full flex items-center justify-center p-1 py-2">
                        <div className={`h-[20px] ${showMore && "rotate-180"} `}>
                            <ArrowDownIcon2 />
                        </div>
                    </div>
                    <p className="text-[#524CF2] text-[12px] font-[700]">مطالعه بیشتر تجربه من</p>
                </div>
            </div>
        </div>
    )
}; export default memo(MyExperience);