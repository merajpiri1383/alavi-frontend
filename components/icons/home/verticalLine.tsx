import { FC } from "react";

interface Props {
    color?: string,
}

const VerticalLineIcon: FC<Props> = ({ color = "#524CF2" }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 2 209" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L1.00001 208" stroke={color} strokeWidth="2" strokeLinecap="round" strokeDasharray="12 12" />
        </svg>
    )
};export default VerticalLineIcon;