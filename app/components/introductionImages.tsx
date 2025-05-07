import Image from "next/image";
import Image1 from "@/public/images/1.svg";
import Image2 from "@/public/images/2.svg";
import Image3 from "@/public/images/3.svg";
import CodeIcon from "@/components/icons/home/code";
import GitIcon from "@/components/icons/home/git";
import { Slide } from "react-awesome-reveal";
import { memo } from "react";
import Icon2 from "@/icons/home/halfCicle2";


const ProjectBox = memo(() => {
    return (
        <div className="col-span-1 relative self-end relative">
            <Slide
                direction="up"
                duration={1500}
                className="h-32 w-full rounded-br-3xl bg-[#E2E2FF] ">
                    <Icon2 className={"absolute top-0"} />
            </Slide>
        </div>
    )
});

ProjectBox.displayName = "ProjectBox"


const SeniorBox = memo(() => {
    return (
        <Slide direction="up" className="bottom-4 -right-14 absolute" duration={1500}>
            <div className="bg-white p-2 px-4 rounded-xl flex 
            items-center justify-start gap-2">
                <div className="size-8 bg-[#F6F6F6] flex items-center justify-center rounded-full">
                    <div className="size-5 relative">
                        <CodeIcon />
                    </div>
                </div>
                <div>
                    <p className="text-sm text-[#2B2B2B] font-semibold">سنیور توسعه بک اند</p>
                    <p className="text-sm text-[#8B8B9A]">Senior Backend Developer</p>
                </div>
            </div>
        </Slide>
    )
});

SeniorBox.displayName = "SeniorBox";

const MachineLearningBox = memo(() => {
    return (
        <div className="bg-white p-2 px-4 rounded-xl bottom-4  right-2 absolute flex 
            items-center justify-start gap-2">
            <div className="size-8 bg-[#F6F6F6] flex items-center justify-center rounded-full">
                <div className="size-5 relative">
                    <GitIcon />
                </div>
            </div>
            <div>
                <p className="text-sm text-[#2B2B2B] font-semibold">ماشین لرنینگ</p>
                <p className="text-sm text-[#8B8B9A]">Machine Learning</p>
            </div>
        </div>
    )
});

MachineLearningBox.displayName = "MachineLearningBox"

const IntroductionImages = () => {
    return (
        <div className="grid grid-cols-2 items-center gap-4">
            <div className="col-span-1 grid grid-cols-1 h-full">
                <div className="col-span-1 relative h-64 w-full self-start">
                    <Slide className="h-64 w-full relative" direction="right">
                        <Image
                            src={Image2}
                            alt="image1"
                            className="rounded-tr-[3rem]"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                            priority={false}
                            fill={true}
                            sizes="100%"
                        />
                    </Slide>

                    <SeniorBox />
                </div>

                <ProjectBox />
            </div>
            <div className="col-span-1 grid grid-cols-1 gap-4 h-full">
                <Slide duration={1500} className="col-span-1 self-start" direction="left">
                    <div className="relative h-48 w-full">
                        <Image
                            src={Image3}
                            alt="image1"
                            priority={false}
                            className="rounded-se-[2rem]"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                            fill={true}
                            sizes="100%"
                        />

                        <MachineLearningBox />
                    </div>
                </Slide>
                <Slide
                    className="col-span-1 relative self-end h-48 w-full"
                    direction="up"
                    duration={1500}>
                    <Image
                        src={Image1}
                        alt="image1"
                        priority={false}
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        fill={true}
                        className="rounded-bl-[4rem]"
                        sizes="100%"
                    />
                </Slide>
            </div>
        </div>
    )
}; export default IntroductionImages;