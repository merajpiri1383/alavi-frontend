import React, { FC, memo, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import LogoIcon from "@/icons/header/logo";
import ArrowDownIcon from "@/icons/header/arrowDown";
import ArrowUpIcon from '@/icons/header/arrowUp';
import "@/components/header/style.css";
import Link from "next/link";


type DownLinkProps = {
    setForm : React.Dispatch<React.SetStateAction<boolean>>,
    setShowPop : React.Dispatch<React.SetStateAction<boolean>>,
}

const DownLink : FC<DownLinkProps> = ({ setForm , setShowPop }) => {

    const nodeRef = useRef(null);
    const [openDropDwon, setDropDown] = useState<true | false>(false);

    const showHandler = () => {
        setDropDown(!openDropDwon);
    };

    const showFormHandler = () => {
        setShowPop(false);
        setTimeout(() => setForm(true) , 600)
    }

    return (
        <>
            <div className="col-span-1 flex items-center justify-between group cursor-pointer rtl mt-4"
                onClick={showHandler}>
                <div className="flex items-center justify-start gap-2 group  transition">
                    <div className="size-2 bg-gray-300 group-hover:bg-[#524CF2] rounded-full"></div>
                    <p className="font-semibold text-sm group-hover:text-[#524CF2]">
                        فرصت های همکاری با من
                    </p>
                </div>
                <div className="size-6 group-active:scale-115 transition">
                    {
                        openDropDwon ? <ArrowUpIcon /> : <ArrowDownIcon />
                    }
                </div>
            </div>

            <CSSTransition
                timeout={400}
                classNames={"dropdown"}
                unmountOnExit
                nodeRef={nodeRef}
                in={openDropDwon}>
                <div ref={nodeRef} className="dropdown rtl">
                    <div className="col-span-1 border-r-2 text-[##0D0E11] border-[#D9D9D9] text-xs pr-3">
                        <p  onClick={showFormHandler}
                            className="my-2 cursor-pointer">درخواﺳﺖ جلسه حضوری، آنلاین</p>
                        <p className="my-2">توضیح پروژه، دریافت مشاوره تخصصی</p>
                        <p className="my-2">ارسال رزومه برای همکاری شغلی، پروژه ای</p>
                        <p className="my-2">درخواست بررسی رایگان پروژه، وبسایت</p>
                    </div>
                </div>
            </CSSTransition>
        </>
    )
};

const DropDown: FC = () => {
    return (
        <div className="col-span-1 border-r-2 text-[##0D0E11] border-[#D9D9D9] text-xs px-3">
            <p className="my-2"><Link href={"#workfields"}>زمینه های ﮐﺎری ﻣﻦ</Link></p>
            <p className="my-2"><Link href={"#"}>رزومه من</Link></p>
            <p className="my-2"><Link href={"#kairo"}>کایرو سیستم</Link></p>
        </div> 
    )
};

const Links: FC = () => {

    const [openDropDown, setDropDown] = useState<true | false>(false);
    const nodeRef = useRef(null);

    const showHandler = () => {
        setDropDown(!openDropDown);
    };

    return (
        <div className="grid grid-cols-1 rtl my-6 gap-3">
            <div className="col-span-1 flex items-center justify-between group cursor-pointer"
                onClick={showHandler}>
                <div className="flex items-center justify-start gap-2 group  transition">
                    <div className="size-2 bg-gray-300 group-hover:bg-[#524CF2] rounded-full"></div>
                    <p className="font-semibold text-sm group-hover:text-[#524CF2]">
                        شغل من
                    </p>
                </div>
                <div className="size-6 group-active:scale-115 transition">
                    {
                        openDropDown ? <ArrowUpIcon /> : <ArrowDownIcon />
                    }
                </div>
            </div>

            <CSSTransition
                timeout={400}
                classNames={"dropdown"}
                unmountOnExit
                nodeRef={nodeRef}
                in={openDropDown}>
                <div ref={nodeRef} className="dropdown">
                    <DropDown />
                </div>
            </CSSTransition>

            <div className="col-span-1 flex items-center justify-start gap-2 group cursor-pointer transition">
                <div className="size-2 bg-gray-300 group-hover:bg-[#524CF2] rounded-full"></div>
                <p className="font-semibold text-sm group-hover:text-[#524CF2]">
                    تجربیات کاری
                </p>
            </div>

            <div className="col-span-1 flex items-center justify-start gap-2 group cursor-pointer transition">
                <div className="size-2 bg-gray-300 group-hover:bg-[#524CF2] rounded-full"></div>
                <p className="font-semibold text-sm group-hover:text-[#524CF2]">
                    یادداشت ها
                </p>
            </div>

            <div className="col-span-1 flex items-center justify-start gap-2 group cursor-pointer transition">
                <div className="size-2 bg-gray-300 group-hover:bg-[#524CF2] rounded-full"></div>
                <p className="font-semibold text-sm group-hover:text-[#524CF2]">
                    تماس با من
                </p>
            </div>
        </div>
    )
}

interface MobileProps {
    setForm : React.Dispatch<React.SetStateAction<boolean>>,
    setShowPop : React.Dispatch<React.SetStateAction<boolean>>,
}

const MobilePopup: FC<MobileProps> = ({ setForm , setShowPop }) => {
    return (
        <div className="bg-white h-full w-[75vw] py-12 px-6" onClick={(e) => e.stopPropagation()}>

            <div className="flex items-center justify-end gap-4">
                <div className="rtl">
                    <p className="text-sm font-bold">علیرضا علوی</p>
                    <p className="text-sm font-bold">Alireza Alavi</p>
                </div>
                <div className="size-12">
                    <LogoIcon />
                </div>
            </div>

            <Links />

            <div className="h-[1.5px] w-full bg-[#E6E6E6]"></div>

            <DownLink 
                setForm={setForm} 
                setShowPop={setShowPop}
            />

        </div>
    )
}; export default memo(MobilePopup)