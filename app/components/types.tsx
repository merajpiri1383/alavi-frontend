import React from "react";


export interface ProjectItemProps {
    project : ProjectType | null,
    currentProject : ProjectType | null,
    setProject : React.Dispatch<React.SetStateAction<ProjectType | null>>
}

export interface ProjectTechnology {
    title : string,
    sub_title : string,
    icon : string,
}

export interface ProjectType {
    title: string | null,
    text: string | null,
    date : string | null,
    icon : string | null,
    image : string | null,
    items : ProjectTechnology[],
}

export interface ProjectsProps {
    items: ProjectType[],
    currentProject : ProjectType | null,
    setProject : React.Dispatch<React.SetStateAction<ProjectType | null>>
}

export interface DoneProjectsProps {
    title : string | null,
    sub_title : string | null,
    items: ProjectType[],
}