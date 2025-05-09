import { FC } from "react";

interface StarIconProps {
    color ?: string,
}

const StarIcon: FC<StarIconProps> = ({color = "black"}) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 0L18.841 9.18357L11.7761 2.51997L13.2468 12.1197L3.89436 9.50258L9.65779 17.3192L0.160404 19.3482L8.89624 23.5911L1.42964 29.8013L11.1366 29.4985L7.4113 38.4672L15.8657 33.688L16.7351 43.3607L22 35.2L27.2649 43.3607L28.1343 33.688L36.5887 38.4672L32.8634 29.4985L42.5704 29.8013L35.1038 23.5911L43.8396 19.3482L34.3422 17.3192L40.1056 9.50258L30.7532 12.1197L32.2239 2.51997L25.159 9.18357L22 0Z" fill={color} />
        </svg>
    )
};export default StarIcon;