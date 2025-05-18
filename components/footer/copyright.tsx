import { memo } from "react";


const CopyRight = () => {
    return (
        <div className="px-12 md:flex items-center justify-between bg-[#292D32] py-4">
            <div className="flex items-cneter justify-center mt-1">
                <p className="text-[12px] font-[700] text-[#FFFFFF]">
                    Design & Develop By alireza alavi group</p>
            </div>
            <div className="flex items-center justify-center mt-1">
                <p className="text-[#FFFFFF] text-[12px] font-[600]">
                    تمامی حقوق این وبسایت متعلق به علیرضا علوی میباشد.</p>
            </div>
        </div>
    )
}; export default memo(CopyRight);