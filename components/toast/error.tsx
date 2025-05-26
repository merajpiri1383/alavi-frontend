import { FC } from "react";

interface Props {
    message ?: string
}

const ToastError : FC<Props> = ({ message }) => {
    return (
        <div className="rtl w-full">
            <p className="text-[#FF3549] font-[500] text-[15px]">خطایی رخ داد!</p>
            <p className="text-[#262626] font-[400] text-[13px]">{message}</p>
        </div>
    );
}; export default ToastError;