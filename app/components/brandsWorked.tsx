import { FC, memo } from "react";
import Image from "next/image";
import { Slide } from "react-awesome-reveal";
import CroneIcon from "@/components/icons/home/crown";

interface ItemProps {
    image : string,
}


const Item: FC<ItemProps> = ({ image }) => {

    return (
        <div
            className="col-span-1 bg-white mx-2 rounded-xl flex items-center justify-center relative">
            <div className="md:w-[190px] md:h-[61px] py-6 h-[33px] w-[102px] relative mx-6 my-2">
                {
                    image && <Image 
                        src={image}
                        alt="image"
                        fill={true}
                        sizes="100%"
                        className="rounded-[10px]"
                        style={{objectFit : "cover",objectPosition : "center"}}
                    />
                }
            </div>
        </div>
    )
};


type BrandProps = {
    title: string | null,
    sub_title: string | null,
    items: ItemProps[],
}

const BrandsWorked: FC<BrandProps> = ({ items, sub_title, title }) => {

    return (
        <div className="rtl my-12 px-6 md:px-20 relative">
            <div className="flex items-center gap-4 justify-start mb-6 md:mb-10">
                <div className="bg-[#524CF21A] size-12 md:size-14 rounded-lg flex items-center justify-center">
                    <div className="size-6 md:size-8">
                        <CroneIcon color={"#524CF2"} />
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-sm md:text-base">{title}</p>
                    <p className="text-xs md:text-sm mt-2 text-[#696973]">{sub_title}</p>
                </div>
            </div>

            <Slide className="relative z-[4]" direction="up" duration={200} triggerOnce>
                <div className="flex z-5 overflow-x-scroll no-scrollbar  md:py-0 md:grid 
                md:grid-cols-6 relative md:gap-4">
                    {
                        items.map((item, index) => {
                            return <Item image={item.image}  key={index} />
                        })
                    }
                </div>
            </Slide>

            <div className="hidden md:block">
                <div
                    style={{ boxShadow: "0px 0px 100px 30px #AAB3F1" }}
                    className="absolute md:block top-32 bottom-20 left-[75%] right-0 none z-[3]"></div>

                <div
                    style={{ boxShadow: "0px 0px 100px 30px #A77AFF" }}
                    className="absolute  md:block top-32 bottom-20 left-[25%] right-[25%] none z-[3]"></div>

                <div
                    style={{ boxShadow: "0px 0px 100px 30px #D662C3" }}
                    className="absolute md:block top-32 bottom-20 left-10 right-[75%] none z-[3]"></div>
            </div>

            <div className="md:hidden">
                <div
                    style={{ boxShadow: "0px 0px 100px 15px #AAB3F1" }}
                    className="absolute md:block top-32 bottom-20 left-[75%] right-0 none z-[3]"></div>

                <div
                    style={{ boxShadow: "0px 0px 100px 15px #A77AFF" }}
                    className="absolute  md:block top-32 bottom-20 left-[25%] right-[25%] none z-[3]"></div>

                <div
                    style={{ boxShadow: "0px 0px 100px 15px #D662C3" }}
                    className="absolute md:block top-32 bottom-20 left-10 right-[75%] none z-[3]"></div>
            </div>
        </div>
    )
}; export default memo(BrandsWorked);