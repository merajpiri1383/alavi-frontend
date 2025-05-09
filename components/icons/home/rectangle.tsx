import { FC } from "react";


const RectangleIcon = () => {
    return (
        <svg className="absolute top-0 bottom-0 left-0 right-0" viewBox="0 0 490 466" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_469_2874)">
                <path d="M124 97H366C378.703 97 389 107.297 389 120V338C389 350.703 378.703 361 366 361H301.853C299.51 361 297.267 360.087 295.593 358.466L295.266 358.133L287.698 350.005C285.617 347.77 282.701 346.5 279.647 346.5H210.204C207.029 346.5 204.014 347.872 201.929 350.253L201.73 350.486L195.729 357.738C194.02 359.804 191.477 361 188.796 361H124C111.297 361 101 350.703 101 338V120C101 107.297 111.297 97 124 97Z" stroke="#E1E1E1" strokeWidth="4" shapeRendering="crispEdges" />
            </g>
            <defs>
                <filter id="filter0_d_469_2874" x="0" y="0" width="490" height="466" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="50" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.820417 0 0 0 0 0.820417 0 0 0 0 0.820417 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_469_2874" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_469_2874" result="shape" />
                </filter>
            </defs>
        </svg>
    )
};export default RectangleIcon;