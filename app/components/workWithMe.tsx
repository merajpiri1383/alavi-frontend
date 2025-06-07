import { FC, memo, ReactNode } from "react";
import WorkWithMeIcon from "@/components/icons/home/workWithMe";
import MessageTickIcon from "@/components/icons/home/messageTick";
import SendIcon from "@/components/icons/home/send";
import NoteIcon from "@/components/icons/home/note";
import StoryIcon from "@/components/icons/home/story";
import { Slide } from "react-awesome-reveal";


interface WorkWithMeType {
    active_icon: ReactNode,
    icon: ReactNode,
    title: string,
    text: string,
}


const Item: FC<WorkWithMeType> = ({ active_icon, icon, text, title }) => {
    return (
        <Slide duration={400} direction="up" triggerOnce>
            <div className="p-4 rounded-[16px] group cursor-pointer transition duration-400
            min-w-72 hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] shadow-[0_0_20px_rgba(0,0,0,0.05)] 
            border-1 md:shadow-none md:border-none border-[#E7E7E7]">
            <div className="size-[45px] border-[1.5px] border-[#E1E1E1] md:flex items-center justify-center
                rounded-[10px] hidden group-hover:bg-[#524CF2] transition duration-400 group-hover:border-none">
                <div className="size-[25px] group-hover:hidden">{icon}</div>
                <div className="size-[25px] group-hover:block hidden">{active_icon}</div>
            </div>
            <div className="size-[45px] md:hidden flex items-center justify-center
                rounded-[10px] bg-[#524CF2] transition duration-400">
                <div className="size-[25px] block">{active_icon}</div>
            </div>
            <p className="text-[14px] mt-4 my-2 font-[700] text-[#0D0E11] h-4 overflow-hidden">{title}</p>
            <p className="text-[11px] my-2 h-4 overflow-hidden font-[600] text-[#8B8B9A]">{text}</p>

            <div className="group-hover:text-[#FFFFFF] font-[600] text-[10px] md:bg-[#F2F2F2] 
            rounded-[8px] w-fit p-3 my-3 cursor-pointer group-hover:bg-[#292D32] bg-[#292D32]
            transition duration-400 text-[#FFFFFF] md:text-[#3D3D3D]">درخواست فرم</div>
        </div>
        </Slide>
    )
};

const WorkWithMe = () => {

    const data: WorkWithMeType[] = [
        {
            active_icon: <StoryIcon color="white" />,
            icon: <StoryIcon />,
            title: "درخواﺳﺖ جلسه حضوری، آنلاین",
            text: "برای آشنایی، گفت گوی اولیه یا بررسی کلیه پروژه",
        }, {
            active_icon: <NoteIcon color="white" />,
            icon: <NoteIcon />,
            title: "توضیح پروژه، دریافت مشاوره تخصصی",
            text: "فرصتی برای بررسی نیاز ها و دریافت دیدگاه حرفه ای",
        }, {
            active_icon: <SendIcon color="white" />,
            icon: <SendIcon />,
            title: "ارسال رزومه برای همکاری شغلی، پروژه ای",
            text: "اگه میخوای وارد تیم حرفه ای ما بشی!",
        }, {
            active_icon: <MessageTickIcon color="white" />,
            icon: <MessageTickIcon />,
            title: "درخواست بررسی رایگان پروژه، وبسایت",
            text: "اگه نیاز به بررسی سیستم فعلیتون دارید.",
        },
    ]

    return (
        <div className="rtl px-6 md:mt-12 md:px-20 relative ">
            <div className="flex items-center gap-4 justify-start">
                <div className="bg-[#524CF21A] size-12 md:size-14 rounded-lg flex items-center justify-center">
                    <div className="size-6 md:size-8">
                        <WorkWithMeIcon color={"#524CF2"} />
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-sm md:text-base">
                        فرصت های همکاری با من
                    </p>
                    <p className="text-xs md:text-sm mt-2 text-[#696973]">
                        حوزه های شغلی در پوزیشن کاری متفاوت
                    </p>
                </div>
            </div>

            <div className="flex z-5 overflow-x-scroll no-scrollbar md:py-0 md:grid md:grid-cols-4 gap-4
                px-5 py-6 md:py-6">
                {
                    data.map((item, index) => {
                        return (
                            <Item
                                active_icon={item.active_icon}
                                icon={item.icon}
                                text={item.text}
                                title={item.title}
                                key={index}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}; export default memo(WorkWithMe);