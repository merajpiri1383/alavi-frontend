import { memo } from "react";
import Image from "next/image";
import KairoIcon from "@/public/images/kairo.svg";
import KairoBg from "@/public/images/bg-kairo.png";
import ArrowLeftIcon from "@/components/icons/home/arrowLeft";



const Kairo = () => {
    return (
        <div className="grid grid-cols-7 rtl px-6 md:px-20 my-12 gap-8 select-none">
            <div className="col-span-7 md:col-span-2">
                <div className="relative h-[280px] w-full z-[1]">
                    <Image
                        src={KairoBg}
                        alt="kairo bg"
                        fill={true}
                        sizes="100%"
                        className="rounded-[20px]"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        priority={false}
                    />
                    <div className="absolute top-0 left-0 right-0 bottom-0 z-[2] flex items-center 
                    justify-center">
                        <div>
                            <div className="size-[100px] relative mx-auto">
                                <Image 
                                    src={KairoIcon}
                                    alt="kairo icon"
                                    fill={true}
                                    sizes="100%"
                                    priority={false}
                                />
                            </div>
                            <p className="text-[18px] text-[#FFFFFF] font-[600]">
                            Kairo Digital Marketing Startup</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-7 md:col-span-5 flex items-center justify-start">
                <div>
                    <p className="text-[#2B2B2B] text-[18px] font-[700]">
                        استارتاپ دیجیتال مارکتینگ کایرو</p>
                    <p className="text-[#2B2B2B] text-[16px] font-[400]">Kairo Startup</p>
                    <p className="text-[#727379] font-[600] text-[12px] text-justify my-2 leading-6">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده ا
                        ز طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
                        که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                        بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                        آینده شناخت فراوان جامعه و متخصصان را
                        می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان میباشد.</p>

                    <div className="flex items-center justify-center p-3 w-fit border-[1.5px]
                        border-[#E7E7E7] rounded-[10px] gap-2 my-6 hover:scale-115 active:scale-95 
                        transition duration-300 cursor-pointer">
                        <p className="text-[#2B2B2B] font-[600] text-[14px]">به سمت کایرو حرکت کن</p>
                        <div className="size-5">
                            <ArrowLeftIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}; export default memo(Kairo);