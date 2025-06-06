"use client"
import { FC } from "react";
import dynamic from "next/dynamic";
import { Slide } from "react-awesome-reveal";
import VerifyIcon from "@/components/icons/home/verify";
import { ProjectType, ProjectsProps } from "@/app/components/types";
const Project = dynamic(() => import("@/app/components/project"), { ssr: true })



const ProjectItem: FC<ProjectType> = ({ text, title }) => {
    return (
        <div className="border group md:mb-10 border-[#E1E1E1] 
                p-3 md:col-span-1 rounded-xl hover:bg-[#292D32] transition h-fit
                active:bg-[#292D32]
                duration-[400ms] cursor-pointer min-w-48  overflow-hidden rtl md:mr-4">
            <p className="text-sm text-[#2F2F2F] group-hover:text-[#FFFFFF] 
                transition duration-[300ms] group-active:text-[#FFFFFF]">
                {title}
            </p>
            <p className="text-xs mt-2 min-w-36 text-[#8B8B9A]  active-group:text-[#AAAAB5]
                hover-group:text-[#AAAAB5] h-4 overflow-hidden">
                {text}
            </p>
        </div>
    )
};

const Projects: FC<ProjectsProps> = ({ projects }) => {


    return (
        <Slide direction="right" duration={300} triggerOnce>
            <div
                className={`md:hidden flex gap-4 no-scrollbar overflow-x-scroll [direction:ltr]`}>
                {
                    projects.map((project, index) => {
                        return (
                            <ProjectItem
                                title={project.title}
                                text={project.text}
                                key={index}
                            />
                        )
                    })
                }
            </div>

            <div
                className={`md:grid hidden grid-cols-1 gap-4 h-80 
                    overflow-y-scroll overflow-hidden [direction:ltr]`}>
                {
                    projects.map((project, index) => {
                        return (
                            <ProjectItem
                                title={project.title}
                                text={project.text}
                                key={index}
                            />
                        )
                    })
                }
            </div>
        </Slide>
    )
};



const DoneProjects: FC = () => {

    const projects: ProjectType[] = [
        {
            title: "کیمیا صعنت پارسه",
            text: "Building materials store"
        }, {
            title: "آژانس زروان تریپ",
            text: "Booking hotel agency iran"
        }, {
            title: "شرکت متزون",
            text: "Digital marketing company"
        }, {
            title: "شرکت هومنگر",
            text: "House buying and selling company"
        }, {
            title: "آژانس زروان تریپ",
            text: "Booking hotel agency iran"
        }, {
            title: "شرکت متزون",
            text: "Digital marketing company"
        }, {
            title: "شرکت هومنگر",
            text: "House buying and selling company"
        },
    ]

    return (
        <div className="bg-white rtl my-12 px-6 md:px-20 relative">
            <div className="flex items-center gap-4 justify-start mb-10">
                <div className="bg-[#524CF21A] size-12 md:size-14 rounded-lg 
                    flex items-center justify-center">
                    <div className="size-6 md:size-8">
                        <VerifyIcon />
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-sm md:text-base">
                        پروژه های انجام شده
                    </p>
                    <p className="text-xs md:text-sm mt-2 text-[#696973]">
                        بیش از چندین پروژه های موفقیت آمیز بنده!
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-9 gap-8">
                <div className="col-span-9 md:col-span-2">
                    <Projects projects={projects} />
                </div>
                <div className="col-span-9 md:col-span-7">
                    <Project text="" title="" />
                </div>
            </div>
        </div>
    )
}; export default DoneProjects;