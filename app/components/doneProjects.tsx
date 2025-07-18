"use client"
import { FC, useState } from "react";
import dynamic from "next/dynamic";
import { Slide } from "react-awesome-reveal";
import VerifyIcon from "@/components/icons/home/verify";
import { ProjectType, ProjectsProps, DoneProjectsProps, ProjectItemProps } from "@/app/components/types";
const Project = dynamic(() => import("@/app/components/project"), { ssr: true });



const ProjectItem: FC<ProjectItemProps> = (props) => {

    return (
        <div
            onClick={() => props.setProject(props.project)}
            className={`border group md:mb-10 border-[#E1E1E1] 
                ${props.project === props.currentProject ? "bg-[#292D32]" :""}
                p-3 md:col-span-1 rounded-xl hover:bg-[#292D32] transition h-fit
                duration-[400ms] cursor-pointer min-w-48  overflow-hidden rtl md:mr-4`}>
            <p className={`text-sm group-hover:text-[#FFFFFF]
                ${props.project === props.currentProject ? "text-[#FFFFFF]" :"text-[#2F2F2F]"}
                transition duration-[300ms] group-active:text-[#FFFFFF]`}>
                {props.project?.title}
            </p>
            <p className="text-xs mt-2 min-w-36 text-[#8B8B9A]  active-group:text-[#AAAAB5]
                hover-group:text-[#AAAAB5] h-4 overflow-hidden">
                {props.project?.text}
            </p>
        </div>
    )
};

const Projects: FC<ProjectsProps> = ({ items, currentProject, setProject }) => {


    return (
        <Slide direction="right" duration={300} triggerOnce>
            <div
                className={`md:hidden flex gap-4 no-scrollbar overflow-x-scroll [direction:rtl]`}>
                {
                    items.map((project, index) => {
                        return (
                            <ProjectItem
                                key={index}
                                project={project}
                                setProject={setProject}
                                currentProject={currentProject}
                            />
                        )
                    })
                }
            </div>

            <div
                className={`md:grid hidden grid-cols-1 gap-4 h-80 
                    overflow-y-scroll overflow-hidden [direction:ltr]`}>
                {
                    items.map((project, index) => {
                        return (
                            <ProjectItem
                                key={index}
                                project={project}
                                currentProject={currentProject}
                                setProject={setProject}
                            />
                        )
                    })
                }
            </div>
        </Slide>
    )
};



const DoneProjects: FC<DoneProjectsProps> = ({ items, sub_title, title }) => {

    const [currentProject, setProject] = useState<ProjectType | null>(items?.length > 0 ? items[0] : null);

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
                    <p className="font-semibold text-sm md:text-base">{title}</p>
                    <p className="text-xs md:text-sm mt-2 text-[#696973]">{sub_title}</p>
                </div>
            </div>
            <div className="grid grid-cols-9 gap-8">
                <div className="col-span-9 md:col-span-2">
                    <Projects
                        items={items}
                        currentProject={currentProject}
                        setProject={setProject}
                    />
                </div>
                <div className="col-span-9 md:col-span-7">
                    {
                        currentProject &&
                        <Project {...currentProject} />
                    }
                </div>
            </div>
        </div>
    )
}; export default DoneProjects;