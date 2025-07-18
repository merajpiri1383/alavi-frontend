import { FC, memo } from "react";
import Image, { StaticImageData } from "next/image";
import { Slide } from "react-awesome-reveal";
import DocumentIcon from "@/components/icons/home/document";
import NetIcon from "@/components/icons/home/net";
import DocumentCode from "@/components/icons/home/documentCode";
import DriverIcon from "@/components/icons/home/driver";
import FireIcon from "@/components/icons/home/fire";
import BoxIcon from "@/components/icons/home/box";


interface ItemProps {
    icon: StaticImageData,
    title: string,
    sub_title: string,
}

const Item: FC<ItemProps> = ({ icon, sub_title, title }) => {
    return (
        <article className="relative py-2 md:py-6 mb-2 md:mb-6 group cursor-pointer col-span-1
            transition duration-400 md:border-[2px] border-[#E1E1E1] hover:border-[#4B5BCE] 
            rounded-[20px] min-w-[135px] hover:shadow-[0_0_20px_rgba(0,0,0,0.25)] border-[1.5px]">

            <div className="relative size-[32px] md:size-[55px] mx-auto my-2">
                {
                    icon && <Image
                        alt={title}
                        src={icon}
                        fill={true}
                        sizes="100%"
                        className="rounded-[10px]"
                        style={{objectFit : "cover",objectPosition : "center"}}
                    />
                }
            </div>
            <p className="text-[#2B2B2B] z-10 text-[10px] text-center font-[700] my-2
                md:text-[16px] mt-6">{title}</p>
            <p className="text-[#727379] z-10 text-[8px] text-center my-2
            font-[400] md:text-[16px]">{sub_title}</p>
        </article>
    )
}



type WorkFieldsProps = {
    title: string | null,
    sub_title: string | null,
    items: ItemProps[]
}

const WorkFields: FC<WorkFieldsProps> = (props) => {

    return (
        <div className="rtl mt-12 px-6 md:px-20" id="workfields">
            <div className="flex items-center justify-start gap-4">
                <div className="bg-[#524CF21A] size-12 md:size-14 rounded-lg flex items-center justify-center">
                    <div className="size-6 md:size-8">
                        <DocumentIcon color={"#524CF2"} />
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-sm md:text-base">{props.title}</p>
                    <p className="text-xs md:text-sm mt-2 text-[#696973]">{props.sub_title}</p>
                </div>
            </div>

            <Slide direction="up" duration={200} triggerOnce>
                <div className="py-6 flex items-center overflow-x-scroll md:grid grid-cols-5 gap-3
                    no-scrollbar md:gap-6">
                    {
                        props?.items?.map((item, index) => {
                            return (
                                <Item
                                    key={index}
                                    icon={item.icon}
                                    sub_title={item.sub_title}
                                    title={item.title}
                                />
                            )
                        })
                    }
                </div>
            </Slide>
        </div>
    )
}; export default memo(WorkFields);