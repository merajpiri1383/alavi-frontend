import { memo } from "react";


const DesktopDropdown = () => {
    return (
        <div className="bg-white rounded-lg py-1" 
        onClick={(e) => e.stopPropagation()}>
            <div className="w-60 text-xs p-2 group hover:bg-[#F2F6FC] transition m-3 rounded-lg cursor-pointer">
                <p className="text-sm font-medium group-hover:text-[#524CF2] transition">زمینه های کاری من</p>
                <p className="w-48 h-4 overflow-hidden text-[#606268]">پوریشن 
                    کاری شغل خودم را توضیح دادم و...</p>
            </div>
            <div className="w-60 text-xs p-2 group hover:bg-[#F2F6FC] transition m-3 rounded-lg cursor-pointer">
                <p className="text-sm font-medium group-hover:text-[#524CF2] transition">رزومه من</p>
                <p className="w-48 h-4 overflow-hidden text-[#606268]">فعالیت 
                    من در شرکت ها، تیم ها، هلدینگ های بزرگ</p>
            </div>
            <div className="w-60 text-xs p-2 group hover:bg-[#F2F6FC] transition m-3 rounded-lg cursor-pointer">
                <div className="flex items-center rtl justify-start gap-2">
                <p className="text-sm font-medium group-hover:text-[#524CF2] transition">کایرو سیستم</p>
                <p className="text-[.5rem] text-[#CD7934] bg-[#DB823826] p-1 rounded-sm">جدید!</p>
                </div>
                <p className="w-48 h-4 overflow-hidden text-[#606268]">راهبر 
                    پروژه های دیجیتال و طراح تجربه فنی برای کسب و کار ها</p>
            </div>
        </div>
    )
};export default memo(DesktopDropdown);