import { FC } from "react";

interface Props {
    color?: string,
    hoverColor ?: string,
}

const VerticalLineIcon: FC<Props> = ({ color = "#A5A5A5",hoverColor="#524CF2" }) => {
    return (
        <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 2 209" 
            style={{"--color" : color, "--hover-color" : hoverColor} as React.CSSProperties}
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L1.00001 208" 
            className="[stroke:var(--color)] group-hover:[stroke:var(--hover-color)] transition duration-600" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeDasharray="12 12" />
        </svg>
    )
};export default VerticalLineIcon;