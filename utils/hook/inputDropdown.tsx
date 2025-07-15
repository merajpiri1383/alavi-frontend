"use client"
import React, { FC, useRef, useState } from "react";
import { Slide } from "react-awesome-reveal";
import ArrowDown from "@/components/icons/header/arrowDown";
import ArrowUp from "@/components/icons/header/arrowUp";

interface Props {
    items: string[],
    placeholder: string,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    className ?: string,
    icon ?: React.ReactNode,
}

type DropDownInputItemProps = {
    item: string,
    onClickHandler : () => void,
}

const DropInputItem: FC<DropDownInputItemProps> = ({ item , onClickHandler }) => {
    return (
        <div
            onClick={onClickHandler}
            className="hover:bg-[#F2F6FC] group p-[12px]
                transition duration-[400] my-2 cursor-pointer rounded-[10px]">
            <p className="font-[600] text-[#0D0E11] text-right
                text-[12px] group-hover:text-[#524CF2]">{item}</p>
        </div>
    )
}


const DropDownInput: FC<Props> = ({
    items,
    placeholder,
    setValue,
    value,
    className,
    icon,
}) => {

    const [open, setOpen] = useState<boolean>(false);
    const dropInputRef = useRef(null);

    const clickHandler = (item: string) => {
        setOpen(false);
        setValue(item);
    }

    return (
        <div className={`col-span-2 bg-[#F9F9F9] border-[1.3px] border-[#EFEFEF] md:col-span-1
            rounded-[10px] flex items-center justify-between p-[20px] relative ` + className}
            onClick={() => setOpen(!open)} ref={dropInputRef}>

            <p className={`${value === "" ? "text-[#B4B4BB]" : "text-[#2F2F2F]"}  font-semibold text-[12px]`}>
                {
                    value === "" ? placeholder : value
                }
            </p>

            <div className="size-[17px]">
                {
                    icon ? icon : (!open ? <ArrowDown color="#A4A4A4" /> : <ArrowUp color="#A4A4A4" />)
                }   
            </div>

            {
                open && <Slide
                    duration={400}
                    direction="up"
                    className={`absolute z-[25] top-10 -left-[2px] -right-[2px] bottom-0 [direction:ltr]`}>
                    <div className="bg-[#FFFFFF] border-[1px] border-[#EFEFEF] overflow-y-scroll
                        rounded-[12px] p-[20px] max-h-[200px] shadow-xl">
                        {
                            items.map((item, index) => {
                                return (
                                    <DropInputItem 
                                        onClickHandler={() => clickHandler(item)}
                                        item={item} 
                                        key={index} />
                                )
                            })
                        }
                    </div>
                </Slide>
            }
        </div>
    )
}; export default DropDownInput;