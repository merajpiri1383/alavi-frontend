import { FC } from "react";

interface Props {
    message ?: string
}

const ToastSuccess : FC<Props> = ({ message }: any) => {
    return (
        <div className="rtl w-full">
            <p className="text-[#1E8E29] font-[500] text-[15px]">ارسال پیام موفقیت آمیز</p>
            <p className="text-[#262626] font-[400] text-[13px]">{message}</p>
        </div>
    );
}; export default ToastSuccess;