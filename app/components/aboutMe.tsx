import { FC, memo } from "react";
import Image from "next/image";
import AlaviImage from "@/public/images/alavi.svg";
import FourIcon from "@/components/icons/home/four";
import StarIcon from "@/components/icons/home/star";
import SquareIcon from "@/components/icons/home/square";

const AboutMeImage = () => {
    return (
        <div className="bg-[#F6F6F6] col-span-1 mr-8 rounded-tr-3xl rounded-br-[6rem] relative">
            <div className="w-fit mx-auto my-12 relative z-[3]">
                <div
                    style={{ backgroundImage: "linear-gradient(to bottom , #8792E3,#BBC2F2,#C9CEEE)" }}
                    className="h-80 w-48 rounded-full overflow-hidden relative ">
                    <Image
                        src={AlaviImage}
                        alt="alavi image"
                        fill={true}
                        sizes="100%"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                </div>

                <div className="absolute -left-4 -top-4 size-20">
                    <FourIcon color={"#0D0E11"} />
                </div>
            </div>

            <div className="size-12 absolute top-8 right-6">
                <StarIcon />
            </div>

            <div className="size-8 absolute bottom-8 left-6 z-[2]">
                <StarIcon />
            </div>
            <div className="size-20 absolute bottom-12 left-12 z-[1]">
                <div className="w-full h-full relative">
                    <SquareIcon />
                    <div className="top-[50%] left-[50%] absolute"
                    style={{boxShadow : "0px 0px 60px 15px blue"}}></div>
                </div>
            </div>
        </div>
    )
}


const AboutMe: FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3">
            <AboutMeImage />
            <div className="col-span-1 md:col-span-2 bg-lime-400"></div>
        </div>
    )
}; export default memo(AboutMe);