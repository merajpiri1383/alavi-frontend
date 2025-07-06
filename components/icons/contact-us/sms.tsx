import { FC } from "react";


interface Props {
    color?: string,
}


const SmsIcon: FC<Props> = ({ color = "#524CF2" }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.292 30.3958H10.7087C6.33366 30.3958 3.41699 28.2083 3.41699 23.1041V12.8958C3.41699 7.79163 6.33366 5.60413 10.7087 5.60413H25.292C29.667 5.60413 32.5837 7.79163 32.5837 12.8958V23.1041C32.5837 28.2083 29.667 30.3958 25.292 30.3958Z" stroke={color} strokeWidth="2.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M25.2913 13.625L20.7268 17.2708C19.2247 18.4667 16.7601 18.4667 15.258 17.2708L10.708 13.625" stroke={color} strokeWidth="2.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
};export default SmsIcon;