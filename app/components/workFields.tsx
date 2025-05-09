import { memo } from "react";
import DocumentIcon from "@/components/icons/home/document";
import NetIcon from "@/components/icons/home/net";
import Image from "next/image";
import RectangleIcon from "@/components/icons/home/rectangle";
/* Rectangle 6004 */
 
// const Item = () => {
//     return (
//         <article className="size-60 relative p-6 group cursor-pointer hover:shadow-2xl">
//             <div className="relative z-10 size-12 mx-auto my-2 group-hover:hidden">
//                 <NetIcon color={"#2B2B2B"} />
//             </div>
//             <div className="size-12 relative z-10 mx-auto my-2 hidden group-hover:block">
//                 <NetIcon color={"#524CF2"} />
//             </div>
//             <p className="text-[#2B2B2B] z-10 text-sm text-center font-medium my-2">طراحی و توسعه وﺑﺴﺎﯾﺖ</p>
//             <p className="text-[#727379] z-10 text-sm text-center my-2 mb-6">Website Development</p>
//         </article>
//     )
// }

const Item = () => {
    return (
        <div className=" bg-rose-600">
        </div>
    )
};


const WorkFields = () => {

    const items = [
        {
            icon: <NetIcon color={"#2B2B2B"} />,
            active_icon: <NetIcon color={"#524CF2"} />,
            title: "طراحی و توسعه وﺑﺴﺎﯾﺖ",
            text: "Website Development",
        }, {
            icon: <NetIcon color={"#2B2B2B"} />,
            active_icon: <NetIcon color={"#524CF2"} />,
            title: "طراحی و توسعه وﺑﺴﺎﯾﺖ",
            text: "Website Development",
        }, {
            icon: <NetIcon color={"#2B2B2B"} />,
            active_icon: <NetIcon color={"#524CF2"} />,
            title: "طراحی و توسعه وﺑﺴﺎﯾﺖ",
            text: "Website Development",
        }, {
            icon: <NetIcon color={"#2B2B2B"} />,
            active_icon: <NetIcon color={"#524CF2"} />,
            title: "طراحی و توسعه وﺑﺴﺎﯾﺖ",
            text: "Website Development",
        }, {
            icon: <NetIcon color={"#2B2B2B"} />,
            active_icon: <NetIcon color={"#524CF2"} />,
            title: "طراحی و توسعه وﺑﺴﺎﯾﺖ",
            text: "Website Development",
        },
    ]

    return (
        <div className="bg-white rtl my-6 px-6 md:px-20">
            <div className="flex items-center justify-start gap-4">
                <div className="bg-[#524CF21A] size-12 md:size-14 rounded-lg flex items-center justify-center">
                    <div className="size-6 md:size-8">
                        <DocumentIcon color={"#524CF2"} />
                    </div>
                </div>
                <div>
                    <p className="font-semibold text-sm md:text-base">زمینه های کاری من</p>
                    <p className="text-xs md:text-sm mt-2 text-[#696973]">خدمات و سرویس های اراﺋﻪ دهنده</p>
                </div>
            </div>

            <div className="py-6 flex items-center overflow-x-scroll gap-6">
                {/* <Item /> */}
                {/* {
                    items.map((item, index) => {
                        return (
                            <Item key={index} />
                        )
                    })
                } */}
            </div>
        </div>
    )
}; export default memo(WorkFields);