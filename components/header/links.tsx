import { FC, memo, useRef } from "react";
import dynamic from "next/dynamic";
import { CSSTransition } from "react-transition-group";
import ArrowDownIcon from "@/icons/header/arrowDown";
import ArrowUpIcon from "@/icons/header/arrowUp";
import "@/components/header/style.css";

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
                <div className="flex items-center justify-center gap-2 hover:bg-gray-200 p-2 transition
                cursor-pointer rounded-lg active:scale-95 hover:scale-115 "
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
                    timeout={300}
                    nodeRef={nodeRef}
                    unmountOnExit
                    classNames={"dropdown"}>
                    <div ref={nodeRef} className="dropdown absolute top-20 right-0">
                        <DesktopDropdown />
                    </div>
                </CSSTransition>
            </div>
            <div>
                <p className="text-base font-medium">تجربیات کاری</p>
            </div>
            <div>
                <p className="text-base font-medium">ﯾﺎدداﺷﺖ ها</p>
            </div>
            <div>
                <p className="text-base font-medium">تماس با من</p>
            </div>
        </div>
    )
}; export default memo(HeaderLinks);