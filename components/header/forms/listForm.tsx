"use client"

import React, { FC } from "react";
import {toast} from "react-toastify";
import CloseIcon from "@/icons/header/close";
import TickCircleIcon from "@/components/icons/header/tickCircle";
import { AskFormType } from "./askForm";
import ToastError from "@/components/toast/error";


type AskFormTypes = {
    type: AskFormType,
    text: string,
};

interface ListFormProps {
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>,
    setAskForm: React.Dispatch<React.SetStateAction<AskFormType>>,
    currentAskForm: AskFormType,
    setStage : React.Dispatch<React.SetStateAction<number>>,
}


const ListForm: FC<ListFormProps> = ({ 
    setShowForm, 
    setAskForm, 
    currentAskForm , 
    setStage }) => {


    const askFormTypeList: AskFormTypes[] = [
        {
            text: "فرم درخواست جلسه حضوری، آنلاین ",
            type: "online"
        },
        {
            text: "توضیح پروژه، دریافت مشاوره تخصصی",
            type: "explain-project"
        },
        {
            text: "ارسال رزومه برای همکاری شغلی، پروژه ای",
            type: "send-resume",
        },
        {
            text: "فرم درخواست بررسی رایگان پروژه، وبسایت",
            type: "check-free-project",
        }
    ]

    const submitHandler = () => {
        currentAskForm ? setStage(2) : toast.error(
        <ToastError message="لطفا یکی از فرم ها را انتخاب کنید" />)
    }

    return (
        <>
            <div className="flex items-center justify-between mt-12 md:my-0 mx-[30px]">
                <div>
                    <p className="text-[#2B2B2B] font-[600] text-[14px] mb-1 md:text-[16px]">فرم درخواستی</p>
                    <p className="text-[#5A6166] font-[500] text-[12px] md:text-[14px]">
                        مشتری عزیز یکی از فرم های زیر انتخاب نمایید.</p>
                </div>

                <div className="size-[14px] cursor-pointer active:scale-110"
                    onClick={() => setShowForm(false)}>
                    <CloseIcon />
                </div>
            </div>
            <div className="w-full h-[2px] bg-[#EBEBEB] my-4 md:hidden"></div>

            <div className="grid grid-cols-1 items-between h-full">
                <div className="mx-[30px] mt-8 col-span-1 md:ml-24">
                    {
                        askFormTypeList.map((item, index) => {
                            return (
                                <div className="flex items-center justify-start my-4 gap-[10px] cursor-pointer"
                                    key={index}
                                    onClick={() => setAskForm(item.type)}>
                                    <div className={`size-[22px] rounded-[4px] transition md:size-[30px]
                                        ${item.type === currentAskForm ? "bg-[#524CF2]" : "bg-[#F0F0F0]"}
                                        duration-400 flex items-center justify-center`}>
                                        {
                                            item.type === currentAskForm && 
                                            <div className="size-[14px] md:size-[18px]">
                                                <TickCircleIcon />
                                            </div>
                                        }
                                    </div>
                                    <p className="text-[#5A6166] font-[500] text-[14px]
                                        md:text-[16px]">{item.text}</p>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="mx-[30px] bg-[#2F2F2F] p-[14px] rounded-[10px] cursor-pointer col-span-1
                    h-fit md:w-fit md:px-6 md:mt-6" onClick={submitHandler}>
                    <p className="text-[#FFFFFF] font-[500] text-[14px] text-center">ثبت و ادامه فرآیند</p>
                </div>
            </div>
        </>
    )
}; export default ListForm;