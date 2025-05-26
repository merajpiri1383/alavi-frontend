import { FC } from "react";


interface Props {
    color?: string,
}

const LineIcon: FC<Props> = ({ color = "#DADADA" }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 1570 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L1569 1.00014" stroke={color} strokeWidth="100%" strokeLinecap="round" />
        </svg>
    )
}; export default LineIcon;