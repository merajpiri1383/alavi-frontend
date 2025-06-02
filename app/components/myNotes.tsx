"use client"
import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import NotesIcon from "@/components/icons/home/notes";
import ArrowLeftIcon from "@/components/icons/home/arrowLeft";
import Note1 from "@/public/images/note1.svg";
import Note2 from "@/public/images/note2.svg";
import Note3 from "@/public/images/note3.svg";
import Note4 from "@/public/images/note4.svg";
import Note5 from "@/public/images/note5.svg";
import { Slide } from "react-awesome-reveal";


interface NoteProps {
    image: StaticImageData,
    title: string,
    date: string,
}

const Note: FC<NoteProps> = ({ image, date, title }) => {
    return (
        <div className="col-span-1 flex items-center 
            justify-start  gap-2 my-4 md:my-0 gap-2" id="my_notes">
            <div className="size-[60px] flex-none md:size-[75px] relative">
                <Image
                    src={image}
                    alt={title}
                    fill={true}
                    sizes="100%"
                    className="rounded-[12px]"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
            </div>

            <div className="flex-col flex items-start justify-start gap-1 overflow-x-hidden">
                <p className="text-[11px] md:text-[14px] font-[700] text-[#0D0E11]
                h-5 overflow-hidden">{title}</p>
                <p className="text-[#8B8B9A] text-[11px] md:text-[14px] font-[400]
                h-5 overflow-hidden">{date}</p>
                <p className="text-[#8B8B9A] text-[11px] md:text-[14px] font-[400]">مطالعه بیشتر</p>
            </div>

        </div>
    )
};

const ImageSlide: FC<NoteProps> = ({ image, date, title }) => {
    return (
        <>
            <div className="w-full h-full relative rounded-[16px] ">
                <Image
                    src={image}
                    alt="image"
                    fill={true}
                    sizes="100%"
                    className="object-cover rounded-[16px]"
                />
            </div>
            <div className="bg-black absolute top-0 left-0 right-0 bottom-0 opacity-0 
            rounded-[16px] transition group-hover:opacity-40 duration-400"></div>
            <div className="absolute top-0 bottom-0 left-0 right-0 flex-col flex justify-end p-3">
                <p className="text-[#FFFFFF] text-[14px] md:text-[16px] font-[700]
                translate-y-[100%] group-hover:translate-y-[0%] transition duration-400">{title}</p>
                <p className="text-[#FFFFFF] my-1 text-[12px] md:text-[14px] font-[600]
                translate-y-[100%] group-hover:translate-y-[0%] transition duration-400">{date}</p>
                <div className="flex items-center justify-start gap-2 translate-y-[100%] opacity-0
                    group-hover:translate-y-[0%] transition group-hover:opacity-100 duration-400 
                    group-hover:mt-3">
                    <p className="text-[#FFFFFF] text-[14px] font-[600]">مطالعه بیشتر</p>
                    <div className="h-[16px] w-[19px]">
                        <ArrowLeftIcon color="white" />
                    </div>
                </div>
            </div>
        </>
    )
};


const MyNotes: FC = () => {

    const data: NoteProps[] = [
        {
            image: Note1,
            title: "نکات برنامه نویسی پایتون حرفه ای حین کد زدن",
            date: "31 شهریور ماه 1403"
        }, {
            image: Note2,
            title: "نکات برنامه نویسی پایتون حرفه ای",
            date: "23 شهریور ماه 1403"
        }, {
            image: Note3,
            title: "زبان برنامه نویسی بازی Elden Ring چیست ؟",
            date: "23 شهریور ماه 1403"
        }, {
            image: Note4,
            title: "آیا پایتون بهترین زبان برای شروع برنامه نویسی است؟",
            date: "31 شهریور ماه 1403"
        }, {
            image: Note5,
            title: "آیا پایتون بهترین زبان برای شروع برنامه نویسی است؟",
            date: "31 شهریور ماه 1403"
        }
    ]

    const chunkedData = [];
    for (let i = 0; i < data.length; i += 3) {
        chunkedData.push(data.slice(i, i + 3));
    }

    return (
        <div className="bg-white rtl my-12 px-6 md:px-20 relative">
            <div className="flex items-center gap-4 justify-start mb-6">
                <div className="bg-[#524CF21A] size-12 md:size-14 rounded-lg flex items-center justify-center">
                    <div className="size-6 md:size-8">
                        <NotesIcon color={"#524CF2"} />
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-sm md:text-base">
                        یادداشت های من
                    </p>
                    <p className="text-xs md:text-sm mt-2 text-[#696973]">
                        تجربیات، تکنیک ها خودمو برای شما اشتراک میزارم
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Slide direction="right"
                    duration={400}
                    triggerOnce
                    className="col-span-1 hidden md:block h-[450px]">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        direction="vertical"
                        modules={[Navigation]}
                        className="h-full"
                    >
                        {
                            data.map((item, index) => {
                                return (
                                    <SwiperSlide className="h-[240px] w-[433px] relative group cursor-pointer"
                                        key={index}>
                                        <ImageSlide
                                            date={item.date}
                                            image={item.image}
                                            title={item.title}
                                        />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </Slide>

                <div className="col-span-1 h-[250px] md:h-[450px] relative">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        slidesPerView={1}
                        direction="vertical"
                        spaceBetween={60}
                        className="h-full"
                        pagination={{
                            el: '.image-pagination',
                            clickable: true,
                            bulletClass: 'swiper-pagination-bullet',
                            bulletActiveClass: 'swiper-pagination-bullet-active',
                        }}
                    >
                        {data.map((item, idx) => (
                            <SwiperSlide key={idx} className="relative cursor-pointer group">
                                <ImageSlide
                                    date={item.date}
                                    image={item.image}
                                    title={item.title}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>


                    <div className="image-pagination absolute left-2 top-1/2 -translate-y-1/2 flex flex-col 
                        space-y-2 z-10"/>
                </div>

                <Slide duration={400} triggerOnce>
                    <div className="col-span-1 md:grid grid-cols-1 h-[450px] overflow-y-scroll no-scrollbar
                    hidden">
                        {
                            data.map((item, index) => {
                                return (
                                    <Note
                                        key={index}
                                        date={item.date}
                                        image={item.image}
                                        title={item.title}
                                    />
                                )
                            })
                        }
                    </div>
                </Slide>

                <div className="md:hidden">
                    <Swiper
                        direction="horizontal"
                        spaceBetween={30}
                        slidesPerView={1}
                        className="w-full h-[300px]"
                    >
                        {
                            chunkedData.map((group, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        {
                                            group.map((item, idx) => {
                                                return (
                                                    <Note
                                                        key={idx}
                                                        date={item.date}
                                                        title={item.title}
                                                        image={item.image}
                                                    />
                                                )
                                            })
                                        }
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>

            </div>
        </div>
    )
}; export default MyNotes;