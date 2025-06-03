import { FC, memo, useRef } from "react";
import dynamic from "next/dynamic";
import { CSSTransition } from "react-transition-group";
import ArrowDownIcon from "@/icons/header/arrowDown";
import ArrowUpIcon from "@/icons/header/arrowUp";
import "@/components/header/style.css";
import Link from "next/link";

const DesktopDropdown = dynamic(() => import("@/components/header/DesktopDropdown"), { ssr: false });

interface HeaderLinsProps {
    showPopup: true | false,
    setShowPop: React.Dispatch<React.SetStateAction<true | false>>,
}


const HeaderLinks: FC<HeaderLinsProps> = ({ showPopup, setShowPop }) => {

    const nodeRef = useRef(null);

    const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setShowPop(!showPopup);
    };

    return (
        <div className="flex items-center justify-between rtl gap-4">
            <div className="relative">
                <div className="flex items-center justify-center gap-2 hover:bg-gray-200 p-2
                cursor-pointer rounded-lg"
                    onClick={clickHandler}>
                    <p className="text-base font-medium">شغل ﻣﻦ</p>
                    <div className="size-4">
                        {
                            showPopup ? <ArrowUpIcon /> : <ArrowDownIcon />
                        }
                    </div>
                </div>
                <CSSTransition
                    in={showPopup}
                    timeout={600}
                    nodeRef={nodeRef}
                    unmountOnExit
                    classNames={"dropdown"}>
                    <div ref={nodeRef} className="dropdown absolute top-20 right-0">
                        <DesktopDropdown />
                    </div>
                </CSSTransition>
            </div>
            <Link href={"#my_experience"}>
                <p className="text-base font-medium">تجربیات کاری</p>
            </Link>
            <Link href={"#my_notes"}>
                <p className="text-base font-medium">ﯾﺎدداﺷﺖ ها</p>
            </Link>
            <Link href={"/contact-us"}>
                <p className="text-base font-medium">تماس با من</p>
            </Link>
        </div>
    )
}; export default memo(HeaderLinks);