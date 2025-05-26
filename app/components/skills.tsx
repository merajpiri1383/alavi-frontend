"use client"
import { memo } from "react";
import CroneIcon from "@/components/icons/home/crown2";
import PythonIcon from "@/components/icons/home/python";
import { useInView } from "react-intersection-observer";

const Item = () => {

    const {ref,inView} = useInView({triggerOnce : true})

    return (
        <div
            className="col-span-1 bg-[#F6F6F6] mx-2 rounded-xl p-3 min-w-60 md:w-auto">
            <div className="flex items-center justify-start gap-3">
                <div className="bg-[#E3E3E3] size-10 flex items-center justify-center rounded-full">
                    <div className="size-6">
                        <PythonIcon />
                    </div>
                </div>
                <div className="w-full">
                    <p className="text-[12px] md:text-[14px] text-[#2B2B2B] font-[700]">ماشین لرنینگ</p>
                    <div className="flex items-center justify-between w-full">
                        <p className="text-[12px] font-[600] text-[#8B8B9A] md:text-[14px]">Machine Learning</p>
                        <p className="text-[#2F2F2F] text-[14px] font-[600]">56%</p>
                    </div>
                </div>
            </div>
            <div className="h-[5px] bg-[#E3E3E3] w-full mt-3 rounded-[10px]">
                <div 
                    ref={ref}
                    style={{width : inView ? "56%" : "0%" , transition : "width ease 2s"}}
                    className="h-[5px] bg-[#524CF2]  rounded-[10px]"></div>
            </div>
        </div>
    )
};

const Skills = () => {

    const list = [1, 2, 3, 4]

    return (
        <div className="bg-white rtl my-6 px-6 md:px-20 relative select-none">
            <div className="flex items-center gap-4 justify-start mb-10">
                <div className="bg-[#524CF21A] size-12 md:size-14 rounded-lg flex items-center justify-center">
                    <div className="size-6 md:size-8">
                        <CroneIcon color={"#524CF2"} />
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-sm md:text-base">
                        حوزه های تخصصی
                    </p>
                    <p className="text-xs md:text-sm mt-2 text-[#696973]">
                        حوزه های در این بخش ها تخصص لازم دارم
                    </p>
                </div>
            </div>

            <div

                className="flex z-5 overflow-x-scroll no-scrollbar py-12 md:py-0 md:grid md:grid-cols-4">
                {
                    list.map((item, index) => {
                        return <Item key={index} />
                    })
                }
            </div>
        </div>
    )
}; export default memo(Skills);