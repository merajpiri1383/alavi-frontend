import { FC, memo } from "react";


const LogoIcon : FC = () => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 52 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" rx="8" fill="#524CF2" />
            <path d="M15 15.08H35.36V37H29.12V27.6H22.84V37H16.56V18.2H15V15.08ZM29.12 24.48V18.2H22.84V24.48H29.12Z" fill="white" />
        </svg>
    )
};export default memo(LogoIcon);