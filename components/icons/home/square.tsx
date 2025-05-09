import { FC } from "react";

interface SquareIconProps {
    color ?: string,
};

const SquareIcon : FC<SquareIconProps> = ({ color = "white" }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 108 88" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M107 1V87" stroke={color} />
            <path d="M76.7148 1V87" stroke={color} />
            <path d="M46.4297 1V87" stroke={color} />
            <path d="M16.1406 1V87" stroke={color} />
            <path d="M91.8594 1V87" stroke={color} />
            <path d="M61.5703 1V87" stroke={color} />
            <path d="M31.2852 1V87" stroke={color} />
            <path d="M1 1V87" stroke={color} />
            <path d="M1 1L106.998 0.999995" stroke={color} />
            <path d="M1 31L106.998 31" stroke={color} />
            <path d="M1 61L106.998 61" stroke={color} />
            <path d="M1 87L106.998 87" stroke={color} />
            <path d="M1 16L106.998 16" stroke={color} />
            <path d="M1 46L106.998 46" stroke={color} />
            <path d="M1 76L106.998 76" stroke={color} />
        </svg>
    )
};export default SquareIcon;