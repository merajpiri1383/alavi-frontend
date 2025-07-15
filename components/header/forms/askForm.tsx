"use client"

import React, { FC, useState } from "react";
import dynamic from "next/dynamic";
const ListForm = dynamic(() => import("@/components/header/forms/listForm"), { ssr: false });
const Online = dynamic(() => import("@/components/header/forms/Online"), { ssr: false });
const SendResume = dynamic(() => import("@/components/header/forms/sendResume"), { ssr: false });
const ExplainProject = dynamic(() => import("@/components/header/forms/explainProject"), { ssr: false });
const CheckFreeProject = dynamic(() => import("@/components/header/forms/checkFreeProject"), { ssr: false });

type AskFormProps = {
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>,
}

export type AskFormType = "online" | "explain-project" | "send-resume" | "check-free-project" | null


const AskForm: FC<AskFormProps> = ({ setShowForm }) => {


    const [currentAskForm, setAskForm] = useState<AskFormType>(null);
    const [stage, setStage] = useState<number>(1);


    return (
        <div className="bg-[#FFFFFF] w-full h-screen md:h-fit md:py-[30px] md:w-fit [direction:rtl]
                md:rounded-[18px] overflow-y-scroll hide-scrollbar"
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
                stage === 2 && currentAskForm === "online" &&
                <Online
                    setShowForm={setShowForm}
                />
            }
            {
                stage === 2 && currentAskForm === "send-resume" &&
                <SendResume
                    setShowForm={setShowForm}
                />
            }
            {
                stage === 2 && currentAskForm === "explain-project" &&
                <ExplainProject
                    setShowForm={setShowForm}
                />
            }
            {
                stage === 2 && currentAskForm === "check-free-project" &&
                <CheckFreeProject
                    setShowForm={setShowForm}
                />
            }
        </div>
    )
}; export default AskForm;