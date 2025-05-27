import { CSSProperties, FC } from "react";

interface Props {
    color?: string;
    hoverColor?: string;
}

const EllipseIcon: FC<Props> = ({ color = "#524CF2", hoverColor }) => {
    const style: CSSProperties & { [key: string]: string | undefined } = {
        "--color": color,
        "--hover-color": hoverColor,
    };

    return (
        <svg
            style={style}
            width="100%"
            height="100%"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="100%" height="100%" rx="10.5" fill={color} fillOpacity="0.15" />
            <circle
                cx="10.5"
                cy="10.5"
                r="6.5"
                className="[fill:var(--color)] group-hover:[fill:var(--hover-color)] transition duration-300"
            />
        </svg>
    );
};

export default EllipseIcon;