"use client"
import { FC, memo } from "react";
import Image from "next/image";
import CroneIcon from "@/components/icons/home/crown2";
import { useInView } from "react-intersection-observer";


interface SkillType {
    id: string,
    title: string | null,
    text: string | null,
    icon: string | null,
    percent: number | null,
}

interface Props {
    title: string,
    sub_title: string,
    items: SkillType[],
}

const Item : FC<SkillType> = (props) => {

    const { ref, inView } = useInView({ triggerOnce: true })

    return (
        <div
            className="col-span-1 bg-[#F6F6F6] mx-2 rounded-xl p-3 min-w-60 md:w-auto">
            <div className="flex items-center justify-start gap-3">
                <div className="w-[50px] aspect-square rounded-full relative">
                    {
                        props.icon && 
                        <Image
                            src={props.icon}
                            alt={props.title ? props.title : "image"}
                            fill={true}
                            sizes="100%"
                            className="rounded-full"
                            style={{objectFit : "cover",objectPosition : "center"}}
                        />
                    }
                </div>
                <div className="w-full">
                    <p className="text-[12px] md:text-[14px] text-[#2B2B2B] font-[700]">{props.title}</p>
                    <div className="flex items-center justify-between w-full">
                        <p className="text-[12px] font-[600] text-[#8B8B9A] md:text-[14px]">{props.text}</p>
                        <p className="text-[#2F2F2F] text-[14px] font-[600]">{props.percent}%</p>
                    </div>
                </div>
            </div>
            <div className="h-[5px] bg-[#E3E3E3] w-full mt-3 rounded-[10px]">
                <div
                    ref={ref}
                    style={{ width: inView ? props.percent + "%" : "0%", transition: "width ease 3s" }}
                    className="h-[5px] bg-[#524CF2]  rounded-[10px]"></div>
            </div>
        </div>
    )
};


const Skills: FC<Props> = (props) => {

    return (
        <div className="bg-white rtl my-6 px-6 md:px-20 relative">
            <div className="flex items-center gap-4 justify-start mb-6 md:mb-10">
                <div className="bg-[#524CF21A] size-12 md:size-14 rounded-lg flex items-center justify-center">
                    <div className="size-6 md:size-8">
                        <CroneIcon color={"#524CF2"} />
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-sm md:text-base">{props.title}</p>
                    <p className="text-xs md:text-sm mt-2 text-[#696973]">{props.sub_title}</p>
                </div>
            </div>

            <div

                className="flex z-5 overflow-x-scroll no-scrollbar md:py-0 md:grid md:grid-cols-4">
                {
                    props.items.map((item, index) => {
                        return <Item {...item} key={index} />
                    })
                }
            </div>
        </div>
    )
}; export default memo(Skills);