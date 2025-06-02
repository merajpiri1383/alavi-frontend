import { FC, memo } from "react";
import Image from "next/image";
import MobileIcon from "@/components/icons/home/mobile";
import Image2 from "@/public/images/bg1.svg";
import Image3 from "@/public/images/avatar.svg";
import LinkIcon from "@/components/icons/home/link";
import { Slide } from "react-awesome-reveal";

interface SocialProps {
    name: string
}

const Social: FC<SocialProps> = ({ name }) => {
    return (
        <div className="col-span-1 group rounded-[20px] border border-[2px] 
        border-[#F0F0F0] min-w-72 md:min-w-auto">
            <div className="w-full h-[168px] relative mb-6">
                <Image
                    src={Image2}
                    alt="image"
                    fill={true}
                    sizes="100%"
                    className="rounded-t-[20px]"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />

                <div className="absolute size-16 rounded-full left-5 -bottom-8">
                    <div className="w-full h-full relative">
                        <Image
                            src={Image3}
                            alt="image 3"
                            fill={true}
                            sizes="100%"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                </div>
            </div>

            <div className="flex items-center jsutify-end">
                <div className="text-[#FFFFFF] text-[12px] rounded-full text-center p-2 mx-4
                bg-[#0D0E11] px-5">{name}</div>
            </div>

            <div className="w-full text-left px-6">
                <p className="font-[700] text-[16px] text-[#2B2B2B]">Alireza</p>
                <p className="text-[#8B8B9A] text-[14px] font-[400]">@alirezaalavi</p>
            </div>
            <div className="flex items-center justify-end px-6 gap-4">
                <div className="flex items-center gap-2">
                    <span className="text-[#8B8B9A] font-[600] text-[16px]">Followers</span>
                    <span className="text-[#2F2F2F] text-[16px] font-[600]">12.3K</span>
                </div>

                <div className="flex items-center gap-2 my-2">
                    <span className="text-[#8B8B9A] font-[600] text-[16px]">Following</span>
                    <span className="text-[#2F2F2F] text-[16px] font-[600]">274</span>
                </div>

            </div>
            <div className="transition duration-400 mt-2 rounded-b-[20px] py-2 py-4 px-6
            cursor-pointer group-hover:bg-[#2F2F2F]">
                <div className="flex items-center justify-end gap-2 group-hover:hidden">
                    <p className="text-[#8B8B9A] text-[16px]">github.com/alirezaalavi</p>
                    <div className="size-[24px]">
                        <LinkIcon />
                    </div>
                </div>
                <p className="text-[#FFFFFF] text-[16px] font-[600] hidden group-hover:block
                text-center">دنبال کنید</p>
            </div>
        </div>
    )
};

const Socials = () => {

    const items = ["گیت هاب", "توییتر", "لینکدین", "تلگرام"]

    return (
        <div className="bg-white rtl my-12 px-6 md:px-20 relative">
            <div className="flex items-center gap-4 justify-start mb-10">
                <div className="bg-[#524CF21A] size-12 md:size-14 rounded-lg flex items-center justify-center">
                    <div className="size-6 md:size-8">
                        <MobileIcon color={"#524CF2"} />
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-sm md:text-base">
                        شبکه های اجتماعی من
                    </p>
                    <p className="text-xs md:text-sm mt-2 text-[#696973]">
                        من را در سوشیال مدیا های مختلف دنبال کنید
                    </p>
                </div>
            </div>
            <div className="flex z-5 overflow-x-scroll no-scrollbar py-12 md:py-0 md:grid md:grid-cols-4 gap-4">
                {
                    items.map((item, index) => {
                        return (
                            <Slide key={index} duration={400} direction="up" triggerOnce>
                                <Social name={item} />
                            </Slide>
                        )
                    })
                }
            </div>
        </div>
    )
}; export default memo(Socials);