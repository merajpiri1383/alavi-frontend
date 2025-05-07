"use client"
import { FC, memo, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import LogoIcon from "@/icons/header/logo";
import AppsIcon from "@/icons/header/apps";
import { useDeviceType } from "@/utils/hook/deviceType";
import { CSSTransition } from 'react-transition-group';
import "@/components/header/style.css";
const HeaderLinks = dynamic(() => import("@/components/header/links"), { ssr: false });
const MobilePopup = dynamic(() => import("@/components/header/MobilePopup"), { ssr: false });



const Header: FC = () => {

    const deviceType = useDeviceType();
    const [showPopup, setShowPop] = useState<true | false>(false);
    const nodeRef = useRef(null);

    const hideHandler = (): void => {
        setShowPop(false);
    }

    const showHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setShowPop(!showPopup);
    };

    useEffect(() => {
        window.addEventListener("click", hideHandler);
        return () => window.removeEventListener("click", hideHandler);
    }, []);

    return (
        <>
            <div className="flex items-center md:relative bg-[#F8F8F8] z-20 justify-between 
                py-12 md:py-6 px-4 md:px-16 select-none">

                <div
                    onClick={showHandler}
                    className="flex border-1 border-[#ECECEC] items-center justify-center p-2 bg-white 
                    rounded-lg md:hidden cursor-pointer active:scale-95 hover:scale-115 transition">
                    <div className="size-6">
                        <AppsIcon />
                    </div>
                </div>

                <div className="p-3 px-4 hidden md:block rounded-lg bg-[#524CF2]">
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
                        timeout={300}
                        classNames="sidebar"
                        unmountOnExit
                        nodeRef={nodeRef}
                    >
                        <div
                            ref={nodeRef}
                            style={{ zIndex: 20 }}
                            className="sidebar fixed top-0 bottom-0 right-0">
                            <MobilePopup />
                        </div>
                    </CSSTransition>
                }

                <div className="flex items-center justify-between gap-4">
                    <div className="rtl">
                        <p className="text-sm font-bold">علیرضا علوی</p>
                        <p className="text-sm font-bold">Alireza Alavi</p>
                    </div>
                    <div className="size-12">
                        <LogoIcon />
                    </div>
                </div>
            </div>
            {
                showPopup &&
                <div className="fixed top-0 bottom-0 left-0 right-0 bg-[#00000080] z-10"></div>
            }
        </>
    )
}; export default memo(Header);