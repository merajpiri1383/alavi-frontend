import { FC } from "react";
import dynamic from "next/dynamic";
const Socials = dynamic(() => import("@/app/components/socials"),{ssr : true});
const Connections = dynamic(() => import("@/app/contact-us/components/connections"),{ssr : true});

const Page : FC = () => {
    return (
        <div className=" [direction:rtl] mb-12 md:my-12">
            <Connections />
            <Socials />
        </div>
    )
};export default Page;