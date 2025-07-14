"use client"
import { FC, memo, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Slide } from "react-awesome-reveal";
import LogoIcon from "@/icons/header/logo";
import AppsIcon from "@/icons/header/apps";
import { useDeviceType } from "@/utils/hook/deviceType";
import { CSSTransition } from 'react-transition-group';
import "@/components/header/style.css";
import Link from "next/link";
const HeaderLinks = dynamic(() => import("@/components/header/links"), { ssr: false });
const MobilePopup = dynamic(() => import("@/components/header/MobilePopup"), { ssr: false });
const AskForm = dynamic(() => import("@/components/header/forms/askForm"), { ssr: false });



const Header: FC = () => {

    const deviceType = useDeviceType();
    const [showPopup, setShowPop] = useState<true | false>(false);
    const [showForm, setShowForm] = useState<true | false>(false);
    const nodeRef = useRef(null);
    const blackScreenRef = useRef(null);

    const hideHandler = (): void => {
        setShowPop(false);
        setShowForm(false);
    }

    const showHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setShowPop(!showPopup);
    };

    const FormShowHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setShowForm(!showForm);
    }

    useEffect(() => {
        window.addEventListener("click", hideHandler);
        return () => window.removeEventListener("click", hideHandler);
    }, []);

    return (
        <>
            <div className="flex items-center md:sticky top-0 md:bg-[#FFFFFF] z-20 justify-between 
                py-12 md:py-6 px-6 md:px-20 select-none md:border-b md:border-[1px] md:border-[#E7E7E7]
                md:shadow">

                <div
                    onClick={showHandler}
                    className="flex border-1 border-[#ECECEC] items-center justify-center p-2 bg-white 
                    rounded-lg md:hidden cursor-pointer active:scale-95 hover:scale-115 transition">
                    <div className="size-6">
                        <AppsIcon />
                    </div>
                </div>

                <div
                    onClick={FormShowHandler} className="p-3 px-4 hidden md:block rounded-lg bg-[#524CF2]
                    cursor-pointer hover:bg-[#6b66f5] hover:shadow-2xl transition duration-400">
                    <p className="text-sm text-white font-medium">فرصت های همکاری با من</p>
                </div>

                {
                    deviceType === "desktop" &&
                    <HeaderLinks
                        setShowPop={setShowPop}
                        showPopup={showPopup}
                    />
                }

                {
                    deviceType === "mobile" &&
                    <CSSTransition
                        in={showPopup}
                        timeout={600}
                        classNames="sidebar"
                        unmountOnExit
                        nodeRef={nodeRef}
                    >
                        <div
                            ref={nodeRef}
                            style={{ zIndex: 20 }}
                            className="sidebar fixed top-0 bottom-0 right-0">
                            <MobilePopup 
                                setForm={setShowForm} 
                                setShowPop={setShowPop}
                            />
                        </div>
                    </CSSTransition>
                }

                <Link href={"/"} className="flex items-center justify-between gap-4">
                    <div className="rtl">
                        <p className="text-sm font-bold">علیرضا علوی</p>
                        <p className="text-sm font-bold">Alireza Alavi</p>
                    </div>
                    <div className="size-12">
                        <LogoIcon />
                    </div>
                </Link>
            </div>
            <CSSTransition
                in={showPopup}
                timeout={600}
                unmountOnExit
                classNames={"top-bottom"}
                nodeRef={blackScreenRef}
            >
                <div ref={blackScreenRef} className="fixed top-0 bottom-0 left-0
                    right-0 bg-[#00000080] z-10"></div>
            </CSSTransition>

            <CSSTransition
                in={showForm}
                timeout={1000}
                unmountOnExit
                classNames={"top-bottom"}
                nodeRef={blackScreenRef}
            >
                <div ref={blackScreenRef} className="fixed top-0 bottom-0 left-0
                    right-0 bg-[#00000080] z-20">
                    <div className="h-full w-full">
                        <Slide duration={300} direction="up" className="w-full h-full
                            flex items-center justify-center">
                            <AskForm setShowForm={setShowForm} />
                        </Slide>
                    </div>
                </div>
            </CSSTransition>
        </>
    )
}; export default memo(Header);