"use client"

import React, { FC, useState } from "react";
import dynamic from "next/dynamic";
const ListForm = dynamic(() => import("@/components/header/forms/listForm"), { ssr: false });
const Online = dynamic(() => import("@/components/header/forms/Online"),{ssr : false});

type AskFormProps = {
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>,
}

export type AskFormType = "online" | "explain-project" | "send-resume" | "check-free-project" | null


const AskForm: FC<AskFormProps> = ({ setShowForm }) => {


    const [currentAskForm, setAskForm] = useState<AskFormType>(null);
    const [stage, setStage] = useState<number>(1);


    return (
        <div className="bg-[#FFFFFF] w-full h-screen md:h-fit md:py-[30px] md:w-fit [direction:rtl]
                md:rounded-[18px] overflow-y-scroll " 
                onClick={(e) => e.stopPropagation()}>
            {
                stage === 1 &&
                <ListForm
                    currentAskForm={currentAskForm}
                    setAskForm={setAskForm}
                    setShowForm={setShowForm}
                    setStage={setStage}
                />
            }
            {
                stage === 2 && 
                <Online
                    setShowForm={setShowForm}
                />
            }
        </div>
    )
}; export default AskForm;