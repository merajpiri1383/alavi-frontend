import { FC, forwardRef, memo, useRef } from "react";
import { ProjectType } from "@/app/components/types";
import HotelImage from "@/public/images/hotel.svg";
import ZaravanImage from "@/public/images/zaravan.svg";
import PythonIcon from "@/components/icons/home/python";
import Image from "next/image";
import ArrowLeft2Icon from "@/components/icons/home/arrowLeft2";
import ArrowRightIcon from "@/components/icons/home/arrowRight";
import useDraggableScroll from "use-draggable-scroll";


const ProjectTechnology = forwardRef<HTMLDivElement>(({} , ref) => {
    return (
        <div className="flex items-center justify-start gap-3 min-w-48" ref={ref}>
            <div className="size-12 border border-[#E7E7E7] rounded-[8px] flex 
                items-center justify-center">
                <div className="size-6">
                    <PythonIcon />
                </div>
            </div>
            <div>
                <p className="text-xs text-[#2B2B2B] font-[600]">زبان نویسی بک اند</p>
                <p className="text-xs text-[#727379] my-1">پایتون</p>
            </div>
        </div>
    )
});

ProjectTechnology.displayName = "ProjectTechnology"

const Project: FC<ProjectType> = () => {

    const technologies = [1, 2, 3, 4, 5, 6, 7,8,9];
    const scrollRef = useRef<HTMLDivElement>(null!);
    const itemRef = useRef<HTMLDivElement>(null);

    const { onMouseDown } = useDraggableScroll(scrollRef,{direction : "horizontal"});

    const scrollHandler = (offset : number) => {
        scrollRef.current?.scrollBy({
            behavior : "smooth",
            left : offset > 0 ? 
            itemRef.current?.getBoundingClientRect().width : 
            -(itemRef.current?.getBoundingClientRect().width as number)
        })
    };

    return (
        <article className="grid grid-cols-1 md:grid-cols-7 items-stretch">
            <div className="col-span-1 md:col-span-5">
                <div className="flex items-center justify-start gap-4">
                    <div className="size-14 md:size-16 bg-[#F3F3F3] flex 
                            items-center justify-center rounded-xl cursor-pointer">
                        <div className="size-8 relative">
                            <Image
                                src={ZaravanImage}
                                alt="zarvan image"
                                priority={false}
                                fill={true}
                                loading="lazy"
                                sizes="100%"
                                style={{ objectFit: "cover", objectPosition: "center" }}
                            />
                        </div>
                    </div>
                    <div>
                        <p className="text-xs font-[700] text-[#2B2B2B] md:text-sm cursor-pointer">
                            زروان تریپ (Zarvantrip)</p>
                        <p className="text-xs mt-[6px] font-[400] text-[#2B2B2B] md:text-sm">
                            فروردین ۱۴۰۴ - اردیبهشت ۱۴۰۴
                        </p>
                    </div>
                </div>
                <p className="text-sm my-4 hidden pl-6 md:block text-[#727379] leading-6 text-justify col-span-1">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                    صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی
                    نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی
                    با تولید سادگی نامفهوم از صنعت چاپ است نامفهوم از صنعت چاپ و با استفاده میباشد.</p>
            </div>

            <div className="w-full my-4 md:my-0  relative col-span-1 md:col-span-2">
                <Image
                    src={HotelImage}
                    alt="hotel image"
                    className="rounded-[12px] cursor-pointer"
                    fill={true}
                    sizes="100%"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
            </div>
            <p className="text-xs my-4 md:hidden text-[#727379] leading-6 text-justify col-span-1">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی
                نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی
                با تولید سادگی نامفهوم از صنعت چاپ است نامفهوم از صنعت چاپ و با استفاده میباشد.</p>

            <div className="my-4 col-span-1 md:col-span-7 md:flex items-center md:my-6 gap-2">
                <p className="text-xs text-[#2B2B2B] font-[600] my-2 w-80 md:text-sm mx-auto
                text-center">تکنولوژی وبسایت :</p>
                <div className="hidden md:flex w-fit p-2 bg-[#F2F2F2] rounded-[5px] items-center 
                    justify-center hover:bg-[#E4E4E4] transition duration-200 
                    cursor-pointer active:scale-95 h-full" onClick={() => scrollHandler(200)}>
                    <div className="size-5">
                        <ArrowRightIcon />
                    </div>
                </div>
                <div
                    ref={scrollRef}
                    onMouseDown={onMouseDown}
                    className="flex items-center justify-start gap-4 overflow-x-scroll no-scrollbar
                    cursor-move">
                    {
                        technologies.map((technology, index) => {
                            return (
                                <ProjectTechnology 
                                    key={index} 
                                    ref={itemRef}
                                />
                            )
                        })
                    }
                </div>
                <div className="hidden md:flex w-fit p-2 bg-[#F2F2F2] rounded-[5px] items-center 
                    justify-center hover:bg-[#E4E4E4] transition duration-200 
                    cursor-pointer active:scale-95 h-full" onClick={() => scrollHandler(-200)}>
                    <div className="size-5">
                        <ArrowLeft2Icon />
                    </div>
                </div>
            </div>

            <div className="my-4 bg-[#524CF2] w-fit text-white rounded-[6px] p-3 text-xs cursor-pointer
                hover:bg-[#807ff0] transition duration-400">
                مطالعه جزئیات پروژه
            </div>
        </article>
    )
}; export default memo(Project);