"use client"
import { FC, memo, useState } from "react";
import Image from "next/image";
import AlaviImage from "@/public/images/alavi.svg";
import FourIcon from "@/components/icons/home/four";
import StarIcon from "@/components/icons/home/star";
import SquareIcon from "@/components/icons/home/square";
import ArrowDownIcon from "@/icons/header/arrowDown";
import ArrowUpIcon from "@/icons/header/arrowUp";

interface ItemType {
    title: string,
    text: string,
}

const Item: FC<ItemType> = ({ title, text }) => {
    return (
        <div className="bg-[#F6F6F6] my-3 p-3 min-w-48 col-span-1 md:w-full rounded-lg">
            <p className="text-sm font-medium text-[#2B2B2B]">{title}</p>
            <p className="text-xs text-[#8B8B9A] mt-1">{text}</p>
        </div>
    )
}

const AboutMeImage = () => {
    return (
        <div className="bg-[#F6F6F6] col-span-1 h-fit mr-8 py-12 rounded-tr-3xl rounded-br-[6rem] relative">
            <div className="w-fit mx-auto my-12 relative z-[3]">
                <div
                    style={{ backgroundImage: "linear-gradient(to bottom , #8792E3,#BBC2F2,#C9CEEE)" }}
                    className="h-80 w-48 rounded-full overflow-hidden relative ">
                    <Image
                        src={AlaviImage}
                        alt="alavi image"
                        fill={true}
                        sizes="100%"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                </div>

                <div className="absolute -left-4 -top-4 size-20">
                    <FourIcon color={"#0D0E11"} />
                </div>
            </div>

            <div className="size-12 absolute top-8 right-6">
                <StarIcon />
            </div>

            <div className="size-8 absolute bottom-12 left-10 z-[2]">
                <StarIcon />
            </div>
            <div className="size-20 absolute bottom-16 left-16 z-[1]">
                <div className="w-full h-full relative">
                    <SquareIcon />
                    <div className="top-[50%] left-[50%] absolute"
                        style={{ boxShadow: "0px 0px 60px 15px blue" }}></div>
                </div>
            </div>
        </div>
    )
}


interface BoxType {
    title: string,
    data: ItemType[],
}

const Box: FC<BoxType> = ({ title, data }) => {
    return (
        <div className="rtl my-6">
            <p className="text-sm font-semibold md:text-xl text-[#2B2B2B]">{title}</p>
            <div className="flex w-full md:grid items-center justify-start gap-3 overflow-auto 
                no-scrollbar md:grid-cols-3">
                {
                    data?.map((item, index) => {
                        return (
                            <Item
                                title={item.title}
                                text={item.text}
                                key={index}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

const Story = () => {
    return (
        <div className="rtl my-6">
            <p className="text-sm font-semibold md:text-xl text-[#2B2B2B]">داستان کوتاه من</p>
            <p className="text-xs text-[#727379] leading-6 my-3 text-justify">لورم ایپسوم متن ساختگی
                با تولید سادگی نامفهوم از صنعت چاپ، و با اینکه آن استفاده از طراحان گرافیک است
                ، چاپگرها و متون جذاب از آنها برای آزمایشی بلکه روزنامه و مجله در ستون و سطرآنچنان
                که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با اینکه آن
                استفاده از طراحان گرافیک است، چاپگرها و متون جذاب از آنها برای آزمایشی بلکه روزنامه و
                مجله در ستون و سطرآنچنان که لازم است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                صنعت چاپ، و با اینکه آن استفاده از طراحان گرافیک است، چاپگرها و متون جذاب از آنها برای
                آزمایشی بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است. لورم ایپسوم متن ساختگی با
                تولید سادگی نامفهوم از صنعت چاپ، و با اینکه آن استفاده از طراحان گرافیک است، چاپگرها
                و متون جذاب از آنها برای آزمایشی بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>

            <p className="text-xs text-[#727379] leading-6 my-3 text-justify">لورم ایپسوم متن ساختگی
                با تولید سادگی نامفهوم از صنعت چاپ، و با اینکه آن استفاده از طراحان گرافیک است
                ، چاپگرها و متون جذاب از آنها برای آزمایشی بلکه روزنامه و مجله در ستون و سطرآنچنان
                که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با اینکه آن
                استفاده از طراحان گرافیک است، چاپگرها و متون جذاب از آنها برای آزمایشی بلکه روزنامه و
                مجله در ستون و سطرآنچنان که لازم است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                صنعت چاپ، و با اینکه آن استفاده از طراحان گرافیک است، چاپگرها و متون جذاب از آنها برای
                آزمایشی بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است. لورم ایپسوم متن ساختگی با
                تولید سادگی نامفهوم از صنعت چاپ، و با اینکه آن استفاده از طراحان گرافیک است، چاپگرها
                و متون جذاب از آنها برای آزمایشی بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
        </div>
    )
};

const AboutMe: FC = () => {

    const [open, setOpen] = useState<true | false>(false);

    const hobbies: ItemType[] = [
        {
            title: "دوچرخه سواری",
            text: "cycling"
        }, {
            title: "والیبال",
            text: "volleyball"
        }, {
            title: "کوه نوردی",
            text: "Mountaineering"
        },
    ]

    const writers: ItemType[] = [
        {
            title: "آلکارن جیمزان",
            text: "Alcarren Jameson",
        }, {
            title: "الکس والتارن",
            text: "Alex Walthern",
        }, {
            title: "جیسون استتهام",
            text: "Jason Statham",
        },
    ]

    const favorites: ItemType[] = [
        {
            title: "موسیقی گوش دادن",
            text: "Listen to music"
        }, {
            title: "فیلم دیدن",
            text: "watching movies"
        }, {
            title: "پیاده روی کردن",
            text: "to walk"
        },
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 select-none">
            <AboutMeImage />
            <div className={`col-span-1 md:col-span-2 px-6 md:px-20 no-scrollbar
                ${!open && "h-[85vh] overflow-y-scroll"}`}>
                <Box title="تفریحات من" data={hobbies} />
                <Box title="نویسنده مورد علاقم" data={writers} />
                <Box title="علایق من" data={favorites} />
                <Story />
            </div>
            <div className="col-span-1"></div>
            <div
                style={{ boxShadow: "0px -10px 10px 5px white" }}
                className="w-full flex col-span-1 md:col-span-2 items-center justify-center">
                <div className="flex items-center justify-center gap-2 my-2 active:scale-95 transition
                    hover:scale-125 cursor-pointer" onClick={() => setOpen(!open)}>
                    <div className="size-5">
                        {
                            open ? <ArrowUpIcon /> : <ArrowDownIcon />
                        }
                    </div>
                    <p>مشاهده بیشتر</p>
                </div>
            </div>
        </div>
    )
}; export default memo(AboutMe);