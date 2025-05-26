import { FC, memo } from "react";
import Image, { StaticImageData } from "next/image";
import CroneIcon from "@/components/icons/home/crown";
import Logo1 from "@/public/images/Logo01 1.svg";
import Logo2 from "@/public/images/novin 1.svg"; 
import Logo3 from "@/public/images/Logo03 1.svg";
import Logo4 from "@/public/images/Logo04 1.svg";
import Logo5 from "@/public/images/sheypoor 1.svg";
import Logo6 from "@/public/images/Logo07 1.svg";

interface ItemProps {
    image : StaticImageData,
}

const Item : FC<ItemProps> = ({image}) => {
    return (
        <div
            className="col-span-1 bg-white mx-2 rounded-xl flex items-center justify-center brand-box">
            <div className="md:w-40 md:h-20 h-16 w-24 relative mx-6 my-2">
                <Image
                    src={image}
                    alt="logo1"
                    style={{objectFit : "contain",objectPosition : "center"}}
                    sizes="100%"
                    loading="lazy"
                    fill={true}
                />
            </div>
        </div>
    )
};

const BrandsWorked = () => {


    const images = [Logo1,Logo2,Logo3,Logo4,Logo5,Logo6]

    return (
        <div className="bg-white rtl my-6 px-6 md:px-20 relative">
            <div className="flex items-center gap-4 justify-start mb-8">
                <div className="bg-[#524CF21A] size-12 md:size-14 rounded-lg flex items-center justify-center">
                    <div className="size-6 md:size-8">
                        <CroneIcon color={"#524CF2"} />
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-sm md:text-base">
                        برندهایی که باهاشون همکاری کردم
                    </p>
                    <p className="text-xs md:text-sm mt-2 text-[#696973]">
                        برند های تاپ شرکت های که افتخار کار باهاشون داشتم!
                    </p>
                </div>
            </div>

            <div className="flex z-5 overflow-x-scroll no-scrollbar py-12 md:py-0 md:grid 
                md:grid-cols-6 relative">
                {
                    images.map((item,index) => {
                        return <Item image={item} key={index} />
                    })
                }
            </div>
            <div
                style={{ boxShadow: "0px 0px 100px 30px rgba(106, 0, 255, 0.59)" }} 
                className="absolute hidden md:block top-32 bottom-20 left-10 right-20 none z-[3]"></div>
        </div>
    )
}; export default memo(BrandsWorked);