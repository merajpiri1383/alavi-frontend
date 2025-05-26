import { FC, memo } from "react";
import DocumentIcon from "@/components/icons/home/document";
import NetIcon from "@/components/icons/home/net";
import DocumentCode from "@/components/icons/home/documentCode";
import DriverIcon from "@/components/icons/home/driver";
import FireIcon from "@/components/icons/home/fire";
import BoxIcon from "@/components/icons/home/box";


interface ItemProps {
    icon : React.ReactNode,
    active_icon : React.ReactNode,
    title : string,
    text : string,
}
 
const Item : FC<ItemProps> = ({active_icon,icon,text,title }) => {
    return (
        <article className="relative py-2 md:py-6 group cursor-pointer col-span-1
            transition duration-400 border-[2px] border-[#E1E1E1] hover:border-[#4B5BCE] 
            rounded-[20px] min-w-[135px] hover:shadow-[0_0_20px_rgba(0,0,0,0.25)]">
            <div className="relative z-10 size-[32px] md:size-[55px] mx-auto my-2 group-hover:hidden">
                {icon}
            </div>
            <div className="size-[32px] relative md:size-[55px] z-10 mx-auto my-2 hidden group-hover:block">
                {active_icon}
            </div>
            <p className="text-[#2B2B2B] z-10 text-[10px] text-center font-[700] my-2
                md:text-[16px] mt-6">{title}</p>
            <p className="text-[#727379] z-10 text-[8px] text-center my-2
            font-[400] md:text-[16px]">{text}</p>
        </article>
    )
}


const WorkFields = () => {

    const items = [
        {
            icon: <NetIcon color={"#2B2B2B"} />,
            active_icon: <NetIcon color={"#524CF2"} />,
            title: "طراحی و توسعه وﺑﺴﺎﯾﺖ",
            text: "Website Development",
        }, {
            icon: <DocumentCode color={"#2B2B2B"} />,
            active_icon: <DocumentCode color={"#524CF2"} />,
            title: "برنامه نویسی اختصاصی",
            text: "Dedicated programming",
        },{
            icon: <DriverIcon color={"#2B2B2B"} />,
            active_icon: <DriverIcon color={"#524CF2"} />,
            title: "خدمات سرور و شبکه",
            text: "Server & Networking",
        },{
            icon: <FireIcon color={"#2B2B2B"} />,
            active_icon: <FireIcon color={"#524CF2"} />,
            title: "توسعه هوش مصنوعی",
            text: "Development of AI",
        },{
            icon: <BoxIcon color={"#2B2B2B"} />,
            active_icon: <BoxIcon color={"#524CF2"} />,
            title: "ماشین لرنینگ",
            text: "Machine Learning",
        }
    ]

    return (
        <div className="bg-white rtl my-6 px-6 md:px-20" id="workfields">
            <div className="flex items-center justify-start gap-4">
                <div className="bg-[#524CF21A] size-12 md:size-14 rounded-lg flex items-center justify-center">
                    <div className="size-6 md:size-8">
                        <DocumentIcon color={"#524CF2"} />
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-sm md:text-base">زمینه های کاری من</p>
                    <p className="text-xs md:text-sm mt-2 text-[#696973]">خدمات و سرویس های اراﺋﻪ دهنده</p>
                </div>
            </div>

            <div className="py-6 flex items-center overflow-x-scroll md:grid grid-cols-5 gap-6
                no-scrollbar">
                {
                    items.map((item, index) => {
                        return (
                            <Item 
                                key={index}
                                active_icon={item.active_icon}
                                icon={item.icon}
                                text={item.text}
                                title={item.title}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}; export default memo(WorkFields);